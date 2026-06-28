"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      className="relative bg-brand-surface2 border border-white/7 rounded-sm p-8 overflow-hidden
        hover:border-brand-red/25 transition-border duration-250"
      aria-label={`Testimonial from ${testimonial.name}`}
    >
      {/* Decorative quote mark */}
      <span
        className="absolute top-4 right-6 font-display text-[120px] font-black leading-none
          text-brand-red/6 pointer-events-none select-none"
        aria-hidden="true"
      >
        &quot;
      </span>

      {/* Stars */}
      <div
        className="flex gap-1 mb-4"
        role="img"
        aria-label={`${testimonial.rating} out of 5 stars`}
      >
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={15} className="fill-brand-red text-brand-red" aria-hidden="true" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-[15px] text-brand-off-white leading-[1.7] mb-6 italic">
        &ldquo;{testimonial.text}&rdquo;
      </blockquote>

      {/* Meta */}
      <div className="flex items-center gap-3.5">
        <div
          className="w-11 h-11 rounded-full flex-shrink-0 flex items-center justify-center
            font-display text-[16px] font-extrabold text-white"
          style={{ backgroundColor: testimonial.avatarColor }}
          aria-hidden="true"
        >
          {testimonial.initials}
        </div>
        <div>
          <p className="text-[14px] font-semibold text-white">{testimonial.name}</p>
          <p className="text-[12px] text-brand-red mt-0.5">{testimonial.result}</p>
        </div>
      </div>
    </motion.article>
  );
}
