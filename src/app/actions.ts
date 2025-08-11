"use server"

import { z } from "zod"

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

  // In a real application, you would send an email here.
  // For this portfolio, we'll simulate a success response.
  console.log("Form submitted successfully:", validatedFields.data)

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    success: true,
  }
}
