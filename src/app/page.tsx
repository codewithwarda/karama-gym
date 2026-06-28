import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/hero/Hero";
import { Why } from "@/components/why/Why";
import { Facilities } from "@/components/facilities/Facilities";
import { Membership } from "@/components/membership/Membership";
import { Trainers } from "@/components/trainers/Trainers";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { Gallery } from "@/components/gallery/Gallery";
import { CtaBand } from "@/components/cta/CtaBand";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Why />
        <Facilities />
        <Membership />
        <Trainers />
        <Testimonials />
        <Gallery />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
