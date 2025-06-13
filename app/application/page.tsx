import Image from 'next/image';
import Link from 'next/link';
import { appFeatures } from '@/lib/data';
import {
  BarChart,
  MessageSquare,
  Pill,
  Book,
  AlertCircle,
  Download,
  ArrowRight
} from 'lucide-react';

const iconMap = {
  'bar-chart': BarChart,
  'message-square': MessageSquare,
  pill: Pill,
  book: Book,
  'alert-circle': AlertCircle,
};

export default function ApplicationPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">L'Application Allyia</h1>
            <p className="text-lg text-muted-foreground">
              Un compagnon discret, éthique et intuitif, pour vous accompagner dans la gestion quotidienne de votre santé mentale.
            </p>
            <div className="mt-8">
              <Link
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90"
              >
                <Download className="mr-2 h-5 w-5" />
                Installer l'application
              </Link>
            </div>
          </div>

          <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg bg-white">
            <Image
              src="/img/loadscreen.png"
              alt="Application Allyia sur mobile"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Une application complète</h2>
            <p className="text-lg text-muted-foreground">
              Allyia offre un ensemble d'outils conçus avec des experts en santé mentale pour vous accompagner au quotidien
            </p>
          </div>
        </div>
      </section>

      {/* Features Detail Sections */}
      {appFeatures.map((feature, index) => {
        const isEven = index % 2 === 0;
        const Icon = iconMap[feature.icon as keyof typeof iconMap];

        return (
          <section
            key={feature.title}
            className={`py-16 ${isEven ? 'bg-primary/5' : 'bg-background'}`}
          >
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className={`space-y-6 ${!isEven && 'md:order-2'}`}>
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
                    {Icon && <Icon size={24} />}
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">{feature.title}</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className={`relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg ${!isEven && 'md:order-1'}`}>
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/20 to-purple-500/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Prêt à essayer Allyia ?
          </h2>
          <p className="text-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Téléchargez l'application dès aujourd'hui et découvrez un outil conçu pour vous accompagner dans votre bien-être mental
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90"
            >
              <Download className="mr-2 h-5 w-5" />
              Installer maintenant
            </Link>
            <Link
              href="/participez"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium transition-all hover:bg-secondary/90"
            >
              Soutenir le projet
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}