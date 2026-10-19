"use client";

import { motion } from "@/components/partner/motion";
import { ArrowRight, Users, Zap, PenTool, Search, Video, PhoneCall, CircleCheck, Star } from "lucide-react";
import { Button } from "@/components/partner/ui/button";
import { useState } from "react";

const services = [
  {
    id: "tgl",
    label: "TGL",
    title: "Put qualified prospects into your pipeline",
    cta: "See TGL in action",
    fullName: "Targeted Guaranteed Leads",
    description: "Prospect identification and intent analysis for fueling the sales pipeline with high-converting, top-of-funnel leads.",
    details: {
      whatYouGet: ["Targeted audience by title, geo, and size", "Thought-leadership content", "Two-click access to gated content", "Easy-to-upload leads"],
      howItWorks: ["Define audience", "Set lead goal", "Approve email", "Get weekly leads"],
      whyItMatters: ["Guaranteed leads", "Boost brand authority", "Improve pipeline", "Lead insights"],
    },
    icon: Users,
  },
  {
    id: "push",
    label: "PUSH",
    title: "Reach ideal buyers across the open web",
    cta: "Explore PUSH targeting",
    fullName: "Persona-Based Ad Targeting",
    description: "Strategic advertising campaigns tailored to your ideal buyers for maximum engagement and conversion across the open web.",
    details: {
      whatYouGet: ["Persona development", "Cross-platform ad management", "Dynamic creative optimization", "Advanced audience segmentation"],
      howItWorks: ["Define audience", "Creative assets", "Launch and optimize", "Analyze and scale"],
      whyItMatters: ["Engage ideal prospects", "Scalable and cost-effective", "Cookieless targeting", "Drive traffic to your site"],
    },
    icon: Zap,
  },
  {
    id: "content",
    label: "Content Studio",
    title: "Give buyers content that moves them forward",
    cta: "Inside Content Studio",
    fullName: "Content Creation & Strategy",
    description: "Custom content creation, tailored to specific goals and objectives. From whitepapers to interactive media that drives action.",
    details: {
      whatYouGet: ["Content review and strategy development", "Tailored content creation", "Multi-format content production", "Brand voice and messaging alignment"],
      howItWorks: ["Content audit and strategy development", "Content creation and optimization", "Publishing and distribution", "Editorial performance monitoring and refinement"],
      whyItMatters: ["Higher engagement rates", "Improved brand consistency", "Enhanced thought leadership positioning", "Development of case studies and thought leadership Q&As"],
    },
    icon: PenTool,
  },
  {
    id: "research",
    label: "Research",
    title: "Turn expertise into market authority",
    cta: "Our research process",
    fullName: "Market Research & Analysis",
    description: "Showcase industry expertise and product innovation with proprietary research that positions your brand as a thought leader.",
    details: {
      whatYouGet: ["Market landscape analysis", "Competitive intelligence gathering", "Customer persona development", "Industry trend identification"],
      howItWorks: ["Research objectives definition", "Data collection methodology design", "Primary and secondary research execution", "Analysis and insight generation", "Research report development"],
      whyItMatters: ["Data-driven decision making", "Competitive advantage insights", "Improved market positioning", "Enhanced customer understanding", "Showcase industry expertise"],
    },
    icon: Search,
  },
  {
    id: "web-seminars",
    label: "WEB SEMINARS",
    title: "Elevate your thought leadership position",
    cta: "Why Web Seminars",
    fullName: "On-Demand Web Seminar + Lead Gen",
    description: "A high-value video asset that builds credibility, reaches targeted decision-makers, and generates leads.",
    details: {
      whatYouGet: ["Strategy and format development", "Editorial review of content and speakers", "Turnkey panel or presentation-style production", "TGL promotion for guaranteed leads"],
      howItWorks: ["Speaker and content review", "Web seminar recording and production", "Marketing content creation and promotion", "Weekly lead generation (See TGL)"],
      whyItMatters: ["Extend the life of your content", "Build thought leadership and credibility", "Ongoing engagement", "Lead generation"],
    },
    icon: Video,
  },
  {
    id: "bdr-services",
    label: "BDR SERVICES",
    title: "We help create opportunities for your sales team",
    cta: "See our service",
    fullName: "Business Development Representative",
    description: "Turning marketing-generated interest into qualified sales conversations.",
    details: {
      whatYouGet: ["Personalized prospect outreach", "Lead engagement", "Lead qualification", "Buying-signal identification", "Consistent follow-up"],
      howItWorks: ["Goals and campaign discovery", "Script and messaging creation", "Coordinated phone and email outreach", "Prospect engagement and follow-up", "MQL nurture and qualification"],
      whyItMatters: ["Turn MQLs into meaningful conversations", "Increase engagement with high-value prospects", "Extend the value of your lead-generation campaigns", "Keep prospects moving toward sales readiness", "Give your sales team more qualified opportunities"],
    },
    icon: PhoneCall,
  },
];

