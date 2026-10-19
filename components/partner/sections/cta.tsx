"use client";

import { Button } from "@/components/partner/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "@/components/partner/motion";
import { useState, type FormEvent } from "react";
import Team from "@/components/partner/sections/team";

const solutions = [
  "ABMxi",
  "Targeted Guaranteed Leads (TGL)",
  "Persona-Based Ad Targeting (PUSH)",
  "Content Studio",
  "Research",
  "Web Seminars",
  "BDR Services",
];

export default function Cta() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"sent" | "error" | null>(null);

  // Posts to this site's /api/contact route (app/api/contact/route.ts).
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setSubmitting(true);
    setStatus(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          email: data.get("email"),
          phone: data.get("phone"),
          company: data.get("company"),
          website: data.get("website"),
          solutions: data.getAll("solutions"),
          message: data.get("message"),
        }),
      });
      if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  const fieldClassName = "min-h-[48px] w-full rounded-[8px] border border-white/20 bg-white/5 px-4 py-3 text-[#E5E5E5] shadow placeholder:text-white/40 focus:ring-2 focus:ring-primary/30 focus:border-primary focus:outline-none transition-all";

  return (
    <section id="cta" className="relative py-24 bg-background dark overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={`/partner/images/cta-bg.jpg`} 
          alt="Geometric Background" 
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      <div className="container mx-auto max-w-[1152px] px-4 md:px-6 relative z-10">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="text-center">
              <h2 className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[32px] md:gap-x-5 md:text-[40px] font-semibold text-white mb-4 tracking-[-0.02em] leading-[1.1]">
                <span>Talk</span>
                <span>to</span>
                <span>the</span>
                <span className="inline-flex items-center">
                  <img
                    src={`/partner/images/datia-wordmark.png`}
                    alt="DATIA"
                    className="h-[0.82em] w-auto object-contain brightness-0 invert"
                  />
                </span>
                <span>team</span>
              </h2>
              <p className="text-[17px] text-[#E5E5E5] mb-12 font-normal leading-[1.6] max-w-2xl mx-auto">
                Tell us what you're working on and which services you're interested in.
              </p>
            </div>

            <div className="flex flex-col gap-12">
              <Team />

            <form
              className="mx-auto w-full max-w-[760px] rounded-[16px] border border-border/50 bg-background/50 shadow hover:shadow-md transition-all duration-300 p-3 sm:p-6 md:p-10 text-left backdrop-blur"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="text-[17px] font-normal text-[#E5E5E5]">
                  First name
                  <input name="firstName" type="text" autoComplete="given-name" required className={`${fieldClassName} mt-2`} />
                </label>
                <label className="text-[17px] font-normal text-[#E5E5E5]">
                  Last name
                  <input name="lastName" type="text" autoComplete="family-name" required className={`${fieldClassName} mt-2`} />
                </label>
                <label className="text-[17px] font-normal text-[#E5E5E5]">
                  Email
                  <input name="email" type="email" autoComplete="email" required className={`${fieldClassName} mt-2`} />
                </label>
                <label className="text-[17px] font-normal text-[#E5E5E5]">
                  Phone
                  <input name="phone" type="tel" autoComplete="tel" className={`${fieldClassName} mt-2`} />
                </label>
                <label className="text-[17px] font-normal text-[#E5E5E5]">
                  Company name
                  <input name="company" type="text" autoComplete="organization" required className={`${fieldClassName} mt-2`} />
                </label>
                <label className="text-[17px] font-normal text-[#E5E5E5]">
                  Website
                  <input name="website" type="url" autoComplete="url" className={`${fieldClassName} mt-2`} />
                </label>
              </div>

              <fieldset className="mt-10">
                <legend className="text-[17px] font-normal text-[#E5E5E5] mb-4">Solutions of Interest</legend>
                <div className="grid grid-cols-2 gap-x-1 gap-y-2 sm:gap-2 lg:grid-cols-3">
                  {solutions.map((solution) => (
                    <label key={solution} className="flex min-h-[44px] min-w-0 flex-col items-center gap-1.5 rounded-[8px] px-0.5 py-2 text-center text-[#E5E5E5] cursor-pointer hover:bg-white/10 transition-colors sm:flex-row sm:gap-2 sm:px-2 sm:text-left">
                      <input name="solutions" type="checkbox" value={solution} className="h-4 w-4 shrink-0 accent-primary rounded border-white/20 bg-white/5 sm:h-5 sm:w-5" />
                      <span className="min-w-0 text-[12px] font-normal leading-[1.3] tracking-[-0.01em] sm:text-[14px] sm:tracking-normal">{solution}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <label className="block mt-10 text-[17px] font-normal text-[#E5E5E5]">
                Message
                <textarea name="message" rows={5} className={`${fieldClassName} mt-2 resize-y`} />
              </label>

              <Button
                type="submit"
                size="lg"
                disabled={submitting}
                className="mt-10 bg-primary hover:bg-primary/90 text-white px-10 shadow-lg shadow-primary/35 hover:shadow-xl hover:shadow-primary/45 hover:-translate-y-1 ring-1 ring-white/20 transition-all duration-300 flex items-center justify-center gap-2 group w-full sm:w-auto"
              >
                Partner with Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              {status && (
                <p role="status" className={`mt-4 text-[15px] ${status === "sent" ? "text-white" : "text-primary"}`}>
                  {status === "sent"
                    ? "Thanks — we'll be in touch soon."
                    : "Something went wrong and your message wasn't sent. Please try again."}
                </p>
              )}
            </form>
            </div>

        </motion.div>
      </div>
    </section>
  );
}
