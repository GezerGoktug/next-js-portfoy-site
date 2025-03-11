import * as React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
  Tailwind,
  Hr,
} from "@react-email/components";

interface EmailTemplateProps {
  sender: string;
  email: string;
  subject: string;
  desc: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  sender,
  email,
  subject,
  desc,
}) => (
  <Html>
    <Head />
    <Tailwind>
      <Body className="bg-gray-100 text-gray-900">
        <Container className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg border">
          <Heading className="text-xl font-semibold text-gray-800">
            {subject}
          </Heading>
          <Hr className="border-gray-300 my-4" />
          <Text className="text-gray-700">
            <strong>Sender:</strong> {sender}
          </Text>
          <Text className="text-gray-700">
            <strong>E-mail:</strong> {email}
          </Text>
          <Hr className="border-gray-300 my-4" />
          <Text className="text-gray-700">{desc}</Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);
