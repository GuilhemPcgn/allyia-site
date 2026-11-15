import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/page-hero';
import Todo from '@/components/todo';
import { legal, site } from '@/lib/site';

export const metadata: Metadata = {
  title: "Conditions d'utilisation",
  description: "Conditions générales d'utilisation du site allyia.fr.",
  alternates: { canonical: '/cgu' },
};

export default function Cgu() {
  return (
    <>
      <PageHero title="Conditions générales d'utilisation" lead="Ces conditions concernent le site allyia.fr. Celles de l'application seront publiées avec elle, à son lancement." />
      <div className="wrap prose-legal pb-20">
        <h2>1. Objet</h2>
        <p>
          Le site allyia.fr présente l&apos;application Allyia et permet de s&apos;inscrire à une liste d&apos;attente.
          Son accès est libre et gratuit.
        </p>

        <h2>2. Ce que le site n&apos;est pas</h2>
        <p>
          Les informations publiées ici décrivent un projet et une application à venir. Elles ne constituent ni un
          avis médical, ni un diagnostic, ni une recommandation de traitement. Allyia ne remplace pas un suivi par un
          professionnel de santé et n&apos;est pas un service d&apos;urgence.
        </p>

        <h2>3. Liste d&apos;attente</h2>
        <p>
          L&apos;inscription est facultative. Elle ne crée aucun engagement d&apos;achat et peut être annulée à tout
          moment. Le traitement de l&apos;adresse e-mail est décrit dans la{' '}
          <Link className="link" href="/politique-de-confidentialite">politique de confidentialité</Link>.
        </p>

        <h2>4. Calendrier et tarifs</h2>
        <p>
          Les dates et les prix mentionnés sur le site sont prévisionnels. Ils peuvent évoluer jusqu&apos;à la
          publication de l&apos;application sur l&apos;App Store.
        </p>

        <h2>5. Propriété intellectuelle</h2>
        <p>
          Les contenus du site sont protégés. Ils ne peuvent être reproduits sans l&apos;accord de l&apos;éditeur,
          hors courte citation mentionnant la source.
        </p>

        <h2>6. Liens</h2>
        <p>
          Le site contient des liens vers Instagram et LinkedIn. Ces services appliquent leurs propres conditions.
        </p>

        <h2>7. Droit applicable et contact</h2>
        <p>
          Ces conditions sont soumises au droit français. Pour toute question :{' '}
          <a className="link" href={`mailto:${site.email}`}>{site.email}</a>.
        </p>

        <p className="text-muted">
          Dernière mise à jour : <Todo value={legal.lastUpdate} label="date de publication" />
        </p>
      </div>
    </>
  );
}
