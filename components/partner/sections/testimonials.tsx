"use client";

import { motion } from "@/components/partner/motion";
import { Quote } from "lucide-react";

const logos = [
  { filename: "Allegion.png", href: "https://www.allegion.com/" },
  { filename: "AlphaBEST_Education.png", href: "https://www.alphabest.org/" },
  { filename: "Chartwells.png", href: "https://www.chartwellsk12.com/" },
  { filename: "College_Board.png", href: "https://www.collegeboard.org/" },
  { filename: "Communities_in_Schools.png", href: "https://www.communitiesinschools.org/" },
  { filename: "CrowdStrike.png", href: "https://www.crowdstrike.com/" },
  { filename: "Extron.png", href: "https://www.extron.com/" },
  { filename: "Genetec.png", href: "https://www.genetec.com/" },
  { filename: "Lebra.png", href: "https://www.lebrahq.com/" },
  { filename: "Microsoft.png", href: "https://www.microsoft.com/en-us" },
  { filename: "Otus.png", href: "https://www.otus.com/" },
  { filename: "Palo_Alto_Networks.png", href: "https://www.paloaltonetworks.com/" },
  { filename: "ParentSquare.png", href: "https://www.parentsquare.com/" },
  { filename: "Participate_Learning.png", href: "https://www.participatelearning.com/" },
  { filename: "Pathwise.png", href: "https://pathwisek12.com/" },
  { filename: "PMX_Sync.png", href: "https://www.primexinc.com/" },
  { filename: "PowerSchool.png", href: "https://www.powerschool.com/" },
  { filename: "Prodigy.png", href: "https://www.prodigygame.com/" },
  { filename: "Qualcomm_Snapdragon.png", href: "https://www.qualcomm.com/snapdragon" },
  { filename: "Raptor_Technologies.png", href: "https://www.raptortech.com/" },
  { filename: "Renaissance.png", href: "https://www.renaissance.com/" },
  { filename: "RethinkFirst.png", href: "https://www.rethinkfirst.com/" },
  { filename: "Right_at_School.png", href: "https://www.rightatschool.com/" },
  { filename: "Ruckus.png", href: "https://www.ruckusnetworks.com/" },
  { filename: "Sandy_Hook_Promise.png", href: "https://www.sandyhookpromise.org/" },
  { filename: "Scanmarker.png", href: "https://scanmarker.com/" },
  { filename: "Schneider_Electric.png", href: "https://www.se.com/ww/en/" },
  { filename: "Stryker.png", href: "https://www.stryker.com/" },
  { filename: "Student.png", href: "https://www.studient.com/" },
  { filename: "Symetrix.png", href: "https://www.symetrix.co/" },
  { filename: "Transfinder.png", href: "https://www.transfinder.com/" },
  { filename: "TriVigil.png", href: "https://www.trivigil.com/" },
  { filename: "Valcom.png", href: "https://www.valcom.com/" },
  { filename: "Volt.png", href: "https://volt.ai/" },
];

const testimonials = [
  {
    quote: "Partnering with DATIA on our ABM campaign has been a great experience. From the early research and planning stages through the live campaign, their team has been responsive, insightful, and easy to work with. We've seen strong engagement and high-quality leads so far, and the dashboards and regular updates have helped us stay aligned and see what's working.",
    name: "Anamaria Knight",
    role: "Senior Director Product/Marketing/R&E",
    company: "Participate Learning",
  },
  {
    quote: "DATIA has been awesome to work with. Their creative ideas, campaign strategy, and the way they bring everything together with great assets has really pushed our marketing forward. They take the time to get to know you and your desired outcomes, it's not just quantity, it's also about quality. They just get it!",
    name: "Mark McGinnis",
    role: "Chief Evangelist",
    company: "TriVigil",
  },
  {
    quote: "DATIA's team brought deep industry experience and expertise to our custom research project, delivering valuable insights that directly informed our strategy. Their smart work and commitment to best practices ensure we receive actionable, high-quality analysis tailored to our needs.",
    name: "Shannon Zaher",
    role: "Vice President Product Marketing",
    company: "Raptor Technologies",
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#F5F5F5] scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6 max-w-[1152px]">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-[32px] md:text-[40px] font-semibold text-[#18181b] mb-4 tracking-[-0.02em] leading-[1.1]">
            Trusted by Leading Brands
          </h2>
          <p className="text-[17px] text-[#3F3F46] font-normal leading-[1.6]">
            DATIA believes in the power of collaboration. Here are some of the organizations we've worked with to drive meaningful outcomes.
          </p>
        </div>

        <div className="client-ticker mb-12 overflow-hidden py-5" aria-label="Organizations we've worked with">
          <div className="client-ticker-track flex w-max">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 items-center gap-12 pr-12" aria-hidden={copy === 1 ? true : undefined}>
                {logos.map(({ filename, href }) => (
                  <a
                    key={filename}
                    href={href}
                    target="_blank"
                    rel="noopener"
                    tabIndex={copy === 1 ? -1 : undefined}
                    className="flex h-16 shrink-0 items-center justify-center"
                  >
                    <img
                      src={`/partner/logos/${filename}`}
                      alt={copy === 0 ? filename.replace(/\.png$/, "").replace(/_/g, " ") : ""}
                      className="block h-[34px] w-auto object-contain"
                      decoding="async"
                    />
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mb-12 w-full max-w-[800px]">
          <p className="mb-3 text-left text-[14px] font-normal text-[#3F3F46]">
            Allison Danes - Right At School
          </p>
          <div className="relative w-full overflow-hidden rounded-[16px] shadow" style={{ aspectRatio: "16 / 9" }}>
            <wistia-player
              media-id="pghthuyp7z"
              aspect="1.7777777777777777"
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", display: "block" }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="bg-white border border-[#e4e4e7] rounded-[12px] shadow hover:shadow-md hover:-translate-y-1 p-6 lg:p-8 relative flex flex-col transition-all duration-300"
            >
              <div className="flex justify-end mb-4">
                <Quote className="w-10 h-10 text-zinc-300" />
              </div>

              <div className="flex-1 mb-8">
                <p className="text-[#3F3F46] text-[17px] leading-[1.6] font-normal italic">
                  "{test.quote}"
                </p>
              </div>
              
              <div className="mt-auto pt-6 border-t border-[#e4e4e7]">
                <p className="font-semibold text-[22px] tracking-[-0.02em] text-[#18181b] leading-tight mb-1">{test.name}</p>
                <p className="text-[17px] text-[#3F3F46] font-normal">{test.role}</p>
                <span className="inline-block mt-4 text-[12px] font-semibold px-3 py-1.5 bg-zinc-100 text-[#3F3F46] rounded-full uppercase tracking-[0.12em]">
                  {test.company}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
