import Image from "next/image"
import { ServiceCard } from "@/components/service-card"
import {
  ArrowRight,
  ChevronDown,
  CircleCheck,
  Database,
  FileText,
  Mail,
  Megaphone,
  PhoneCall,
  Search,
  Star,
  TrendingUp,
  Users,
  Video,
  Zap,
} from "lucide-react"

const alternatives = [
  {
    title: "Public record data",
    description: "Paid tools that surface institutional, procurement, budget, and activity signals, no contactable leads.",
  },
  {
    title: "Intent data",
    description: "Additional paid tools identifying accounts showing buying signals only, no engagement options.",
  },
  {
    title: "Traditional media",
    description: "Advertising and native content within individual industry channels, sold and reported on its own.",
  },
  {
    title: "Creative agency",
    description: "Social, programmatic, content, research and ad production, on a separate retainer.",
  },
]

const growthStages = [
  {
    number: "01",
    title: "Establish",
    subtitle: "Intelligence + ABM foundation",
    description: "Buyer intelligence sharpens the target list: exact personas, districts, and geographies, with the signals behind each one.",
    Icon: Database,
  },
  {
    number: "02",
    title: "Warm",
    subtitle: "Build familiarity through content",
    description: "Your personas see your brand on LinkedIn, Facebook, and brand-safe websites because decision-makers engage with content several times before they're ready to talk to sales.",
    Icon: Megaphone,
  },
  {
    number: "03",
    title: "Generate",
    subtitle: "Create initial contactable pipeline",
    description: "Thought leadership goes out by targeted email. Every download comes back as a guaranteed, persona-targeted lead with full contact details.",
    Icon: Mail,
  },
  {
    number: "04",
    title: "Scale",
    subtitle: "Add volume when needed",
    description: "Growth packs add leads and impressions on demand for priority markets, campaigns, or buying windows.",
    Icon: TrendingUp,
  },
]

const abmxiDeliverables = [
  "Turnkey campaign creative development",
  "Persona + geo-targeting",
  "LinkedIn + Facebook deployment",
  "Brand-safe website deployment",
  "Buyer intelligence + signal stacking",
  "Targeted impressions",
  "Guaranteed persona-targeted leads",
  "Lead scoring + engagement tracking",
  "Sales-ready Intelligence Dashboard",
]

const abmxiSignals = [
  "Buyer Intel",
  "Reading behavior",
  "RFPs and bids",
  "Grants and bonds",
  "Strategic initiatives",
  "Leadership changes",
  "Industry news",
]

const abmxiSalesOutcomes = [
  "Engagement context",
  "Account signals",
  "Lead scoring",
  "SQLs distinguished from MQLs",
]

