import Image from "next/image"

const site = "https://www.datia.io"

const services = [
  {
    name: "ABMi",
    subtitle: "Account-Based Marketing Intelligence",
    description:
      "Precision-targeted marketing strategies that focus on high-value accounts with personalized campaigns driven by AI-driven behavioral data.",
  },
  {
    name: "TGL",
    subtitle: "Targeted Generated Leads",
    description:
      "Prospect identification and interest for fueling the sales pipeline with top-of-funnel leads.",
  },
  {
    name: "PUSH",
    subtitle: "Programmatic User-Specific Hyper-targeting",
    description:
      "Strategic advertising campaigns tailored to your ideal buyers for maximum engagement and conversion.",
  },
  {
    name: "Content Studio",
    subtitle: "Content Creation & Strategy",
    description: "Custom content creation, tailored to specific goals and objectives.",
  },
  {
    name: "Custom Research",
    subtitle: "Market Research & Analysis",
    description: "Showcase industry expertise and product innovation.",
  },
]

const markets = [
  { name: "EDU", groups: ["K12", "Higher Ed"], icon: "edu" },
  { name: "GOV", groups: ["State/Local", "Federal"], icon: "gov" },
  { name: "HR", groups: ["Employee Benefits", "Human Resources"], icon: "hr" },
  { name: "Financial Services", groups: ["Investment Advisor", "Banking", "Insurance"], icon: "financial" },
  { name: "Technology", groups: ["Identity", "Enterprise", "Cybersecurity"], icon: "technology" },
  { name: "Retail", groups: ["Tech", "C-Suite Management"], icon: "retail" },
  { name: "Healthcare", groups: ["Tech", "C-Suite Management"], icon: "healthcare" },
]

const articles = [
  {
    category: "Lead Generation",
    title: "Empower Don&apos;t Push: How to Meet Leads on Their Own Terms",
    image: "empower-leads-article.avif",
    description:
      "Discover effective strategies for empowering prospects rather than pushing them, creating authentic connections that drive better conversion rates and long-term relationships.",
    read: "8 min read",
    href: "https://www.datiak12.io/partner-insights/white-papers-guides/whitepaper/15740322/datia-k12-empower-dont-push-how-to-meet-leads-on-Their%20own-terms",
  },
  {
    category: "Lead Nurturing",
    title: "Nurture or Sell: Finding the Perfect Balance to Convert Leads Without Scaring Them Off",
    image: "nurture-or-sell-article.avif",
    description:
      "Learn how to strike the optimal balance between nurturing prospects and moving them toward a decision.",
    read: "6 min read",
    href: "https://www.datiak12.io/partner-insights/white-papers-guides/whitepaper/15738538/datia-k12-nurture-or-sell-finding-the-perfect-balance-to-convert-leads-without-scaring-them-off",
  },
]

function SiteHeader() {
  return (
    <header className="site-header home-header">
      <div className="site-header-inner home-header-inner">
        <a className="brand-logo" href="/" aria-label="DATIA home">
          <Image src={`${site}/images/datia-ai-logo.png`} alt="DATIA AI" width={176} height={40} unoptimized />
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="/about/decidedly-different">Our Story</a>
          <a href="/services">Services</a>
          <a href="/about/our-team">Meet the Team</a>
          <a href="/about/our-advisors">Advisory Board</a>
          <a href="/trusted-by">Trusted By</a>
        </nav>
        <a className="button button-red header-cta" href="/get-started">Partner with Us</a>
      </div>
    </header>
  )
}

export default function HomePage() {
  return (
    <main className="datia-home">
      <SiteHeader />
      <section className="home-hero" aria-labelledby="home-title">
        <h1 id="home-title">Prospect Intelligence Platforms</h1>
        <p>The AI-enabled fusion of data and media</p>
      </section>

      <section className="services-section" id="services">
        <div className="section-heading">
          <h2>Our Services</h2>
          <p>Comprehensive, AI-enabled B2B marketing solutions designed to drive growth.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.name}>
              <span className="target-icon" aria-hidden="true" />
              <h3>{service.name}</h3>
              <p className="service-subtitle">{service.subtitle}</p>
              <p className="service-description">{service.description}</p>
            </article>
          ))}
        </div>
        <p className="services-count">Showing 5 of our core services</p>
        <a className="button button-red learn-services" href="/services">Learn More About Our Services</a>
      </section>

      <section className="markets-section" id="markets">
        <div className="section-heading">
          <h2>Markets Served</h2>
          <p>We deliver specialized B2B marketing solutions across diverse industries, understanding the unique challenges and opportunities in each market.</p>
        </div>
        <div className="market-grid">
          {markets.map((market) => (
            <article className="market-card" key={market.name}>
              <Image src={`${site}/images/${market.icon}-icon.png`} alt="" width={48} height={48} unoptimized />
              <h3>{market.name}</h3>
              <ul>{market.groups.map((group) => <li key={group}>{group}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="buzz-section" id="buzz">
        <div className="section-heading">
          <h2>Marketing Buzz</h2>
          <p>Stay ahead of the curve with our latest insights, strategies, and industry trends.</p>
        </div>
        <div className="article-grid">
          {articles.map((article) => (
            <article className="article-card" key={article.title}>
              <a href={article.href} className="article-image">
                <Image src={`${site}/images/${article.image}`} alt={article.title.replace("&apos;", "'")} width={800} height={450} unoptimized />
              </a>
              <div className="article-content">
                <p className="article-category">{article.category}</p>
                <h3><a href={article.href}>{article.title.replace("&apos;", "'")}</a></h3>
                <p className="article-description">{article.description}</p>
                <div className="article-footer"><span>{article.read}</span><a href={article.href}>Read More <span aria-hidden="true">→</span></a></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-cta">
        <p>DATIA AI</p>
        <h2>Gain a Competitive Edge in Every Conversation.</h2>
        <a className="button button-red" href="/get-started">Partner with Us</a>
      </section>

      <footer className="site-footer home-footer">
        <a className="brand-logo" href="/" aria-label="DATIA home"><Image src={`${site}/images/datia-ai-logo-white.png`} alt="DATIA AI" width={176} height={40} unoptimized /></a>
        <p>The AI-enabled fusion of data and media</p>
        <nav aria-label="Footer navigation">
          <a href="/about/decidedly-different">Our Story</a>
          <a href="/about/our-team">Meet the Team</a>
          <a href="/about/our-advisors">Advisory Board</a>
          <a href={`${site}/partner`}>Partner with Us</a>
        </nav>
        <small>© {new Date().getFullYear()} DATIA. All rights reserved.</small>
      </footer>
    </main>
  )
}
