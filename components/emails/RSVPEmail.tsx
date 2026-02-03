import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Section,
    Text,
} from "@react-email/components";

interface RSVPEmailProps {
    fullName: string;
    attending: boolean;
    guestCount: number;
}

export default function RSVPEmail({
    fullName = "Guest",
    attending = true,
    guestCount = 1,
}: RSVPEmailProps) {
    const previewText = attending
        ? `Thank you for confirming your attendance, ${fullName}!`
        : `We'll miss you, ${fullName}. Thank you for letting us know.`;

    return (
        <Html>
            <Head>
                <style>
                    {`
            @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');
          `}
                </style>
            </Head>
            <Preview>{previewText}</Preview>
            <Body style={main}>
                <Container style={container}>
                    {/* Decorative Top Border */}
                    <Section style={topBorder} />

                    {/* Floral Decorative Element */}
                    <Section style={headerSection}>
                        <Text style={floralDecor}>✿ ❀ ✿</Text>
                    </Section>

                    {/* Main Heading */}
                    <Heading style={heading}>
                        Thank You for Your RSVP
                    </Heading>

                    <Hr style={divider} />

                    {/* Personalized Greeting */}
                    <Text style={greeting}>
                        Dear {fullName},
                    </Text>

                    {/* Status Message */}
                    <Section style={statusSection}>
                        <Text style={statusLabel}>Your Response</Text>
                        <Text style={attending ? statusAttending : statusDeclining}>
                            {attending ? "✨ Joyfully Attending ✨" : "Regretfully Declining"}
                        </Text>
                    </Section>

                    {/* Guest Count - Only show if attending */}
                    {attending && (
                        <Section style={detailsSection}>
                            <Text style={detailsLabel}>Number of Seats Reserved</Text>
                            <Text style={detailsValue}>
                                {guestCount} {guestCount === 1 ? "Guest" : "Guests"}
                            </Text>
                        </Section>
                    )}

                    <Hr style={divider} />

                    {/* Warm Message */}
                    <Text style={message}>
                        {attending
                            ? "We can't wait to celebrate with you! Your presence will make our special day even more memorable."
                            : "While we'll miss your presence, we truly appreciate you taking the time to let us know. You'll be in our thoughts on our special day."}
                    </Text>

                    {/* Event Details - Only show if attending */}
                    {attending && (
                        <Section style={eventSection}>
                            <Text style={eventTitle}>Event Details</Text>
                            <Text style={eventDetail}>
                                📅 <strong>June 20, 2026</strong>
                            </Text>
                            <Text style={eventDetail}>
                                💒 <strong>Ceremony:</strong> 2:30 PM
                                <br />
                                <span style={subDetail}>St. Nicholas of Tolentine Parish Cathedral</span>
                                <span style={subDetail}>Del Pilar Corner Gen. Luna Street, Cabanatuan City, Nueva Ecija</span>
                            </Text>
                            <Text style={eventDetail}>
                                🍽️ <strong>Reception:</strong> 4:30 PM
                                <br />
                                <span style={subDetail}>Fave Events Place</span>
                                <span style={subDetail}>1st St, Hermogenes C. Concepcion Sr., Cabanatuan City, Nueva Ecija</span>
                            </Text>
                        </Section>
                    )}

                    {/* Hashtags Section */}
                    {attending && (
                        <Section style={hashtagSection}>
                            <Text style={hashtagLabel}>Share Your Moments With Us</Text>
                            <Text style={hashtag}>#GodsRemarCARLbleGiftforSHANIA</Text>
                            <Text style={hashtag}>#SaksiAngLangitSatin</Text>
                        </Section>
                    )}

                    {/* Closing */}
                    <Section style={closingSection}>
                        <Text style={closing}>With love,</Text>
                        <Text style={signature}>
                            Carl Joseph & Shania Mae
                        </Text>
                    </Section>

                    {/* Floral Footer */}
                    <Section style={footerSection}>
                        <Text style={floralDecor}>❀ ✿ ❀</Text>
                    </Section>

                    {/* Decorative Bottom Border */}
                    <Section style={bottomBorder} />
                </Container>
            </Body>
        </Html>
    );
}

// ============================================================================
// STYLES
// ============================================================================

const main = {
    backgroundColor: "#0A0A0A",
    fontFamily: "'Georgia', 'Times New Roman', serif",
    padding: "40px 20px",
};

