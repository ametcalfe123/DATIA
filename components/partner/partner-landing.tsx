"use client";

import { useEffect } from "react";
import Navbar from "@/components/partner/layout/navbar";
import Footer from "@/components/partner/layout/footer";
import Hero from "@/components/partner/sections/hero";
import Flagship from "@/components/partner/sections/flagship";
import Services from "@/components/partner/sections/services";
import About from "@/components/partner/sections/about";
import Testimonials from "@/components/partner/sections/testimonials";
import Cta from "@/components/partner/sections/cta";

export default function PartnerLanding() {
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (id) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="partner-lp flex flex-col min-h-screen bg-background w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Flagship />
        <Services />
        <Testimonials />
        <About />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
