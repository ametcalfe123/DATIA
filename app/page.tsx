import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Megaphone,
  Pencil,
  Search,
  Target,
  Users,
} from "lucide-react"

const services = [
  {
    name: "ABMi",
    subtitle: "Account-Based Marketing Intelligence",
    description:
      "Precision-targeted marketing strategies that focus on high-value accounts with personalized campaigns driven by AI-driven behavioral data.",
    Icon: Target,
  },
  {
    name: "TGL",
    subtitle: "Targeted Generated Leads",
    description: "Prospect identification and interest for fueling the sales pipeline with top-of-funnel leads.",
    Icon: Users,
  },
  {
    name: "PUSH",
    subtitle: "Programmatic User-Specific Hyper-targeting",
    description: "Strategic advertising campaigns tailored to your ideal buyers for maximum engagement and conversion.",
    Icon: Megaphone,
  },
  {
    name: "Content Studio",
    subtitle: "Content Creation & Strategy",
    description: "Custom content creation, tailored to specific goals and objectives.",
    Icon: Pencil,
  },
  {
    name: "Custom Research",
    subtitle: "Market Research & Analysis",
    description: "Showcase industry expertise and product innovation.",
    Icon: Search,
  },
]

const markets = [
  { name: "EDU", groups: ["K12", "Higher Ed"], image: "edu-icon.png" },
  { name: "GOV", groups: ["State/Local", "Federal"], image: "gov-icon.png" },
  { name: "HR", groups: ["Employee Benefits", "Human Resources"], image: "hr-icon.png" },
  {
    name: "Financial Services",
    groups: ["Investment Advisor", "Banking", "Insurance"],
    image: "financial-icon.png",
  },
  {
    name: "Technology",
    groups: ["Identity", "Enterprise", "Cybersecurity"],
    image: "technology-icon.png",
  },
  { name: "Retail", groups: ["Tech", "C-Suite Management"], image: "retail-icon.png" },
  { name: "Healthcare", groups: ["Tech", "C-Suite Management"], image: "healthcare-icon.png" },
]

const articles = [
  {
    category: "Lead Generation",
    title: "Empower Don't Push: How to Meet Leads on Their Own Terms",
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
      "Learn how to strike the optimal balance between nurturing prospects and making the sale, ensuring you convert leads effectively without overwhelming or alienating them.",
    read: "6 min read",
    href: "https://www.datiak12.io/partner-insights/white-papers-guides/whitepaper/15738538/datia-k12-nurture-or-sell-finding-the-perfect-balance-to-convert-leads-without-scaring-them-off",
  },
]

const footerMarkets = [
  "Education",
  "Government",
  "HR",
  "Financial Services",
  "Retail",
  "Healthcare",
  "Technology",
  "Cybersecurity/Identity",
]

function SiteHeader() {
  return (
    <header className="site-header home-header">
      <div className="site-header-inner home-header-inner">
        <Link className="brand-logo" href="/" aria-label="DATIA home">
          <Image src="/images/datia-ai-logo.png" alt="DATIA AI" width={176} height={40} priority unoptimized />
        </Link>
        <nav className="main-nav home-desktop-nav" aria-label="Main navigation">
          <Link href="/about/decidedly-different">Our Story</Link>
          <Link href="/services">Services</Link>
          <Link href="/about/our-team">Meet the Team</Link>
          <Link href="/about/our-advisors">Advisory Board</Link>
          <Link href="/trusted-by">Trusted By</Link>
        </nav>
        <Link className="button button-red header-cta" href="/get-started">
          Partner with Us
        </Link>
        <details className="home-mobile-menu">
          <summary aria-label="Open navigation menu"><span /></summary>
          <nav className="home-mobile-menu-panel" aria-label="Mobile navigation">
            <Link href="/about/decidedly-different">Our Story</Link>
            <Link href="/services">Services</Link>
            <Link href="/about/our-team">Meet the Team</Link>
            <Link href="/about/our-advisors">Advisory Board</Link>
            <Link href="/trusted-by">Trusted By</Link>
            <Link className="button button-red" href="/get-started">Partner with Us</Link>
          </nav>
        </details>
      </div>
    </header>
  )
}

function HomeFooter() {
  return (
    <>
      <section className="home-cta">
        <h2>Gain a Competitive Edge in Every Conversation.</h2>
        <Link className="button button-red" href="/get-started">
          Partner with Us <ArrowRight aria-hidden="true" size={20} />
        </Link>
      </section>
      <footer className="site-footer home-footer">
        <div className="home-footer-inner">
          <div className="home-footer-brand">
            <Link className="brand-logo" href="/" aria-label="DATIA home">
              <Image src="/images/datia-ai-logo-white.png" alt="DATIA AI" width={176} height={40} unoptimized />
            </Link>
            <p>
              A sales and marketing intelligence company offering enhanced lead generation and media services that
              integrate intent data and AI-driven insights.
            </p>
          </div>
          <div className="home-footer-markets">
            <h2>Markets Served</h2>
            <ul>
              {footerMarkets.map((market) => (
                <li key={market}>{market}</li>
              ))}
            </ul>
          </div>
          <nav className="home-footer-links" aria-label="Footer navigation">
            <Link href="/about/decidedly-different">Our Story</Link>
            <Link href="/about/our-team">Meet the Team</Link>
            <Link href="/about/our-advisors">Advisory Board</Link>
            <Link href="/trusted-by">Trusted By</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </nav>
        </div>
        <div className="home-footer-bottom">© 2025. All rights reserved.</div>
      </footer>
    </>
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
          {services.map(({ name, subtitle, description, Icon }) => (
            <article className="service-card" key={name}>
              <div className="service-icon" aria-hidden="true">
                <Icon className="service-icon-glyph" />
              </div>
              <h3>{name}</h3>
              <p className="service-subtitle">{subtitle}</p>
              <p className="service-description">{description}</p>
            </article>
          ))}
        </div>
        <p className="services-count">Showing 5 of our core services</p>
        <Link className="button button-red learn-services" href="/services">
          Learn More About Our Services <ArrowRight aria-hidden="true" size={20} />
        </Link>
      </section>

      <section className="markets-section" id="markets">
        <div className="section-heading">
          <h2>Markets Served</h2>
          <p>
            We deliver specialized B2B marketing solutions across diverse industries, understanding the unique
            challenges and opportunities in each market.
          </p>
        </div>
        <div className="market-grid">
          {markets.map(({ name, groups, image }) => (
            <article className="market-card" key={name}>
              <div className="market-icon" aria-hidden="true">
                <Image src={`/images/${image}`} alt="" width={24} height={24} unoptimized />
              </div>
              <h3>{name}</h3>
              <ul>
                {groups.map((group) => (
                  <li key={group}>{group}</li>
                ))}
              </ul>
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
          {articles.map((article, index) => (
            <article className="article-card" key={article.title}>
              <a
                href={article.href}
                className={`article-image${index === 1 ? " article-image-contain" : ""}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Read ${article.title}`}
              >
                <Image src={`/images/${article.image}`} alt={article.title} width={800} height={450} unoptimized />
              </a>
              <div className="article-content">
                <p className="article-category">{article.category}</p>
                <h3>
                  <a href={article.href} target="_blank" rel="noopener noreferrer">
                    {article.title}
                  </a>
                </h3>
                <p className="article-description">{article.description}</p>
                <div className="article-footer">
                  <span>{article.read}</span>
                  <a href={article.href} target="_blank" rel="noopener noreferrer">
                    Read More <ArrowRight aria-hidden="true" size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <HomeFooter />
    </main>
  )
}
