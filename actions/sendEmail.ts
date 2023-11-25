"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (formData: FormData) => {
  const senderName = formData.get("senderName");
  const message = formData.get("message");
  const senderEmail = formData.get("senderEmail");

  if (!senderEmail || typeof senderEmail !== "string") {
    return {
      error: "Invalid sender email",
    };
  }

  if (!senderName || typeof senderName !== "string") {
    return {
      error: "Invalid sender email",
    };
  }

  if (!message || typeof message !== "string") {
    return {
      error: "Invalid message",
    };
  }

  try {
    await resend.emails.send({
      from: "onboading@resend.dev",
      to: "codewithwaqarahmad@gmail.com",
      subject: `New Message by ${senderName} from Portfolio`,
      reply_to: senderEmail as string,
      text: message as string,
    });
  } catch (error) {
    console.log(error);
  }
};

export default sendEmail;