const services = [
  {
    name: "TGL",
    category: "Targeted Guaranteed Leads",
    title: "Put qualified prospects into your pipeline",
    description: "Prospect identification and intent analysis for fueling the sales pipeline with high-converting, top-of-funnel leads.",
    action: "See TGL in action",
    Icon: Users,
    whatYouGet: ["Targeted audience by title, geo, and size", "Thought-leadership content", "Two-click access to gated content", "Easy-to-upload leads"],
    howItWorks: ["Define audience", "Set lead goal", "Approve email", "Get weekly leads"],
    whyItMatters: ["Guaranteed leads", "Boost brand authority", "Improve pipeline", "Lead insights"],
  },
  {
    name: "PUSH",
    category: "Persona-Based Ad Targeting",
    title: "Reach ideal buyers across the open web",
    description: "Strategic advertising campaigns tailored to your ideal buyers for maximum engagement and conversion across the open web.",
    action: "Explore PUSH targeting",
    popup: true,
    Icon: Zap,
    whatYouGet: ["Persona development", "Cross-platform ad management", "Dynamic creative optimization", "Advanced audience segmentation"],
    howItWorks: ["Define audience", "Creative assets", "Launch and optimize", "Analyze and scale"],
    whyItMatters: ["Engage ideal prospects", "Scalable and cost-effective", "Cookieless targeting", "Drive traffic to your site"],
  },
  {
    name: "CONTENT STUDIO",
    category: "Content Creation & Strategy",
    title: "Give buyers content that moves them forward",
    description: "Custom content creation, tailored to specific goals and objectives. From whitepapers to interactive media that drives action.",
    action: "Inside Content Studio",
    Icon: FileText,
    whatYouGet: ["Content review and strategy development", "Tailored content creation", "Multi-format content production", "Brand voice and messaging alignment"],
    howItWorks: ["Content audit and strategy development", "Content creation and optimization", "Publishing and distribution", "Editorial performance monitoring and refinement"],
    whyItMatters: ["Higher engagement rates", "Improved brand consistency", "Enhanced thought leadership positioning", "Development of case studies and thought leadership Q&As"],
  },
  {
    name: "RESEARCH",
    category: "Market Research & Analysis",
    title: "Turn expertise into market authority",
    description: "Showcase industry expertise and product innovation with proprietary research that positions your brand as a thought leader.",
    action: "Our research process",
    Icon: Search,
    whatYouGet: ["Market landscape analysis", "Competitive intelligence gathering", "Customer persona development", "Industry trend identification"],
    howItWorks: ["Research objectives definition", "Data collection methodology design", "Primary and secondary research execution", "Analysis and insight generation", "Research report development"],
    whyItMatters: ["Data-driven decision making", "Competitive advantage insights", "Improved market positioning", "Enhanced customer understanding", "Showcase industry expertise"],
  },
  {
    name: "WEB SEMINARS",
    category: "On-Demand Web Seminar + Lead Gen",
    title: "Elevate your thought leadership position",
    description: "A high-value video asset that builds credibility, reaches targeted decision-makers, and generates leads.",
    action: "Why Web Seminars",
    Icon: Video,
    whatYouGet: ["Strategy and format development", "Editorial review of content and speakers", "Turnkey panel or presentation-style production", "TGL promotion for guaranteed leads"],
    howItWorks: ["Speaker and content review", "Web seminar recording and production", "Marketing content creation and promotion", "Weekly lead generation (See TGL)"],
    whyItMatters: ["Extend the life of your content", "Build thought leadership and credibility", "Ongoing engagement", "Lead generation"],
  },
  {
    name: "BDR SERVICES",
    category: "Business Development Representative",
    title: "Opportunities created for your sales team",
    description: "Turning marketing-generated interest into qualified sales conversations.",
    action: "See our service",
    Icon: PhoneCall,
    whatYouGet: ["Personalized prospect outreach", "Lead engagement", "Lead qualification", "Buying-signal identification", "Consistent follow-up"],
    howItWorks: ["Goals and campaign discovery", "Script and messaging creation", "Coordinated phone and email outreach", "Prospect engagement and follow-up", "MQL nurture and qualification"],
    whyItMatters: ["Turn MQLs into meaningful conversations", "Increase engagement with high-value prospects", "Extend the value of your lead-generation campaigns", "Keep prospects moving toward sales readiness", "Give your sales team more qualified opportunities"],
  },
]

const markets = [
  { name: "Education", detail: "K–12, Higher Ed", image: "edu-icon.png" },
  { name: "Government", detail: "State and Local, Federal", image: "gov-icon.png" },
  { name: "HR", detail: "Human Resources, Employee Benefits", image: "hr-icon.png" },
  { name: "Financial Services", detail: "Investment Advisor, Banking, Insurance", image: "financial-icon.png" },
  { name: "Technology", detail: "Identity, Enterprise, Cybersecurity", image: "technology-icon.png" },
  { name: "Retail", detail: "Technology, C-Suite and Management", image: "retail-icon.png" },
  { name: "Healthcare", detail: "Technology, C-Suite and Management", image: "healthcare-icon.png" },
]

const clientLogos = [
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
  { name: "Studient", image: "studient.png" },
  { name: "Symetrix", image: "symetrix.png" },
  { name: "Transfinder", image: "transfinder.png" },
  { name: "TriVigil", image: "trivigil.png" },
  { name: "Valcom", image: "valcom.png" },
  { name: "VOLT", image: "volt.png" },
]

