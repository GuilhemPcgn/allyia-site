import Link from 'next/link';
import Capture from '@/components/capture';
import { Arrow, Check, Cross, Lock } from '@/components/icons';
import WaitlistForm from '@/components/waitlist-form';
import { notAllyia, pillars } from '@/lib/site';

const tones = { lavender: 'bg-lavender', mint: 'bg-mint', sky: 'bg-sky' } as const;

const captures = [
  {
    src: '/captures/journal.webp',
    width: 720,
    height: 1475,
    caption: 'Le journal, avec ses résumés étiquetés',
    alt: 'Écran « Journal » de l’app : une zone pour écrire, puis des entrées datées. Chaque résumé porte l’étiquette « Proposé par l’IA ».',
  },
  {
    src: '/captures/preparation.webp',
    width: 720,
    height: 1319,
    caption: 'La préparation, depuis ta dernière séance',
    alt: 'Écran « Préparer ma séance » : nombre de check-ins et humeur moyenne depuis la dernière séance, extraits du journal, exercices essayés, puis le bouton « Commencer la séance ».',
  },
  {
    src: '/captures/en-seance.webp',
    width: 720,
    height: 1420,
    caption: 'Le mode séance, pour ne rien oublier',
    alt: 'Écran « En séance » : l’intention du jour, puis la liste des points à aborder, à cocher au fil de la séance.',
  },
];

export default function Home() {
  return (
    <>
      <section className="overflow-hidden bg-gradient-to-b from-lavender via-lavender to-paper">
        <div className="wrap grid items-center gap-12 pb-16 pt-12 sm:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:pb-24">
          <div className="rise">
            <p className="eyebrow mb-5">Printemps 2027, sur iPhone</p>
            <h1 className="h1">
              Entre deux séances, la vie continue. <span className="text-link">Allyia en garde la trace.</span>
            </h1>
            <p className="lead mt-6 max-w-xl">
              Allyia est le compagnon de l&apos;entre-deux séances : il t&apos;aide à garder la trace de ce que tu vis
              et à arriver chez ton psychologue avec tes sujets prêts.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a href="#liste-d-attente" className="btn btn-primary">Être prévenu du lancement</a>
              <Link href="/application" className="link inline-flex items-center gap-1.5">
                Voir ce que fait l&apos;app <Arrow className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="rise rise-2 relative mx-auto w-full max-w-[19rem] lg:max-w-[21rem]">
            <div aria-hidden className="absolute -left-16 top-24 h-56 w-56 rounded-full bg-[#ffa9fe]/60" />
            <div aria-hidden className="absolute -right-10 -top-6 h-36 w-36 rounded-full bg-[#5b3a9c]/70" />
            <Capture
              src="/captures/accueil.webp"
              width={720}
              height={1475}
              priority
              className="relative"
              alt="Écran d’accueil de l’app Allyia : un bonjour, le check-in du jour à faire, puis les prises de traitement de la journée avec leur heure."
            />
          </div>
        </div>
      </section>

      <section className="wrap section" aria-labelledby="intervalle">
        <div className="grid items-center gap-8 lg:grid-cols-[auto_1fr] lg:gap-16">
          <p className="font-display text-[5.5rem] font-extrabold leading-none text-plum sm:text-[8rem]">
            99&nbsp;%
          </p>
          <div>
            <h2 id="intervalle" className="h2">L&apos;essentiel se passe hors du cabinet</h2>
            <p className="lead mt-5 max-w-2xl">
              Si tu vois ton psychologue tous les quinze jours, tu passes plus de 99 % de ton temps hors du cabinet :
              une séance de 50 minutes pour 336 heures d&apos;intervalle. Allyia est là pour ces heures-là.
            </p>
          </div>
        </div>
      </section>

      <section className="wrap pb-16 sm:pb-24" aria-labelledby="piliers">
        <h2 id="piliers" className="h2">Trois choses, bien faites</h2>
        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {pillars.map((p, i) => (
            <li key={p.title} className={`rounded-card p-7 sm:p-8 ${tones[p.tone]}`}>
              <p aria-hidden className="font-display text-lg font-bold text-muted">0{i + 1}</p>
              <h3 className="h3 mt-3">{p.title}</h3>
              <p className="mt-3">{p.text}</p>
            </li>
          ))}
        </ol>
        <p className="lead mt-10 max-w-2xl">
          Allyia est un miroir, pas un oracle. Pas de série à tenir, pas de reproche après une absence.
        </p>
      </section>

      <section className="bg-lavender" aria-labelledby="apercu">
        <div className="wrap section">
          <h2 id="apercu" className="h2">À quoi ça ressemble</h2>
          <p className="lead mt-4 max-w-2xl">
            Les captures sont réalisées avec des données fictives.
          </p>
          <ul className="mt-12 grid items-start gap-10 sm:grid-cols-3 sm:gap-6 lg:gap-12">
            {captures.map((c) => (
              <li key={c.src}>
                <figure className="mx-auto max-w-[18rem]">
                  <Capture {...c} />
                  <figcaption className="mt-4 text-center font-display font-bold text-plum">{c.caption}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
          <p className="mt-12 text-center">
            <Link href="/application" className="btn btn-ghost">Découvrir les sept modules</Link>
          </p>
        </div>
      </section>

      <section className="on-dark bg-plum text-[#eadff5]" aria-labelledby="confidentialite">
        <div className="wrap section grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Lock className="h-10 w-10 text-violet" />
            <h2 id="confidentialite" className="h2 mt-5 !text-white">Tes données restent sur ton iPhone.</h2>
            <p className="mt-5 text-lg">
              Aucun serveur ne stocke tes données de santé. Et ce site ne dépose aucun cookie, sans bandeau à fermer.
            </p>
            <Link href="/confidentialite" className="btn btn-violet mt-8">Comprendre comment c&apos;est protégé</Link>
          </div>
          <ul className="space-y-4 text-lg">
            {[
              'Ton journal et tes séances sont chiffrés ; la clé reste dans le trousseau de ton iPhone.',
              "L'app fonctionne sans réseau.",
              "L'IA tourne sur l'appareil par défaut. L'IA en ligne est désactivée tant que tu ne l'actives pas.",
              'Les notifications sont neutres, sans contenu sensible.',
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <Check className="mt-1 h-6 w-6 shrink-0 text-violet" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="wrap section" aria-labelledby="pas">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <h2 id="pas" className="h2">Ce qu&apos;Allyia n&apos;est pas</h2>
            <p className="lead mt-5">
              Autant le dire clairement : Allyia ne soigne pas. Elle t&apos;aide à préparer ce que tu travailles avec
              ton psychologue.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {notAllyia.map((t) => (
              <li key={t} className="card flex gap-3 !p-6">
                <Cross className="mt-1 h-5 w-5 shrink-0 text-muted" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="liste-d-attente" className="bg-gradient-to-b from-paper to-lavender" aria-labelledby="attente">
        <div className="wrap section grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 id="attente" className="h2">Être prévenu du lancement</h2>
            <p className="lead mt-5">
              Laisse ton adresse : tu recevras un e-mail le jour où Allyia arrive sur l&apos;App Store, au printemps
              2027. Rien d&apos;autre.
            </p>
            <p className="mt-6">
              Vous êtes psychologue ?{' '}
              <Link className="link" href="/psychologues">Une page vous est destinée.</Link>
            </p>
          </div>
          <WaitlistForm audience="patient" />
        </div>
      </section>
    </>
  );
}
