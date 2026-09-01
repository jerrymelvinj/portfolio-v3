"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormValues } from "@/lib/schema";
import { submitContactForm } from "@/app/actions/contact";
import { siteConfig } from "@/content/site-config";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import confetti from "canvas-confetti";
import {
  Mail,
  Linkedin,
  Github,
  Send,
  Loader2,
  CheckCircle,
  MessageSquare,
  MapPin,
} from "lucide-react";

const projectTypeOptions = [
  "Design Systems & UI Engineering",
  "E-Commerce & Conversion UX",
  "Authentication & Identity Flows",
  "Full Product Design (0 to 1)",
  "Consulting / Advisory",
] as const;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      projectType: "Design Systems & UI Engineering",
      message: "",
    },
  });

  const selectedProjectType = watch("projectType");

  const onSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await submitContactForm(values);
      if (response.success) {
        setIsSuccess(true);
        toast.success("Message Sent Successfully!", {
          description:
            "Thank you for reaching out! Jerry will get back to you within 24 hours.",
        });

        // Trigger celebratory confetti
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
          });
        } catch (e) {
          // ignore confetti if running in headless env
        }

        reset();
        setTimeout(() => setIsSuccess(false), 6000);
      } else {
        toast.error("Submission Failed", {
          description: response.message,
        });
      }
    } catch (err) {
      toast.error("An unexpected error occurred", {
        description: "Please send a direct email to jerrymelvinj@gmail.com",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[350px] bg-gradient-to-tr from-cyan-500/10 via-blue-500/5 to-transparent blur-[120px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="space-y-4 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 text-xs font-mono font-medium">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Initiate Collaboration</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          Let&apos;s Build Something Remarkable
        </h2>
        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto">
          Have an e-commerce conversion challenge, design system initiative, or complex product
          to build? Let&apos;s discuss your goals.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Direct Info & Socials */}
        <div className="lg:col-span-5 space-y-6">
          <Card className="bg-zinc-950/70 border-zinc-800/80 p-6 sm:p-8 space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">Direct Channels</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Prefer email or a direct message? Reach out through any of these platforms:
              </p>
            </div>

            <div className="space-y-3">
              {/* Direct Email Link */}
              <a
                href={siteConfig.socials.email}
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-cyan-500/40 hover:bg-zinc-900 transition-all text-sm group"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-zinc-400">Email Directly</span>
                  <span className="font-semibold text-zinc-200 group-hover:text-cyan-300 transition-colors">
                    {siteConfig.email}
                  </span>
                </div>
              </a>

              {/* LinkedIn Anchor */}
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-blue-500/40 hover:bg-zinc-900 transition-all text-sm group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-zinc-400">Connect on LinkedIn</span>
                  <span className="font-semibold text-zinc-200 group-hover:text-blue-300 transition-colors">
                    linkedin.com/in/jerrymelvin
                  </span>
                </div>
              </a>

              {/* GitHub Anchor */}
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-500 hover:bg-zinc-900 transition-all text-sm group"
              >
                <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300 group-hover:scale-105 transition-transform">
                  <Github className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-zinc-400">Review Code on GitHub</span>
                  <span className="font-semibold text-zinc-200 group-hover:text-zinc-100 transition-colors">
                    github.com/jerrymelvin
                  </span>
                </div>
              </a>
            </div>

            {/* Location & Timezone info */}
            <div className="pt-4 border-t border-zinc-800/80 space-y-3">
              <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Bengaluru, Karnataka, India (IST / UTC+5:30)</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Response SLA: Typically within 12–24 hours on business days.
              </p>
            </div>
          </Card>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-7">
          <Card className="bg-zinc-950/80 border-zinc-800/90 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
              {/* Project Type Selector */}
              <div className="space-y-2.5">
                <Label className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
                  Project Type / Focus Area <span className="text-cyan-400">*</span>
                </Label>
                <div className="flex flex-wrap gap-2">
                  {projectTypeOptions.map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setValue("projectType", type, { shouldValidate: true })}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        selectedProjectType === type
                          ? "bg-cyan-500 text-zinc-950 font-bold shadow-md shadow-cyan-500/20"
                          : "bg-zinc-900 border border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:text-white"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
                {errors.projectType && (
                  <p className="text-xs text-red-400 font-medium mt-1">
                    {errors.projectType.message}
                  </p>
                )}
              </div>

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-xs font-semibold text-zinc-300">
                    Your Name <span className="text-cyan-400">*</span>
                  </Label>
                  <Input
                    id="name"
                    placeholder="e.g. Alex Henderson"
                    {...register("name")}
                    className={errors.name ? "border-red-500/80 focus-visible:border-red-500" : ""}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400 font-medium">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs font-semibold text-zinc-300">
                    Work Email <span className="text-cyan-400">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="alex@company.com"
                    {...register("email")}
                    className={errors.email ? "border-red-500/80 focus-visible:border-red-500" : ""}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400 font-medium">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Message / Brief */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-xs font-semibold text-zinc-300">
                  Project Brief / Message <span className="text-cyan-400">*</span>
                </Label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="Share details regarding your timeline, user pain points, conversion goals, or design system requirements..."
                  {...register("message")}
                  className={errors.message ? "border-red-500/80 focus-visible:border-red-500" : ""}
                />
                {errors.message && (
                  <p className="text-xs text-red-400 font-medium">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                variant="glow"
                disabled={isSubmitting}
                className="w-full text-base font-semibold gap-2 shadow-lg shadow-cyan-500/20"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Transmitting Message...</span>
                  </>
                ) : isSuccess ? (
                  <>
                    <CheckCircle className="w-5 h-5 text-zinc-950" />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
