"use client";

import { motion } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";
import { membershipPlan, membershipBenefits, gymInfo } from "@/data/gymData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { LinkButton } from "@/components/ui/Button";
import { whatsappLink } from "@/lib/utils";
import { fadeUp, slideInLeft, slideInRight } from "@/lib/animations";

export function Membership() {
  const waLink = whatsappLink(
    gymInfo.whatsapp,
    "Hi, I'm interested in a membership at Fitness District!"
  );

  return (
    <section id="membership" aria-label="Membership plans" className="py-24 bg-brand-surface relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-[-120px] right-[-120px] w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(215,38,56,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left — benefits */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <p className="font-display text-[13px] font-bold tracking-[0.18em] uppercase text-brand-red mb-4">
              Membership
            </p>
            <h2 className="font-display text-[clamp(36px,5vw,62px)] font-extrabold uppercase leading-[1.05] tracking-tight text-white mb-6">
              One Membership.
              <br />
              <span className="text-brand-red">Unlimited Access.</span>
            </h2>
            <p className="text-[16px] text-brand-muted mb-10 leading-relaxed max-w-md">
              No hidden fees, no tiered tiers, no excuses. One membership gives you everything
              Fitness District has to offer — 24 hours a day, every day.
            </p>

            <ul
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 list-none"
              aria-label="Membership benefits"
            >
              {membershipBenefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <span
                    className="w-[18px] h-[18px] flex-shrink-0 rounded-full bg-brand-red/15 border border-brand-red/30 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <Check size={10} strokeWidth={3} className="text-brand-red" />
                  </span>
                  <span className="text-[14px] text-brand-off-white font-medium">{benefit}</span>
                </li>
              ))}
            </ul>

            <LinkButton
              variant="primary"
              size="md"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              aria-label="Enquire about membership"
            >
              Enquire About Membership
            </LinkButton>
          </motion.div>

          {/* Right — plan card */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <article
              className="relative bg-brand-surface2 border border-white/7 rounded-md p-12 overflow-hidden"
              aria-label={membershipPlan.title}
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-brand-red to-[#ff6b6b]"
                aria-hidden="true"
              />

              <span className="inline-block bg-brand-red/10 border border-brand-red/30 rounded-sm px-3 py-1 font-display text-[11px] font-bold tracking-[0.12em] uppercase text-brand-red mb-5">
                {membershipPlan.badge}
              </span>

              <h3 className="font-display text-[32px] font-extrabold uppercase text-white mb-2">
                {membershipPlan.title}
              </h3>
              <p className="text-[14px] text-brand-muted mb-8">{membershipPlan.tagline}</p>

              <div className="h-px bg-brand-border mb-8" aria-hidden="true" />

              <ul className="space-y-3.5 mb-10 list-none" aria-label="Plan features">
                {membershipPlan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check
                      size={16}
                      strokeWidth={2.5}
                      className="text-brand-red flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-[14px] text-brand-off-white">{feature}</span>
                  </li>
                ))}
              </ul>

              <LinkButton
                variant="primary"
                size="md"
                fullWidth
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get membership details via WhatsApp"
              >
                <MessageCircle size={18} aria-hidden />
                {membershipPlan.cta}
              </LinkButton>
            </article>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
