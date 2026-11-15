import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

// Social icons as inline SVGs since lucide-react v1 renames them
function InstagramIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
function LinkedinIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function YoutubeIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  );
}
function XIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function GlobeIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

import { openingHours } from '@/lib/data';

const footerLinks = {
  Treatments: [
    { label: 'Hydrating Facial', href: '/treatments/hydrating-facial' },
    { label: 'Anti-Aging Facial', href: '/treatments/anti-aging-facial' },
    {
      label: 'Brightening Treatment',
      href: '/treatments/brightening-treatment',
    },
    { label: 'Luxury Glow Facial', href: '/treatments/luxury-glow-facial' },
    { label: 'All Treatments', href: '/treatments' },
  ],
  Discover: [
    { label: 'About Lumière', href: '/about' },
    { label: 'Our Specialists', href: '/specialists' },
    { label: 'Membership', href: '/membership' },
    { label: 'Pricing & Packages', href: '/pricing' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Blog', href: '/blog' },
  ],
  Support: [
    { label: 'Book Appointment', href: '/book' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
  ],
};

const socialLinks = [
  {
    icon: InstagramIcon,
    label: 'Instagram',
    href: 'https://www.instagram.com/hakim.color/',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/hakimcolor/',
  },
  {
    icon: YoutubeIcon,
    label: 'YouTube',
    href: 'https://www.youtube.com/@hakimcolor',
  },
  { icon: XIcon, label: 'X (Twitter)', href: 'https://x.com/hakimcolor' },
  {
    icon: GlobeIcon,
    label: 'Portfolio',
    href: 'https://hakimcolorportfolio.vercel.app/',
  },
];

export function Footer() {
  return (
    <footer className="bg-[#243C32] text-[#E8DCCB]">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="font-heading text-3xl font-light tracking-[0.12em] text-[#F8F5EF]">
                Lumière
              </span>
              <span className="block text-[9px] font-body tracking-[0.3em] uppercase text-[#A9B7A4] mt-0.5">
                Spa & Skincare
              </span>
            </Link>
            <p className="text-sm font-body text-[#A9B7A4] leading-relaxed max-w-xs mb-8">
              A luxury facial, skincare and wellness studio dedicated to the art
              of elevated skin health. Every treatment is crafted for your
              skin's unique story.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3 flex-wrap">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 border border-[#A9B7A4]/30 flex items-center justify-center text-[#A9B7A4] hover:border-[#B69A65] hover:text-[#B69A65] transition-colors duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-[#F8F5EF] mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm font-body text-[#A9B7A4] hover:text-[#E8DCCB] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact + Hours */}
        <div className="mt-14 pt-10 border-t border-[#A9B7A4]/20 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact */}
          <div>
            <h4 className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-[#F8F5EF] mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[#B69A65] mt-0.5 shrink-0" />
                <span className="text-sm font-body text-[#A9B7A4]">
                  Jashore, Dhaka, Bangladesh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-[#B69A65] shrink-0" />
                <a
                  href="tel:+8801818777856"
                  className="text-sm font-body text-[#A9B7A4] hover:text-[#E8DCCB] transition-colors"
                >
                  +8801818777856
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-[#B69A65] shrink-0" />
                <a
                  href="mailto:hakimcolor777@gmail.com"
                  className="text-sm font-body text-[#A9B7A4] hover:text-[#E8DCCB] transition-colors"
                >
                  hakimcolor777@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-[#F8F5EF] mb-5">
              <Clock size={12} className="inline mr-2 text-[#B69A65]" />
              Opening Hours
            </h4>
            <ul className="space-y-2">
              {openingHours.map((item) => (
                <li
                  key={item.day}
                  className="flex justify-between text-sm font-body text-[#A9B7A4]"
                >
                  <span>{item.day}</span>
                  <span className="text-[#E8DCCB]">{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#A9B7A4]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-body text-[#A9B7A4]">
            © 2026 Lumière Spa & Skincare. All rights reserved.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <Link
              href="/privacy"
              className="text-xs font-body text-[#A9B7A4] hover:text-[#E8DCCB] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs font-body text-[#A9B7A4] hover:text-[#E8DCCB] transition-colors"
            >
              Terms & Conditions
            </Link>
            <span className="text-[#A9B7A4]/30">|</span>
            <a
              href="https://hakimcolorportfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-body text-[#A9B7A4] hover:text-[#B69A65] transition-colors flex items-center gap-1.5"
            >
              <GlobeIcon size={12} />
              Developed by Hakim Color
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
