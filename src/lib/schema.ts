import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(80, { message: "Name must be under 80 characters." }),
  email: z
    .string()
    .email({ message: "Please provide a valid email address." }),
  projectType: z.enum(
    [
      "Design Systems & UI Engineering",
      "E-Commerce & Conversion UX",
      "Authentication & Identity Flows",
      "Full Product Design (0 to 1)",
      "Consulting / Advisory",
    ],
    {
      required_error: "Please select a project type.",
    }
  ),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(2000, { message: "Message must be under 2000 characters." }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
