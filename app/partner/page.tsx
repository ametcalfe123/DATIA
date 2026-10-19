import Image from "next/image"
import Link from "next/link"

const partners = [
  { name: "Allegion", image: "allegion.png" },
  { name: "AlphaBEST Education", image: "alphabest-education.png" },
  { name: "Chartwells", image: "chartwells.jpg" },
  { name: "College Board", image: "collegeboard.png" },
  { name: "Communities in Schools", image: "communities-in-schools.png" },
  { name: "CrowdStrike", image: "crowdstrike.png" },
  { name: "Extron", image: "extron.png" },
  { name: "Genetec", image: "genetec.png" },
  { name: "Lebra", image: "lebra.png" },
  { name: "Microsoft", image: "microsoft.png" },
  { name: "Otus", image: "otus.png" },
  { name: "Palo Alto Networks", image: "palo-alto-networks.jpg" },
  { name: "ParentSquare", image: "parentsquare.png" },
  { name: "Participate Learning", image: "participate-learning.png" },
  { name: "Pathwise", image: "pathwise.png" },
  { name: "PMX Sync", image: "primex-sync.png" },
  { name: "PowerSchool", image: "powerschool.jpg" },
  { name: "Prodigy", image: "prodigy.png" },
  { name: "Qualcomm Snapdragon", image: "qualcomm-snapdragon.webp" },
  { name: "Raptor Technologies", image: "raptor.webp" },
  { name: "Renaissance", image: "renaissance.png" },
  { name: "RethinkFirst", image: "rethinkfirst.jpg" },
  { name: "Right at School", image: "right-at-school.png" },
  { name: "Ruckus", image: "ruckus-commscope.png" },
  { name: "Sandy Hook Promise", image: "sandy-hook-promise.jpg" },
  { name: "Scanmarker", image: "scanmarker.png" },
  { name: "Schneider Electric", image: "schneider-electric-new.jpeg" },
  { name: "Stryker", image: "stryker.png" },
  { name: "Student", image: "studient.png" },
  { name: "Symetrix", image: "symetrix.png" },
  { name: "Transfinder", image: "transfinder.png" },
  { name: "TriVigil", image: "trivigil.png" },
  { name: "Valcom", image: "valcom.png" },
  { name: "Volt", image: "volt.png" },
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
        <Link className="brand-logo" href="/" aria-label="DATIA home"><Image src="/images/datia-ai-logo.png" alt="DATIA AI" width={150} height={40} unoptimized /></Link>
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
          {partners.map(({ name, image }) => (
            <div className="partner-logo-cell" key={name}>
              <Image src={`/logos/${image}`} alt={name} width={190} height={60} loading="lazy" unoptimized />
            </div>
          ))}
        </div>
      </section>

      <section className="different-section" id="about">
        <div className="different-copy"><p className="eyebrow">A better way to grow</p><h2>Decidedly Different</h2><p>DATIA brings data, media, and marketing expertise together to help you connect with the right buyers—and turn attention into action.</p><Link className="button button-red" href="/about/decidedly-different">Our Story <span aria-hidden="true">→</span></Link></div>
        <div className="different-art" aria-hidden="true"><div className="different-art-circle"><span>DATA</span><span>MEDIA</span><strong>DATIA</strong><span>INTENT</span></div></div>
      </section>

      <section className="team-cta">
        <p className="eyebrow">Let&apos;s move forward</p>
        <h2>Talk to the team</h2>
        <p>Let&apos;s start a conversation about your next opportunity.</p>
        <Link className="button button-red" href="/get-started">Meet the team <span aria-hidden="true">→</span></Link>
      </section>

      <footer className="site-footer partner-footer">
        <Link className="brand-logo" href="/" aria-label="DATIA home"><Image src="/images/datia-ai-logo.png" alt="DATIA AI" width={150} height={40} unoptimized /></Link>
        <p>ADVISED BY</p>
        <nav aria-label="Footer navigation"><a href="#abmxi">Flagship Offering</a><a href="#services">Marketing Services</a><a href="#testimonials">Trusted By</a><Link href="/">DATIA Home</Link><Link href="/privacy-policy">Privacy Policy</Link></nav>
        <small>© {new Date().getFullYear()} DATIA. All rights reserved.</small>
      </footer>
    </main>
  )
}
