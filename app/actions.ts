"use server";

import { supabase } from "@/lib/supabase";
import { sendEmail } from "@/lib/nodemailer";
import { render } from "@react-email/components";
import RSVPEmail from "@/components/emails/RSVPEmail";

interface SubmitRSVPResult {
    success: boolean;
    message: string;
}

interface InvitationData {
    success: boolean;
    familyName: string | null;
    maxGuests: number;
    error?: string;
}

export async function getInvitationData(inviteId: string): Promise<InvitationData> {
    try {
        if (!inviteId || !inviteId.trim()) {
            return {
                success: false,
                familyName: null,
                maxGuests: 2,
                error: "Invalid invitation ID.",
            };
        }

        const { data, error } = await supabase
            .from("invitations")
            .select("family_name, max_guests")
            .eq("id", inviteId.trim())
            .single();

        if (error || !data) {
            console.error("Supabase Error fetching invitation:", error);
            return {
                success: false,
                familyName: null,
                maxGuests: 2,
                error: "Invitation not found.",
            };
        }

        return {
            success: true,
            familyName: data.family_name || null,
            maxGuests: data.max_guests || 2,
        };
    } catch (error) {
        console.error("Get Invitation Data Error:", error);
        return {
            success: false,
            familyName: null,
            maxGuests: 2,
            error: "An unexpected error occurred.",
        };
    }
}

export async function submitRSVP(formData: FormData): Promise<SubmitRSVPResult> {
    try {
        // Step A: Extract form data
        const fullName = formData.get("fullName") as string;
        const email = formData.get("email") as string;
        const guestCount = parseInt(formData.get("guestCount") as string) || 1;
        const attending = formData.get("attending") === "yes";
        const message = formData.get("message") as string;
        const invitationId = formData.get("invitationId") as string | null;

        // Validate required fields
        if (!fullName || !fullName.trim()) {
            return { success: false, message: "Please provide your full name." };
        }
        if (!email || !email.trim()) {
            return { success: false, message: "Please provide your email address." };
        }

        // Step B: Insert into Supabase
        const guestData: Record<string, unknown> = {
            name: fullName.trim(),
            email: email.trim().toLowerCase(),
            guest_count: guestCount,
            attending,
            message: message?.trim() || null,
        };

        // Include invitation_id if provided
        if (invitationId && invitationId.trim()) {
            guestData.invitation_id = invitationId.trim();
        }

        const { error: dbError } = await supabase.from("guests").insert(guestData);

        if (dbError) {
            console.error("Supabase Error:", dbError);
            return {
                success: false,
                message: "Failed to save your RSVP. Please try again.",
            };
        }

        // Step C: Send confirmation email
        try {
            const emailHtml = await render(
                RSVPEmail({
                    fullName: fullName.trim(),
                    attending,
                    guestCount,
                })
            );

            await sendEmail({
                to: email.trim().toLowerCase(),
                subject: attending
                    ? "🎉 Your RSVP is Confirmed! | Wedding Celebration"
                    : "Thank You for Your Response | Wedding Celebration",
                html: emailHtml,
            });
        } catch (emailError) {
            // Log email error but don't fail the RSVP submission
            console.error("Email Error:", emailError);
            // The RSVP was still saved successfully
        }

        // Step D: Return success
        return {
            success: true,
            message: attending
                ? "Thank you! Your attendance has been confirmed."
                : "Thank you for letting us know. We'll miss you!",
        };
    } catch (error) {
        console.error("Submit RSVP Error:", error);
        return {
            success: false,
            message: "An unexpected error occurred. Please try again.",
        };
    }
}
