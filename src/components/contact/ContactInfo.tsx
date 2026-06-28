"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock } from "lucide-react";
import { gymInfo } from "@/data/gymData";
import { telLink } from "@/lib/utils";
import { fadeUp } from "@/lib/animations";

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}

function ContactItem({ icon, label, children }: ContactItemProps) {
  return (
    <div className="flex gap-4 items-start">
      <div
        className="w-11 h-11 flex-shrink-0 bg-brand-red/10 border border-brand-red/25 rounded flex items-center justify-center text-brand-red"
        aria-hidden="true"
      >
        {icon}
      </div>
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-brand-muted mb-1">
          {label}
        </p>
        <div className="text-[16px] text-white font-medium">{children}</div>
      </div>
    </div>
  );
}

export function ContactInfo() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      <h3 className="font-display text-[28px] font-extrabold uppercase text-white mb-8">
        Visit or Call Us
      </h3>

      <div className="space-y-7">
        <ContactItem icon={<Phone size={20} strokeWidth={2} />} label="Phone">
          <a
            href={telLink(gymInfo.phone)}
            className="hover:text-brand-red transition-colors duration-200"
            aria-label={`Call us at ${gymInfo.phone}`}
          >
            {gymInfo.phone}
          </a>
        </ContactItem>

        <ContactItem icon={<MapPin size={20} strokeWidth={2} />} label="Location">
          <span>{gymInfo.address}</span>
        </ContactItem>

        <ContactItem icon={<Clock size={20} strokeWidth={2} />} label="Hours">
          <span className="text-brand-red">{gymInfo.hours}</span>
        </ContactItem>
      </div>

      {/* Map placeholder */}
      <div
        className="mt-8 h-[200px] bg-brand-surface3 border border-white/7 rounded flex flex-col
          items-center justify-center gap-2"
        aria-label="Map placeholder — Near Karama Post Office, Dubai"
        role="img"
      >
        <MapPin size={28} className="text-brand-muted" aria-hidden="true" />
        <p className="font-display text-[13px] font-bold uppercase tracking-widest text-brand-muted">
          Karama, Dubai
        </p>
        <p className="text-[12px] text-brand-muted/60">Near Karama Post Office</p>
        <a
          href={`https://maps.google.com/?q=Karama+Post+Office+Dubai`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 text-[12px] text-brand-red hover:underline"
          aria-label="Open location in Google Maps"
        >
          Open in Google Maps →
        </a>
      </div>
    </motion.div>
  );
}
