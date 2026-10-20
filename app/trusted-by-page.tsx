import Image from "next/image"
import Link from "next/link"

const clients = [
  { name: "Microsoft", image: "microsoft.png", url: "https://www.microsoft.com/" },
  { name: "Qualcomm Snapdragon", image: "qualcomm-snapdragon-transparent.png", url: "https://www.qualcomm.com/" },
  { name: "AlphaBEST Education", image: "alphabest-education-transparent.png", url: "https://www.alphabest.org/" },
  { name: "Extron", image: "extron.png", url: "https://www.extron.com/" },
  { name: "Genetec", image: "genetec.png", url: "https://www.genetec.com/" },
  { name: "Right at School", image: "right-at-school.png", url: "https://rightatschool.com/" },
  { name: "Transfinder", image: "transfinder.png", url: "https://www.transfinder.com/" },
  { name: "VOLT AI", image: "volt.png", url: "https://www.volt.ai/" },
  { name: "Schneider Electric", image: "schneider-electric-new.jpeg", url: "https://www.se.com/" },
  { name: "Participate Learning", image: "participate-learning-transparent.png", url: "https://www.participatelearning.com/" },
  { name: "College Board", image: "collegeboard.png", url: "https://www.collegeboard.org/" },
  { name: "CrowdStrike", image: "crowdstrike.png", url: "https://www.crowdstrike.com/" },
  { name: "TriVigil", image: "trivigil.png", url: "https://trivigil.com/" },
  { name: "Sandy Hook Promise", image: "sandy-hook-promise-transparent.png", url: "https://www.sandyhookpromise.org/" },
  { name: "Stryker", image: "stryker-transparent.png", url: "https://www.stryker.com/" },
  { name: "Ruckus CommScope", image: "ruckus-commscope.png", url: "https://www.ruckusnetworks.com/" },
  { name: "PowerSchool", image: "powerschool-transparent.png", url: "https://www.powerschool.com/" },
  { name: "Studient", image: "studient.png", url: "https://studient.com/" },
  { name: "Symetrix", image: "symetrix.png", url: "https://www.symetrix.co/" },
  { name: "Renaissance", image: "renaissance.jpg", url: "https://www.renaissance.com/" },
  { name: "Raptor Technologies", image: "raptor.webp", url: "https://www.raptortech.com/" },
  { name: "Otus", image: "otus.png", url: "https://www.otus.com/" },
  { name: "Primex Sync", image: "primex-sync.png", url: "https://www.primexinc.com/" },
  { name: "Valcom Potter Global Technologies", image: "valcom.png", url: "https://www.valcom.com/" },
  { name: "Prodigy Education", image: "prodigy.png", url: "https://www.prodigygame.com/" },
  { name: "Palo Alto Networks", image: "palo-alto-networks-transparent.png", url: "https://www.paloaltonetworks.com/" },
  { name: "RethinkFirst", image: "rethinkfirst-transparent.png", url: "https://www.rethinkfirst.com/" },
  { name: "Allegion", image: "allegion.png", url: "https://www.allegion.com/" },
  { name: "ASSA ABLOY", image: "assa-abloy.png", url: "https://www.assaabloy.com/" },
  { name: "Brivo", image: "brivo.png", url: "https://www.brivo.com/" },
  { name: "Pathwise", image: "pathwise.png", url: "https://pathwise.com/" },
  { name: "ParentSquare", image: "parentsquare-transparent.png", url: "https://www.parentsquare.com/" },
  { name: "Communities In Schools", image: "communities-in-schools.png", url: "https://www.communitiesinschools.org/" },
  { name: "Chartwells K12", image: "chartwells-transparent.png", url: "https://www.chartwells.com/" },
  { name: "Cengage", image: "cengage.png", url: "https://www.cengage.com/" },
  { name: "Classroom Mosaic", image: "classroom-mosaic.png", url: "https://classroommosaic.com/" },
  { name: "Committee for Children", image: "committee-for-children.png", url: "https://www.cfchildren.org/" },
  { name: "Coursemojo", image: "coursemojo.png", url: "https://www.coursemojo.com/" },
  { name: "Lebra", image: "lebra.png", url: "https://lebra.com/" },
  { name: "Energy Systems Group", image: "energy-systems-group.png", url: "https://www.esg.com/" },
  { name: "First Student", image: "first-student.png", url: "https://www.firststudentinc.com/" },
  { name: "Fishtank Learning", image: "fishtank-learning.png", url: "https://www.fishtanklearning.org/" },
  { name: "Frontline Education", image: "frontline-education.png", url: "https://www.frontlineeducation.com/" },
  { name: "Full Compass", image: "full-compass.png", url: "https://www.fullcompass.com/" },
  { name: "Kelly Education", image: "kelly-education.png", url: "https://www.kellyeducation.com/" },
  { name: "Beanstack", image: "beanstack.png", url: "https://www.beanstack.com/" },
  { name: "Jar Systems", image: "jar-systems.png", url: "https://www.jarsystems.com/" },
  { name: "Instructure", image: "instructure.png", url: "https://www.instructure.com/" },
  { name: "Great Minds", image: "great-minds.png", url: "https://greatminds.org/" },
  { name: "MIND Education", image: "mind-education.png", url: "https://www.mindeducation.org/" },
  { name: "LG", image: "lg.png", url: "https://www.lg.com/us" },
  { name: "Learning Without Tears", image: "learning-without-tears.png", url: "https://www.lwtears.com/" },
  { name: "Lincoln Learning", image: "lincoln-learning.png", url: "https://www.lincolnlearningsolutions.org/" },
  { name: "Lightspeed Technologies", image: "lightspeed.png", url: "https://www.lightspeed-tek.com/" },
  { name: "Magma Math", image: "magma-math.png", url: "https://www.magmamath.com/" },
]

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
    role: "Vice President, Product Marketing",
    company: "Raptor Technologies",
  },
  {
    quote: "I've partnered with DATIA to create several content pieces. From a logistics standpoint, they're very responsive, and they bring great knowledge about the K-12 market to the table.",
    name: "Taylor Frey",
    role: "Sr. Marketing Manager",
    company: "",
  },
]

