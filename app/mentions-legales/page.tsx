import type { Metadata } from 'next';
import PageHero from '@/components/page-hero';
import Todo from '@/components/todo';
import { legal, site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Éditeur, hébergeur et contact du site allyia.fr.',
  alternates: { canonical: '/mentions-legales' },
};

export default function MentionsLegales() {
  return (
    <>
      <PageHero title="Mentions légales" />
      <div className="wrap prose-legal pb-20">
        <h2>Éditeur du site</h2>
        <p>
          Le site allyia.fr est édité par <Todo value={legal.editorName} label="dénomination de l'éditeur" />,{' '}
          <Todo value={legal.editorForm} label="forme juridique" />, dont le siège est situé{' '}
          <Todo value={legal.editorAddress} label="adresse du siège" />, immatriculée sous le numéro{' '}
          <Todo value={legal.editorId} label="SIREN ou RNA" />.
        </p>
        <p>
          Directeur de la publication : <Todo value={legal.publicationDirector} label="nom du directeur de la publication" />.
        </p>
        <p>Contact : <a className="link" href={`mailto:${site.email}`}>{site.email}</a></p>

        <h2>Hébergeur</h2>
        <p>
          Le site est hébergé par Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis
          (vercel.com). Il s&apos;agit d&apos;un site statique : il ne contient aucune donnée de santé.
        </p>

        <h2>Propriété intellectuelle</h2>
        <p>
          Les textes, le nom Allyia, le logo et les captures de l&apos;application présentés sur ce site sont la
          propriété de l&apos;éditeur. Toute reproduction sans autorisation est interdite. Les captures de
          l&apos;application sont réalisées avec des données fictives.
        </p>

        <h2>Nature du service</h2>
        <p>
          Allyia n&apos;est pas un dispositif médical et ne remplace ni un diagnostic, ni un suivi par un
          professionnel de santé. Allyia n&apos;est pas un service d&apos;urgence : en cas de détresse, appelez le
          3114, le 15 ou le 112.
        </p>

        <p className="text-muted">
          Dernière mise à jour : <Todo value={legal.lastUpdate} label="date de publication" />
        </p>
      </div>
    </>
  );
}
