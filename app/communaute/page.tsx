import Image from 'next/image';
import Link from 'next/link';
import { blogPosts, communityContent } from '@/lib/data';
import { MessageCircle, FileText, ArrowRight } from 'lucide-react';

export default function CommunityPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Communauté Allyia</h1>
            <p className="text-lg text-muted-foreground">
              Rejoignez un espace d'échange, de soutien et de partage autour de la santé mentale
            </p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
                <FileText size={24} />
              </div>
              <h2 className="text-3xl font-bold text-foreground">{communityContent.blog.title}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {communityContent.blog.description}
              </p>
            </div>
            <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/img/blog.png"
                alt="Blog Allyia"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-8">Articles récents</h3>
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-primary/5 rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md">
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-primary font-medium hover:underline"
                  >
                    Lire l'article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div> */}

          <div className="text-center py-12 bg-primary/5 rounded-xl">
            <p className="text-lg text-muted-foreground">
              Les articles du blog s'afficheront ici bientôt !
            </p>
          </div>

          <div className="text-center mt-12">
            <Link
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium transition-all hover:bg-secondary/90"
            >
              Voir tous les articles
            </Link>
          </div>
        </div>
      </section>

      {/* Discord Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/img/parole.webp"
                alt="Communauté Discord Allyia"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
                <MessageCircle size={24} />
              </div>
              <h2 className="text-3xl font-bold text-foreground">{communityContent.discord.title}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {communityContent.discord.description}
              </p>
              <Link
                href="https://discord.gg/allyia"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90"
              >
                Rejoindre le Discord
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community Events Section */}
      {/* <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Événements communautaires
          </h2>
          <p className="text-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Participez à nos événements virtuels et présentiels pour échanger, apprendre et vous connecter avec d'autres membres de la communauté
          </p>
          <div className="bg-primary/5 p-8 rounded-xl max-w-2xl mx-auto">
            <p className="text-muted-foreground mb-4">
              Nous préparons actuellement notre programme d'événements. Inscrivez-vous à notre newsletter pour être informé des prochaines dates !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Votre adresse email" 
                className="px-4 py-3 rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 w-full sm:w-auto"
              />
              <button className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90">
                S'inscrire
              </button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}