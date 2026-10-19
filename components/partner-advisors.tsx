"use client"

import Image from "next/image"
import { useRef, useState } from "react"
import { X } from "lucide-react"

type PartnerAdvisor = {
  name: string
  role: string
  bioRole?: string
  image?: string
  crop?: boolean
  bio?: string
  linkedin?: string
}

const advisors: PartnerAdvisor[] = [
  {
    name: "Jason McKenna",
    linkedin: "https://www.linkedin.com/search/results/people/?keywords=Jason%20McKenna",
    role: "VP of Global Educational Strategy, VEX Robotics",
    bioRole: "V.P. of Global Educational Strategy, VEX Robotics",
    image: "jason-mckenna.jpg",
    bio: "Jason McKenna serves as Vice President of Global Educational Strategy at VEX Robotics, where he leads strategic initiatives in educational technology and market development. His expertise in educational markets and technology adoption provides DATIA with valuable insights into the education sector. Jason's experience in scaling educational programs globally and understanding institutional decision-making processes helps inform DATIA's approach to serving educational clients and developing targeted marketing strategies.",
  },
  {
    name: "Dr. Robert Avossa",
    linkedin: "https://www.linkedin.com/search/results/people/?keywords=Robert%20Avossa",
    role: "Former Superintendent, Palm Beach County Schools",
    bioRole: "CEO, K-12 Leadership Matters | Former Superintendent, Palm Beach County Schools",
    image: "robert-avossa.jpg",
    bio: "Dr. Robert Avossa is a nationally recognized education leader who served as Superintendent of the School District of Palm Beach County, one of the largest school districts in the United States. He went on to serve as Senior Vice President at LRP Publications, bringing his perspective as a district leader to the education media and information space. Today, Robert is the founder and CEO of K-12 Leadership Matters, where he provides strategic guidance to school district leaders, and serves as a Board Member and Superintendent in Residence at Scoir, Inc. His deep understanding of how districts evaluate, buy, and adopt solutions gives DATIA valuable insight into the education market and helps shape how clients engage K-12 decision-makers.",
  },
  {
    name: "Randall Dennis",
    linkedin: "https://www.linkedin.com/search/results/people/?keywords=Randall%20Dennis",
    role: "Market Leader, Convergint",
    image: "randall-dennis.jpg",
    bio: "Randall Dennis is a seasoned market leader at Convergint, bringing extensive experience in technology solutions and strategic business development. With a proven track record in driving growth and innovation, Randall provides valuable insights into market trends and customer needs. His expertise in enterprise solutions and go-to-market strategies helps guide DATIA's strategic direction and client engagement approaches.",
  },
  {
    name: "Kathy Hurley",
    linkedin: "https://www.linkedin.com/search/results/people/?keywords=Kathy%20Hurley",
    role: "Principal Consultant, Kathy Hurley Consulting",
    bioRole: "Principal Consultant, Kathy Hurley Consulting LLC",
    image: "kathy-hurley.jpg",
    bio: "Kathy Hurley is the Principal Consultant at Kathy Hurley Consulting LLC, specializing in strategic marketing and business development. With decades of experience in B2B marketing and consulting, Kathy brings deep expertise in market analysis, competitive positioning, and growth strategies. Her consulting background provides DATIA with valuable perspectives on client needs and market opportunities, helping to shape service offerings and strategic initiatives.",
  },
  {
    name: "Terry Arsenault",
    linkedin: "https://www.linkedin.com/search/results/people/?keywords=Terry%20Arsenault",
    role: "Founder, Vyne",
    bioRole: "Founder | Ecommerce Brand Builder | Business Intelligence Expert - Vyne",
    image: "terry-arsenault.jpg",
    bio: "Terry Arsenault is a seasoned technology leader with over 20 years of experience, specializing in business intelligence and data strategy. Throughout his career, Terry has helped organizations harness the power of data to drive smarter decisions and long-term growth. As the founder of a digital agency and multiple ecommerce brands, he combines deep technical expertise with hands-on entrepreneurial experience. His work spans building scalable Shopify stores, leveraging AI to automate operations, and crafting performance-driven marketing strategies. Today, Terry focuses on helping businesses grow through data, technology, and a sharp understanding of digital commerce.",
  },
  {
    name: "Tom Fowler",
    linkedin: "https://www.linkedin.com/search/results/people/?keywords=Tom%20Fowler",
    role: "B2B media publisher since 1978",
    bioRole: "Sales and Marketing Advisor",
    image: "tom-fowler.jpg",
    bio: "Tom Fowler started his media career in 1978 as the City Editor and then Managing Editor at the Oakland Press, a mid-size daily newspaper based in Pontiac, MI. He then transferred over to the business side to become the Sales and Marketing Manager for the newspaper. In 1984, he migrated to the B-to-B media arena as the Circulation Manager for Fairchild Publications, a business unit of Cap Cities Media, which published over 35 magazines and directories. From there, he became the Publisher and Group Publisher of media platforms at various media and publishing companies: Thompson Media, Cahners Travel Group, Pennwell, Summit Business Media and the International Media News Group. Tom has a history of solid accomplishments in the Energy, Financial and Healthcare media sectors, as well as experience and success in executive leadership roles. His diverse experiences include acquisitions, international event management and website development, turnaround strategies, new business development, strategic marketing planning and employee development. Over the years, he has demonstrated a record of managing and building business units with full P&L responsibility, leading these businesses through the publishing revolution from print to digital to data-driven media solutions. Fowler has a BA degree from Yale University, 1974 and an MBA from the Harvard Business School, 1978.",
  },
]

