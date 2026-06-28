"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import { scrollToSection, telLink } from "@/lib/utils";
import { gymInfo, heroStats } from "@/data/gymData";
import { Button, LinkButton } from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/lib/animations";
import type { Stat } from "@/types";

function StatItem({ stat }: { stat: Stat }) {
  return (
    <div className="pr-8 mr-8 border-r border-white/10 last:border-0 last:pr-0 last:mr-0">
      <div className="font-display text-[42px] font-black text-white leading-none mb-1">
        {stat.value}
        {stat.suffix && <span className="text-brand-red">{stat.suffix}</span>}
      </div>
      <div className="text-[11px] text-brand-muted uppercase tracking-widest font-medium">
        {stat.label}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero — Fitness District Gym"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1800&q=85&auto=format&fit=crop"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-brand-black/20 to-brand-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/85 via-brand-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1240px] mx-auto px-6 w-full pt-[72px]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-[860px]"
        >
          {/* Live badge */}
          <motion.div variants={fadeUp} className="mb-8">
            <span className="inline-flex items-center gap-2 bg-brand-red/12 border border-brand-red/30 rounded-sm px-3.5 py-2 font-display text-[12px] font-bold tracking-[0.16em] uppercase text-brand-red">
              <span className="w-[7px] h-[7px] rounded-full bg-brand-red animate-pulse-dot" />
              Open Everyday — No Slot System
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-display text-[clamp(48px,9vw,100px)] font-black leading-[0.95] uppercase tracking-tight text-white mb-6"
          >
            Karama&apos;s
            <br />
            Biggest{" "}
            <em className="not-italic text-brand-red"></em>
            <br />
            Warehouse Gym
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={fadeUp}
            className="text-[17px] text-brand-off-white/70 max-w-[540px] leading-relaxed mb-10 font-light"
          >
            Train on 100+ premium machines, recover with sauna and ice bath, and achieve your
            fitness goals with expert guidance. Near Karama Post Office, Dubai.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-16">
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection("#membership")}
              aria-label="Start your fitness journey — go to membership section"
            >
              <ArrowRight size={18} aria-hidden />
              Start Your Fitness Journey
            </Button>
            <LinkButton
              variant="ghost"
              size="lg"
              href={telLink(gymInfo.phone)}
              aria-label={`Call Fitness District at ${gymInfo.phone}`}
            >
              <Phone size={18} aria-hidden />
              Call Us Now
            </LinkButton>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-y-6 pt-8 border-t border-white/10"
            aria-label="Key statistics"
          >
            {heroStats.map((stat) => (
              <StatItem key={stat.label} stat={stat} />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-9 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-[11px] text-brand-muted tracking-[0.12em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-brand-red to-transparent animate-scroll-line" />
      </div>
    </section>
  );
}
