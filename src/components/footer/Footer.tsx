"use client";

import { scrollToSection, telLink, whatsappLink } from "@/lib/utils";
import { gymInfo, navItems } from "@/data/gymData";

interface FooterLinkProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  external?: boolean;
}

function FooterLink({ href, onClick, children, external }: FooterLinkProps) {
  const cls =
    "text-[14px] text-brand-muted hover:text-white transition-colors duration-200";
  if (onClick) {
    return (
      <button onClick={onClick} className={cls}>
        {children}
      </button>
    );
  }
  return (
    <a
      href={href}
      className={cls}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 bg-brand-surface2 border border-white/7 rounded flex items-center justify-center
        text-brand-muted hover:text-brand-red hover:border-brand-red/40 hover:bg-brand-red/10
        transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
    >
      {children}
    </a>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-black border-t border-white/7" role="contentinfo">
      <div className="max-w-[1240px] mx-auto px-6 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <button
              onClick={() => scrollToSection("#home")}
              className="font-display text-[24px] font-black uppercase tracking-wider text-white leading-none mb-4 block
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red rounded-sm"
              aria-label="Go to top"
            >
              Fitness<span className="text-brand-red">District</span>
            </button>
            <p className="text-[14px] text-brand-muted leading-relaxed max-w-[260px] mb-6">
              {gymInfo.description}
            </p>
            <div className="flex gap-3" aria-label="Social media links">
              <SocialLink href="#" label="Instagram">
                <InstagramIcon />
              </SocialLink>
              <SocialLink
                href={whatsappLink(gymInfo.whatsapp)}
                label="WhatsApp"
              >
                <WhatsAppIcon />
              </SocialLink>
              <SocialLink href="#" label="Facebook">
                <FacebookIcon />
              </SocialLink>
              <SocialLink href="#" label="TikTok">
                <TikTokIcon />
              </SocialLink>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-display text-[13px] font-bold uppercase tracking-[0.1em] text-white mb-5">
              Navigate
            </h4>
            <ul className="space-y-2.5 list-none" role="list">
              {navItems.map((item) => (
                <li key={item.href}>
                  <FooterLink onClick={() => scrollToSection(item.href)}>
                    {item.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Facilities */}
          <div>
            <h4 className="font-display text-[13px] font-bold uppercase tracking-[0.1em] text-white mb-5">
              Facilities
            </h4>
            <ul className="space-y-2.5 list-none" role="list">
              {[
                "Strength Zone",
                "Cardio Zone",
                "Functional Training",
                "Sauna",
                "Ice Bath",
                "Lockers & Showers",
              ].map((item) => (
                <li key={item}>
                  <FooterLink onClick={() => scrollToSection("#facilities")}>
                    {item}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-[13px] font-bold uppercase tracking-[0.1em] text-white mb-5">
              Contact
            </h4>
            <ul className="space-y-2.5 list-none" role="list">
              <li>
                <FooterLink href={telLink(gymInfo.phone)}>{gymInfo.phone}</FooterLink>
              </li>
              <li>
                <FooterLink
                  href={whatsappLink(gymInfo.whatsapp)}
                  external
                >
                  WhatsApp Us
                </FooterLink>
              </li>
              <li>
                <FooterLink onClick={() => scrollToSection("#contact")}>
                  Send a Message
                </FooterLink>
              </li>
              <li>
                <span className="text-[14px] text-brand-muted">Near Karama Post Office, Dubai</span>
              </li>
              <li>
                <span className="text-[14px] text-brand-red font-medium">Open 24/7</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/7 pt-7 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[13px] text-brand-muted">
            © {year} Fitness District Gym. Karama, Dubai, UAE. All rights reserved.
          </p>
          <p className="text-[13px] text-brand-muted italic">{gymInfo.tagline}</p>
        </div>
      </div>
    </footer>
  );
}

/* ─── Inline SVG social icons ─── */
function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.093.541 4.063 1.49 5.78L.057 23.09a.75.75 0 0 0 .917.917l5.31-1.432A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.97 0-3.81-.538-5.38-1.472l-.386-.23-3.994 1.078 1.078-3.994-.23-.387A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}
