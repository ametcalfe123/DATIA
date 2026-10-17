import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import TeamDirectory from "../team-directory"
import AdvisorDirectory from "../advisor-directory"
import TrustedByPage from "../trusted-by-page"

const site = "https://www.datia.io"
const image = (path: string) => `/images/${path}`

type PageKind = "story" | "services" | "team" | "advisors" | "trusted" | "contact"
type PageDefinition = { title: string; subtitle: string; kind: PageKind }

const pages: Record<string, PageDefinition> = {
  "about/decidedly-different": {
    title: "Decidedly Different",
    subtitle: "DATIA provides insights that improve outcomes.",
    kind: "story",
  },
  services: {
    title: "Our Services",
    subtitle: "Comprehensive, AI-enabled B2B marketing solutions designed to drive measurable growth and deliver exceptional ROI.",
    kind: "services",
  },
  "about/our-team": {
    title: "Get to Know Us",
    subtitle: "Meet the experts behind DATIA’s success.",
    kind: "team",
  },
  "about/our-advisors": {
    title: "Our Trusted Advisors",
    subtitle: "Comprised of respected executives and industry pioneers, our advisory board delivers trusted counsel and market intelligence.",
    kind: "advisors",
  },
  "trusted-by": {
    title: "Trusted by Leading Brands",
    subtitle: "DATIA believes in the power of collaboration. Here are some of the organizations we’ve worked with to drive meaningful outcomes.",
    kind: "trusted",
  },
  "get-started": {
    title: "Lets Strategize.",
    subtitle: "Our data-driven solutions start with an in-depth consultation where we identify key audiences to deliver on your target objectives.",
    kind: "contact",
  },
}

const services = [
  { name: "ABMi", subtitle: "Account-Based Marketing Intelligence", description: "Precision-targeted marketing strategies that focus on high-value accounts with personalized campaigns driven by AI-driven behavioral data.", features: ["Persona targeting", "Scoring", "Visualization", "Multiple intent signals"] },
  { name: "TGL", subtitle: "Targeted Generated Leads", description: "Prospect identification and interest for fueling the sales pipeline with top-of-funnel leads.", features: ["Targeted audience by title, geo, and size", "Thought-leadership content", "Two-click access to gated content", "Easy-to-upload leads"] },
  { name: "PUSH", subtitle: "Programmatic User-Specific Hyper-targeting", description: "Strategic advertising campaigns tailored to your ideal buyers for maximum engagement and conversion.", features: ["Persona development", "Cross-platform ad management", "Dynamic creative optimization", "Advanced audience segmentation"] },
  { name: "Content Studio", subtitle: "Content Creation & Strategy", description: "Custom content creation, tailored to specific goals and objectives.", features: ["Content review and strategy development", "Tailored content creation", "Multi-format content production", "Brand voice and messaging alignment"] },
  { name: "Custom Research", subtitle: "Market Research & Analysis", description: "Showcase industry expertise and product innovation.", features: ["Market landscape analysis", "Competitive intelligence gathering", "Customer persona development", "Industry trend identification"] },
]

