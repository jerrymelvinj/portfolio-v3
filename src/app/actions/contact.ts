"use server";

import { contactFormSchema, ContactFormValues } from "@/lib/schema";

export interface ContactActionResult {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}

export async function submitContactForm(
  data: ContactFormValues
): Promise<ContactActionResult> {
  // Validate data on the server with Zod
  const result = contactFormSchema.safeParse(data);

  if (!result.success) {
    const errorMap: Record<string, string[]> = {};
    result.error.errors.forEach((err) => {
      const field = err.path.join(".");
      if (!errorMap[field]) {
        errorMap[field] = [];
      }
      errorMap[field].push(err.message);
    });

    return {
      success: false,
      message: "Please correct the highlighted fields and try again.",
      errors: errorMap,
    };
  }

  // Simulate network latency & server processing
  await new Promise((resolve) => setTimeout(resolve, 600));

  console.log("Contact form submission received successfully:", {
    name: result.data.name,
    email: result.data.email,
    projectType: result.data.projectType,
    messageLength: result.data.message.length,
    timestamp: new Date().toISOString(),
  });

  return {
    success: true,
    message:
      "Thank you for reaching out! Jerry has received your message and will respond within 24 hours.",
  };
}
