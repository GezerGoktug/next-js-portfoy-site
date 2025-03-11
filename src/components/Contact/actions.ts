"use server";

import { z } from "zod";
import { Resend } from "resend";
import { EmailTemplate } from "./EmailTemplate";
import { ReactElement } from "react";

const schema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.string().email("Invalid is email"),
  subject: z.string().min(6, "Subject field must be at least 6 characters"),
  description: z
    .string()
    .min(15, "Description field must be at least 15 characters")
    .max(300, "Description field must be 300 characters maximum"),
});

export interface IPrevData {
  error?: Record<string, string[]>;
  success?: boolean;
  message?: string;
}
const resend = new Resend(process.env.RESEND_API_KEY);

const sendContactMail = async (
  prevData: IPrevData,
  data: FormData
): Promise<IPrevData> => {
  const validated = schema.safeParse({
    name: data.get("name"),
    email: data.get("email"),
    subject: data.get("subject"),
    description: data.get("description"),
  });

  if (!validated.success) {
    return {
      success: false,
      error: validated.error.flatten().fieldErrors,
    };
  }

  try {
    const { name, email, subject, description } = validated.data;
    const { error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: process.env.EMAIL_USER as string,
      subject: subject,
      react: EmailTemplate({
        sender: name,
        desc: description,
        email,
        subject,
      }) as ReactElement,
    });

    if (error) {
      throw new Error();
    }

    return { success: true, message: "Sended email successfully" };
  } catch {
    return {
      success: false,
      message: "An error occurred while sending the mail",
    };
  }
};

export default sendContactMail;