const team = [
  { name: "Jim Callan", role: "Founder/CEO", image: "jim-callan-new.jpg", email: "jcallan@datia.io", phone: "404.353.5276", bio: "Jim Callan is the Founder and CEO of DATIA, bringing over 20 years of experience in B2B marketing and data intelligence. He has a proven track record of building successful marketing technology companies and helping organizations leverage data-driven insights to accelerate growth. Jim's vision for DATIA centers on providing marketing and sales leaders with the intelligence they need to make informed decisions and drive measurable results." },
  { name: "Steve Bevilacqua", role: "Vice President of Sales", image: "steve-bevilacqua.jpg", email: "sbevilacqua@datia.io", phone: "561.523.3820", bio: "Steve Bevilacqua serves as Vice President of Sales at DATIA, where he leads the sales organization and drives revenue growth. With extensive experience in B2B sales and a deep understanding of marketing technology solutions, Steve helps clients identify the right strategies to achieve their marketing objectives. His consultative approach and industry expertise make him a trusted advisor to marketing and sales leaders across various industries." },
  { name: "Rachel Davis", role: "Vice President of Sales", image: "rachel-davis.jpg", email: "rdavis@datia.io", phone: "678.521.7584", bio: "Rachel Davis is Vice President of Sales at DATIA, specializing in enterprise client relationships and strategic account management. She brings a wealth of experience in consultative selling and has a proven ability to understand complex client needs and deliver tailored solutions. Rachel's expertise in account-based marketing and lead generation strategies helps clients maximize their marketing ROI and achieve sustainable growth." },
  { name: "Kurt Dyrli", role: "Editorial Director", image: "kurt-dyrli.jpg", email: "kdyrli@datia.io", phone: "860.916.5818", bio: "Kurt Dyrli serves as Editorial Director at DATIA, overseeing content strategy and thought leadership initiatives. With a background in journalism and content marketing, Kurt ensures that DATIA's messaging resonates with target audiences and effectively communicates the value of data-driven marketing solutions. His expertise in storytelling and content optimization helps clients build stronger brand narratives and engage their prospects more effectively." },
  { name: "Dana Jackson", role: "Fractional Head of Research", image: "dana-jackson.jpg", email: "djackson@datia.io", bio: "Dana Jackson is the Fractional Head of Research at DATIA, leading market research initiatives and competitive intelligence efforts. With extensive experience in data analysis and market research methodologies, Dana provides valuable insights that inform DATIA's strategic direction and help clients better understand their target markets. Her research expertise enables more effective targeting and positioning strategies for client campaigns." },
  { name: "Amy Metcalfe", role: "Senior Director, Marketing & Operations", image: "amy-metcalfe.jpg", email: "ametcalfe@datia.io", phone: "732.236.4215", bio: "Amy Metcalfe serves as Senior Director of Marketing & Operations at DATIA, where she oversees marketing strategy execution and operational excellence. With a strong background in marketing operations and process optimization, Amy ensures that DATIA's internal marketing efforts align with client best practices. Her expertise in marketing automation and campaign management helps both DATIA and its clients achieve greater efficiency and effectiveness in their marketing efforts." },
]

