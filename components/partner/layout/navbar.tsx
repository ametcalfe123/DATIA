"use client";

import Link from "next/link";
import { Button } from "@/components/partner/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Flagship Offering", href: "#flagship" },
    { name: "Marketing Services", href: "#marketing-services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "About", href: "#about" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 h-[80px] flex items-center transition-all duration-300 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border/50 shadow"
            : "bg-background/50 backdrop-blur border-b border-transparent"
        }`}
      >
        <div className="w-full px-4 md:px-6 flex items-center justify-between max-w-[1152px] mx-auto">
          <div className="flex items-center gap-4 shrink-0">
            <Link href="/partner" className="flex min-h-[44px] items-center gap-2 z-50 relative">
              <img 
                src={`/partner/images/datia-ai-logo.png`} 
                alt="DATIA AI"
                className="h-8 md:h-10 object-contain"
              />
            </Link>
            <div className="hidden xl:flex items-center gap-2 whitespace-nowrap text-[12px] font-semibold uppercase tracking-[0.12em] text-muted-foreground ml-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              The AI-Enabled Fusion of Data and Media
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex flex-1 items-center justify-end px-4 gap-3 lg:gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="inline-flex min-h-[44px] items-center whitespace-nowrap text-[13px] lg:text-[14px] font-medium text-[#3F3F46] hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block shrink-0">
          <Button 
            className="bg-primary text-white hover:bg-primary/90 px-6 shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/35 hover:-translate-y-0.5 transition-all duration-300 border border-primary"
            onClick={() => {
              const el = document.querySelector('#cta');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Partner with Us
          </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden relative z-50 min-w-11 min-h-11 p-2 text-foreground"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </header>

      {/* Mobile Nav */}
      <div
        className={`fixed inset-0 bg-background z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full invisible pointer-events-none"
        } lg:hidden`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="inline-flex min-h-11 items-center px-3 text-[24px] font-sans text-foreground hover:text-primary"
          >
            {link.name}
          </a>
        ))}
        <Button 
          size="lg"
            className="mt-4 bg-primary hover:bg-primary/90 text-white px-8 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 ring-1 ring-primary/20 transition-all duration-300 w-[calc(100%-4rem)] max-w-sm"
          onClick={() => {
            setMobileMenuOpen(false);
            const el = document.querySelector('#cta');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Partner with Us
        </Button>
      </div>
    </>
  );
}
