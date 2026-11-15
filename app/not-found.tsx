import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="wrap section">
      <h1 className="h1">Cette page n&apos;existe pas</h1>
      <p className="lead mt-6">Le site a été réorganisé : l&apos;adresse a peut-être changé.</p>
      <Link href="/" className="btn btn-primary mt-8">Revenir à l&apos;accueil</Link>
    </div>
  );
}
