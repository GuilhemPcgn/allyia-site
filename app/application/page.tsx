import type { Metadata } from 'next';
import Link from 'next/link';
import Capture from '@/components/capture';
import { Check, Cross, Moon } from '@/components/icons';
import PageHero from '@/components/page-hero';
import { emergency, freeFeatures, modules, plusFeatures } from '@/lib/site';

export const metadata: Metadata = {
  title: "L'application",
  description:
    "Les sept modules d'Allyia : séances, journal, check-in du jour, exercices, traitements, sommeil et sécurité. Ce que fait l'IA, et ce qu'elle ne fait pas.",
  alternates: { canonical: '/application' },
};

const tones = { lavender: 'bg-lavender', mint: 'bg-mint', sky: 'bg-sky', cream: 'bg-cream' } as const;

export default function Application() {
  return (
    <>
      <PageHero
        eyebrow="L'application"
        title="Sept modules pour l'entre-deux séances"
        lead="Voici ce que fait la première version d'Allyia, sur iPhone, au printemps 2027. Rien de plus, rien de moins."
      />

      <nav aria-label="Les modules" className="wrap">
        <ul className="flex flex-wrap gap-2">
          {modules.map((m) => (
            <li key={m.id}>
              <a href={`#${m.id}`} className="inline-block rounded-full border border-line bg-white px-4 py-2 font-semibold text-plum no-underline hover:bg-lavender">
                {m.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="wrap space-y-6 py-12 sm:space-y-8 sm:py-16">
        {modules.map((m, i) => (
          <section
            key={m.id}
            id={m.id}
            aria-labelledby={`${m.id}-titre`}
            className={`grid items-center gap-8 rounded-[2rem] p-7 sm:p-12 lg:grid-cols-2 lg:gap-16 ${tones[m.tone]}`}
          >
            <div className={i % 2 ? 'lg:order-2' : ''}>
              <p aria-hidden className="font-display text-lg font-bold text-muted">0{i + 1}</p>
              <h2 id={`${m.id}-titre`} className="h2 mt-2">{m.title}</h2>
              <p className="mt-5 text-xl text-ink">{m.text}</p>
              <p className="mt-5 border-l-4 border-plum pl-4 text-muted">{m.note}</p>
              {m.id === 'securite' && (
                <Link href="/confidentialite" className="btn btn-ghost mt-6">Confidentialité et sécurité</Link>
              )}
            </div>
            <div className="mx-auto w-full max-w-[17rem]">
              {m.capture ? (
                <Capture {...m.capture} />
              ) : (
                <div aria-hidden className="flex aspect-square items-center justify-center rounded-full bg-white/70">
                  <Moon className="h-24 w-24 text-plum" />
                </div>
              )}
            </div>
          </section>
        ))}
        <p className="text-muted">Les captures sont réalisées avec des données fictives.</p>
      </div>

      <section className="wrap pb-16 sm:pb-24" aria-labelledby="ia">
        <div className="rounded-[2rem] border-2 border-plum bg-white p-7 sm:p-12">
          <h2 id="ia" className="h2">Ce que fait l&apos;IA, et ce qu&apos;elle ne fait pas</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="h3">Elle fait</h3>
              <ul className="mt-4 space-y-3">
                {[
                  'Résumer ce que tu as écrit dans ton journal.',
                  'Proposer jusqu’à trois points pour ta prochaine séance.',
                  'Rédiger un brouillon de préparation, que tu relis et modifies librement.',
                ].map((t) => (
                  <li key={t} className="flex gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-green" /><span>{t}</span></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="h3">Elle ne fait pas</h3>
              <ul className="mt-4 space-y-3">
                {[
                  'Diagnostiquer, ni calculer un score de risque.',
                  'Conseiller, ni recommander un traitement.',
                  'Discuter avec toi : il n’y a pas de chatbot dans cette version.',
                ].map((t) => (
                  <li key={t} className="flex gap-3"><Cross className="mt-1 h-5 w-5 shrink-0 text-muted" /><span>{t}</span></li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-8 max-w-prose">
            Chaque texte généré porte une étiquette, « Proposé par l&apos;IA » ou « Résumé automatique ». Tu peux le
            modifier ou le supprimer. Par défaut, l&apos;IA tourne sur ton iPhone (modèle compatible Apple
            Intelligence, iOS 26).{' '}
            <Link className="link" href="/confidentialite#ia-en-ligne">Et l&apos;IA en ligne ?</Link>
          </p>
        </div>
      </section>

      <section className="bg-lavender" aria-labelledby="prix">
        <div className="wrap section grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 id="prix" className="h2">Gratuit pour l&apos;essentiel</h2>
            <p className="lead mt-5">
              Tout ce qui sert ta séance reste gratuit : {freeFeatures}.
            </p>
          </div>
          <div className="card">
            <h3 className="h3">Allyia+ ajoute</h3>
            <ul className="mt-4 space-y-2.5">
              {plusFeatures.map((t) => (
                <li key={t} className="flex gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-green" /><span>{t}</span></li>
              ))}
            </ul>
            <p className="mt-6 text-muted">
              Prix prévu : 4,99 € par mois. Il sera confirmé au lancement.
            </p>
          </div>
        </div>
      </section>

      <section className="wrap section" aria-labelledby="urgence-app">
        <h2 id="urgence-app" className="h2">Si ça ne va pas</h2>
        <p className="lead mt-5 max-w-2xl">
          Allyia n&apos;est pas un service d&apos;urgence. Ces trois numéros sont accessibles depuis le journal, à
          tout moment.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {emergency.map((e) => (
            <li key={e.number}>
              <a href={`tel:${e.number}`} className="card block no-underline hover:bg-lavender">
                <span className="block font-display text-4xl font-extrabold text-plum">{e.number}</span>
                <span className="mt-1 block text-muted">{e.label}</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-12">
          <Link href="/#liste-d-attente" className="btn btn-primary">Être prévenu du lancement</Link>
        </p>
      </section>
    </>
  );
}
