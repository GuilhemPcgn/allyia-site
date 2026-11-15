import type { Metadata } from 'next';
import { Check } from '@/components/icons';
import PageHero from '@/components/page-hero';
import WaitlistForm from '@/components/waitlist-form';

export const metadata: Metadata = {
  title: 'Pour les psychologues',
  description:
    "Allyia prépare pour 2028 un espace destiné aux psychologues : voir ce que vos patients choisissent de partager entre deux séances. Liste d'attente et candidature à la bêta.",
  alternates: { canonical: '/psychologues' },
};

export default function Psychologues() {
  return (
    <>
      <PageHero
        eyebrow="Pour les psychologues"
        title="Ce qui se passe entre deux séances, quand votre patient choisit de le partager"
        lead="Allyia est d'abord une application pour vos patients, prévue au printemps 2027. Un espace pour les psychologues est prévu en 2028. La candidature à la bêta est ouverte."
        tone="from-mint"
      />

      <section className="wrap pb-16 sm:pb-24" aria-labelledby="intervalle">
        <div className="grid items-center gap-8 rounded-[2rem] bg-lavender p-7 sm:p-12 lg:grid-cols-[auto_1fr] lg:gap-14">
          <p className="font-display text-[4.5rem] font-extrabold leading-none text-plum sm:text-[6.5rem]">
            336&nbsp;h
          </p>
          <div>
            <h2 id="intervalle" className="h2">Le problème de l&apos;intervalle</h2>
            <p className="mt-5 max-w-2xl text-lg">
              Un patient que vous recevez tous les quinze jours passe plus de 99 % de son temps hors de votre
              cabinet : une séance de 50 minutes pour 336 heures d&apos;intervalle. Ce qu&apos;il a vécu, il doit
              s&apos;en souvenir, le trier et le dire, souvent dans les premières minutes.
            </p>
          </div>
        </div>
      </section>

      <section className="wrap pb-16 sm:pb-24" aria-labelledby="aujourdhui">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 id="aujourdhui" className="h2">Dès 2027, côté patient</h2>
            <p className="mt-5 text-lg">
              Avec la première version, votre patient note ce qu&apos;il vit, liste les sujets qu&apos;il veut
              aborder et garde les exercices que vous lui proposez. Il arrive en séance avec ses sujets prêts.
            </p>
            <p className="mt-4 text-lg">
              Dans cette version, rien n&apos;est partagé : ses données restent sur son iPhone. S&apos;il le souhaite,
              il peut vous montrer son écran ou un bilan qu&apos;il a lui-même généré.
            </p>
          </div>
          <div>
            <h2 className="h2">Ce qu&apos;Allyia ne fait pas</h2>
            <ul className="mt-5 space-y-3 text-lg">
              {[
                'Aucun diagnostic, aucun score de risque.',
                'Aucune recommandation de traitement.',
                'Aucun chatbot dans cette version.',
                'Aucune promesse d’effet thérapeutique : le travail se fait avec vous.',
              ].map((t) => (
                <li key={t} className="flex gap-3"><Check className="mt-1.5 h-5 w-5 shrink-0 text-green" /><span>{t}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="on-dark bg-plum text-[#eadff5]" aria-labelledby="v2">
        <div className="wrap section">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-violet">Prévu en 2028</p>
          <h2 id="v2" className="h2 mt-4 max-w-2xl !text-white">Un espace pour les psychologues</h2>
          <p className="mt-5 max-w-2xl text-lg">
            Vous y verrez ce que vos patients choisissent de partager avec vous, et seulement cela. Cette version
            n&apos;existe pas encore ; voici les principes sur lesquels elle sera construite.
          </p>
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ['Le patient choisit', 'C’est lui qui décide ce qu’il partage, et avec qui.'],
              ['Un consentement retirable', 'Il peut retirer son accord quand il le souhaite.'],
              ['Hébergement HDS et accès tracés', 'Les données partagées seront hébergées en France, chez un hébergeur certifié HDS, et chaque accès sera tracé.'],
            ].map(([t, d]) => (
              <li key={t} className="rounded-card border border-white/25 p-6">
                <h3 className="font-display text-xl font-bold text-white">{t}</h3>
                <p className="mt-2">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="beta" className="bg-gradient-to-b from-paper to-mint" aria-labelledby="beta-titre">
        <div className="wrap section grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 id="beta-titre" className="h2">Liste d&apos;attente et bêta</h2>
            <p className="lead mt-5">
              Inscrivez-vous pour être informé de l&apos;ouverture de l&apos;espace psychologues. Si vous exercez en
              Normandie, vous pouvez aussi candidater à la bêta, que nous construirons avec un petit groupe de
              praticiens.
            </p>
            <p className="mt-5">Nous ne vous demandons aucune information sur vos patients.</p>
          </div>
          <WaitlistForm audience="psychologue" />
        </div>
      </section>
    </>
  );
}
