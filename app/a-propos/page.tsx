import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/page-hero';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'À propos',
  description:
    "L'équipe d'Allyia, son ancrage en Normandie et ses valeurs : bienveillance, éthique, empowerment.",
  alternates: { canonical: '/a-propos' },
};

const team = [
  {
    name: 'Guilhem Poincignon',
    role: 'Cofondateur, technique',
    text: "Développeur, Guilhem conçoit et construit l'application.",
    img: '/img/guilhem.webp',
  },
  {
    name: 'Tallal Ibnaiche',
    role: 'Cofondateur, stratégie, produit et business',
    text: 'Planneur stratégique de formation, Tallal pilote la stratégie, le produit et le développement du projet.',
    img: '/img/tallal.webp',
  },
];

const values = [
  {
    title: 'Bienveillance',
    text: 'Pas de série à tenir, pas de reproche après une absence. Allyia accueille ce que tu notes, quand tu le notes.',
  },
  {
    title: 'Éthique',
    text: 'Nous n’écrivons que ce que l’app fait vraiment. Pas de promesse d’effet thérapeutique, pas de diagnostic, pas de publicité ciblée.',
  },
  {
    title: 'Empowerment',
    text: 'Tes données et tes mots t’appartiennent. C’est toi qui décides ce que tu gardes, ce que tu modifies et ce que tu partages.',
  },
];

export default function APropos() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="Un miroir, pas un oracle"
        lead="Allyia est née d'un constat simple : l'essentiel d'un suivi se joue entre les séances, et rien n'aide vraiment à en garder la trace. Nous construisons l'outil qui manque, sans prendre la place du psychologue."
        tone="from-cream"
      />

      <section className="wrap pb-16 sm:pb-24" aria-labelledby="equipe">
        <h2 id="equipe" className="h2">L&apos;équipe</h2>
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {team.map((m) => (
            <li key={m.name} className="card flex flex-col gap-6 sm:flex-row sm:items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={m.img}
                width={480}
                height={480}
                alt={`Portrait de ${m.name}`}
                loading="lazy"
                className="h-32 w-32 shrink-0 rounded-full object-cover"
              />
              <div>
                <h3 className="h3">{m.name}</h3>
                <p className="mt-1 font-semibold text-muted">{m.role}</p>
                <p className="mt-3">{m.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-lavender" aria-labelledby="normandie">
        <div className="wrap section grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 id="normandie" className="h2">Ancrés en Normandie</h2>
            <p className="mt-5 text-lg">
              Allyia se construit en Normandie. C&apos;est là que nous travaillons, et c&apos;est avec des
              psychologues normands que nous préparons la bêta de l&apos;espace qui leur sera destiné.
            </p>
            <p className="mt-5">
              <Link className="link" href="/psychologues">Vous êtes psychologue ?</Link>
            </p>
          </div>
          <div>
            <h2 className="h2">Où en est le projet</h2>
            <ol className="mt-6 space-y-5">
              {[
                ['Printemps 2027', 'Lancement de l’application, sur iPhone.'],
                ['2028', 'Espace pour les psychologues, d’abord en bêta.'],
                ['Plus tard', 'D’autres fonctions sont à l’étude. Nous n’en parlerons que lorsqu’elles seront prêtes.'],
              ].map(([d, t]) => (
                <li key={d} className="border-l-4 border-plum pl-4">
                  <p className="font-display text-lg font-bold text-plum">{d}</p>
                  <p>{t}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="wrap section" aria-labelledby="valeurs">
        <h2 id="valeurs" className="h2">Nos valeurs</h2>
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {values.map((v) => (
            <li key={v.title} className="card">
              <h3 className="h3">{v.title}</h3>
              <p className="mt-3 text-muted">{v.text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-12 text-lg">
          Une question, une envie d&apos;échanger ?{' '}
          <a className="link" href={`mailto:${site.email}`}>{site.email}</a>
        </p>
      </section>
    </>
  );
}
