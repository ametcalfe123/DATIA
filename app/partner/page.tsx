import Image from "next/image"
import Link from "next/link"

const partners = [
  { name: "Allegion", image: "allegion.png" },
  { name: "AlphaBEST Education", image: "alphabest-education.png" },
  { name: "Chartwells", image: "chartwells.jpg" },
  { name: "College Board", image: "collegeboard.png" },
  { name: "Communities in Schools", image: "communities-in-schools.png" },
  { name: "CrowdStrike", image: "crowdstrike.png" },
]

const markets = [
  { name: "Education", detail: "K-12, Higher Ed", image: "edu-icon.png" },
  { name: "Government", detail: "State and Local, Federal", image: "gov-icon.png" },
  { name: "HR", detail: "Human Resources, Employee Benefits", image: "hr-icon.png" },
  { name: "Financial Services", detail: "Investment Advisors, Banking, Insurance", image: "financial-icon.png" },
  { name: "Technology", detail: "Identity, Enterprise, Cybersecurity", image: "technology-icon.png" },
  { name: "Retail", detail: "Technology, C-Suite and Management", image: "retail-icon.png" },
  { name: "Healthcare", detail: "Technology, C-Suite and Management", image: "healthcare-icon.png" },
]

const testimonials = [
  { quote: "Partnering with DATIA on our ABM experience was great. From the early research and planning stages through the live campaign, their team has been responsive, insightful, and easy to work with. We have seen strong engagement and high-quality leads.", name: "Anamaria Knight", role: "Senior Director, Product/Marketing/R&E", company: "Participate Learning" },
  { quote: "DATIA has been awesome to work with. Their creative ideas, campaign strategy, and the way they bring everything together with great assets has really pushed our marketing forward. They take the time to get to know you and your desired outcomes.", name: "Mark McGinnis", role: "Chief Evangelist", company: "TriVigil" },
  { quote: "DATIA's team brought deep industry experience and expertise to our custom research project, delivering valuable insights that directly informed our strategy. Their smart work and commitment to best practices ensure we receive actionable, high-quality analysis.", name: "Shannon Zaher", role: "Vice President, Product Marketing", company: "Raptor Technologies" },
]

const partnerTeam = [
  { name: "Jim Callan", role: "Founder/CEO", image: "jim-callan-new.jpg" },
  { name: "Steve Bevilacqua", role: "Vice President of Sales", image: "steve-bevilacqua.jpg" },
  { name: "Rachel Davis", role: "Vice President of Sales", image: "rachel-davis.jpg" },
  { name: "Kurt Dyrli", role: "Editorial Director", image: "kurt-dyrli.jpg" },
  { name: "Dana Jackson", role: "Fractional Head of Research", image: "dana-jackson.jpg" },
  { name: "Amy Metcalfe", role: "Senior Director, Marketing & Operations", image: "amy-metcalfe.jpg" },
]

const advisors = [
  { name: "Jason McKenna", role: "V.P. of Global Educational Strategy", image: "jason-mckenna.jpg" },
  { name: "Dr. Robert Asossa", role: "Former Superintendent", image: "" },
  { name: "Randall Dennis", role: "Market Leader, Convergint", image: "randall-dennis.jpg" },
  { name: "Kathy Hurley", role: "Principal Consultant", image: "kathy-hurley.jpg" },
  { name: "Terry Arsenault", role: "Founder, Vyne", image: "terry-arsenault.png" },
  { name: "Tom Fowler", role: "Sales and Marketing Advisor", image: "tom-fowler.jpg" },
]

const dataServices = [
  { title: "Public-record data", text: "First-party insight into the organizations and people that matter." },
  { title: "Intent data", text: "Signals that show which accounts are actively researching." },
  { title: "Traditional media", text: "Brand-safe reach across the channels your buyers trust." },
  { title: "Creative agency", text: "Content and creative that make every interaction count." },
]

const growthStages = [
  { title: "Establish", text: "Define your ideal accounts, audiences, and message." },
  { title: "Warm", text: "Build recognition and intent across the buyer journey." },
  { title: "Generate", text: "Turn active interest into qualified opportunities." },
  { title: "Scale", text: "Expand what works across channels and markets." },
]

const offerings = [
  { name: "TGL", label: "Targeted Guaranteed Leads", title: "Put qualified prospects into your pipeline", text: "Prospect identification and intent analysis for fueling the sales pipeline with high-converting, top-of-funnel leads.", action: "See TGL in action" },
  { name: "PUSH", label: "Persona-Based Ad Targeting", title: "Reach ideal buyers across the open web", text: "Strategic advertising campaigns tailored to your ideal buyers for maximum engagement and conversion across the open web.", action: "Explore PUSH targeting" },
]

