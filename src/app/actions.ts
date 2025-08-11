"use server"

import { z } from "zod"
import nodemailer from "nodemailer"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
})

export async function submitContactForm(values: z.infer<typeof contactSchema>) {
  const validatedFields = contactSchema.safeParse(values)

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Invalid form data.",
    }
  }

  const { name, email, message } = validatedFields.data
  const { GMAIL_EMAIL, GMAIL_APP_PASSWORD } = process.env

  if (!GMAIL_EMAIL || !GMAIL_APP_PASSWORD) {
    console.error("Missing Gmail credentials in .env.local")
    return {
      success: false,
      message: "Server configuration error. Could not send email.",
    }
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: GMAIL_EMAIL,
      pass: GMAIL_APP_PASSWORD,
    },
  })

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: GMAIL_EMAIL,
      subject: `New message from ${name} via Portfolio`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    return {
      success: true,
    }
  } catch (error) {
    console.error("Failed to send email:", error)
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    }
  }
}
