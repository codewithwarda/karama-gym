"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { galleryImages } from "@/data/gymData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";
import type { GalleryImage } from "@/types";

function GalleryItem({ image }: { image: GalleryImage }) {
  return (
    <motion.div
      variants={fadeUp}
      className={cn(
        "relative overflow-hidden bg-brand-surface3 group",
        image.span === "wide" && "col-span-2",
        image.span === "tall" && "row-span-2"
      )}
      style={{
        aspectRatio:
          image.span === "wide" ? "2/1" : image.span === "tall" ? undefined : "1/1",
        minHeight: image.span === "tall" ? "100%" : undefined,
      }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 768px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
        loading="lazy"
      />
      {/* Hover tint */}
      <div
        className="absolute inset-0 bg-brand-red/0 group-hover:bg-brand-red/8 transition-colors duration-300 pointer-events-none"
        aria-hidden="true"
      />
    </motion.div>
  );
}

export function Gallery() {
  return (
    <section id="gallery" aria-label="Gym photo gallery" className="py-24 bg-brand-black">
      <div className="max-w-[1240px] mx-auto px-6">
        <SectionHeader
          eyebrow="Inside the Gym"
          title={
            <>
              See the <span className="text-brand-red">District.</span>
            </>
          }
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-1"
          role="list"
          aria-label="Gallery images"
        >
          {galleryImages.map((image) => (
            <div
              key={image.id}
              role="listitem"
              className={cn(
                image.span === "wide" && "col-span-2",
                image.span === "tall" && "row-span-2"
              )}
            >
              <GalleryItem image={image} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
