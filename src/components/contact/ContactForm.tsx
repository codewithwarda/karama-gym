"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button, LinkButton } from "@/components/ui/Button";
import { gymInfo } from "@/data/gymData";
import { whatsappLink } from "@/lib/utils";
import { fadeUp } from "@/lib/animations";

interface FormState {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const initialState: FormState = { name: "", phone: "", email: "", message: "" };

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = () => {
    if (!validate()) return;
    const text = `Hi Fitness District! My name is ${form.name}. Phone: ${form.phone}.${form.email ? ` Email: ${form.email}.` : ""} ${form.message || "I'd like to enquire about membership."}`;
    window.open(whatsappLink(gymInfo.whatsapp, text), "_blank", "noopener,noreferrer");
    setForm(initialState);
  };

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      <h3 className="font-display text-[28px] font-extrabold uppercase text-white mb-8">
        Send Us a Message
      </h3>

      <div className="space-y-4">
        {/* Name + Phone row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-[12px] font-semibold tracking-wide uppercase text-brand-muted mb-2">
              Name <span className="text-brand-red" aria-hidden="true">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              autoComplete="name"
              aria-required="true"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              className="w-full bg-brand-surface2 border border-white/7 rounded-sm px-4 py-3.5
                text-white text-[15px] font-body placeholder-brand-muted/50
                focus:outline-none focus:border-brand-red/50 transition-colors duration-200
                aria-[invalid=true]:border-brand-red/70"
            />
            {errors.name && (
              <p id="name-error" className="mt-1.5 text-[12px] text-brand-red" role="alert">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-[12px] font-semibold tracking-wide uppercase text-brand-muted mb-2">
              Phone <span className="text-brand-red" aria-hidden="true">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="+971 XX XXX XXXX"
              autoComplete="tel"
              aria-required="true"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className="w-full bg-brand-surface2 border border-white/7 rounded-sm px-4 py-3.5
                text-white text-[15px] font-body placeholder-brand-muted/50
                focus:outline-none focus:border-brand-red/50 transition-colors duration-200
                aria-[invalid=true]:border-brand-red/70"
            />
            {errors.phone && (
              <p id="phone-error" className="mt-1.5 text-[12px] text-brand-red" role="alert">
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-[12px] font-semibold tracking-wide uppercase text-brand-muted mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@email.com"
            autoComplete="email"
            className="w-full bg-brand-surface2 border border-white/7 rounded-sm px-4 py-3.5
              text-white text-[15px] font-body placeholder-brand-muted/50
              focus:outline-none focus:border-brand-red/50 transition-colors duration-200"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-[12px] font-semibold tracking-wide uppercase text-brand-muted mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            placeholder="Tell us your goals — we'll help you reach them."
            className="w-full bg-brand-surface2 border border-white/7 rounded-sm px-4 py-3.5
              text-white text-[15px] font-body placeholder-brand-muted/50
              focus:outline-none focus:border-brand-red/50 transition-colors duration-200 resize-y"
          />
        </div>

        {/* Submit */}
        <Button
          variant="primary"
          size="lg"
          fullWidth
          onClick={handleSubmit}
          aria-label="Send message via WhatsApp"
          className="mt-2"
        >
          <Send size={17} aria-hidden />
          Send Message
        </Button>

        {/* WhatsApp shortcut */}
        <LinkButton
          variant="whatsapp"
          size="lg"
          fullWidth
          href={whatsappLink(gymInfo.whatsapp, "Hi, I'm interested in joining Fitness District Gym!")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat directly on WhatsApp"
        >
          <WhatsAppIcon />
          Chat on WhatsApp
        </LinkButton>
      </div>
    </motion.div>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.093.541 4.063 1.49 5.78L.057 23.09a.75.75 0 0 0 .917.917l5.31-1.432A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.97 0-3.81-.538-5.38-1.472l-.386-.23-3.994 1.078 1.078-3.994-.23-.387A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}