const testimonials = [
  {
    quote: "Partnering with DATIA on our ABM campaign has been a great experience. From the early research and planning stages through the live campaign, their team has been responsive, insightful, and easy to work with. We've seen strong engagement and high-quality leads so far, and the dashboards and regular updates have helped us stay aligned and see what's working.",
    name: "Anamaria Knight",
    role: "Senior Director Product/Marketing/R&E",
    company: "Participate Learning",
  },
  {
    quote: "DATIA has been awesome to work with. Their creative ideas, campaign strategy, and the way they bring everything together with great assets has really pushed our marketing forward. They take the time to get to know you and your desired outcomes — it's not just quantity, it's also about quality. They just get it!",
    name: "Mark McGinnis",
    role: "Chief Evangelist",
    company: "TriVigil",
  },
  {
    quote: "DATIA's team brought deep industry experience and expertise to our custom research project, delivering valuable insights that directly informed our strategy. Their smart work and commitment to best practices ensure we receive actionable, high-quality analysis tailored to our needs.",
    name: "Shannon Zaher",
    role: "Vice President Product Marketing",
    company: "Raptor Technologies",
  },
]

export function PartnerHero() {
  return (
    <section className="partner-hero" aria-labelledby="partner-hero-title">
      <div className="partner-hero-content">
        <h1 id="partner-hero-title">
          <span className="partner-hero-mainline">From Buyer Intent to Qualified Opportunities</span>
          <span className="partner-hero-subline">A Content-Driven Approach to a Stronger Pipeline</span>
        </h1>
        <p className="partner-hero-copy">
          DATIA unifies buyer identification, cross-channel engagement, and intent intelligence into one powerful intelligence dashboard, helping you turn actionable insights into meaningful engagement and engagement into qualified leads.
        </p>
        <a className="button button-red partner-hero-button" href="#contact">
          Partner with Us <ArrowRight aria-hidden="true" size={22} />
        </a>
      </div>
    </section>
  )
}

