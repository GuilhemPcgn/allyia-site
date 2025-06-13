import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Download, Send } from 'lucide-react';
import { blogPosts, galleryImages, mission } from '@/lib/data';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="pt-20 min-h-[90vh] flex items-center relative bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 py-12 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
            <div className="flex flex-col items-center space-y-6 gap-2 ml-10">
              <img src="/logo/LogoAllyia.png" alt="Logo Allyia" className="w-1/2 flex items-center justify-center" />
              <p className="text-xl md:text-2xl text-foreground/90 max-w-md">
                Allyia ancre la santé mentale dans les usages digitaux contemporains pour mieux prévenir, accompagner et déstigmatiser.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <form className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="px-4 py-3 rounded-full border border-input bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    required
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    S'inscrire
                  </button>
                </form>
                {/* <Link
                  href="/espace-pro"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium transition-all hover:bg-secondary/90"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Nous contacter
                </Link> */}
              </div>
            </div>
            <div className="relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/img/MentalHealthMatter.jpg"
                alt="Slogan 'Mental Health Matters' écrit façon scrabble"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={mission.image}
                alt="Notre mission"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-3xl font-bold text-foreground">{mission.title}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {mission.description}
              </p>
              <Link
                href="/a-propos"
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                En savoir plus
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        {/* <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Articles récents</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Découvrez nos derniers articles sur la santé mentale, les témoignages et les conseils pratiques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-background rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md">
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
              href="/communaute"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium transition-all hover:bg-secondary/90"
            >
              Voir tous les articles
            </Link>
          </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Galerie Allyia</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Des moments de bienveillance et de sérénité qui inspirent notre mission
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative h-60 md:h-80 rounded-xl overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/20 to-purple-500/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Prêt à prendre soin de votre santé mentale ?
          </h2>
          <p className="text-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Rejoignez Allyia et découvrez un espace numérique conçu pour vous accompagner au quotidien
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90"
            >
              <Download className="mr-2 h-5 w-5" />
              Installer l'application
            </Link>
            <Link
              href="/participez"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium transition-all hover:bg-secondary/90"
            >
              Soutenir le projet
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}