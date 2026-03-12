import * as React from "react";
import {
  Body,
  Container,
  Heading,
  Html,
  Section,
  Text,
} from "@react-email/components";

type ContactFormEmailProps = {
  name: string;
  email: string;
  company?: string;
  project: string;
};

export default function ContactFormEmail({
  name,
  email,
  company,
  project,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Body
        style={{
          backgroundColor: "#f4f4f5",
          margin: 0,
          padding: "24px 0",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        }}
      >
        <Container
          style={{
            maxWidth: "640px",
            margin: "0 auto",
            backgroundColor: "#ffffff",
            padding: "24px 20px",
          }}
        >
          <Heading
            as="h2"
            style={{
              fontSize: "24px",
              margin: "0 0 16px",
              color: "#111827",
            }}
          >
            New Contact Form Submission
          </Heading>

          <Section style={{ marginBottom: "16px" }}>
            <Text style={{ margin: "4px 0", fontSize: "14px", color: "#111827" }}>
              <strong>Name:</strong> {name}
            </Text>
            <Text style={{ margin: "4px 0", fontSize: "14px", color: "#111827" }}>
              <strong>Email:</strong> {email}
            </Text>
            <Text style={{ margin: "4px 0", fontSize: "14px", color: "#111827" }}>
              <strong>Company:</strong> {company || "N/A"}
            </Text>
          </Section>

          <Section>
            <Text
              style={{
                margin: "0 0 4px",
                fontSize: "14px",
                fontWeight: 600,
                color: "#111827",
              }}
            >
              Project Details
            </Text>
            <Text
              style={{
                margin: 0,
                whiteSpace: "pre-wrap",
                fontSize: "14px",
                color: "#111827",
              }}
            >
              {project}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

