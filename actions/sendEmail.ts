"use server"

import ContactFormEmail from "@/email/contactFormEmail";
import { getErrorMessage, validateString } from "@/lib/utils";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const message = formData.get('message');
  const senderEmail = formData.get('senderEmail');

  if (!validateString(senderEmail, 100)) {
    return {
      error: "Invalid sender email"
    }
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message"
    }
  }

  let data;
  try {
    data = await resend.emails.send({
      from: 'Contact Form<onboarding@resend.dev>',
      to: 'jimenezgabriel12@gmail.com',
      subject: "Message from Portfolio Contact Form",
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, { message: message as string, senderEmail: senderEmail as string})
    })
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error)
    }
  }

  return {
    data
  };
}