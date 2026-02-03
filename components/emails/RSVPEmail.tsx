import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
    Column,
    Row,
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

    const firstName = fullName.split(" ")[0];

    return (
        <Html>
            <Head>
                <style>
                    {`
                        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');
                        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&display=swap');
                    `}
                </style>
            </Head>
            <Preview>{previewText}</Preview>
            <Body style={main}>
                <Container style={container}>
                    {/* Elegant Gold Header Bar */}
                    <Section style={headerBar}>
                        <Text style={headerMonogram}>C & S</Text>
                    </Section>

                    {/* Main Content Area */}
                    <Section style={contentArea}>
                        {/* Decorative Element */}
                        <Text style={decorativeElement}>
                            ─────── ✦ ───────
                        </Text>

                        {/* Title */}
                        <Heading style={heading}>
                            {attending ? "We're Thrilled!" : "Thank You"}
                        </Heading>

                        <Text style={subHeading}>
                            {attending
                                ? "Your presence means the world to us"
                                : "For letting us know"}
                        </Text>

                        {/* Personalized Greeting */}
                        <Text style={greeting}>
                            Dear {firstName},
                        </Text>

                        {/* Status Card */}
                        <Section style={statusCard}>
                            <Text style={statusIcon}>
                                {attending ? "💒" : "💌"}
                            </Text>
                            <Text style={statusText}>
                                {attending
                                    ? "Joyfully Attending"
                                    : "Regretfully Unable to Attend"}
                            </Text>
                            {attending && (
                                <Text style={guestCountText}>
                                    {guestCount} {guestCount === 1 ? "Guest" : "Guests"} Reserved
                                </Text>
                            )}
                        </Section>

                        {/* Message */}
                        <Text style={message}>
                            {attending
                                ? "Your confirmation fills our hearts with joy. We can't wait to share our special day with you and create beautiful memories together."
                                : "While we'll miss your presence, we truly appreciate you taking the time to let us know. You'll be in our hearts on our special day."}
                        </Text>

                        {/* Event Details - Only show if attending */}
                        {attending && (
                            <>
                                <Hr style={sectionDivider} />

                                <Text style={sectionTitle}>SAVE THE DATE</Text>

                                {/* Date Feature */}
                                <Section style={dateFeature}>
                                    <Text style={dateDay}>JUNE</Text>
                                    <Text style={dateNumber}>20</Text>
                                    <Text style={dateYear}>2026</Text>
                                </Section>

                                {/* Ceremony & Reception */}
                                <Row style={eventsRow}>
                                    <Column style={eventColumn}>
                                        <Text style={eventIcon}>⛪</Text>
                                        <Text style={eventType}>CEREMONY</Text>
                                        <Text style={eventTime}>2:30 PM</Text>
                                        <Text style={eventVenue}>
                                            St. Nicholas of Tolentine
                                        </Text>
                                        <Text style={eventAddress}>
                                            Parish Cathedral, Cabanatuan City
                                        </Text>
                                    </Column>
                                    <Column style={eventColumn}>
                                        <Text style={eventIcon}>🥂</Text>
                                        <Text style={eventType}>RECEPTION</Text>
                                        <Text style={eventTime}>4:30 PM</Text>
                                        <Text style={eventVenue}>Fave Events Place</Text>
                                        <Text style={eventAddress}>
                                            Cabanatuan City, Nueva Ecija
                                        </Text>
                                    </Column>
                                </Row>

                                <Hr style={sectionDivider} />

                                {/* Hashtags */}
                                <Text style={hashtagTitle}>
                                    SHARE YOUR MOMENTS
                                </Text>
                                <Section style={hashtagContainer}>
                                    <Text style={hashtag}>
                                        #GodsRemarCARLbleGiftforSHANIA
                                    </Text>
                                    <Text style={hashtag}>
                                        #SaksiAngLangitSatin
                                    </Text>
                                </Section>
                            </>
                        )}

                        {/* Closing */}
                        <Section style={closingSection}>
                            <Text style={decorativeElement}>
                                ─────── ✦ ───────
                            </Text>
                            <Text style={closingText}>With love and excitement,</Text>
                            <Text style={signature}>
                                Carl Joseph & Shania Mae
                            </Text>
                        </Section>
                    </Section>

                    {/* Footer */}
                    <Section style={footer}>
                        <Text style={footerText}>
                            June 20, 2026 • Cabanatuan City, Nueva Ecija
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
}

// ============================================================================
// STYLES - Premium Black & Gold Theme
// ============================================================================

const main = {
    backgroundColor: "#000000",
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    padding: "40px 20px",
};

const container = {
    backgroundColor: "#0A0A0A",
    borderRadius: "0",
    margin: "0 auto",
    maxWidth: "600px",
    overflow: "hidden" as const,
};