function PartnerHeader() {
  return (
    <header className="site-header partner-header">
      <div className="site-header-inner partner-header-inner">
        <Link className="brand-logo" href="/" aria-label="DATIA home"><Image src="/images/datia-ai-logo.png" alt="DATIA AI" width={150} height={40} loading="eager" unoptimized /></Link>
        <p className="header-tagline"><span aria-hidden="true" />THE AI-ENABLED FUSION OF DATA AND MEDIA</p>
        <nav className="partner-nav" aria-label="Partner page navigation">
          <a href="#abmxi">Flagship Offering</a>
          <a href="#services">Marketing Services</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#about">About</a>
        </nav>
        <Link className="button button-red header-cta" href="/get-started">Partner with Us</Link>
      </div>
    </header>
  )
}

export default function PartnerPage() {
  return (
    <main className="partner-page">
      <PartnerHeader />
      <section className="partner-hero">
        <div className="partner-hero-content">
          <h1>From Impression to Appointment.<br />A Content-Driven, Intent Strategy</h1>
          <p>DATIA brings buyer identification, cross-channel engagement, and intent intelligence together in one place, turning insights into action and action into qualified leads.</p>
          <Link href="/get-started" className="button button-red partner-hero-button">Partner with Us <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="abm-section" id="abmxi">
        <div className="section-heading partner-section-heading">
          <h2>ABMxi — Account-Based Marketing Intelligence</h2>
          <p>A content journey from insight to impact. Not simply an intent-driven lead program.</p>
          <p>Lead intelligence drives performance, and most marketers rely on four separate providers to get the full picture.</p>
          <p>Buyer intelligence sharpens targeting, your exact personas are warmed across LinkedIn, Facebook and brand-safe websites, then your thought leadership goes out by targeted email — because decision-makers engage with content several times before they&apos;re ready to talk to Sales.</p>
        </div>
        <div className="abm-visual">
          <Image src="/partner/images/section-1a-transparent.png" alt="DATIA simplifies and consolidates intent signals, traditional media, government data, and agency services" width={900} height={460} unoptimized />
        </div>
        <div className="data-service-grid">
          {dataServices.map((item) => <article className="data-service-card" key={item.title}><span className="data-service-dot" aria-hidden="true" /><h3>{item.title}</h3><p>{item.text}</p></article>)}
        </div>
        <div className="simplify-banner">
          <h3>Simplify and Consolidate</h3>
          <p>These platforms show how the signals DATIA puts them to work by unifying buyer, audience, data, media, and lead generation in one sales-ready intelligence dashboard.</p>
        </div>
        <Link className="abmxi-more-link" href="/services">How ABMxi works <span aria-hidden="true">→</span></Link>
      </section>

      <section className="growth-section">
        <div className="section-heading">
          <p className="eyebrow">A connected buyer journey</p>
          <h2>How We Fuel Growth</h2>
        </div>
        <div className="growth-grid">
          {growthStages.map((stage, index) => <article className="growth-card" key={stage.title}><span className="growth-number">{String(index + 1).padStart(2, "0")}</span><h3>{stage.title}</h3><p>{stage.text}</p></article>)}
        </div>
      </section>

      <section className="partner-services-section" id="services">
        <div className="section-heading">
          <h2>Demand Gen and Marketing Services</h2>
          <p>Flexible solutions to fuel your buyer engagement strategy.</p>
        </div>
        <div className="offerings-grid">
          {offerings.map((item) => (
            <article className="offering-card" key={item.name}>
              <span className="offering-icon" aria-hidden="true">{item.name === "TGL" ? "◎" : "↗"}</span>
              <p className="offering-name">{item.name}</p>
              <h3>{item.title}</h3>
              <p className="offering-label">{item.label}</p>
              <p>{item.text}</p>
              <Link href="/get-started" className="offering-link">{item.action} <span aria-hidden="true">→</span></Link>
            </article>
          ))}
        </div>
        <div className="markets-served">
          <h3>Markets We Serve</h3>
          <div className="markets-served-grid">
            {markets.map((market) => (
              <article className="market-served-card" key={market.name}>
                <Image src={`/images/${market.image}`} alt="" width={24} height={24} loading="eager" unoptimized />
                <h4>{market.name}</h4>
                <p>{market.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trusted-section" id="testimonials">
        <div className="section-heading">
          <h2>Trusted by Leading Brands</h2>
          <p>DATIA believes in the power of collaboration. Here are some of the organizations we&apos;ve worked with to drive meaningful outcomes.</p>
        </div>
        <div className="partner-logo-grid" aria-label="Featured partners">
          {partners.map(({ name, image }) => (
            <div className="partner-logo-cell" key={name}>
              <Image src={`/logos/${image}`} alt={name} width={190} height={60} loading="eager" unoptimized />
            </div>
          ))}
        </div>
        <div className="partner-video-wrap">
          <p>Allison Danes · Right at School</p>
          <div className="partner-video-frame">
            <iframe src="https://fast.wistia.net/embed/iframe/pghthuyp7z?seo=false&videoFoam=true" title="Allison Danes — Right at School" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
          </div>
        </div>
        <div className="partner-testimonial-grid">
          {testimonials.map((testimonial) => (
            <article className="partner-testimonial-card" key={testimonial.name}>
              <span aria-hidden="true" className="testimonial-quote-mark">“</span>
              <blockquote>{testimonial.quote}</blockquote>
              <footer><strong>{testimonial.name}</strong><span>{testimonial.role}</span><small>{testimonial.company}</small></footer>
            </article>
          ))}
        </div>
      </section>

      <section className="partner-contact-section" id="about">
        <div className="partner-contact-content">
          <div className="partner-contact-heading">
            <p className="eyebrow">The people behind the platform</p>
            <h2>Talk to the DATIA team</h2>
            <p>Tell us what you&apos;re working on and which services you&apos;re interested in.</p>
          </div>
          <div className="partner-team">
            <h3>Meet the team</h3>
            <div className="partner-team-grid">
              {partnerTeam.map((person) => (
                <article className="partner-team-person" key={person.name}>
                  <Image src={`/images/${person.image}`} alt={person.name} width={88} height={88} loading="eager" unoptimized />
                  <strong>{person.name}</strong>
                  <span>{person.role}</span>
                </article>
              ))}
            </div>
          </div>
          <form className="partner-contact-form">
            <div className="partner-form-grid">
              <label>First name<input autoComplete="given-name" name="firstName" required /></label>
              <label>Last name<input autoComplete="family-name" name="lastName" required /></label>
              <label>Email<input autoComplete="email" name="email" type="email" required /></label>
              <label>Phone<input autoComplete="tel" name="phone" type="tel" /></label>
              <label>Company name<input autoComplete="organization" name="company" /></label>
              <label>Website<input autoComplete="url" name="website" type="url" /></label>
            </div>
            <fieldset className="partner-solutions">
              <legend>Solutions of interest</legend>
              {[["ABMxi", "Targeted Guaranteed Leads (TGL)"], ["Persona-Based Ad Targeting (PUSH)", "Content Studio"], ["Research", "Web Seminars"]].map((row) => (
                <div className="partner-solution-row" key={row.join("-")}>{row.map((solution) => <label key={solution}><input name="solutions" type="checkbox" value={solution} />{solution}</label>)}</div>
              ))}
            </fieldset>
            <label className="partner-message">Message<textarea name="message" rows={4} /></label>
            <button className="button button-red" type="button">Partner with Us <span aria-hidden="true">→</span></button>
          </form>
        </div>
      </section>

      <footer className="site-footer partner-footer">
        <div className="partner-footer-main">
          <div className="partner-footer-brand">
            <Link className="brand-logo" href="/" aria-label="DATIA home"><Image src="/images/datia-ai-logo-white.png" alt="DATIA AI" width={150} height={40} loading="eager" unoptimized /></Link>
            <p>Insights born from data.</p>
          </div>
          <div><h3>Services</h3><Link href="/services">Account-Based Marketing Intelligence (ABMxi)</Link><Link href="/services">Targeted Guaranteed Leads (TGL)</Link><Link href="/services">Persona-Based Ad Targeting (PUSH)</Link><Link href="/services">Content Studio</Link><Link href="/services">Research</Link></div>
          <div><h3>Company</h3><Link href="/services">Flagship Offering</Link><Link href="/services">Marketing Services</Link><Link href="/trusted-by">Testimonials</Link><Link href="/about/decidedly-different">About</Link></div>
          <div><h3>Connect</h3><a href="#about">Partner with Us</a><a href="https://www.linkedin.com/company/datia-ai/" target="_blank" rel="noreferrer">LinkedIn</a></div>
        </div>
        <div className="partner-advisors">
          <p>Advised by</p>
          <div className="partner-advisor-grid">
            {advisors.map((advisor) => (
              <div className="partner-advisor" key={advisor.name}>
                {advisor.image ? <Image src={`/images/${advisor.image}`} alt="" width={48} height={48} loading="eager" unoptimized /> : <span className="partner-advisor-initials" aria-hidden="true">RA</span>}
                <strong>{advisor.name}</strong>
                <span>{advisor.role}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="partner-footer-bottom"><small>© {new Date().getFullYear()} DATIA AI. All rights reserved.</small><nav aria-label="Legal navigation"><Link href="/privacy-policy">Privacy Policy</Link></nav></div>
      </footer>
    </main>
  )
}
