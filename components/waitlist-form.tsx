'use client';

import Link from 'next/link';
import { FormEvent, useId, useState } from 'react';
import { site } from '@/lib/site';

type Props = { audience: 'patient' | 'psychologue' };
type Status = 'idle' | 'sending' | 'done' | 'error' | 'closed';

// Service qui reçoit les inscriptions (hébergé dans l'Union européenne).
// À définir dans les variables d'environnement Vercel avant la mise en ligne.
const ENDPOINT = process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT;

export default function WaitlistForm({ audience }: Props) {
  const id = useId();
  const psy = audience === 'psychologue';
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (data.get('site')) return; // champ piège anti-robots
    if (!ENDPOINT) {
      setStatus('closed');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          email: data.get('email'),
          audience,
          beta: psy ? data.get('beta') === 'on' : undefined,
          consent: true,
        }),
      });
      setStatus(res.ok ? 'done' : 'error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'done') {
    return (
      <p role="status" className="card border-green bg-mint text-lg font-semibold text-ink">
        {psy
          ? 'Merci, votre inscription est enregistrée. Nous vous écrirons quand la bêta se précisera.'
          : "C'est noté. Tu recevras un seul e-mail, le jour du lancement."}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card space-y-5 text-left" noValidate={false}>
      <div>
        <label htmlFor={`${id}-email`} className="block font-display text-lg font-bold text-plum">
          {psy ? 'Votre adresse e-mail' : 'Ton adresse e-mail'}
        </label>
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          inputMode="email"
          placeholder={psy ? 'prenom@exemple.fr' : 'toi@exemple.fr'}
          className="mt-2 block w-full rounded-2xl border-2 border-muted bg-white px-4 py-3 text-ink placeholder:text-muted/70"
        />
      </div>

      {/* Champ piège : invisible, hors tabulation, ignoré des lecteurs d'écran. */}
      <div aria-hidden className="hidden">
        <label>
          Ne pas remplir
          <input name="site" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {psy && (
        <label className="flex items-start gap-3">
          <input name="beta" type="checkbox" className="mt-1 h-5 w-5 shrink-0 accent-[#3a1a4f]" />
          <span>Je souhaite aussi candidater à la bêta, ouverte en priorité aux psychologues exerçant en Normandie.</span>
        </label>
      )}

      <label className="flex items-start gap-3">
        <input name="consent" type="checkbox" required className="mt-1 h-5 w-5 shrink-0 accent-[#3a1a4f]" />
        <span>
          {psy
            ? "J'accepte qu'Allyia utilise mon adresse e-mail pour m'informer de l'ouverture de l'espace psychologues et de la bêta."
            : "J'accepte qu'Allyia utilise mon adresse e-mail pour me prévenir du lancement de l'app."}
        </span>
      </label>

      <button type="submit" className="btn btn-primary w-full sm:w-auto" disabled={status === 'sending'}>
        {status === 'sending' ? 'Envoi…' : psy ? "M'inscrire sur la liste d'attente" : 'Être prévenu du lancement'}
      </button>

      <div role="alert" aria-live="assertive">
        {status === 'error' && (
          <p className="rounded-2xl bg-cream p-4 font-semibold text-ink">
            L&apos;inscription n&apos;a pas pu être enregistrée. Réessaie dans un instant, ou écris à{' '}
            <a className="link" href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        )}
        {status === 'closed' && (
          <p className="rounded-2xl bg-cream p-4 font-semibold text-ink">
            La liste d&apos;attente n&apos;est pas encore ouverte. En attendant, écris à{' '}
            <a className="link" href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        )}
      </div>

      <p className="text-[0.95rem] text-muted">
        {psy ? 'Votre' : 'Ton'} adresse sert uniquement à cela. Elle est conservée jusqu&apos;à trois mois après{' '}
        {psy ? "l'ouverture de l'espace psychologues" : 'le lancement'}, chez un hébergeur situé dans l&apos;Union
        européenne, puis supprimée. {psy ? 'Vous pouvez vous' : 'Tu peux te'} désinscrire à tout moment. Aucune donnée
        de santé n&apos;est demandée.{' '}
        <Link className="link" href="/politique-de-confidentialite">Politique de confidentialité</Link>
      </p>
    </form>
  );
}
