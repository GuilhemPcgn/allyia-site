import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/page-hero';
import Todo from '@/components/todo';
import { legal, site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description:
    "Ce que le site allyia.fr recueille : une adresse e-mail, si vous vous inscrivez à la liste d'attente. Aucun cookie, aucun traceur.",
  alternates: { canonical: '/politique-de-confidentialite' },
};

export default function Politique() {
  return (
    <>
      <PageHero
        title="Politique de confidentialité"
        lead="Cette politique concerne le site allyia.fr. Pour l'application, voir la page Confidentialité et sécurité ; sa politique complète sera publiée avec elle."
      />
      <div className="wrap prose-legal pb-20">
        <h2>En résumé</h2>
        <ul>
          <li>Ce site ne dépose aucun cookie et n&apos;utilise aucun traceur ni outil de mesure d&apos;audience.</li>
          <li>La seule donnée recueillie est l&apos;adresse e-mail laissée sur une liste d&apos;attente.</li>
          <li>Aucun formulaire ne demande de donnée de santé.</li>
        </ul>

        <h2>Responsable du traitement</h2>
        <p>
          <Todo value={legal.editorName} label="dénomination de l'éditeur" />,{' '}
          <Todo value={legal.editorAddress} label="adresse" />. Contact :{' '}
          <a className="link" href={`mailto:${site.email}`}>{site.email}</a>.
        </p>

        <h2>Liste d&apos;attente</h2>
        <ul>
          <li>
            <strong>Données :</strong> adresse e-mail ; pour les psychologues, le souhait de candidater ou non à la
            bêta.
          </li>
          <li>
            <strong>Finalité :</strong> prévenir du lancement de l&apos;application ou, pour les psychologues, de
            l&apos;ouverture de l&apos;espace qui leur est destiné et de la bêta. Rien d&apos;autre.
          </li>
          <li><strong>Base légale :</strong> le consentement, donné en cochant la case du formulaire.</li>
          <li>
            <strong>Durée de conservation :</strong> jusqu&apos;à trois mois après le lancement concerné, ou
            jusqu&apos;à la désinscription si elle intervient avant.
          </li>
          <li>
            <strong>Destinataires :</strong> l&apos;équipe d&apos;Allyia et son prestataire d&apos;envoi
            d&apos;e-mails, <Todo value={legal.waitlistHost} label="nom et pays du prestataire" />, dont les serveurs
            sont situés dans l&apos;Union européenne. Les adresses ne sont ni vendues, ni cédées.
          </li>
        </ul>

        <h2>Hébergement du site</h2>
        <p>
          Le site est hébergé par Vercel Inc. (États-Unis). Comme tout hébergeur, Vercel traite des données
          techniques de connexion, dont l&apos;adresse IP, pour acheminer les pages et assurer la sécurité du
          service.
        </p>

        <h2>Vos droits</h2>
        <p>
          Vous pouvez accéder à vos données, les faire rectifier ou effacer, retirer votre consentement et vous
          désinscrire à tout moment, en écrivant à <a className="link" href={`mailto:${site.email}`}>{site.email}</a>{' '}
          ou via le lien présent dans chaque e-mail. Vous pouvez aussi adresser une réclamation à la CNIL
          (cnil.fr).
        </p>

        <h2>Et l&apos;application ?</h2>
        <p>
          Dans sa première version, les données de santé saisies dans l&apos;application restent sur l&apos;iPhone de
          la personne qui l&apos;utilise.{' '}
          <Link className="link" href="/confidentialite">En savoir plus</Link>
        </p>

        <p className="text-muted">
          Dernière mise à jour : <Todo value={legal.lastUpdate} label="date de publication" />
        </p>
      </div>
    </>
  );
}
