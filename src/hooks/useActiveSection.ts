"use client";

import { useState, useEffect, useRef } from "react";

const SECTION_IDS = ["home", "facilities", "membership", "trainers", "gallery", "contact"];

export function useActiveSection(): string {
  const [activeSection, setActiveSection] = useState<string>("home");
  const observersRef = useRef<IntersectionObserver[]>([]);

  useEffect(() => {
    // Clean up previous observers
    observersRef.current.forEach((obs) => obs.disconnect());
    observersRef.current = [];

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: "-40% 0px -55% 0px",
      threshold: 0,
    });

    observersRef.current.push(observer);

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observersRef.current.forEach((obs) => obs.disconnect());
    };
  }, []);

  return activeSection;
}
