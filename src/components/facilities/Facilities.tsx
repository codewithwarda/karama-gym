"use client";

import { motion } from "framer-motion";
import { facilities } from "@/data/gymData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FacilityCard } from "./FacilityCard";
import { staggerContainer } from "@/lib/animations";

export function Facilities() {
  return (
    <section id="facilities" aria-label="Gym facilities" className="py-24 bg-brand-black">
      <div className="max-w-[1240px] mx-auto px-6">
        <SectionHeader
          eyebrow="World-Class Facilities"
          title={
            <>
              Everything You Need
              <br />
              to <span className="text-brand-red">Perform.</span>
            </>
          }
          subtitle="Karama's largest warehouse gym — built with state-of-the-art equipment and recovery zones to support every type of athlete."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-0.5"
          role="list"
          aria-label="Facilities list"
        >
          {facilities.map((facility) => (
            <div
              key={facility.id}
              role="listitem"
              className={facility.wide ? "col-span-2" : "col-span-1"}
            >
              <FacilityCard facility={facility} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
