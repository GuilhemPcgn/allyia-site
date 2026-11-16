import type { Metadata } from 'next';
import BrowserCapture from '@/components/browser-capture';
import { Check } from '@/components/icons';
import PageHero from '@/components/page-hero';
import WaitlistForm from '@/components/waitlist-form';

export const metadata: Metadata = {
  title: 'Pour les psychologues',
  description:
    "Allyia prépare pour 2028 un espace destiné aux psychologues : voir ce que vos patients choisissent de partager entre deux séances. Liste d'attente et candidature à la bêta.",
  alternates: { canonical: '/psychologues' },
};

const maquettes = [
  {
    src: '/maquettes-psy/aujourdhui.webp',
    width: 1600,
    height: 1037,
    label: 'Aujourd’hui',
    title: 'Vos séances du jour',
    text: 'Seules les séances pour lesquelles un patient vous a remis une synthèse apparaissent. Rien ne vous parvient entre deux séances.',
    alt: 'Maquette de l’écran « Aujourd’hui » : trois synthèses remises pour les séances de 9 h, 11 h et 16 h 30, chacune avec sa date de validation par le patient, et un encadré rappelant qu’il n’y a rien à surveiller entre deux séances.',
  },
  {
    src: '/maquettes-psy/synthese.webp',
    width: 1600,
    height: 1489,
    label: 'Synthèse avant séance',
    title: 'Une synthèse écrite par le patient',
    text: 'Ses sujets dans son ordre et avec ses mots, ce qu’il retient, ce qu’il a essayé. Le patient la relit et la valide avant de vous l’envoyer.',
    alt: 'Maquette d’une synthèse avant séance pour une patiente fictive : trois sujets qu’elle souhaite aborder, cités entre guillemets, ce qu’elle retient et ce qu’elle essaie, puis ses retours sur deux exercices et un résumé de son journal étiqueté « Résumé automatique, relu par Camille ».',
  },
  {
    src: '/maquettes-psy/partage.webp',
    width: 1600,
    height: 1211,
    label: 'Partage et accès',
    title: 'Le patient choisit ce qu’il partage',
    text: 'Catégorie par catégorie. Chaque ouverture, impression ou envoi s’inscrit dans un journal des accès que le patient voit aussi.',
    alt: 'Maquette de l’écran « Partage et accès » : un tableau des catégories partagées ou non par la patiente (sujets, retenu et essayé, retours sur les fiches, résumé du journal, repères, traitements), et à droite le journal des accès daté.',
  },
  {
    src: '/maquettes-psy/envoyer.webp',
    width: 1600,
    height: 1178,
    label: 'Envoyer une fiche',
    title: 'Des exercices envoyés après la séance',
    text: 'Vous choisissez une fiche, un rythme et quelques mots de consigne. Le patient règle lui-même ses rappels.',
    alt: 'Maquette de l’écran « Envoyer une fiche » : choix d’un exercice de respiration, du rythme proposé et d’une consigne écrite, avec à droite un aperçu de ce que la patiente verra dans son application iPhone.',
  },
];

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

      <section className="wrap section" aria-labelledby="apercu-psy">
        <p className="eyebrow">Maquettes de travail</p>
        <h2 id="apercu-psy" className="h2 mt-4 max-w-3xl">À quoi pourrait ressembler votre espace</h2>
        <p className="lead mt-5 max-w-2xl">
          Ces écrans sont des maquettes, pas un produit : l&apos;espace psychologues n&apos;est pas encore construit
          et évoluera avec les praticiens de la bêta. Les patients et les données sont fictifs.
        </p>
        <ul className="mt-14 space-y-16 sm:space-y-24">
          {maquettes.map((m, i) => (
            <li key={m.src}>
              <figure
                className={`grid items-center gap-8 lg:gap-14 ${i % 2 ? 'lg:grid-cols-[1fr_1.7fr]' : 'lg:grid-cols-[1.7fr_1fr]'}`}
              >
                <div className={i % 2 ? 'lg:order-2' : ''}>
                  <BrowserCapture src={m.src} width={m.width} height={m.height} alt={m.alt} label={m.label} />
                </div>
                <figcaption className={i % 2 ? 'lg:order-1' : ''}>
                  <p aria-hidden className="font-display text-lg font-bold text-muted">0{i + 1}</p>
                  <h3 className="h3 mt-2">{m.title}</h3>
                  <p className="mt-3 text-lg text-muted">{m.text}</p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
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
