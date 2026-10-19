"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import PersonBioDialog, { type PersonBio } from "@/components/partner/sections/person-bio-dialog";

const advisors: PersonBio[] = [
  {
    name: "Jason McKenna",
    role: "VP of Global Educational Strategy, VEX Robotics",
    photo: "jason-mckenna.jpg",
    linkedin: "https://www.linkedin.com/in/jason-mckenna/",
    bio: 'Jason McKenna is V.P. of Global Educational Strategy for VEX Robotics and author of "What STEM Can Do for Your Classroom: Improving Student Problem Solving, Collaboration, and Engagement, Grade K-6." His work specializes in curriculum development, global educational strategy, and engaging with educators and policymakers worldwide.',
  },
  {
    name: "Dr. Robert Avossa",
    role: "Former Superintendent, Palm Beach County Schools",
    photo: "robert-avossa.jpg",
    linkedin: "https://www.linkedin.com/in/avossa/",
    bio: "Dr. Avossa spent 25 years as a teacher, principal, executive leader, and school superintendent in Florida, North Carolina, and Georgia. Robert ended his career in public education as school superintendent of Palm Beach County, the 10th largest district in the country with a student enrollment of nearly 200,000 students. Dr. Avossa is a Broad Academy Fellow and a member of Chiefs for Change, as well as part of the faculty of The Forum for Educational Leadership. He speaks nationally on education issues.",
  },
  {
    name: "Randall Dennis",
    role: "Market Leader, Convergint",
    photo: "randall-dennis.jpg",
    linkedin: "https://www.linkedin.com/in/johnrandalldennis/",
    bio: "Randall Dennis is a market leader for a security technology integrator ranked as the world's top-ranked security integrator for seven consecutive years. With a proven track record in executive leadership, he previously held c-suite roles at three edtech firms, two of which earned a spot on the Inc. 500 list. In addition to his role at Convergint, Randall is a trusted consultant, passionate advocate, and sought-after public speaker on school safety and security.",
  },
  {
    name: "Kathy Hurley",
    role: "Principal Consultant, Kathy Hurley Consulting",
    photo: "kathy-hurley.jpg",
    linkedin: "https://www.linkedin.com/in/kathy-hurley/",
    bio: "Kathleen Hurley is a former senior executive for numerous educational publishing and technology companies, including IBM and Pearson. Currently, she is a senior advisor to edtech companies, education associations, and school superintendent networks. She also serves on the board of directors for several non-profit and for-profit organizations. After retiring from Pearson, she was selected as a Fellow of the Advanced Leadership Initiative at Harvard University, and she co-founded Girls Thinking Global, which has since merged with the Women's Education Project.",
  },
  {
    name: "Terry Arsenault",
    role: "Founder, Vyne",
    photo: "terry-arsenault.jpg",
    linkedin: "https://www.linkedin.com/in/terry-arsenault-89785412/",
    bio: "Terry Arsenault is a seasoned technology leader with over 20 years of experience, specializing in business intelligence and data strategy. Throughout his career, Terry has helped organizations harness the power of data to drive smarter decisions and long-term growth. As the founder of a digital agency and multiple ecommerce brands, he combines deep technical expertise with hands-on entrepreneurial experience. Today, Terry focuses on helping businesses grow through data, technology, and a sharp understanding of digital commerce.",
  },
  {
    name: "Tom Fowler",
    role: "B2B media publisher since 1978",
    photo: "tom-fowler.jpg",
    linkedin: "https://www.linkedin.com/in/tom-fowler-506bb228/",
    bio: "Tom Fowler started his media career in 1978 as City Editor and then Managing Editor at the Oakland Press before moving to the business side as Sales and Marketing Manager. In 1984 he moved into B-to-B media as Circulation Manager for Fairchild Publications, and went on to become Publisher and Group Publisher at Thompson Media, Cahners Travel Group, Pennwell, Summit Business Media and the International Media News Group. His experience spans acquisitions, international event management, turnaround strategies and new business development, leading publishing businesses from print to digital to data-driven media. He holds a BA from Yale and an MBA from Harvard Business School.",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [selected, setSelected] = useState<PersonBio | null>(null);
  const opener = useRef<HTMLButtonElement | null>(null);

  return (
    <footer className="bg-[#141414] dark text-white py-24 border-t border-border/20 relative z-10">
      <div className="container mx-auto px-4 md:px-6 max-w-[1152px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/partner" className="inline-flex min-h-[44px] items-center mb-6">
              <img 
                src={`/partner/images/datia-ai-logo.png`} 
                alt="DATIA AI"
                className="h-10 object-contain brightness-0 invert" 
              />
            </Link>
            <p className="text-[#E5E5E5] text-[12px] leading-relaxed mb-6 font-semibold uppercase tracking-[0.12em]">
              Insights born from data.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[22px] tracking-[-0.02em] mb-6 text-white">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="inline-flex min-h-[44px] items-center text-[#E5E5E5] hover:text-primary transition-colors text-[17px] font-normal">Account-Based Marketing Intelligence (ABMxi)</a></li>
              <li><a href="#services" className="inline-flex min-h-[44px] items-center text-[#E5E5E5] hover:text-primary transition-colors text-[17px] font-normal">Targeted Guaranteed Leads (TGL)</a></li>
              <li><a href="#services" className="inline-flex min-h-[44px] items-center text-[#E5E5E5] hover:text-primary transition-colors text-[17px] font-normal">Persona-Based Ad Targeting (PUSH)</a></li>
              <li><a href="#services" className="inline-flex min-h-[44px] items-center text-[#E5E5E5] hover:text-primary transition-colors text-[17px] font-normal">Content Studio</a></li>
              <li><a href="#services" className="inline-flex min-h-[44px] items-center text-[#E5E5E5] hover:text-primary transition-colors text-[17px] font-normal">Research</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[22px] tracking-[-0.02em] mb-6 text-white">Company</h4>
            <ul className="space-y-2">
              <li><a href="#flagship" className="inline-flex min-h-[44px] items-center text-[#E5E5E5] hover:text-primary transition-colors text-[17px] font-normal">Flagship Offering</a></li>
              <li><a href="#marketing-services" className="inline-flex min-h-[44px] items-center text-[#E5E5E5] hover:text-primary transition-colors text-[17px] font-normal">Marketing Services</a></li>
              <li><a href="#testimonials" className="inline-flex min-h-[44px] items-center text-[#E5E5E5] hover:text-primary transition-colors text-[17px] font-normal">Testimonials</a></li>
              <li><a href="#about" className="inline-flex min-h-[44px] items-center text-[#E5E5E5] hover:text-primary transition-colors text-[17px] font-normal">About</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[22px] tracking-[-0.02em] mb-6 text-white">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#cta" className="inline-flex min-h-[44px] items-center text-[#E5E5E5] hover:text-primary transition-colors text-[17px] font-normal">Partner with Us</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex min-h-[44px] items-center text-[#E5E5E5] hover:text-primary transition-colors text-[17px] font-normal">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="mb-12 border-t border-white/10 pt-8" aria-labelledby="advisors-heading">
          <h2 id="advisors-heading" className="mb-6 text-center text-[12px] font-semibold uppercase tracking-[0.12em] text-[#E5E5E5]">
            Advised by
          </h2>
          <div className="grid grid-cols-2 items-start gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
            {advisors.map((advisor) => (
              <button
                key={advisor.name}
                type="button"
                aria-haspopup="dialog"
                data-testid={`button-advisor-${advisor.photo.replace(".jpg", "")}`}
                onClick={(event) => {
                  opener.current = event.currentTarget;
                  setSelected(advisor);
                }}
                className="group flex min-w-0 flex-col items-center rounded-lg text-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                <img
                  src={`/partner/advisors/${advisor.photo}`}
                  alt={advisor.name}
                  width={72}
                  height={72}
                  className="h-[72px] w-[72px] rounded-full object-cover transition-transform duration-200 group-hover:scale-105"
                />
                <span className="mt-3 text-[16px] font-semibold leading-tight text-white">{advisor.name}</span>
                <span title={advisor.role} className="mt-1 block w-full whitespace-normal text-[13px] leading-[1.4] text-[#E5E5E5]">{advisor.role}</span>
              </button>
            ))}
          </div>
          <PersonBioDialog person={selected} photoFolder="advisors" opener={opener} onClose={() => setSelected(null)} />
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#E5E5E5] text-[12px] uppercase tracking-[0.12em] font-semibold">
            &copy; {currentYear} DATIA AI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="inline-flex min-h-[44px] items-center text-[#E5E5E5] hover:text-white text-[12px] uppercase tracking-[0.12em] font-semibold transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
