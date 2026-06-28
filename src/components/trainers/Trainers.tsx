"use client";

import { motion } from "framer-motion";
import { trainers } from "@/data/gymData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TrainerCard } from "./TrainerCard";
import { staggerContainer } from "@/lib/animations";

export function Trainers() {
  return (
    <section id="trainers" aria-label="Personal trainers" className="py-24 bg-brand-black">
      <div className="max-w-[1240px] mx-auto px-6">
        <SectionHeader
          eyebrow="Expert Guidance"
          title={
            <>
              Train With the <span className="text-brand-red">Best.</span>
            </>
          }
          subtitle="Your first 2 sessions are on us. Our certified personal trainers craft programs that deliver results, fast."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          role="list"
          aria-label="Trainer profiles"
        >
          {trainers.map((trainer) => (
            <div key={trainer.id} role="listitem">
              <TrainerCard trainer={trainer} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
