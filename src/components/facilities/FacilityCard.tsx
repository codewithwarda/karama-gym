"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Zap,
  Flame,
  Snowflake,
  LayoutGrid,
} from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
import type { Facility } from "@/types";

const iconMap: Record<string, React.ReactNode> = {
  Dumbbell: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="10" width="3" height="4" rx="1" />
      <rect x="19" y="10" width="3" height="4" rx="1" />
      <rect x="5" y="5" width="2" height="14" rx="1" />
      <rect x="17" y="5" width="2" height="14" rx="1" />
      <path d="M7 12h10" />
    </svg>
  ),
  TrendingUp: <TrendingUp size={20} strokeWidth={2} aria-hidden />,
  Zap: <Zap size={20} strokeWidth={2} aria-hidden />,
  Flame: <Flame size={20} strokeWidth={2} aria-hidden />,
  Snowflake: <Snowflake size={20} strokeWidth={2} aria-hidden />,
  LayoutGrid: <LayoutGrid size={20} strokeWidth={2} aria-hidden />,
};

interface FacilityCardProps {
  facility: Facility;
}

export function FacilityCard({ facility }: FacilityCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      className={cn(
        "relative overflow-hidden bg-brand-surface3 group",
        facility.wide ? "col-span-2" : "col-span-1"
      )}
      style={{ aspectRatio: facility.wide ? "8/5" : "4/5" }}
      aria-label={facility.name}
    >
      {/* Background image */}
      <Image
        src={facility.imageUrl}
        alt={facility.name}
        fill
        sizes={facility.wide ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
        className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.06]"
        loading="lazy"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black/92 via-brand-black/10 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-7">
        <div
          className="w-10 h-10 bg-brand-red/10 border border-brand-red/40 rounded flex items-center justify-center mb-3.5 text-brand-red"
          aria-hidden="true"
        >
          {iconMap[facility.icon]}
        </div>
        <h3 className="font-display text-[19px] font-extrabold uppercase tracking-wide text-white mb-1">
          {facility.name}
        </h3>
        <p className="text-[13px] text-brand-off-white/60">{facility.description}</p>
      </div>
    </motion.article>
  );
}
