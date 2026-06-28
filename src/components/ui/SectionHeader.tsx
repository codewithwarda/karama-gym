"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered,
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      className={cn("mb-14", centered && "text-center", className)}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      <p className="font-display text-[13px] font-bold tracking-[0.18em] uppercase text-brand-red mb-3">
        {eyebrow}
      </p>
      <h2 className="font-display text-[clamp(36px,5vw,62px)] font-extrabold uppercase leading-[1.05] tracking-tight text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-[17px] text-brand-muted max-w-xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