const navItems = [
  ["Our Story", "/about/decidedly-different"],
  ["Services", "/services"],
  ["Meet the Team", "/about/our-team"],
  ["Advisory Board", "/about/our-advisors"],
  ["Trusted By", "/trusted-by"],
] as const

function TrustedHeader() {
  return (
    <header className="site-header home-header">
      <div className="site-header-inner home-header-inner">
        <Link className="brand-logo" href="/" aria-label="DATIA home">
          <Image src={`/images/datia-ai-logo.png`} alt="DATIA AI" width={176} height={40} unoptimized />
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map(([label, href]) => <Link href={href} key={label}>{label}</Link>)}
        </nav>
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

function TrustedFooter() {
  const footerLinks = [
    ["Our Story", "/about/decidedly-different"],
    ["Meet the Team", "/about/our-team"],
    ["Advisory Board", "/about/our-advisors"],
    ["Trusted By", "/trusted-by"],
    ["Privacy Policy", "/privacy-policy"],
  ] as const
  const markets = ["Education", "Government", "HR", "Financial Services", "Retail", "Healthcare", "Technology", "Cybersecurity/Identity"]

  return (
    <footer className="site-footer inner-footer">
      <div className="inner-footer-about">
        <Link className="brand-logo" href="/" aria-label="DATIA home">
          <Image src={`/images/datia-ai-logo-white.png`} alt="DATIA AI" width={176} height={40} unoptimized />
        </Link>
        <p>A sales and marketing intelligence company offering enhanced lead generation and media services that integrate intent data and AI-driven insights.</p>
        <h2>Markets Served</h2>
        <ul>{markets.map((market) => <li key={market}>{market}</li>)}</ul>
      </div>
      <nav aria-label="Footer navigation">
        {footerLinks.map(([label, href]) => <Link href={href} key={label}>{label}</Link>)}
      </nav>
      <small>© 2025. All rights reserved.</small>
    </footer>
  )
}

export default function TrustedByPage() {
  return (
    <main className="datia-inner-page trusted-by-page">
      <TrustedHeader />
      <section className="trusted-hero" aria-labelledby="trusted-title">
        <h1 id="trusted-title">Trusted by Leading Brands</h1>
        <p>DATIA believes in the power of collaboration. Here are some of the organizations we&apos;ve worked with to drive meaningful outcomes.</p>
        <div className="trusted-video-wrap">
          <p className="trusted-video-caption">Allison Danes - Right At School</p>
          <div className="trusted-video-frame">
            <iframe
              src="https://fast.wistia.net/embed/iframe/pghthuyp7z?seo=false&videoFoam=true"
              title="Allison Danes - Right At School"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="trusted-logo-section" aria-label="DATIA clients">
        <div className="trusted-logo-grid">
          {clients.map((client) => (
            <a href={client.url} target="_blank" rel="noopener noreferrer" title={`Visit ${client.name}`} key={client.name}>
              <Image src={`/logos/${client.image}`} alt={`${client.name} logo`} width={160} height={96} unoptimized loading="lazy" />
            </a>
          ))}
        </div>
      </section>

      <section className="trusted-testimonials" aria-labelledby="client-spotlight-title">
        <h2 id="client-spotlight-title">Client Spotlight</h2>
        <div className="trusted-testimonial-grid">
          {testimonials.map((testimonial) => (
            <article className="trusted-testimonial-card" key={testimonial.name}>
              <span className="trusted-quote-mark" aria-hidden="true">“</span>
              <div>
                <blockquote>&quot;{testimonial.quote}&quot;</blockquote>
                <div className="trusted-attribution">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                  {testimonial.company && <span className="trusted-client-name">{testimonial.company}</span>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <TrustedFooter />
    </main>
  )
}
