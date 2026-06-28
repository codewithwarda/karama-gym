"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { navItems, gymInfo } from "@/data/gymData";
import { useScrolled } from "@/hooks/useScrolled";
import { useActiveSection } from "@/hooks/useActiveSection";
import { scrollToSection, telLink, cn } from "@/lib/utils";

export function Navbar() {
  const scrolled = useScrolled(40);
  const activeSection = useActiveSection();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = useCallback(
    (href: string) => {
      setMobileOpen(false);
      scrollToSection(href);
    },
    []
  );

  return (
    <>
      <header
        role="banner"
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300",
          scrolled
            ? "bg-brand-black/92 backdrop-blur-md border-b border-brand-border"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="max-w-[1240px] mx-auto px-6 w-full">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => handleNavClick("#home")}
              className="font-display text-[22px] font-black uppercase tracking-wider text-white leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red rounded-sm"
              aria-label="Fitness District — go to homepage"
            >
              Fitness<span className="text-brand-red">District</span>
            </button>

            {/* Desktop nav */}
            <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-8">
              <ul className="flex gap-8 list-none" role="list">
                {navItems.map((item) => {
                  const sectionId = item.href.replace("#", "");
                  const isActive = activeSection === sectionId;
                  return (
                    <li key={item.href}>
                      <button
                        onClick={() => handleNavClick(item.href)}
                        className={cn(
                          "font-display text-[13px] font-bold tracking-[0.1em] uppercase transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red rounded-sm px-1 py-0.5",
                          isActive ? "text-white" : "text-brand-muted hover:text-white"
                        )}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {item.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
              <div className="flex items-center gap-4 pl-4 border-l border-brand-border">
                <a
                  href={telLink(gymInfo.phone)}
                  className="text-[13px] text-brand-muted hover:text-white transition-colors duration-200 hidden xl:block"
                  aria-label={`Call us at ${gymInfo.phone}`}
                >
                  {gymInfo.phone}
                </a>
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="bg-brand-red text-white font-display text-[13px] font-bold tracking-wide uppercase px-5 py-2.5 rounded-sm hover:bg-brand-red-dark transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black"
                >
                  Join Now
                </button>
              </div>
            </nav>

            {/* Mobile controls */}
            <div className="lg:hidden flex items-center gap-3">
              <a
                href={telLink(gymInfo.phone)}
                className="text-brand-muted hover:text-white transition-colors p-1"
                aria-label="Call us"
              >
                <Phone size={18} />
              </a>
              <button
                onClick={() => setMobileOpen((v) => !v)}
                className="text-white p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red rounded-sm"
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-[72px] left-0 right-0 z-40 bg-brand-black/97 backdrop-blur-xl border-b border-brand-border lg:hidden"
          >
            <nav className="max-w-[1240px] mx-auto px-6 py-4">
              <ul className="list-none" role="list">
                {navItems.map((item) => {
                  const sectionId = item.href.replace("#", "");
                  const isActive = activeSection === sectionId;
                  return (
                    <li key={item.href}>
                      <button
                        onClick={() => handleNavClick(item.href)}
                        className={cn(
                          "w-full text-left font-display text-[22px] font-bold uppercase tracking-wider py-4 border-b border-brand-border transition-colors duration-200 focus-visible:outline-none",
                          isActive ? "text-brand-red" : "text-white"
                        )}
                      >
                        {item.label}
                      </button>
                    </li>
                  );
                })}
                <li className="pt-4 pb-2">
                  <a
                    href={telLink(gymInfo.phone)}
                    className="font-display text-[22px] font-bold uppercase tracking-wider text-brand-muted hover:text-white transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {gymInfo.phone}
                  </a>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
