import Image from "next/image"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

const site = "https://www.datia.io"
const image = (path: string) => `${site}/images/${path}`

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
  { name: "Jim Callan", role: "Founder/CEO", image: "jim-callan-new.jpg", email: "jcallan@datia.io", phone: "404.353.5276" },
  { name: "Steve Bevilacqua", role: "Vice President of Sales", image: "steve-bevilacqua.jpg", email: "sbevilacqua@datia.io", phone: "561.523.3820" },
  { name: "Rachel Davis", role: "Vice President of Sales", image: "rachel-davis.jpg", email: "rdavis@datia.io", phone: "678.521.7584" },
  { name: "Kurt Dyrli", role: "Editorial Director", image: "kurt-dyrli.jpg", email: "kdyrli@datia.io", phone: "860.916.5818" },
  { name: "Dana Jackson", role: "Fractional Head of Research", image: "dana-jackson.jpg", email: "djackson@datia.io" },
  { name: "Amy Metcalfe", role: "Senior Director, Marketing & Operations", image: "amy-metcalfe.jpg", email: "ametcalfe@datia.io", phone: "732.236.4215" },
]

const advisors = [
  { name: "Randall Dennis", role: "Market Leader, Convergint", image: "randall-dennis.jpg", body: "A seasoned market leader at Convergint, Randall brings extensive experience in technology solutions and strategic business development. His expertise in enterprise solutions and go-to-market strategies helps guide DATIA’s strategic direction and client engagement." },
  { name: "Terry Arsenault", role: "Founder | Ecommerce Brand Builder | Business Intelligence Expert — Vyne", image: "terry-arsenault.png", body: "A technology leader with over 20 years of experience in business intelligence and data strategy, Terry helps organizations harness data to drive smarter decisions and long-term growth." },
  { name: "Kathy Hurley", role: "Principal Consultant, Kathy Hurley Consulting LLC", image: "kathy-hurley.jpg", body: "With decades of experience in B2B marketing and consulting, Kathy brings deep expertise in market analysis, competitive positioning, and growth strategies." },
  { name: "Tom Fowler", role: "Sales and Marketing Advisor", image: "tom-fowler.jpg", body: "Tom’s media career spans publishing, business media, sales, marketing, and leadership roles across a wide range of media and publishing companies." },
  { name: "Jason McKenna", role: "Strategic Advisor", image: "jason-mckenna.jpg", body: "Jason brings practical experience and strategic perspective to DATIA’s advisory collective." },
]

const clientLogos = [
  ["Microsoft", "microsoft.png"],
  ["Qualcomm Snapdragon", "qualcomm-snapdragon.webp"],
  ["AlphaBEST Education", "alphabest-education.png"],
  ["Extron", "extron.png"],
  ["Genetec", "genetec.png"],
  ["Right at School", "right-at-school.png"],
  ["Transfinder", "transfinder.png"],
  ["VOLT AI", "volt.png"],
  ["Schneider Electric", "schneider-electric-new.jpeg"],
  ["Participate Learning", "participate-learning.png"],
  ["College Board", "collegeboard.png"],
]

const testimonials = [
  { quote: "Partnering with DATIA on our ABM campaign has been a great experience. From the early research and planning stages through the live campaign, their team has been responsive, insightful, and easy to work with. We’ve seen strong engagement and high-quality leads so far.", name: "Anamaria Knight", role: "Senior Director Product/Marketing/R&E · Participate Learning" },
  { quote: "DATIA has been awesome to work with. Their creative ideas, campaign strategy, and the way they bring everything together with great assets has really pushed our marketing forward. They take the time to get to know you and your desired outcomes.", name: "Mark McGinnis", role: "Chief Evangelist · TriVigil" },
  { quote: "DATIA’s team brought deep industry experience and expertise to our custom research project, delivering valuable insights that directly informed our strategy.", name: "Shannon Zaher", role: "Vice President, Product Marketing · Raptor Technologies" },
  { quote: "I’ve partnered with DATIA to create several content pieces. From a logistics standpoint, they’re very responsive, and they bring great knowledge about the K-12 market to the table.", name: "Taylor Frey", role: "Sr. Marketing Manager" },
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
  return { title: `${page.title} | DATIA`, description: page.subtitle }
}

function SiteHeader() {
  return (
    <header className="site-header home-header">
      <div className="site-header-inner home-header-inner">
        <a className="brand-logo" href="/" aria-label="DATIA home"><Image src={image("datia-ai-logo.png")} alt="DATIA AI" width={176} height={40} unoptimized /></a>
        <nav className="main-nav" aria-label="Main navigation">{navItems.map(([label, href]) => <a href={href} key={label}>{label}</a>)}</nav>
        <a className="button button-red header-cta" href="/get-started">Partner with Us</a>
      </div>
    </header>
  )
}

function SiteFooter() {
  return (
    <footer className="site-footer home-footer">
      <a className="brand-logo" href="/" aria-label="DATIA home"><Image src={image("datia-ai-logo-white.png")} alt="DATIA AI" width={176} height={40} unoptimized /></a>
      <p>A sales and marketing intelligence company offering enhanced lead generation and media services that integrate intent data and AI-driven insights.</p>
      <nav aria-label="Footer navigation">{navItems.map(([label, href]) => <a href={href} key={label}>{label}</a>)}</nav>
      <small>© {new Date().getFullYear()} DATIA. All rights reserved.</small>
    </footer>
  )
}

function PageHero({ page }: { page: PageDefinition }) {
  return <section className="page-hero"><h1>{page.title}</h1><p>{page.subtitle}</p></section>
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
      <section className="page-callout"><p className="eyebrow">A different approach to growth</p><h2>Experience the Difference</h2><p>Ready to see how our approach can transform your B2B marketing results?</p><a className="button button-red" href="/get-started">Partner with Us</a></section>
    </>
  )
}

