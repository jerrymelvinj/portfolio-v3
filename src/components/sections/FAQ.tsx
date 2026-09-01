"use client";

import * as React from "react";
import { faqItems } from "@/content/faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Sparkles } from "lucide-react";

export function FAQ() {
  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative">
      {/* Header */}
      <div className="space-y-4 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 text-xs font-mono font-medium">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Frequently Asked Questions</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          Working Model & Specializations
        </h2>
        <p className="text-base text-zinc-400 max-w-xl mx-auto">
          Insights into design methodology, technical integration, remote collaboration,
          and engagement workflows.
        </p>
      </div>

      {/* Accordion */}
      <div className="space-y-3">
        <Accordion type="single" collapsible defaultValue="faq-1" className="w-full">
          {faqItems.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="text-left font-semibold">
                <span className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-400/80 shrink-0" />
                  {item.question}
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-zinc-300 pl-5 text-sm sm:text-base leading-relaxed border-l border-zinc-800 ml-1 mt-1">
                  {item.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
