"use client";

import { motion } from "@/components/partner/motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-background dark text-white overflow-hidden relative border-y border-border/20">
      {/* Abstract geometric background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-[1152px]">
        <div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-center"
          >
            <h2 className="text-[32px] md:text-[40px] font-semibold mb-4 tracking-[-0.02em] leading-[1.1]">
              Decidedly Different
            </h2>

            <div className="max-w-[800px] mx-auto space-y-6 text-center text-[17px] font-normal leading-[1.6] text-[#E5E5E5]">
              <p>Buyers now do most of their research independently, often narrowing their shortlist long before they ever speak with a salesperson.</p>
              <p>DATIA combines industry-specialized targeting, thought leadership activation, and buyer intelligence to help partners build familiarity with decision-makers before Sales outreach, and prioritize accounts based on cumulative engagement and buying signals.</p>
              <p>DATIA keeps your brand in front of the 95% of target prospects who aren't ready to buy today, but will be tomorrow, next month, or next year.</p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