function ServicesContent() {
  return (
    <section className="inner-content-section services-page-content">
      <div className="section-heading"><h2>We are a purpose-built partner for marketing and sales leaders</h2><p>From strategy to execution, our integrated approach ensures every aspect of your B2B marketing works together seamlessly.</p></div>
      <div className="detail-service-grid">{services.map((service) => <article className="detail-service-card" key={service.name}><p className="article-category">{service.name}</p><h3>{service.subtitle}</h3><p>{service.description}</p><div className="service-feature-columns"><div><h4>Features</h4><ul>{service.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></div><div><h4>Process</h4><ul><li>Audience and objective alignment</li><li>Campaign strategy and execution</li></ul></div><div><h4>Benefits</h4><ul><li>More relevant engagement</li><li>Measurable campaign outcomes</li></ul></div></div></article>)}</div>
      <section className="page-callout"><h2>Decidedly Different</h2><p>Our proven methodology and expert team deliver consistent results across all service areas.</p><a className="button button-red" href="/get-started">Get Started Today</a></section>
    </section>
  )
}

function PeopleContent({ kind }: { kind: "team" | "advisors" }) {
  const isTeam = kind === "team"
  const people = isTeam ? team : advisors
  return (
    <section className="inner-content-section people-section">
      <div className="section-heading"><h2>{isTeam ? "Leadership Team" : "Meet our Expert Collective"}</h2><p>{isTeam ? "Our experienced leadership team brings decades of B2B marketing expertise to every client engagement." : "A collective of respected leaders and industry pioneers offering trusted counsel and market intelligence."}</p></div>
      <div className="people-grid">{people.map((person) => <article className="person-card" key={person.name}><div className="person-photo"><Image src={image(person.image)} alt={person.name} width={520} height={500} unoptimized /></div><div className="person-details"><h3>{person.name}</h3><p className="person-role">{person.role}</p>{"email" in person && <a href={`mailto:${person.email}`}>{person.email}</a>}{"phone" in person && <a href={`tel:${person.phone?.replaceAll(".", "")}`}>{person.phone}</a>}{"body" in person && <p className="person-bio">{person.body}</p>}<a className="person-bio-link" href="/get-started">{isTeam ? "View Bio" : "Read Full Bio"}</a></div></article>)}</div>
    </section>
  )
}

function TrustedContent() {
  return (
    <>
      <section className="inner-content-section trusted-page-content">
        <div className="brand-wall">{clientLogos.map(([name, file]) => <div className="partner-logo-cell" key={name}><Image src={`${site}/logos/${file}`} alt={`${name} logo`} width={190} height={60} unoptimized /></div>)}</div>
      </section>
      <section className="testimonial-section"><div className="section-heading"><p className="eyebrow">Client Spotlight</p><h2>What our partners say</h2></div><div className="testimonial-grid">{testimonials.map((item) => <blockquote className="testimonial-card" key={item.name}><span className="quote-mark" aria-hidden="true">“</span><p>{item.quote}</p><footer><strong>{item.name}</strong><span>{item.role}</span></footer></blockquote>)}</div></section>
    </>
  )
}

function ContactContent() {
  return (
    <section className="contact-layout inner-content-section">
      <div className="contact-form-panel"><p className="eyebrow">Get Started.</p><h2>Request more information and rates.</h2><form className="datia-contact-form">
        <label>First Name *<input required name="firstName" autoComplete="given-name" /></label>
        <label>Last Name *<input required name="lastName" autoComplete="family-name" /></label>
        <label>Email *<input required name="email" type="email" autoComplete="email" /></label>
        <label>Phone<input name="phone" type="tel" autoComplete="tel" /></label>
        <label className="form-wide">Company Name *<input required name="company" autoComplete="organization" /></label>
        <label className="form-wide">Website<input name="website" type="url" placeholder="https://yourcompany.com" /></label>
        <fieldset className="form-wide"><legend>Solutions of Interest</legend>{["ABMi", "TGL", "PUSH Ad Targeting", "Content Studio", "Custom Research"].map((solution) => <label className="solution-option" key={solution}><input type="checkbox" name="solutions" value={solution} />{solution}</label>)}</fieldset>
        <label className="form-wide">Message<textarea name="message" placeholder="Tell us about your marketing goals..." rows={5} /></label>
        <button className="button button-red form-wide" type="button">Submit</button>
      </form></div>
      <aside className="contact-details"><p className="eyebrow">Get in Touch</p><h2>Let’s talk about your goals.</h2><p>Connect directly with our team to discuss your marketing objectives and explore how we can help.</p>{team.map((person) => <div className="contact-person" key={person.name}><strong>{person.name}</strong><span>{person.role}</span><a href={`mailto:${person.email}`}>{person.email}</a>{person.phone && <a href={`tel:${person.phone.replaceAll(".", "")}`}>{person.phone}</a>}</div>)}</aside>
    </section>
  )
}

export default async function ContentPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params
  const page = pages[slug.join("/")]
  if (!page) notFound()

  return (
    <main className="datia-inner-page">
      <SiteHeader />
      <PageHero page={page} />
      {page.kind === "story" && <StoryContent />}
      {page.kind === "services" && <ServicesContent />}
      {(page.kind === "team" || page.kind === "advisors") && <PeopleContent kind={page.kind} />}
      {page.kind === "trusted" && <TrustedContent />}
      {page.kind === "contact" && <ContactContent />}
      <SiteFooter />
    </main>
  )
}