export function AbmSection() {
  return (
    <section className="abm-section" id="abmxi" aria-labelledby="abm-title">
      <div className="section-heading partner-section-heading">
        <p className="eyebrow">Flagship offering</p>
        <h2 id="abm-title">ABMxi — Account-Based Marketing Intelligence</h2>
        <p>The whole is greater than the sum of its parts, yet most marketers rely on <strong>four separate providers</strong> to get the full picture.</p>
      </div>
      <div className="abm-content-layout">
        <div className="data-service-grid">
          {alternatives.map((service, index) => (
            <article className="data-service-card" key={service.title}>
              <span className="data-service-number">{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
        <div className="abm-visual">
          <Image
            src="/partner/images/section-1a-transparent.png?v=2"
            alt="DATIA unifies audience data, intent, media, and lead generation"
            width={1600}
            height={820}
            unoptimized
            priority
          />
        </div>
      </div>
  <div className="simplify-banner">
  <h3>Simplify and Consolidate</h3>
  <p>DATIA brings all of these capabilities together in one connected intelligence platform, where each component strengthens the others.</p>
  <p>By unifying buyer intent, audience data, cross-channel media, and lead generation, DATIA transforms disconnected insights into coordinated action, delivering a more complete view of the buyer and a more direct path from initial interest to qualified sales opportunities.</p>
  </div>
  <GrowthSection />
    </section>
  )
}

export function GrowthSection() {
  return (
    <section className="growth-section" id="growth" aria-labelledby="growth-title">
      <div className="section-heading">
        <p className="eyebrow">A connected buyer journey</p>
        <h2 id="growth-title">How DATIA Fuels Growth</h2>
            </div>
      <div className="growth-grid">
        {growthStages.map(({ number, title, subtitle, description, Icon }) => (
          <article className="growth-card" key={title}>
            <div className="growth-card-top">
              <span className="growth-icon"><Icon aria-hidden="true" size={25} strokeWidth={1.7} /></span>
              <span className="growth-number">{number}</span>
            </div>
            <h3>{title}</h3>
            <p className="growth-subtitle">{subtitle}</p>
            <p className="growth-description">{description}</p>
          </article>
        ))}
      </div>
      <p className="growth-closing">Engagement and intelligence then help Sales know who to prioritize, why now, and what to discuss.</p>
      <details className="abmxi-dropdown">
        <summary className="button button-red abmxi-dropdown-toggle">
          ABMxi Fast Facts <ChevronDown className="abmxi-dropdown-chevron" aria-hidden="true" size={20} />
        </summary>
        <div className="abmxi-dropdown-panel">
          <h3>ABMxi Fast Facts</h3>
          <div className="abmxi-dropdown-grid">
            <div>
              <h4>What you get</h4>
              <ul>
                {abmxiDeliverables.map((item) => (
                  <li key={item}><CircleCheck aria-hidden="true" size={20} />{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Signals we track</h4>
              <ul className="abmxi-dot-list">
                {abmxiSignals.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4>What sales gets</h4>
              <ul>
                {abmxiSalesOutcomes.map((item) => (
                  <li key={item}><Star aria-hidden="true" size={20} />{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </details>
    </section>
  )
}

export function ServicesSection() {
  return (
    <section className="partner-services-section" id="services" aria-labelledby="services-title">
      <div className="section-heading">
        <h2 id="services-title">Demand Gen and Marketing Services</h2>
        <p>Flexible solutions to fuel your buyer engagement strategy.</p>
      </div>
      <div className="offerings-grid">
          {services.map(({ Icon, ...service }) => (
            <ServiceCard
              key={service.name}
              {...service}
              icon={<Icon aria-hidden="true" size={21} strokeWidth={1.7} />}
            />
          ))}
      </div>
    </section>
  )
}

export function TrustedSection() {
  return (
    <section className="trusted-section" id="testimonials" aria-labelledby="trusted-title">
      <div className="section-heading">
        <p className="eyebrow">A record of shared success</p>
        <h2 id="trusted-title">Trusted by Leading Brands</h2>
        <p>DATIA believes in the power of collaboration. Here are some of the organizations we&apos;ve worked with to drive meaningful outcomes.</p>
      </div>
      <div className="partner-logo-marquee" aria-label="Organizations DATIA has worked with">
        <div className="partner-logo-track">
          {[0, 1].map((copy) => (
            <div className="partner-logo-group" key={copy} aria-hidden={copy === 1}>
              {clientLogos.map(({ name, image }) => (
                <div className="partner-logo-cell" key={name}>
                  <Image src={`/logos/${image}`} alt={copy === 0 ? name : ""} width={190} height={64} unoptimized loading="lazy" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="partner-video-wrap">
        <p><strong>Allison Danes — Right At School</strong></p>
        <div className="partner-video-frame">
          <iframe
            src="https://fast.wistia.net/embed/iframe/pghthuyp7z?seo=false&videoFoam=true"
            title="Allison Danes of Right At School shares her DATIA experience"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
      <div className="partner-testimonial-grid">
        {testimonials.map((testimonial) => (
          <article className="partner-testimonial-card" key={testimonial.name}>
            <span className="testimonial-quote-mark" aria-hidden="true">“</span>
            <blockquote>{testimonial.quote}</blockquote>
            <footer>
              <strong>{testimonial.name}</strong>
              <span>{testimonial.role}</span>
              <small>{testimonial.company}</small>
            </footer>
          </article>
        ))}
      </div>
    </section>
  )
}

export function AboutSection() {
  return (
    <section className="partner-about-section" id="about" aria-labelledby="about-title">
      <div className="partner-about-content">
        <div className="partner-about-copy">
          <h2 id="about-title">Decidedly Different</h2>
          <p>Buyers now do most of their research independently, often narrowing their shortlist long before they ever speak with a salesperson.</p>
          <p>DATIA combines industry-specialized targeting, thought leadership activation, and buyer intelligence to help partners build familiarity with decision-makers before Sales outreach, and prioritize accounts based on cumulative engagement and buying signals.</p>
          <p>DATIA keeps your brand in front of the 95% of target prospects who aren&apos;t ready to buy today, but will be tomorrow, next month, or next year.</p>
        </div>
      </div>
      <div className="markets-served" aria-labelledby="markets-title">
        <h3 className="eyebrow" id="markets-title">Markets We Serve</h3>
        <div className="markets-served-grid">
          {markets.map((market) => (
            <article className="market-served-card" key={market.name}>
              <h4>{market.name}</h4>
              <p>{market.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
