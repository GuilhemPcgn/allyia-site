'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { nav } from '@/lib/site';
import { Mark } from './icons';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const isCurrent = (href: string) =>
    href === '/' ? pathname === '/' : pathname.replace(/\/$/, '') === href;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      <div className="wrap flex h-[4.5rem] items-center justify-between gap-4">
        <Link href="/" className="flex shrink-0 items-center gap-2.5 no-underline" aria-label="Allyia, accueil">
          <Mark className="h-9 w-auto" />
          <span className="font-display text-2xl font-extrabold tracking-tight text-plum">Allyia</span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {nav.slice(1).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isCurrent(item.href) ? 'page' : undefined}
                  className="rounded-full px-3.5 py-2 text-[0.97rem] font-semibold text-ink no-underline hover:bg-lavender aria-[current=page]:bg-lavender aria-[current=page]:text-plum"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/#liste-d-attente" className="btn btn-primary hidden !min-h-[2.75rem] !px-5 !py-2 sm:inline-flex">
            Être prévenu du lancement
          </Link>
          <button
            type="button"
            className="btn btn-ghost !min-h-[2.75rem] !px-4 !py-2 xl:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Fermer' : 'Menu'}
          </button>
        </div>
      </div>

      <nav
        id="menu-mobile"
        aria-label="Navigation principale"
        hidden={!open}
        className="border-t border-line bg-paper xl:hidden"
      >
        <ul className="wrap flex flex-col py-3">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isCurrent(item.href) ? 'page' : undefined}
                className="block rounded-xl px-3 py-3 text-lg font-semibold text-ink no-underline hover:bg-lavender aria-[current=page]:bg-lavender aria-[current=page]:text-plum"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-2 sm:hidden">
            <Link href="/#liste-d-attente" className="btn btn-primary w-full">
              Être prévenu du lancement
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
