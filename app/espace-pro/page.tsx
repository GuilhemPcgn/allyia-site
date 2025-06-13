import Link from 'next/link';
import { proContent } from '@/lib/data';
import { Building, Check, ArrowRight } from 'lucide-react';

export default function ProPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">Espace Professionnel</h1>
            <p className="text-lg text-muted-foreground">
              Solutions Allyia pour les entreprises et les mutuelles
            </p>
          </div>
        </div>
      </section>

      {/* Pro Content Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
                <Building size={24} />
              </div>
              <h2 className="text-3xl font-bold text-foreground">{proContent.title}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {proContent.description}
              </p>

              <div className="space-y-4 pt-4">
                <h3 className="text-xl font-semibold">Nos avantages pour les professionnels</h3>
                <ul className="space-y-3">
                  {proContent.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1 mr-3" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4">
                <Link
                  href="#contact-form"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90"
                >
                  Contactez-nous
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>

            <div id="contact-form" className="bg-primary/5 rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">Demande d'information</h3>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nom et prénom
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Votre nom complet"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    Entreprise / Organisation
                  </label>
                  <input
                    id="company"
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Nom de votre entreprise"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Adresse email professionnelle
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="votre.email@entreprise.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Téléphone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Votre numéro de téléphone"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Précisez votre demande et vos besoins"
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90"
                  >
                    Envoyer ma demande
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-16">
            Ils nous font confiance
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background rounded-xl p-8 shadow-sm">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full mb-6"></div>
                <p className="italic text-muted-foreground mb-6">
                  "Depuis que nous avons intégré Allyia dans notre programme de bien-être au travail, nous avons constaté une amélioration significative du bien-être de nos collaborateurs."
                </p>
                <p className="font-semibold">Marie Lefort</p>
                <p className="text-sm text-muted-foreground">DRH, Entreprise Alpha</p>
              </div>
            </div>
            
            <div className="bg-background rounded-xl p-8 shadow-sm">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full mb-6"></div>
                <p className="italic text-muted-foreground mb-6">
                  "Allyia nous a permis de proposer un service innovant à nos adhérents, particulièrement apprécié dans cette période où la santé mentale est une préoccupation majeure."
                </p>
                <p className="font-semibold">Jean Dubois</p>
                <p className="text-sm text-muted-foreground">Directeur innovation, Mutuelle Beta</p>
              </div>
            </div>
            
            <div className="bg-background rounded-xl p-8 shadow-sm">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full mb-6"></div>
                <p className="italic text-muted-foreground mb-6">
                  "La plateforme Allyia a considérablement facilité notre gestion des risques psychosociaux, avec des outils de suivi et d'analyse très performants."
                </p>
                <p className="font-semibold">Camille Martin</p>
                <p className="text-sm text-muted-foreground">Responsable QVT, Groupe Gamma</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}