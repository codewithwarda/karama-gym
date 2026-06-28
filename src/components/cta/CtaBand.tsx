"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Button, LinkButton } from "@/components/ui/Button";
import { gymInfo } from "@/data/gymData";
import { scrollToSection, telLink } from "@/lib/utils";
import { fadeUp } from "@/lib/animations";

export function CtaBand() {
  return (
    <section
      id="cta"
      aria-label="Call to action — join Fitness District"
      className="py-24 bg-brand-red relative overflow-hidden"
    >
      {/* Ghost text watermark */}
      <p
        className="absolute right-[-60px] top-1/2 -translate-y-1/2 font-display text-[220px]
          font-black leading-none text-black/10 tracking-[-0.04em] pointer-events-none
          select-none whitespace-nowrap"
        aria-hidden="true"
      >
        TRAIN
      </p>

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="text-center"
        >
          <h2
            className="font-display text-[clamp(34px,5vw,62px)] font-black uppercase
              text-white leading-[1.05] mb-4"
          >
            Ready to Become the
            <br />
            Strongest Version of Yourself?
          </h2>
          <p className="text-[18px] text-white/80 mb-10">
            Join Karama&apos;s most serious gym. Your first 2 PT sessions are free.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="white"
              size="lg"
              onClick={() => scrollToSection("#membership")}
              aria-label="Join today — go to membership"
            >
              <ArrowRight size={18} aria-hidden />
              Join Today
            </Button>
            <LinkButton
              variant="outline-white"
              size="lg"
              href={telLink(gymInfo.phone)}
              aria-label={`Call us at ${gymInfo.phone}`}
            >
              <Phone size={18} aria-hidden />
              {gymInfo.phone}
            </LinkButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