const markets = [
  { name: "Education", segments: ["K-12", "Higher Ed"] },
  { name: "Government", segments: ["State and Local", "Federal"] },
  { name: "HR", segments: ["Human Resources", "Employee Benefits"] },
  { name: "Financial Services", segments: ["Investment Advisor", "Banking", "Insurance"] },
  { name: "Technology", segments: ["Identity", "Enterprise", "Cybersecurity"] },
  { name: "Retail", segments: ["Technology", "C-Suite and Management"] },
  { name: "Healthcare", segments: ["Technology", "C-Suite and Management"] },
];

type Service = (typeof services)[number];

function ServiceCard({
  service,
  index,
  isOpen,
  onToggle,
}: {
  service: Service;
  index: number;
  isOpen: boolean;
  onToggle: (id: string) => void;
}) {
  const panelId = `service-details-${service.id}`;
  const detailLabels = ["What you get", "How it works", "Why it matters"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
      className="bg-white rounded-[16px] border border-[#e4e4e7] shadow-[0_10px_30px_-12px_rgba(0,0,0,0.35)] hover:-translate-y-1 group transition-all duration-300 flex flex-col relative p-8 overflow-hidden"
    >
      <div className="w-16 h-16 rounded-full bg-zinc-100 flex items-center justify-center text-primary mb-6">
        <service.icon className="w-7 h-7" />
      </div>

      <p className="text-[12px] font-semibold text-[#3F3F46] mb-3 uppercase tracking-[0.12em]">{service.label}</p>
      <h3 className="text-[22px] font-semibold tracking-[-0.02em] text-[#18181b] mb-1 leading-tight">{service.title}</h3>
      <p className="text-sm font-semibold text-primary mb-4">{service.fullName}</p>

      <p className="text-[#3F3F46] mb-8 flex-1 leading-[1.6] font-normal text-[17px]">
        {service.description}
      </p>

      <div
        id={panelId}
        aria-hidden={!isOpen}
        className={`overflow-hidden transition-[max-height,opacity,margin] duration-300 ease-out ${
          isOpen ? "max-h-[80rem] opacity-100 mb-6" : "max-h-0 opacity-0 mb-0"
        }`}
      >
        <div className="border-t border-[#e4e4e7] pt-6 text-[#18181b]">
          <p className="mb-5 font-semibold text-[17px]">
            {service.cta}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#3F3F46]">{detailLabels[0]}</p>
              <ul className="space-y-3">
                {service.details.whatYouGet.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CircleCheck className="w-4 h-4 text-primary shrink-0 mt-1 opacity-80" />
                    <span className="text-[17px] font-normal text-[#3F3F46] leading-[1.6]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#3F3F46]">{detailLabels[1]}</p>
              <ul className="space-y-3">
                {service.details.howItWorks.map((item) => (
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
              <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#3F3F46]">{detailLabels[2]}</p>
              <ul className="space-y-3">
                {service.details.whyItMatters.map((item) => (
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

      <Button
        variant="outline"
        className="self-start mt-auto bg-transparent border-[#d4d4d8] text-[#18181b] hover:bg-zinc-100 hover:text-[#18181b] transition-all group/btn flex items-center gap-2"
        onClick={() => onToggle(service.id)}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        {isOpen ? "Hide details" : service.cta}
        <ArrowRight className={`w-4 h-4 transition-transform ${isOpen ? "-rotate-90" : "group-hover/btn:translate-x-1"}`} />
      </Button>
    </motion.div>
  );
}

export default function Services() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="services" className="pt-24 bg-background dark">
      <div className="container mx-auto max-w-[1152px] px-4 md:px-6">
        
        <div id="marketing-services" className="text-center max-w-3xl mx-auto mb-12 scroll-mt-24">
          <h2 className="text-[32px] md:text-[40px] font-semibold text-white mb-4 tracking-[-0.02em] leading-[1.1]">
            Demand Gen and Marketing Services
          </h2>
          <p className="text-[17px] text-[#E5E5E5] font-normal leading-[1.6]">
            Flexible solutions to fuel your buyer engagement strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start relative z-10">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              isOpen={openId === service.id}
              onToggle={(id) => setOpenId((current) => current === id ? null : id)}
            />
          ))}
        </div>

        <div className="mt-16 border-t border-[rgba(255,255,255,0.15)] pt-16 pb-16">
          <p className="mb-6 text-center text-[12px] font-semibold text-[#E5E5E5] uppercase tracking-[0.12em]">Markets we serve</p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-8">
            {markets.map((market, index) => (
              <div
                key={market.name}
                className={`rounded-[12px] border border-[rgba(255,255,255,0.15)] bg-transparent p-6 text-center lg:col-span-2 ${index === 4 ? "lg:col-start-2" : ""} ${index === markets.length - 1 ? "md:col-span-2 md:w-[calc(50%-12px)] md:justify-self-center lg:w-full" : ""}`}
              >
                <p className="mb-1 text-[17px] font-semibold text-white">{market.name}</p>
                <p className="text-[14px] font-normal leading-[1.6] text-[#C4C4C4]">
                  {market.segments.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
