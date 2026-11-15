import '@fontsource-variable/figtree';
import '@fontsource-variable/gabarito';
import './globals.css';
import type { Metadata, Viewport } from 'next';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `Allyia, le compagnon de l'entre-deux séances`, template: '%s | Allyia' },
  description: site.description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: site.name,
    title: `Allyia, le compagnon de l'entre-deux séances`,
    description: site.description,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: site.tagline }],
  },
  twitter: { card: 'summary_large_image' },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = { themeColor: '#f1e8fa' };

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  url: site.url,
  logo: `${site.url}/icon.svg`,
  email: site.email,
  sameAs: [site.instagram, site.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="flex min-h-screen flex-col">
        <a
          href="#contenu"
          className="btn btn-primary absolute left-4 top-3 z-50 -translate-y-24 focus:translate-y-0"
        >
          Aller au contenu
        </a>
        <Header />
        <main id="contenu" className="flex-1">
          {children}
        </main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      </body>
    </html>
  );
}
