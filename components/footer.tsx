import Link from 'next/link';
import { emergency, legalNav, nav, site } from '@/lib/site';
import { Mark } from './icons';

export default function Footer() {
  return (
    <footer className="on-dark bg-plum text-[#eadff5]">
      <div className="wrap py-14">
        <section aria-labelledby="urgence" className="rounded-card border border-white/25 p-6 sm:p-8">
          <h2 id="urgence" className="font-display text-xl font-bold text-white">
            Allyia n&apos;est pas un service d&apos;urgence
          </h2>
          <p className="mt-2 max-w-prose">
            Si ça ne va pas, ou si tu t&apos;inquiètes pour quelqu&apos;un, appelle. Ces numéros sont aussi
            accessibles depuis le journal de l&apos;app.
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-3">
            {emergency.map((e) => (
              <li key={e.number}>
                <a
                  href={`tel:${e.number}`}
                  className="flex h-full items-baseline gap-3 rounded-2xl bg-white/10 px-4 py-3 text-white no-underline hover:bg-white/20"
                >
                  <span className="font-display text-2xl font-extrabold">{e.number}</span>
                  <span className="text-sm text-[#eadff5]">{e.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="flex items-center gap-2.5">
              <Mark className="h-8 w-auto" />
              <span className="font-display text-2xl font-extrabold text-white">Allyia</span>
            </p>
            <p className="mt-3 max-w-xs text-[0.97rem]">
              Le compagnon de l&apos;entre-deux séances. Lancement prévu au printemps 2027, sur iPhone.
            </p>
          </div>
          <FooterList title="Le site" items={nav} />
          <FooterList title="Informations légales" items={legalNav} />
          <div>
            <h2 className="font-display text-base font-bold text-white">Contact</h2>
            <ul className="mt-3 space-y-2 text-[0.97rem]">
              <li><a className="underline hover:text-white" href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><a className="underline hover:text-white" href={site.instagram} rel="noopener">Instagram</a></li>
              <li><a className="underline hover:text-white" href={site.linkedin} rel="noopener">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-white/20 pt-6 text-sm">
          © 2026 Allyia. Ce site ne dépose aucun cookie et n&apos;utilise aucun traceur.
        </p>
      </div>
    </footer>
  );
}

function FooterList({ title, items }: { title: string; items: { href: string; label: string }[] }) {
  return (
    <nav aria-label={title}>
      <h2 className="font-display text-base font-bold text-white">{title}</h2>
      <ul className="mt-3 space-y-2 text-[0.97rem]">
        {items.map((i) => (
          <li key={i.href}>
            <Link href={i.href} className="underline decoration-white/40 hover:text-white hover:decoration-white">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
