import Link from 'next/link';
import { navItems, socialLinks, siteConfig } from '@/lib/data';
import { Mail, Instagram, Linkedin, MessageCircle } from 'lucide-react';

const iconMap = {
  mail: Mail,
  instagram: Instagram,
  linkedin: Linkedin,
  'message-circle': MessageCircle,
};

export default function Footer() {
  return (
    <footer className="bg-primary/5 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <img src="/logo/TypoAllyia.png" alt="Logo Allyia" className="w-77 h-8" />
            </Link>
            <p className="text-muted-foreground text-sm max-w-md">
              {siteConfig.description}
            </p>
          </div>

          {/* Plan du site */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Plan du site</h3>
            <nav className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contacts */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Nous contacter</h3>
            <div className="flex flex-col space-y-3">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon as keyof typeof iconMap];
                return (
                  <Link
                    key={link.platform}
                    href={link.url}
                    className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {Icon && <Icon size={16} />}
                    <span>{link.platform}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-4 border-t border-border text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Allyia. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}