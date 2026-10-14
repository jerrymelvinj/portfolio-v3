"use client";

import * as React from "react";
import { faqItems } from "@/content/faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <section id="faq" className="py-24 px-6 sm:px-8 lg:px-12 bg-black border-b border-neutral-800">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-3 text-center sm:text-left border-b border-neutral-800 pb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
            Design Consulting &amp; Technical FAQ
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            Technical Specializations &amp; Engagement Model.
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-2">
          <Accordion type="single" collapsible defaultValue="faq-1" className="w-full">
            {faqItems.map((item, idx) => {
              const num = String(idx + 1).padStart(2, "0");
              return (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-b border-neutral-800 py-2"
                >
                  <AccordionTrigger className="text-left font-bold text-base sm:text-lg text-white hover:text-neutral-300 py-4 transition-colors">
                    <span className="flex items-center gap-4">
                      <span className="text-xs font-mono text-neutral-500">
                        [{num}]
                      </span>
                      <span>{item.question}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <p className="text-neutral-400 pl-8 text-sm sm:text-base leading-relaxed font-mono">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
