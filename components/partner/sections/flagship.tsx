"use client";

import { useState } from "react";
import { ArrowRight, CircleCheck, Star } from "lucide-react";
import { Button } from "@/components/partner/ui/button";
import Comparison from "@/components/partner/sections/comparison";
import Process from "@/components/partner/sections/process";

const abmxiDetails = {
  whatYouGet: ["Turnkey campaign creative development", "Persona + geo-targeting", "LinkedIn + Facebook deployment", "Brand-safe website deployment", "Buyer intelligence + signal stacking", "Targeted impressions", "Guaranteed persona-targeted leads", "Lead scoring + engagement tracking", "Sales-ready Intelligence Dashboard"],
  howItWorks: ["Buyer Intel", "Reading behavior", "RFPs and bids", "Grants and bonds", "Strategic initiatives", "Leadership changes", "Industry news"],
  whyItMatters: ["Engagement context", "Account signals", "Lead scoring", "SQLs distinguished from MQLs"],
};

export default function Flagship() {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = "service-details-abmi";

  return (
    <section id="flagship" className="bg-[#F5F5F5] scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6 max-w-[1152px] py-24">
        <div className="text-center mb-12">
          <h2 className="text-[32px] md:text-[40px] font-semibold text-foreground mb-4 tracking-[-0.02em] leading-[1.1]">
            ABMxi — Account-Based Marketing Intelligence
          </h2>
          <p className="text-[17px] text-[#3F3F46] font-normal leading-[1.6] mb-4">
            A content journey from insight to impact. Not simply an intent-driven lead program.
          </p>
          <p className="text-[17px] text-[#3F3F46] font-normal max-w-3xl mx-auto leading-[1.6]">
            Lead intelligence drives performance, and most marketers rely on four separate providers to get the full picture.
          </p>
          <p className="mt-4 max-w-4xl mx-auto text-[17px] font-normal leading-[1.6] text-[#3F3F46]">
            Buyer intelligence sharpens targeting, your exact personas are warmed across LinkedIn, Facebook and brand-safe websites, then your thought leadership goes out by targeted email — because decision-makers engage with content several times before they're ready to talk to Sales.
          </p>
        </div>

        <div className="mx-auto mb-8 w-full max-w-[700px]">
          <img
            src={`/partner/images/section-1a-transparent.png`}
            alt="DATIA simplifies and consolidates intent signals, traditional media, government data, and agency services"
            className="block h-auto w-full"
          />
        </div>

        <Comparison />

        <div className="mt-12 rounded-[16px] border border-[#e4e4e7] bg-white p-6 md:p-10 shadow">
          <Button
            variant="outline"
            data-testid="button-toggle-abmxi-details"
            className="bg-transparent border-[#d4d4d8] text-[#18181b] hover:bg-zinc-100 hover:text-[#18181b] transition-all group/btn flex items-center gap-2"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls={panelId}
          >
            {isOpen ? "Hide details" : "How ABMxi works"}
            <ArrowRight className={`w-4 h-4 transition-transform ${isOpen ? "-rotate-90" : "group-hover/btn:translate-x-1"}`} />
          </Button>

          <div
            id={panelId}
            aria-hidden={!isOpen}
            className={`overflow-hidden transition-[max-height,opacity,margin] duration-300 ease-out ${
              isOpen ? "max-h-[80rem] opacity-100 mt-6" : "max-h-0 opacity-0 mt-0"
            }`}
          >
            <div className="border-t border-[#e4e4e7] pt-6 text-[#18181b]">
              <p className="mb-5 font-semibold text-[17px]">How ABMxi works</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#3F3F46]">What you get</p>
                  <ul className="space-y-3">
                    {abmxiDetails.whatYouGet.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CircleCheck className="w-4 h-4 text-primary shrink-0 mt-1 opacity-80" />
                        <span className="text-[17px] font-normal text-[#3F3F46] leading-[1.6]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#3F3F46]">Signals we track</p>
                  <ul className="space-y-3">
                    {abmxiDetails.howItWorks.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <div className="w-4 h-4 flex items-center justify-center shrink-0 mt-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary opacity-80" />
                        </div>
                        <span className="text-[17px] font-normal text-[#3F3F46] leading-[1.6]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#3F3F46]">What Sales gets</p>
                  <ul className="space-y-3">
                    {abmxiDetails.whyItMatters.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-primary shrink-0 mt-1 opacity-80" />
                        <span className="text-[17px] font-normal text-[#3F3F46] leading-[1.6]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Process />
    </section>
  );
}