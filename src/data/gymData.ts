import type {
  GymInfo,
  NavItem,
  Facility,
  MembershipPlan,
  Trainer,
  Testimonial,
  GalleryImage,
  Stat,
  WhyCard,
} from "@/types";

export const gymInfo: GymInfo = {
  name: "Fitness District",
  tagline: "Train Hard. Recover Smarter.",
  description:
    "Karama's biggest warehouse gym with state-of-the-art equipment and recovery facilities.",
  phone: "+971504586689",
  whatsapp: "971504586689",
  email: "info@fitnessdistrict.ae",
  address: "Near Karama Post Office, Karama, Dubai, UAE",
  addressShort: "Karama, Dubai",
  hours: "5AM to 2AM — Every Day",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.7!2d55.3047!3d25.2308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEzJzUwLjkiTiA1NcKwMTgnMTcuMCJF!5e0!3m2!1sen!2sae!4v1234567890",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Facilities", href: "#facilities" },
  { label: "Membership", href: "#membership" },
  { label: "Trainers", href: "#trainers" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const heroStats: Stat[] = [
  { value: "100", suffix: "+", label: "Premium Machines" },
  //
  { value: "2", label: "Free PT Sessions" },
  { value: "∞", label: "Unlimited Access" },
];

export const whyCards: WhyCard[] = [
  {
    id: "anytime",
    title: "Train Anytime",
    description:
      "No slot bookings, no wait times. The gym is yours at 3am or 3pm — your schedule, your rules. Unlimited access, always.",
    iconName: "Clock",
  },
  {
    id: "equipment",
    title: "Premium Equipment",
    description:
      "Over 100 world-class machines and training stations — strength, cardio, and functional zones all under one massive warehouse roof.",
    iconName: "Dumbbell",
  },
  {
    id: "recovery",
    title: "Recovery Facilities",
    description:
      "Train hard and recover smarter. Dedicated sauna and ice bath areas help you bounce back faster and train at maximum intensity.",
    iconName: "Shield",
  },
  {
    id: "progress",
    title: "Track Real Progress",
    description:
      "Advanced BCA body composition analysis gives you data-driven insights — measure fat, muscle, and metabolic health with precision.",
    iconName: "BarChart3",
  },
];

export const facilities: Facility[] = [
  {
    id: "strength",
    name: "Strength Zone",
    description: "Free weights, barbells, benches & cable machines",
    icon: "Dumbbell",
    imageUrl:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=900&q=85&auto=format&fit=crop",
    wide: true,
  },
  {
    id: "cardio",
    name: "Cardio Zone",
    description: "Treadmills, bikes, rowers & steppers",
    icon: "TrendingUp",
    imageUrl:
      "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=600&q=85&auto=format&fit=crop",
  },
  {
    id: "functional",
    name: "Functional Training",
    description: "Kettlebells, battle ropes & plyometrics",
    icon: "Zap",
    imageUrl:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=85&auto=format&fit=crop",
  },
  {
    id: "sauna",
    name: "Sauna",
    description: "Premium dry sauna for deep recovery",
    icon: "Flame",
    imageUrl:
      "https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?w=600&q=85&auto=format&fit=crop",
  },
  {
    id: "icebath",
    name: "Ice Bath",
    description: "Cold plunge for elite recovery",
    icon: "Snowflake",
    imageUrl:
      "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?w=600&q=85&auto=format&fit=crop",
  },
  {
    id: "lockers",
    name: "Lockers & Showers",
    description: "Secure spacious lockers & premium showers",
    icon: "LayoutGrid",
    imageUrl:
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&q=85&auto=format&fit=crop",
  },
];

export const membershipPlan: MembershipPlan = {
  id: "full-access",
  badge: "All-Access Pass",
  title: "Full Membership",
  tagline: "Contact us for current rates — flexible options available",
  features: [
    "24/7 Access — no slot bookings",
    "100+ premium machines",
    "Sauna & ice bath recovery zones",
    "2 complimentary PT sessions",
    "BCA body composition analysis",
    "Modern lockers & premium showers",
    "Full facility access",
    "No hidden fees",
  ],
  cta: "Get Membership Details",
  highlighted: true,
};

export const membershipBenefits: string[] = [
  "24/7 Access",
  "Full Facility Access",
  "Sauna Access",
  "Ice Bath Access",
  "Locker Facilities",
  "Premium Showers",
  "Body Composition Tracking",
  "2 Personal Training Sessions",
];

export const trainers: Trainer[] = [
  {
    id: "ahmed",
    name: "Ahmed Al Rashid",
    specialty: "Strength & Powerlifting",
    bio: "7 years coaching athletes from novice to competition level. Specialises in progressive overload and raw strength development.",
    imageUrl:
      "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?w=400&q=80&auto=format&fit=crop",
    certifications: ["NSCA-CPT", "Powerlifting Coach"],
  },
  {
    id: "sara",
    name: "Sara Mansour",
    specialty: "Functional Fitness & HIIT",
    bio: "Former competitive athlete with a passion for high-intensity training and body recomposition. NASM certified.",
    imageUrl:
      "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=400&q=80&auto=format&fit=crop",
    certifications: ["NASM-CPT", "Kettlebell Specialist"],
  },
  {
    id: "marcus",
    name: "Marcus Okafor",
    specialty: "Body Transformation",
    bio: "Precision nutrition and physique coaching. Helped 200+ clients achieve body composition goals through science-based programming.",
    imageUrl:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80&auto=format&fit=crop",
    certifications: ["ACE-CPT", "Precision Nutrition L2"],
  },
  {
    id: "layla",
    name: "Layla Hassan",
    specialty: "Recovery & Mobility",
    bio: "Certified recovery specialist integrating sauna, ice bath protocols, and mobility work for peak athletic performance.",
    imageUrl:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80&auto=format&fit=crop",
    certifications: ["CSCS", "FRC Mobility Specialist"],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "khalid",
    name: "Khalid A.",
    initials: "KA",
    avatarColor: "#D72638",
    rating: 5,
    text: "The 24/7 access changed everything for me. I work late shifts and being able to train at midnight without any slot restrictions is incredible.",
    result: "–12 kg in 4 months",
  },
  {
    id: "nour",
    name: "Nour F.",
    initials: "NF",
    avatarColor: "#1a5aab",
    rating: 5,
    text: "The sauna and ice bath combination is a game changer. I recover faster, I sleep better, and my performance in the gym has gone through the roof.",
    result: "+8 kg muscle in 6 months",
  },
  {
    id: "rania",
    name: "Rania M.",
    initials: "RM",
    avatarColor: "#217a44",
    rating: 5,
    text: "The BCA machine gave me actual numbers for the first time. I finally understood my body. Trainers here are world-class — the 2 free sessions got me hooked.",
    result: "Body fat –18% in 5 months",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80&auto=format&fit=crop",
    alt: "Fitness District gym floor with equipment",
    span: "tall",
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500&q=80&auto=format&fit=crop",
    alt: "Strength training area",
    span: "normal",
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&q=80&auto=format&fit=crop",
    alt: "Athlete training in warehouse gym",
    span: "normal",
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=900&q=80&auto=format&fit=crop",
    alt: "Cardio equipment row",
    span: "wide",
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=500&q=80&auto=format&fit=crop",
    alt: "Weightlifting session",
    span: "normal",
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=500&q=80&auto=format&fit=crop",
    alt: "Modern gym locker room",
    span: "normal",
  },
  {
    id: "g7",
    src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&q=80&auto=format&fit=crop",
    alt: "Functional training zone",
    span: "normal",
  },
];
