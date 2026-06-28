/**
 * Smooth scrolls to a section by id, offsetting for the sticky navbar.
 */
export function scrollToSection(id: string): void {
  const el = document.getElementById(id.replace("#", ""));
  if (!el) return;
  const navHeight = 72;
  const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
  window.scrollTo({ top, behavior: "smooth" });
}

/**
 * Merges class names (lightweight alternative to clsx).
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Builds a WhatsApp deep link with optional pre-filled message.
 */
export function whatsappLink(phone: string, message?: string): string {
  const encoded = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${phone}${encoded}`;
}

/**
 * Builds a tel: link from a phone number string.
 */
export function telLink(phone: string): string {
  return `tel:${phone.replace(/\s/g, "")}`;
}
