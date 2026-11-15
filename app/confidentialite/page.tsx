import type { Metadata } from 'next';
import Link from 'next/link';
import { Check } from '@/components/icons';
import PageHero from '@/components/page-hero';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Confidentialité et sécurité',
  description:
    "Où sont tes données, comment elles sont chiffrées, ce qui se passe avec l'IA en ligne et comment la refuser. En langage simple.",
  alternates: { canonical: '/confidentialite' },
};

const facts = [
  {
    title: 'Tes données de santé restent sur ton iPhone',
    text: 'Aucun serveur ne les stocke.',
  },
  {
    title: 'Ton journal et tes séances sont chiffrés',
    text: 'Le chiffrement utilisé est AES-256-GCM. La clé reste dans le trousseau de ton iPhone et n’est jamais synchronisée.',
  },
  {
    title: 'L’app fonctionne sans réseau',
    text: 'Elle n’a pas besoin de connexion pour fonctionner.',
  },
  {
    title: 'L’IA tourne sur l’appareil par défaut',
    text: 'Sur un iPhone compatible Apple Intelligence, avec iOS 26, les résumés sont produits sur le téléphone. Rien n’en sort.',
  },
  {
    title: 'Les notifications sont neutres',
    text: 'Aucun contenu sensible, et jamais le mot « psy » sur l’écran verrouillé.',
  },
  {
    title: 'L’app se verrouille',
    text: 'Face ID et verrouillage automatique protègent l’ouverture de l’app.',
  },
];

export default function Confidentialite() {
  return (
    <>
      <PageHero
        eyebrow="Confidentialité et sécurité"
        title="Tes données restent sur ton iPhone."
        lead="Voici, en langage simple, ce qui est vrai dans la première version d'Allyia. Nous préférons une liste courte et exacte à une grande promesse."
        tone="from-sky"
      />

      <section className="wrap pb-16 sm:pb-24" aria-labelledby="vrai">
        <h2 id="vrai" className="sr-only">Ce qui est vrai dans la première version</h2>
        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {facts.map((f) => (
            <li key={f.title} className="card">
              <Check className="h-7 w-7 text-green" />
              <h3 className="h3 mt-4 !text-xl">{f.title}</h3>
              <p className="mt-3 text-muted">{f.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="ia-en-ligne" className="bg-lavender" aria-labelledby="ia-titre">
        <div className="wrap section grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 id="ia-titre" className="h2">L&apos;IA en ligne, et comment la refuser</h2>
            <p className="lead mt-5">
              Elle est désactivée par défaut. Pour la refuser, il n&apos;y a rien à faire.
            </p>
          </div>
          <div className="space-y-5">
            <p>
              L&apos;IA en ligne est fournie par Mistral, sur un serveur hébergé en Europe. Elle est désactivée par
              défaut et ne s&apos;active qu&apos;avec ton consentement explicite.
            </p>
            <p>Si tu l&apos;actives, le contenu envoyé n&apos;est jamais journalisé.</p>
            <p>
              Tant que tu ne donnes pas ton accord, elle reste éteinte : l&apos;IA tourne sur ton iPhone, et rien
              n&apos;en sort.
            </p>
          </div>
        </div>
      </section>

      <section className="wrap section" aria-labelledby="droits">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 id="droits" className="h2">Tes droits</h2>
            <p className="mt-5">
              Le règlement européen sur la protection des données (RGPD) te donne un droit d&apos;accès, de
              rectification, d&apos;effacement et de portabilité. Dans Allyia, tu les exerces toi-même, puisque tes
              données sont entre tes mains :
            </p>
            <ul className="mt-5 space-y-3">
              {[
                'Tu peux exporter une sauvegarde depuis ton profil.',
                'Tu peux modifier ou supprimer chaque entrée, chaque point, chaque texte généré.',
                'Tu peux supprimer ton compte et tes données depuis l’app.',
              ].map((t) => (
                <li key={t} className="flex gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-green" /><span>{t}</span></li>
              ))}
            </ul>
            <p className="mt-5">
              Pour toute question : <a className="link" href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          </div>
          <div>
            <h2 className="h2">Et ce site ?</h2>
            <p className="mt-5">
              Il ne dépose aucun cookie et n&apos;utilise aucun traceur ni mesure d&apos;audience. La seule donnée
              que nous recueillons est l&apos;adresse e-mail que tu choisis de laisser sur la liste d&apos;attente.
            </p>
            <p className="mt-5">
              <Link className="link" href="/politique-de-confidentialite">Lire la politique de confidentialité</Link>
            </p>
          </div>
        </div>
      </section>

      <section className="on-dark bg-plum text-[#eadff5]" aria-labelledby="v2">
        <div className="wrap section max-w-page">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-violet">À venir, en 2028</p>
          <h2 id="v2" className="h2 mt-4 max-w-2xl !text-white">Partager avec ton psychologue, si tu le décides</h2>
          <p className="mt-5 max-w-2xl text-lg">
            Aujourd&apos;hui, rien n&apos;est partagé. Une prochaine version te permettra de montrer à ton psychologue
            ce que tu choisis. Ce partage reposera sur un hébergement certifié pour les données de santé (HDS), en
            France, sur un consentement que tu pourras retirer, et sur des accès tracés.
          </p>
        </div>
      </section>
    </>
  );
}