const advisors = [
  { name: "Randall Dennis", role: "Market Leader, Convergint", image: "randall-dennis.jpg", body: "Randall Dennis is a seasoned market leader at Convergint, bringing extensive experience in technology solutions and strategic business development. With a proven track record in driving growth and innovation, Randall provides valuable insights into market trends and customer needs. His expertise in enterprise solutions and go-to-market strategies helps guide DATIA's strategic direction and client engagement approaches." },
  { name: "Terry Arsenault", role: "Founder | Ecommerce Brand Builder | Business Intelligence Expert - Vyne", image: "terry-arsenault.png", body: "Terry Arsenault is a seasoned technology leader with over 20 years of experience, specializing in business intelligence and data strategy. Throughout his career, Terry has helped organizations harness the power of data to drive smarter decisions and long-term growth. As the founder of a digital agency and multiple ecommerce brands, he combines deep technical expertise with hands-on entrepreneurial experience. His work spans building scalable Shopify stores, leveraging AI to automate operations, and crafting performance-driven marketing strategies. Today, Terry focuses on helping businesses grow through data, technology, and a sharp understanding of digital commerce." },
  { name: "Kathy Hurley", role: "Principal Consultant, Kathy Hurley Consulting LLC", image: "kathy-hurley.jpg", body: "Kathy Hurley is the Principal Consultant at Kathy Hurley Consulting LLC, specializing in strategic marketing and business development. With decades of experience in B2B marketing and consulting, Kathy brings deep expertise in market analysis, competitive positioning, and growth strategies. Her consulting background provides DATIA with valuable perspectives on client needs and market opportunities, helping to shape service offerings and strategic initiatives." },
  { name: "Tom Fowler", role: "Sales and Marketing Advisor", image: "tom-fowler.jpg", body: "Tom Fowler started his media career in 1978 as the City Editor and then Managing Editor at the Oakland Press, a mid-size daily newspaper based in Pontiac, MI. He then transferred over to the business side to become the Sales and Marketing Manager for the newspaper. In 1984, he migrated to the B-to-B media arena as the Circulation Manager for Fairchild Publications, a business unit of Cap Cities Media, which published over 35 magazines and directories. From there, he became the Publisher and Group Publisher of media platforms at various media and publishing companies: Thompson Media, Cahners Travel Group, Pennwell, Summit Business Media and the International Media News Group. Tom has a history of solid accomplishments in the Energy, Financial and Healthcare media sectors, as well as experience and success in executive leadership roles. His diverse experiences include acquisitions, international event management and website development, turnaround strategies, new business development, strategic marketing planning and employee development. Over the years, he has demonstrated a record of managing and building business units with full P&L responsibility, leading these businesses through the publishing revolution from print to digital to data-driven media solutions. Fowler has a BA degree from Yale University, 1974 and an MBA from the Harvard Business School, 1978." },
  { name: "Jason McKenna", role: "V.P. of Global Educational Strategy, VEX Robotics", image: "jason-mckenna.jpg", body: "Jason McKenna serves as Vice President of Global Educational Strategy at VEX Robotics, where he leads strategic initiatives in educational technology and market development. His expertise in educational markets and technology adoption provides DATIA with valuable insights into the education sector. Jason's experience in scaling educational programs globally and understanding institutional decision-making processes helps inform DATIA's approach to serving educational clients and developing targeted marketing strategies." },
]

const navItems = [
  ["Our Story", "/about/decidedly-different"],
  ["Services", "/services"],
  ["Meet the Team", "/about/our-team"],
  ["Advisory Board", "/about/our-advisors"],
  ["Trusted By", "/trusted-by"],
] as const

