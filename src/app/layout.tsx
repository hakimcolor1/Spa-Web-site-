import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Lumière Spa & Skincare — Luxury Facial & Wellness Studio',
    template: '%s | Lumière Spa & Skincare',
  },
  description:
    "Lumière is a premium luxury facial, skincare & wellness studio. Experience personalised treatments crafted for your skin's unique needs in an atmosphere of pure tranquillity.",
  keywords: [
    'luxury spa',
    'facial treatment',
    'skincare studio',
    'wellness',
    'anti-aging',
    'brightening facial',
    'Jashore',
    'Bangladesh',
  ],
  authors: [{ name: 'Hakim Color' }],
  creator: 'Hakim Color',
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.svg',
  },
  openGraph: {
    title: 'Lumière Spa & Skincare',
    description:
      'Premium luxury facial, skincare & wellness studio in Jashore, Dhaka, Bangladesh.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Lumière Spa & Skincare',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumière Spa & Skincare',
    description: 'Premium luxury facial, skincare & wellness studio.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
