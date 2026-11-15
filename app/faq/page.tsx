import type { Metadata } from 'next';
import PageHero from '@/components/page-hero';
import { faq, site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'FAQ, contact et presse',
  description:
    "Les réponses aux questions fréquentes sur Allyia : données, IA, prix, date de lancement. Et comment nous contacter.",
  alternates: { canonical: '/faq' },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function Faq() {
  return (
    <>
      <PageHero eyebrow="FAQ, contact et presse" title="Les questions qu'on nous pose" />

      <section className="wrap pb-16 sm:pb-24" aria-label="Questions fréquentes">
        <div className="max-w-3xl space-y-3">
          {faq.map((f) => (
            <details key={f.q} className="group rounded-card border border-line bg-white">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-card px-6 py-5 font-display text-lg font-bold text-plum sm:text-xl [&::-webkit-details-marker]:hidden">
                <h2 className="text-inherit">{f.q}</h2>
                <span aria-hidden className="shrink-0 text-2xl leading-none transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="px-6 pb-6 text-lg">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-lavender" aria-labelledby="contact-titre">
        <div className="wrap section grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 id="contact-titre" className="h2">Contact</h2>
            <p className="mt-5 text-lg">Une question, une remarque, une envie de participer ? Écris-nous.</p>
            <ul className="mt-6 space-y-3 text-lg">
              <li>E-mail : <a className="link" href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><a className="link" href={site.instagram} rel="noopener">Allyia sur Instagram</a></li>
              <li><a className="link" href={site.linkedin} rel="noopener">Allyia sur LinkedIn</a></li>
            </ul>
            <p className="mt-6 text-muted">
              Merci de ne pas nous envoyer d&apos;informations sur ta santé par e-mail. En cas d&apos;urgence, appelle
              le 3114, le 15 ou le 112.
            </p>
          </div>
          <div id="presse">
            <h2 className="h2">Presse</h2>
            <p className="mt-5 text-lg">
              Journalistes, partenaires, financeurs : le dossier de presse est disponible sur demande.
            </p>
            <a
              className="btn btn-primary mt-6"
              href={`mailto:${site.email}?subject=${encodeURIComponent('Demande de dossier de presse')}`}
            >
              Demander le dossier de presse
            </a>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </>
  );
}
