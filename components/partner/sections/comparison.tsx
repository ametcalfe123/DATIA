"use client";

import { motion } from "@/components/partner/motion";

const separateServices = [
  {
    title: "Public-record data",
    description: "Additional paid tools that surface institutional, procurement, budget, and activity signals, no contactable leads.",
  },
  {
    title: "Intent data",
    description: "Paid tools identifying accounts showing buying signals only, no engagement options.",
  },
  {
    title: "Traditional media",
    description: "Advertising and native content within individual industry channels, sold and reported on its own.",
  },
  {
    title: "Creative agency",
    description: "Social, programmatic, content, research and ad production, on a separate retainer.",
  },
];

export default function Comparison() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {separateServices.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            className="bg-white rounded-[16px] border border-[#E4E4E7] shadow-[0_10px_30px_-12px_rgba(0,0,0,0.35)] hover:-translate-y-1 p-8 transition-all duration-300"
          >
            <p className="text-[12px] font-semibold text-muted-foreground uppercase tracking-[0.12em] mb-4">
              {index + 1}
            </p>
            <h3 className="text-[22px] font-semibold tracking-[-0.02em] text-foreground leading-tight mb-4">
              {service.title}
            </h3>
            <p className="text-[17px] text-muted-foreground font-normal leading-[1.6]">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        className="mt-6 rounded-[16px] border border-primary shadow bg-primary p-8 md:p-10 text-white"
      >
        <h3 className="text-[22px] font-semibold tracking-[-0.02em] leading-tight mb-4">
          Simplify and Consolidate
        </h3>
        <p className="text-[17px] font-normal leading-[1.6] max-w-4xl">
          These platforms show you the signals. DATIA puts them to work by unifying intent, audience data, media, and lead generation in one sales-ready intelligence dashboard.
        </p>
      </motion.div>
    </div>
  );
}