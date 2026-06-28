"use client";

import { motion } from "framer-motion";
import { Clock, BarChart3, Shield } from "lucide-react";
import { whyCards } from "@/data/gymData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { fadeUp, staggerContainer } from "@/lib/animations";
import type { WhyCard } from "@/types";

// We keep icons in a local map to avoid passing string-based icon names through data
const iconMap: Record<string, React.ReactNode> = {
  Clock: <Clock size={26} strokeWidth={2} />,
  Dumbbell: (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6.5 6.5h11" />
      <path d="M20.5 12H3.5" />
      <path d="M6.5 17.5h11" />
      <rect x="2" y="10" width="3" height="4" rx="1" />
      <rect x="19" y="10" width="3" height="4" rx="1" />
      <rect x="5" y="5" width="2" height="14" rx="1" />
      <rect x="17" y="5" width="2" height="14" rx="1" />
    </svg>
  ),
  Shield: <Shield size={26} strokeWidth={2} />,
  BarChart3: <BarChart3 size={26} strokeWidth={2} />,
};

function WhyCardComponent({ card }: { card: WhyCard }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group relative bg-brand-surface border border-white/7 p-11 overflow-hidden
        hover:bg-brand-surface2 transition-colors duration-250 cursor-default"
    >
      {/* Bottom bar reveal on hover */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[3px] bg-brand-red
          scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
        aria-hidden="true"
      />

      {/* Icon */}
      <div
        className="w-[52px] h-[52px] bg-brand-red/10 border border-brand-red/25 rounded
          flex items-center justify-center mb-6 text-brand-red"
        aria-hidden="true"
      >
        {iconMap[card.iconName]}
      </div>

      <h3 className="font-display text-[22px] font-extrabold uppercase tracking-wide text-white mb-3">
        {card.title}
      </h3>
      <p className="text-[15px] text-brand-muted leading-relaxed">{card.description}</p>
    </motion.article>
  );
}

export function Why() {
  return (
    <section id="why" aria-label="Why choose Fitness District" className="py-24 bg-brand-surface">
      <div className="max-w-[1240px] mx-auto px-6">
        <SectionHeader
          eyebrow="Why Fitness District"
          title={
            <>
              Built Different.
              <br />
              For Those Who{" "}
              <span className="text-brand-red">Train Harder.</span>
            </>
          }
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/7 border border-white/7"
          role="list"
          aria-label="Features"
        >
          {whyCards.map((card) => (
            <div key={card.id} role="listitem">
              <WhyCardComponent card={card} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
