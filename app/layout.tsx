import './globals.css';
import type { Metadata } from 'next';
import { inter, manrope } from '@/lib/fonts';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { siteConfig } from '@/lib/data';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${manrope.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}