"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Treatments",
    href: "/treatments",
    children: [
      { label: "All Treatments", href: "/treatments" },
      { label: "Facial & Skincare", href: "/facial-skincare" },
      { label: "Our Specialists", href: "/specialists" },
    ],
  },
  { label: "Membership", href: "/membership" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-[#243C32] text-[#E8DCCB] text-center py-2 px-4">
        <p className="text-xs font-body tracking-widest uppercase">
          Complimentary skin consultation with every first visit &nbsp;·&nbsp; Book now
        </p>
      </div>

      <header
        className={`sticky top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "bg-[#F8F5EF]/95 backdrop-blur-md shadow-[0_1px_0_0_#E8DCCB]"
            : "bg-[#F8F5EF]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start group">
            <span className="font-heading text-2xl font-light tracking-[0.12em] text-[#243C32] group-hover:text-[#B69A65] transition-colors duration-300">
              Lumière
            </span>
            <span className="text-[9px] font-body tracking-[0.3em] uppercase text-[#A9B7A4] -mt-0.5">
              Spa & Skincare
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.href}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(link.href)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1 text-sm font-body font-medium tracking-wide transition-colors duration-200 ${
                      isActive(link.href) ? "text-[#B69A65]" : "text-[#262622] hover:text-[#243C32]"
                    }`}
                  >
                    {link.label}
                    <ChevronDown size={14} className="transition-transform group-hover:rotate-180 duration-200" />
                  </button>
                  {openDropdown === link.href && (
                    <div className="absolute top-full left-0 mt-2 w-52 bg-[#F8F5EF] border border-[#E8DCCB] shadow-lg py-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-5 py-2.5 text-sm font-body text-[#262622] hover:bg-[#E8DCCB] hover:text-[#243C32] transition-colors duration-150"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-body font-medium tracking-wide transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-px after:bg-[#B69A65] after:transition-all after:duration-300 ${
                    isActive(link.href)
                      ? "text-[#B69A65] after:w-full"
                      : "text-[#262622] hover:text-[#243C32] after:w-0 hover:after:w-full"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-4">
            <Button href="/book" size="sm" className="hidden sm:inline-flex">
              Book Appointment
            </Button>
            <button
              className="lg:hidden p-2 text-[#262622]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#F8F5EF] border-t border-[#E8DCCB] px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className={`block text-base font-body font-medium py-2 border-b border-[#E8DCCB] transition-colors ${
                    isActive(link.href) ? "text-[#B69A65]" : "text-[#262622]"
                  }`}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="pl-4 mt-1 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block text-sm font-body text-[#A9B7A4] py-1 hover:text-[#243C32] transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button href="/book" size="md" className="w-full mt-4">
              Book Appointment
            </Button>
          </div>
        )}
      </header>
    </>
  );
}
