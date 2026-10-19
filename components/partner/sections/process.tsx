"use client";

import { motion } from "@/components/partner/motion";
import { Database, Megaphone, Mail, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Establish",
    subtitle: "Intelligence + ABM foundation",
    description: "Buyer intelligence sharpens the target list: exact personas, districts and geographies, with the signals behind each one.",
    icon: Database,
  },
  {
    number: "02",
    title: "Warm",
    subtitle: "Build familiarity through content",
    description: "Your personas see your brand on LinkedIn, Facebook and brand-safe websites before anyone asks them for anything.",
    icon: Megaphone,
  },
  {
    number: "03",
    title: "Generate",
    subtitle: "Create initial contactable pipeline",
    description: "Thought leadership goes out by targeted email. Every download comes back as a guaranteed, persona-targeted lead with full contact details.",
    icon: Mail,
  },
  {
    number: "04",
    title: "Scale",
    subtitle: "Add volume when needed",
    description: "Growth packs add leads and impressions on demand for priority markets, campaigns or buying windows.",
    icon: TrendingUp,
  }
];

export default function Process() {
  return (
    <div id="process" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-[1152px]">
        
        <div className="flex flex-col items-center text-center mb-12">
          <div className="max-w-2xl">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-foreground mb-4 tracking-[-0.02em] leading-[1.1]">
              How We Fuel Growth
            </h2>
            <p className="text-[17px] text-muted-foreground font-normal leading-[1.6]">
              A turnkey, multi-touch ABM experience, not simply an intent-driven lead program.
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[50%] left-0 w-full h-[1px] bg-border/40 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                className="bg-white rounded-[16px] border border-border/50 shadow hover:shadow-md hover:-translate-y-1 p-8 lg:p-10 transition-all duration-300 flex flex-col items-start relative group"
              >
                <div className="text-[64px] font-sans text-muted/50 mb-4 absolute top-4 right-6 group-hover:text-primary/10 transition-colors leading-none">
                  {step.number}
                </div>
                
                <div className="w-16 h-16 rounded-full bg-muted text-primary flex items-center justify-center mb-8">
                  <step.icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-[22px] font-semibold tracking-[-0.02em] text-foreground mb-2 leading-tight">{step.title}</h3>
                <p className="text-primary text-[14px] font-semibold leading-snug mb-4">
                  {step.subtitle}
                </p>
                <p className="text-muted-foreground text-[17px] leading-[1.6] font-normal relative z-10">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
          <p className="mt-12 text-center text-[17px] font-normal text-[#3F3F46] leading-[1.6] max-w-4xl mx-auto">
            Engagement and intelligence then help Sales know who to prioritize, why now, and what to discuss.
          </p>
        </div>
      </div>
    </div>
  );
}
