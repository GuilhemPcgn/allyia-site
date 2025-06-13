import Image from 'next/image';
import { teamMembers, history, values, commitments } from '@/lib/data';
import { Heart, Lightbulb, Users, Shield, Lock, EyeOff } from 'lucide-react';

const iconMap = {
  heart: Heart,
  lightbulb: Lightbulb,
  users: Users,
  shield: Shield,
  lock: Lock,
  'eye-off': EyeOff,
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Histoire Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">À Propos d'Allyia</h1>
            <p className="text-lg text-muted-foreground">
              Découvrez notre histoire, notre équipe et nos valeurs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">{history.title}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {history.description}
              </p>
            </div>
            <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={history.image}
                alt="L'histoire d'Allyia"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fondateurs Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Nos Fondateurs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-background rounded-xl overflow-hidden shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative h-[600px] w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <div className="text-muted-foreground">{member.bio}</div> <br></br>
                  <blockquote className="border-l-4 border-gray-300 pl-4 text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary bg-[length:200%_200%] animate-gradient-x font-bold italic">
                    {member.quote}
                  </blockquote>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valeurs Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Nos Valeurs</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => {
              const Icon = iconMap[value.icon as keyof typeof iconMap];
              return (
                <div
                  key={value.title}
                  className="bg-primary/5 rounded-xl p-8 text-center transition-all hover:shadow-md"
                >
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-6">
                    {Icon && <Icon size={32} />}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engagements Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Nos Engagements</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commitments.map((commitment) => {
              const Icon = iconMap[commitment.icon as keyof typeof iconMap];
              return (
                <div
                  key={commitment.title}
                  className="bg-background rounded-xl p-8 transition-all hover:shadow-md"
                >
                  <div className="flex items-center mb-4">
                    <div className="mr-4 flex-shrink-0">
                      {Icon && <Icon size={24} className="text-primary" />}
                    </div>
                    <h3 className="text-xl font-semibold">{commitment.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{commitment.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}