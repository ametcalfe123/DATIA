"use client";

import { useRef, useState } from "react";
import PersonBioDialog from "@/components/partner/sections/person-bio-dialog";

const team = [
  {
    name: "Jim Callan",
    role: "Founder/CEO",
    photo: "jim-callan.jpg",
    linkedin: "https://www.linkedin.com/in/james-callan-a251604/",
    bio: "Jim Callan is the Founder and CEO of DATIA, bringing over 20 years of experience in B2B marketing and data intelligence. He has a proven track record of building successful marketing technology companies and helping organizations leverage data-driven insights to accelerate growth. Jim's vision for DATIA centers on providing marketing and sales leaders with the intelligence they need to make informed decisions and drive measurable results.",
  },
  {
    name: "Steve Bevilacqua",
    role: "Vice President of Sales",
    photo: "steve-bevilacqua.jpg",
    linkedin: "https://www.linkedin.com/in/stephenbevilacqua/",
    bio: "Steve Bevilacqua serves as Vice President of Sales at DATIA, where he leads the sales organization and drives revenue growth. With extensive experience in B2B sales and a deep understanding of marketing technology solutions, Steve helps clients identify the right strategies to achieve their marketing objectives. His consultative approach and industry expertise make him a trusted advisor to marketing and sales leaders across various industries.",
  },
  {
    name: "Rachel Davis",
    role: "Vice President of Sales",
    photo: "rachel-davis-v3.jpg",
    linkedin: "https://www.linkedin.com/in/racheldavis7/",
    bio: "Rachel Davis is Vice President of Sales at DATIA, specializing in enterprise client relationships and strategic account management. She brings a wealth of experience in consultative selling and has a proven ability to understand complex client needs and deliver tailored solutions. Rachel's expertise in account-based marketing and lead generation strategies helps clients maximize their marketing ROI and achieve sustainable growth.",
  },
  {
    name: "Kurt Dyrli",
    role: "Editorial Director",
    photo: "kurt-dyrli.jpg",
    linkedin: "https://www.linkedin.com/in/kurt-eisele-dyrli-b92667159/",
    bio: "Kurt Dyrli serves as Editorial Director at DATIA, overseeing content strategy and thought leadership initiatives. With a background in journalism and content marketing, Kurt ensures that DATIA's messaging resonates with target audiences and effectively communicates the value of data-driven marketing solutions. His expertise in storytelling and content optimization helps clients build stronger brand narratives and engage their prospects more effectively.",
  },
  {
    name: "Dana Jackson",
    role: "Fractional Head of Research",
    photo: "dana-jackson-v3.jpg",
    linkedin: "https://www.linkedin.com/in/dana-jackson-1bb56a/",
    bio: "Dana Jackson is the Fractional Head of Research at DATIA, leading market research initiatives and competitive intelligence efforts. With extensive experience in data analysis and market research methodologies, Dana provides valuable insights that inform DATIA's strategic direction and help clients better understand their target markets. Her research expertise enables more effective targeting and positioning strategies for client campaigns.",
  },
  {
    name: "Amy Metcalfe",
    role: "Senior Director, Marketing & Operations",
    photo: "amy-metcalfe.jpg",
    linkedin: "https://www.linkedin.com/in/amy-metcalfe-6490032/",
    bio: "Amy Metcalfe serves as Senior Director of Marketing & Operations at DATIA, where she oversees marketing strategy execution and operational excellence. With a strong background in marketing operations and process optimization, Amy ensures that DATIA's internal marketing efforts align with client best practices. Her expertise in marketing automation and campaign management helps both DATIA and its clients achieve greater efficiency and effectiveness in their marketing efforts.",
  },
];

export default function Team() {
  const [selected, setSelected] = useState<(typeof team)[number] | null>(null);
  const opener = useRef<HTMLButtonElement | null>(null);

  return (
    <div>
      <div className="mb-8">
        <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#E5E5E5]">
          The people behind the platform
        </p>
        <h3 className="text-[28px] font-semibold leading-[1.1] tracking-[-0.02em] text-white md:text-[32px]">
          Meet the team
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
        {team.map((person) => (
          <button
            key={person.name}
            type="button"
            aria-haspopup="dialog"
            data-testid={`button-team-${person.name.toLowerCase().replace(/\s+/g, "-")}`}
            onClick={(event) => {
              opener.current = event.currentTarget;
              setSelected(person);
            }}
            className="group flex min-w-0 flex-col items-center text-center rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            <img
              src={`/partner/team/${person.photo}`}
              alt={person.name}
              width={140}
              height={140}
              className="h-[140px] w-[140px] max-w-full rounded-[12px] object-cover transition-transform duration-200 group-hover:scale-[1.03]"
            />
            <span className="mt-3 text-[16px] font-semibold leading-tight text-white">{person.name}</span>
            <span className="mt-1 text-[14px] font-normal leading-[1.4] text-[#E5E5E5]">{person.role}</span>
          </button>
        ))}
      </div>

      <PersonBioDialog person={selected} photoFolder="team" opener={opener} onClose={() => setSelected(null)} />
    </div>
  );
}