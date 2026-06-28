"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactInfo } from "./ContactInfo";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contact" aria-label="Contact Fitness District" className="py-24 bg-brand-surface">
      <div className="max-w-[1240px] mx-auto px-6">
        <SectionHeader
          eyebrow="Get In Touch"
          title={
            <>
              Start Your <span className="text-brand-red">Journey Today.</span>
            </>
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
