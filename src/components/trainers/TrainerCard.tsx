"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import type { Trainer } from "@/types";

interface TrainerCardProps {
  trainer: Trainer;
}

export function TrainerCard({ trainer }: TrainerCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      className="group bg-brand-surface2 border border-white/7 rounded-sm overflow-hidden
        hover:-translate-y-1.5 hover:border-brand-red/30 transition-all duration-250"
      aria-label={`Trainer: ${trainer.name}`}
    >
      {/* Photo */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={trainer.imageUrl}
          alt={`${trainer.name} — ${trainer.specialty} trainer at Fitness District`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-top"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent" />
      </div>

      {/* Info */}
      <div className="p-6">
        <p className="font-display text-[11px] font-bold tracking-[0.12em] uppercase text-brand-red mb-2">
          {trainer.specialty}
        </p>
        <h3 className="font-display text-[22px] font-extrabold uppercase text-white mb-2.5">
          {trainer.name}
        </h3>
        <p className="text-[13px] text-brand-muted leading-relaxed mb-4">{trainer.bio}</p>

        {trainer.certifications && trainer.certifications.length > 0 && (
          <div className="flex flex-wrap gap-2" aria-label="Certifications">
            {trainer.certifications.map((cert) => (
              <span
                key={cert}
                className="text-[11px] font-medium text-brand-muted border border-white/10 rounded-sm px-2 py-0.5"
              >
                {cert}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}
