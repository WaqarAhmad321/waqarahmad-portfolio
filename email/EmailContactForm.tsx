import { FC } from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type EmailContactFormProps = {
  message: string;
  senderEmail: string;
};

const EmailContactForm: FC<EmailContactFormProps> = ({
  message,
  senderEmail,
}) => {
  return (
    <Html>
      <Head />
      <Preview>New Message from your portfolio site</Preview>
      <Tailwind>
        <Body>
          <Container>
            <Section>
              <Heading>New Message from Contact Form</Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>From: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default EmailContactForm;