const headerBar = {
    backgroundColor: "#C9A962",
    padding: "24px 40px",
    textAlign: "center" as const,
};

const headerMonogram = {
    color: "#0A0A0A",
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: "28px",
    fontWeight: "700",
    letterSpacing: "8px",
    margin: "0",
};

const contentArea = {
    backgroundColor: "#0A0A0A",
    padding: "40px 32px",
};

const decorativeElement = {
    color: "#C9A962",
    fontSize: "14px",
    letterSpacing: "4px",
    margin: "0 0 24px",
    textAlign: "center" as const,
};

const heading = {
    color: "#C9A962",
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: "36px",
    fontWeight: "600",
    lineHeight: "1.2",
    margin: "0 0 8px",
    textAlign: "center" as const,
};

const subHeading = {
    color: "#C9A962",
    fontSize: "16px",
    fontStyle: "italic" as const,
    margin: "0 0 32px",
    opacity: 0.8,
    textAlign: "center" as const,
};

const greeting = {
    color: "#FFFFFF",
    fontSize: "20px",
    margin: "0 0 24px",
    textAlign: "center" as const,
};

const statusCard = {
    backgroundColor: "#111111",
    border: "1px solid #C9A962",
    borderRadius: "4px",
    margin: "0 0 32px",
    padding: "32px 24px",
    textAlign: "center" as const,
};

const statusIcon = {
    fontSize: "40px",
    margin: "0 0 12px",
};

const statusText = {
    color: "#C9A962",
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: "24px",
    fontWeight: "600",
    margin: "0 0 8px",
};

const guestCountText = {
    color: "#FFFFFF",
    fontSize: "16px",
    margin: "0",
    opacity: 0.8,
};

const message = {
    color: "#FFFFFF",
    fontSize: "16px",
    lineHeight: "1.8",
    margin: "0 0 32px",
    textAlign: "center" as const,
    opacity: 0.9,
};

const sectionDivider = {
    borderColor: "#C9A962",
    borderStyle: "solid" as const,
    borderWidth: "1px 0 0 0",
    margin: "32px 0",
    opacity: 0.3,
};

const sectionTitle = {
    color: "#C9A962",
    fontSize: "12px",
    letterSpacing: "4px",
    margin: "0 0 24px",
    textAlign: "center" as const,
};

const dateFeature = {
    textAlign: "center" as const,
    margin: "0 0 32px",
};

const dateDay = {
    color: "#C9A962",
    fontSize: "14px",
    letterSpacing: "4px",
    margin: "0",
};

const dateNumber = {
    color: "#C9A962",
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: "72px",
    fontWeight: "700",
    lineHeight: "1",
    margin: "0",
};

const dateYear = {
    color: "#C9A962",
    fontSize: "18px",
    letterSpacing: "8px",
    margin: "0",
};

const eventsRow = {
    margin: "0 0 8px",
};

const eventColumn = {
    padding: "0 8px",
    textAlign: "center" as const,
    verticalAlign: "top" as const,
    width: "50%",
};

const eventIcon = {
    fontSize: "24px",
    margin: "0 0 8px",
};

const eventType = {
    color: "#C9A962",
    fontSize: "11px",
    letterSpacing: "3px",
    margin: "0 0 4px",
};

const eventTime = {
    color: "#FFFFFF",
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: "20px",
    fontWeight: "600",
    margin: "0 0 8px",
};

const eventVenue = {
    color: "#FFFFFF",
    fontSize: "14px",
    margin: "0",
    opacity: 0.9,
};

const eventAddress = {
    color: "#FFFFFF",
    fontSize: "12px",
    margin: "4px 0 0",
    opacity: 0.6,
};

const hashtagTitle = {
    color: "#C9A962",
    fontSize: "11px",
    letterSpacing: "3px",
    margin: "0 0 16px",
    textAlign: "center" as const,
};

const hashtagContainer = {
    textAlign: "center" as const,
    margin: "0 0 32px",
};

const hashtag = {
    color: "#FFFFFF",
    fontSize: "14px",
    fontStyle: "italic" as const,
    margin: "4px 0",
    opacity: 0.8,
};

const closingSection = {
    textAlign: "center" as const,
};

const closingText = {
    color: "#FFFFFF",
    fontSize: "14px",
    fontStyle: "italic" as const,
    margin: "24px 0 8px",
    opacity: 0.7,
};

const signature = {
    color: "#C9A962",
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: "28px",
    fontWeight: "500",
    margin: "0",
};

const footer = {
    backgroundColor: "#C9A962",
    padding: "16px 32px",
    textAlign: "center" as const,
};

const footerText = {
    color: "#0A0A0A",
    fontSize: "12px",
    letterSpacing: "2px",
    margin: "0",
};
