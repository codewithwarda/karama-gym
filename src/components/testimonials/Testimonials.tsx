"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/gymData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TestimonialCard } from "./TestimonialCard";
import { staggerContainer } from "@/lib/animations";

export function Testimonials() {
  return (
    <section
      id="transformations"
      aria-label="Member testimonials and results"
      className="py-24 bg-brand-surface"
    >
      <div className="max-w-[1240px] mx-auto px-6">
        <SectionHeader
          eyebrow="Member Results"
          title={
            <>
              Real People.
              <br />
              <span className="text-brand-red">Real Transformations.</span>
            </>
          }
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          role="list"
          aria-label="Member testimonials"
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} role="listitem">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
