import Image from "next/image"

const site = "https://www.datia.io"
const partner = `${site}/partner`

const partners = [
  "Allegion", "AlphaBEST Education", "Chartwells", "College Board", "Communities in Schools", "CrowdStrike", "Extron", "Genetec", "Lebra", "Microsoft", "Otus", "Palo Alto Networks", "ParentSquare", "Participate Learning", "Pathwise", "PMX Sync", "PowerSchool", "Prodigy", "Qualcomm Snapdragon", "Raptor Technologies", "Renaissance", "RethinkFirst", "Right at School", "Ruckus", "Sandy Hook Promise", "Scanmarker", "Schneider Electric", "Stryker", "Student", "Symetrix", "Transfinder", "TriVigil", "Valcom", "Volt",
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
  { title: "Put qualified prospects into your pipeline", text: "Reach the right decision-makers with data-driven account intelligence and targeted engagement." },
  { title: "Reach ideal buyers across the open web", text: "Get in front of your audience in the environments where they spend their time." },
  { title: "Give buyers content that moves them forward", text: "Create relevant, useful content for every stage of the decision process." },
  { title: "Turn expertise into market authority", text: "Build credibility and lasting recognition in the markets that matter." },
  { title: "Elevate your thought leadership position", text: "Bring your best ideas to the audiences ready to hear them." },
]

function PartnerHeader() {
  return (
    <header className="site-header partner-header">
      <div className="site-header-inner partner-header-inner">
        <a className="brand-logo" href={site} aria-label="DATIA home"><Image src={`${partner}/images/datia-ai-logo.png`} alt="DATIA AI" width={150} height={40} unoptimized /></a>
        <p className="header-tagline"><span aria-hidden="true" />THE AI-ENABLED FUSION OF DATA AND MEDIA</p>
        <nav className="partner-nav" aria-label="Partner page navigation">
          <a href="#abmxi">Flagship Offering</a>
          <a href="#services">Marketing Services</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#about">About</a>
        </nav>
        <a className="button button-red header-cta" href={`${site}/get-started`}>Partner with Us</a>
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
          <a href={`${site}/get-started`} className="button button-red partner-hero-button">Partner with Us <span aria-hidden="true">→</span></a>
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
          <Image src={`${partner}/images/section-1a-transparent.png`} alt="DATIA simplifies and consolidates intent signals, traditional media, government data, and agency services" width={900} height={460} unoptimized />
        </div>
        <div className="data-service-grid">
          {dataServices.map((item) => <article className="data-service-card" key={item.title}><span className="data-service-dot" aria-hidden="true" /><h3>{item.title}</h3><p>{item.text}</p></article>)}
        </div>
        <h3 className="simplify-title">Simplify and Consolidate</h3>
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
          <p className="eyebrow">Demand Gen and Marketing Services</p>
          <h2>We help create opportunities for your sales team</h2>
        </div>
        <div className="offerings-grid">
          {offerings.map((item) => <article className="offering-card" key={item.title}><span aria-hidden="true" className="offering-arrow">↗</span><h3>{item.title}</h3><p>{item.text}</p></article>)}
        </div>
      </section>

      <section className="trusted-section" id="testimonials">
        <div className="section-heading"><p className="eyebrow">Partnership that performs</p><h2>Trusted by Leading Brands</h2></div>
        <div className="partner-logo-grid">
          {partners.map((name) => {
            const file = name.replaceAll(" ", "_").replaceAll("&", "and")
            return <div className="partner-logo-cell" key={name}><Image src={`${partner}/logos/${file}.png`} alt={name} width={190} height={60} loading="lazy" unoptimized /></div>
          })}
        </div>
      </section>

      <section className="different-section" id="about">
        <div className="different-copy"><p className="eyebrow">A better way to grow</p><h2>Decidedly Different</h2><p>DATIA brings data, media, and marketing expertise together to help you connect with the right buyers—and turn attention into action.</p><a className="button button-red" href={`${site}/about/decidedly-different`}>Our Story <span aria-hidden="true">→</span></a></div>
        <div className="different-art" aria-hidden="true"><div className="different-art-circle"><span>DATA</span><span>MEDIA</span><strong>DATIA</strong><span>INTENT</span></div></div>
      </section>

      <section className="team-cta">
        <p className="eyebrow">Let&apos;s move forward</p>
        <h2>Talk to the team</h2>
        <p>Let&apos;s start a conversation about your next opportunity.</p>
        <a className="button button-red" href={`${site}/get-started`}>Meet the team <span aria-hidden="true">→</span></a>
      </section>

      <footer className="site-footer partner-footer">
        <a className="brand-logo" href={site} aria-label="DATIA home"><Image src={`${partner}/images/datia-ai-logo.png`} alt="DATIA AI" width={150} height={40} unoptimized /></a>
        <p>ADVISED BY</p>
        <nav aria-label="Footer navigation"><a href="#abmxi">Flagship Offering</a><a href="#services">Marketing Services</a><a href="#testimonials">Trusted By</a><a href={`${site}`}>DATIA Home</a></nav>
        <small>© {new Date().getFullYear()} DATIA. All rights reserved.</small>
      </footer>
    </main>
  )
}