function AdvisorPhoto({ advisor }: { advisor: PartnerAdvisor }) {
  if (!advisor.image) {
    return <span className="partner-advisor-initials" aria-hidden="true">RA</span>
  }
  if (advisor.crop) {
    return (
      <span className="partner-advisor-crop">
        <Image src={advisor.image} alt="" width={746} height={610} className="partner-advisor-crop-image" unoptimized loading="lazy" />
      </span>
    )
  }
  return <Image src={`/images/${advisor.image}`} alt="" width={52} height={52} unoptimized loading="lazy" />
}

export function PartnerAdvisors() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [activeAdvisor, setActiveAdvisor] = useState<PartnerAdvisor | null>(null)

  const openBio = (advisor: PartnerAdvisor) => {
    setActiveAdvisor(advisor)
    dialogRef.current?.showModal()
  }

  const closeBio = () => dialogRef.current?.close()

  return (
    <div className="partner-advisors">
      <p>Advisory Board</p>
      <div className="partner-advisor-grid">
        {advisors.map((advisor) =>
          advisor.bio ? (
            <button
              type="button"
              className="partner-advisor partner-advisor-button"
              key={advisor.name}
              onClick={() => openBio(advisor)}
              aria-haspopup="dialog"
              aria-label={`View bio for ${advisor.name}`}
            >
              <AdvisorPhoto advisor={advisor} />
              <strong>{advisor.name}</strong>
              <span>{advisor.role}</span>
            </button>
          ) : (
            <div className="partner-advisor" key={advisor.name}>
              <AdvisorPhoto advisor={advisor} />
              <strong>{advisor.name}</strong>
              <span>{advisor.role}</span>
            </div>
          ),
        )}
      </div>
      <dialog
        ref={dialogRef}
        className="partner-bio-dialog"
        aria-labelledby="partner-advisor-bio-name"
        onClick={(event) => {
          if (event.target === event.currentTarget) closeBio()
        }}
      >
        {activeAdvisor && (
          <div className="partner-bio-card">
            <button type="button" className="partner-bio-close" onClick={closeBio} aria-label="Close bio">
              <X aria-hidden="true" />
            </button>
            {activeAdvisor.image && (
              <Image
                className="partner-bio-photo"
                src={`/images/${activeAdvisor.image}`}
                alt={activeAdvisor.name}
                width={160}
                height={160}
                unoptimized
              />
            )}
            <h3 id="partner-advisor-bio-name">{activeAdvisor.name}</h3>
            <p className="partner-bio-role">{activeAdvisor.bioRole ?? activeAdvisor.role}</p>
            {activeAdvisor.linkedin && (
              <p className="partner-bio-contact">
                <a href={activeAdvisor.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </p>
            )}
            <p className="partner-bio-text">{activeAdvisor.bio}</p>
          </div>
        )}
      </dialog>
    </div>
  )
}
