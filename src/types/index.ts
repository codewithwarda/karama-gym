export interface GymInfo {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  addressShort: string;
  hours: string;
  mapEmbedUrl: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Facility {
  id: string;
  name: string;
  description: string;
  icon: string;
  imageUrl: string;
  wide?: boolean;
}

export interface MembershipPlan {
  id: string;
  badge: string;
  title: string;
  tagline: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export interface Trainer {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  imageUrl: string;
  certifications?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  initials: string;
  avatarColor: string;
  rating: number;
  text: string;
  result: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  span?: "wide" | "tall" | "normal";
}

export interface Stat {
  value: string;
  suffix?: string;
  label: string;
}

export interface WhyCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