const container = {
    backgroundColor: "#0F0F0F",
    border: "2px solid #C9A962",
    borderRadius: "8px",
    margin: "0 auto",
    maxWidth: "580px",
    padding: "0",
    overflow: "hidden" as const,
};

const topBorder = {
    backgroundColor: "#722F37",
    height: "6px",
};

const bottomBorder = {
    backgroundColor: "#722F37",
    height: "6px",
};

const headerSection = {
    padding: "30px 40px 10px",
    textAlign: "center" as const,
};

const floralDecor = {
    color: "#C9A962",
    fontSize: "24px",
    letterSpacing: "8px",
    margin: "0",
};

const heading = {
    color: "#C9A962",
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: "32px",
    fontWeight: "600",
    lineHeight: "1.3",
    margin: "0",
    padding: "0 40px",
    textAlign: "center" as const,
};

const divider = {
    borderColor: "#C9A962",
    borderStyle: "solid" as const,
    borderWidth: "1px 0 0 0",
    margin: "24px 40px",
    opacity: 0.4,
};

const greeting = {
    color: "#C9A962",
    fontSize: "18px",
    lineHeight: "1.6",
    margin: "0 0 24px",
    padding: "0 40px",
    textAlign: "center" as const,
};

const statusSection = {
    backgroundColor: "#0A0A0A",
    borderRadius: "8px",
    margin: "0 40px 24px",
    padding: "24px",
    textAlign: "center" as const,
    border: "1px solid #C9A962",
};

const statusLabel = {
    color: "#C9A962",
    fontSize: "12px",
    letterSpacing: "2px",
    margin: "0 0 8px",
    textTransform: "uppercase" as const,
};

const statusAttending = {
    color: "#C9A962",
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: "24px",
    fontWeight: "600",
    margin: "0",
};

const statusDeclining = {
    color: "#722F37",
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: "24px",
    fontWeight: "600",
    margin: "0",
};

const detailsSection = {
    backgroundColor: "#0A0A0A",
    borderRadius: "8px",
    margin: "0 40px 24px",
    padding: "20px",
    textAlign: "center" as const,
    border: "1px solid #C9A962",
};

const detailsLabel = {
    color: "#C9A962",
    fontSize: "12px",
    letterSpacing: "2px",
    margin: "0 0 8px",
    textTransform: "uppercase" as const,
};

const detailsValue = {
    color: "#C9A962",
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: "20px",
    fontWeight: "500",
    margin: "0",
};

const message = {
    color: "#C9A962",
    fontSize: "16px",
    fontStyle: "italic" as const,
    lineHeight: "1.8",
    margin: "0 0 24px",
    padding: "0 40px",
    textAlign: "center" as const,
};

const eventSection = {
    backgroundColor: "#0A0A0A",
    borderLeft: "4px solid #722F37",
    margin: "0 40px 24px",
    padding: "24px",
};

const eventTitle = {
    color: "#C9A962",
    fontSize: "12px",
    letterSpacing: "2px",
    margin: "0 0 16px",
    textTransform: "uppercase" as const,
};

const eventDetail = {
    color: "#C9A962",
    fontSize: "15px",
    lineHeight: "1.8",
    margin: "0 0 12px",
};

const subDetail = {
    color: "#C9A962",
    fontSize: "13px",
    display: "block",
    marginTop: "4px",
};

const hashtagSection = {
    backgroundColor: "#0A0A0A",
    borderRadius: "8px",
    margin: "0 40px 24px",
    padding: "20px",
    textAlign: "center" as const,
    border: "1px solid #722F37",
};

const hashtagLabel = {
    color: "#722F37",
    fontSize: "11px",
    letterSpacing: "2px",
    margin: "0 0 12px",
    textTransform: "uppercase" as const,
};

const hashtag = {
    color: "#C9A962",
    fontSize: "14px",
    margin: "4px 0",
    fontStyle: "italic" as const,
};

const closingSection = {
    padding: "16px 40px 24px",
    textAlign: "center" as const,
};

const closing = {
    color: "#722F37",
    fontSize: "16px",
    fontStyle: "italic" as const,
    margin: "0 0 8px",
};

const signature = {
    color: "#C9A962",
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: "24px",
    fontWeight: "500",
    margin: "0",
};

const footerSection = {
    padding: "0 40px 30px",
    textAlign: "center" as const,
};
