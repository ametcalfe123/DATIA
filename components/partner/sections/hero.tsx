"use client";

import { Button } from "@/components/partner/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "@/components/partner/motion";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="overflow-hidden bg-background pt-[80px]">
      <div className="bg-background dark border-b-[4px] border-primary py-24">
        <div className="container mx-auto max-w-[1152px] px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="mx-auto text-[36px] md:text-[clamp(36px,4vw,56px)] font-semibold tracking-[-0.02em] text-white mb-4 leading-[1.1]">
              <span className="block md:whitespace-nowrap">From Impression to Appointment.</span>
              <span className="block md:whitespace-nowrap">A Content-Driven, Intent Strategy</span>
            </h1>

            <p className="max-w-3xl lg:max-w-5xl mx-auto text-[17px] text-[#E5E5E5] mb-12 leading-[1.6] font-normal">
              DATIA brings buyer identification, cross-channel engagement, and intent intelligence together in one place, turning insights into action and action into qualified leads.
            </p>

            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-center gap-4">
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <Button
                  size="lg"
                  className="w-full md:w-auto md:min-w-[280px] bg-primary hover:bg-primary/90 text-white px-[32px] shadow-lg shadow-primary/35 hover:shadow-xl hover:shadow-primary/45 hover:-translate-y-1 ring-1 ring-white/20 transition-all duration-300 flex items-center justify-center gap-2 group"
                  onClick={() => scrollTo('#cta')}
                >
                  Partner with Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