export function generateStaticParams() {
  return Object.keys(pages).map((path) => ({ slug: path.split("/") }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const { slug } = await params
  const page = pages[slug.join("/")]
  if (!page) return { title: "DATIA" }
  if (slug.join("/") === "trusted-by") {
    return { title: "Trusted by Leading Brands | DATIA", description: page.subtitle }
  }
  return { title: `${page.title} | DATIA`, description: page.subtitle }
}

function SiteHeader() {
  return (
    <header className="site-header home-header">
      <div className="site-header-inner home-header-inner">
        <Link className="brand-logo" href="/" aria-label="DATIA home"><Image src={image("datia-ai-logo.png")} alt="DATIA AI" width={176} height={40} unoptimized /></Link>
        <nav className="main-nav" aria-label="Main navigation">{navItems.map(([label, href]) => <Link href={href} key={label}>{label}</Link>)}</nav>
        <Link className="button button-red header-cta" href="/get-started">Partner with Us</Link>
        <details className="mobile-menu">
          <summary className="mobile-menu-toggle" aria-label="Open navigation"><span /></summary>
          <nav className="mobile-menu-nav" aria-label="Mobile navigation">
            {navItems.map(([label, href]) => <Link href={href} key={label}>{label}</Link>)}
            <Link className="button button-red" href="/get-started">Partner with Us</Link>
          </nav>
        </details>
      </div>
    </header>
  )
}

function SiteFooter() {
  const footerLinks = [
    ["Our Story", "/about/decidedly-different"],
    ["Meet the Team", "/about/our-team"],
    ["Advisory Board", "/about/our-advisors"],
    ["Trusted By", "/trusted-by"],
    ["Privacy Policy", `${site}/privacy-policy`],
  ] as const
  const markets = ["Education", "Government", "HR", "Financial Services", "Retail", "Healthcare", "Technology", "Cybersecurity/Identity"]

  return (
    <footer className="site-footer inner-footer">
      <div className="inner-footer-about">
        <Link className="brand-logo" href="/" aria-label="DATIA home"><Image src={image("datia-ai-logo-white.png")} alt="DATIA AI" width={176} height={40} unoptimized /></Link>
        <p>A sales and marketing intelligence company offering enhanced lead generation and media services that integrate intent data and AI-driven insights.</p>
        <h2>Markets Served</h2>
        <ul>{markets.map((market) => <li key={market}>{market}</li>)}</ul>
      </div>
      <nav aria-label="Footer navigation">{footerLinks.map(([label, href]) => <Link href={href} key={label}>{label}</Link>)}</nav>
      <small>© 2025. All rights reserved.</small>
    </footer>
  )
}

function PageHero({ page }: { page: PageDefinition }) {
  const className = page.kind === "team" ? "team-page-hero" : page.kind === "advisors" ? "advisor-page-hero" : page.kind === "contact" ? "contact-page-hero" : ""
  return <section className={`page-hero ${className}`}><h1>{page.title}</h1><p>{page.subtitle}</p></section>
}

function StoryContent() {
  return (
    <>
      <section className="inner-content-section">
        <div className="page-pillar-grid">
          <article><span>01</span><h2>Precision-First</h2><p>Every campaign is meticulously crafted with precision to target the right personas and accounts.</p></article>
          <article><span>02</span><h2>Innovation-Driven</h2><p>We constantly push boundaries, leveraging cutting-edge technology and creative strategies.</p></article>
          <article><span>03</span><h2>Results-Obsessed</h2><p>We measure success by real business impact, not vanity metrics.</p></article>
        </div>
        <div className="story-copy">
          <p>What sets DATIA apart is lead intelligence through a new breed of Account-Based Marketing campaigns that capture numerous intent insights, to detect sales-qualified leads at the right time. Our unique platform provides you with a more comprehensive view of which prospect to nurture and how. And just as critical, we keep your brand in front of the 95% of target prospects who aren’t ready to buy today, but will be tomorrow, next month, or next year.</p>
          <p>Buyers across industries now do most of their research independently — often narrowing their shortlist long before they ever speak with a salesperson.</p>
          <p>Solutions begin with an in-depth consultation to identify key target audiences and deliver on marketing objectives.</p>
        </div>
      </section>
      <section className="page-callout"><p className="eyebrow">A different approach to growth</p><h2>Experience the Difference</h2><p>Ready to see how our approach can transform your B2B marketing results?</p><Link className="button button-red" href="/get-started">Partner with Us</Link></section>
    </>
  )
}

function ServicesContent() {
  return (
    <section className="inner-content-section services-page-content">
      <div className="section-heading"><h2>We are a purpose-built partner for marketing and sales leaders</h2><p>From strategy to execution, our integrated approach ensures every aspect of your B2B marketing works together seamlessly.</p></div>
      <div className="detail-service-grid">{services.map((service) => <article className="detail-service-card" key={service.name}><p className="article-category">{service.name}</p><h3>{service.subtitle}</h3><p>{service.description}</p><div className="service-feature-columns"><div><h4>Features</h4><ul>{service.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></div><div><h4>Process</h4><ul><li>Audience and objective alignment</li><li>Campaign strategy and execution</li></ul></div><div><h4>Benefits</h4><ul><li>More relevant engagement</li><li>Measurable campaign outcomes</li></ul></div></div></article>)}</div>
      <section className="page-callout"><h2>Decidedly Different</h2><p>Our proven methodology and expert team deliver consistent results across all service areas.</p><Link className="button button-red" href="/get-started">Get Started Today</Link></section>
    </section>
  )
}


function ContactMailIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>
}

function ContactPhoneIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M7 3h3l2 5-2 2c1.2 2.2 2.8 3.8 5 5l2-2 5 2v3c0 1.1-.9 2-2 2C10.7 20 4 13.3 4 5c0-1.1.9-2 2-2h1Z" /></svg>
}

function ContactLinkedInIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M5.2 7.7a1.9 1.9 0 1 0 0-3.8 1.9 1.9 0 0 0 0 3.8ZM3.6 9.2h3.2v10.5H3.6V9.2Zm5.2 0h3.1v1.4h.1a3.4 3.4 0 0 1 3.1-1.7c3.3 0 3.9 2.2 3.9 5v5.8h-3.2v-5.1c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7v5.2H8.8V9.2Z" /></svg>
}

function ContactContent() {
  return (
    <>
      <section className="contact-form-section">
        <div className="contact-form-panel">
          <h2>Get Started.</h2>
          <p className="contact-form-intro">Request more information and rates.</p>
          <form className="datia-contact-form">
            <div className="contact-fields">
              <label className="field-first">First Name *<input required name="firstName" autoComplete="given-name" /></label>
              <label className="field-last">Last Name *<input required name="lastName" autoComplete="family-name" /></label>
              <label className="field-company">Company Name *<input required name="company" autoComplete="organization" /></label>
              <label className="field-email">Email *<input required name="email" type="email" autoComplete="email" /></label>
              <label className="field-website">Website<input name="website" type="url" placeholder="https://yourcompany.com" /></label>
              <label className="field-phone">Phone<input name="phone" type="tel" autoComplete="tel" /></label>
            </div>
            <div className="contact-form-options">
              <fieldset className="solutions-fieldset">
                <legend>Solutions of Interest</legend>
                {[["ABMi", "TGL"], ["PUSH Ad Targeting", "Content Studio"], ["Custom Research"]].map((row) => (
                  <div className="solution-row" key={row.join("-")}>{row.map((solution) => <label className="solution-option" key={solution}><input type="checkbox" name="solutions" value={solution} />{solution}</label>)}</div>
                ))}
              </fieldset>
              <label className="message-field">Message<textarea name="message" placeholder="Tell us about your marketing goals..." rows={4} /></label>
              <button className="contact-submit" type="button">Submit</button>
            </div>
          </form>
        </div>
      </section>
      <section className="contact-team-section">
        <div className="contact-team-heading">
          <h2>Get in Touch</h2>
          <p>Connect directly with our team to discuss your marketing objectives and explore how we can help.</p>
        </div>
        <div className="contact-team-grid">
          {team.map((person) => (
            <article className="contact-team-card" key={person.name}>
              <Image src={`/images/${person.image}`} alt={person.name} width={64} height={64} unoptimized />
              <h3>{person.name}</h3>
              <p className="contact-team-role">{person.role}</p>
              <a className="contact-team-detail" href={`mailto:${person.email}`}><ContactMailIcon />{person.email}</a>
              {person.phone && <a className="contact-team-detail" href={`tel:${person.phone.replaceAll(".", "")}`}><ContactPhoneIcon />{person.phone}</a>}
              <a className="contact-connect" href={`https://www.linkedin.com/search/results/people/?keywords=${encodeURIComponent(person.name)}`} target="_blank" rel="noreferrer"><ContactLinkedInIcon />Connect</a>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default async function ContentPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params
  const page = pages[slug.join("/")]
  if (!page) notFound()
  if (page.kind === "trusted") return <TrustedByPage />

  return (
    <main className={`datia-inner-page ${page.kind === "advisors" ? "advisor-page" : page.kind === "contact" ? "contact-page" : ""}`}>
      <SiteHeader />
      <PageHero page={page} />
      {page.kind === "story" && <StoryContent />}
      {page.kind === "services" && <ServicesContent />}
      {page.kind === "team" && <TeamDirectory people={team} />}
      {page.kind === "advisors" && <AdvisorDirectory people={advisors} />}
      {page.kind === "contact" && <ContactContent />}
      <SiteFooter />
    </main>
  )
}
