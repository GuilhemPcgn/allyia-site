import type { Config } from 'tailwindcss';

// Couleurs de la marque (brief, section « Identité visuelle »).
// Aucune des cinq couleurs de marque ne sert à écrire sur fond clair :
// le texte utilise ink / plum / muted / link. Voir scripts/check-contrast.mjs.
const config: Config = {
  content: ['./components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: 'var(--ink)',
        plum: 'var(--plum)',
        muted: 'var(--muted)',
        link: 'var(--link)',
        violet: 'var(--violet)',
        orange: 'var(--orange)',
        green: 'var(--green)',
        blue: 'var(--blue)',
        paper: 'var(--paper)',
        lavender: 'var(--lavender)',
        mint: 'var(--mint)',
        sky: 'var(--sky)',
        cream: 'var(--cream)',
        line: 'var(--line)',
      },
      fontFamily: {
        sans: ['"Figtree Variable"', 'system-ui', '-apple-system', '"Segoe UI"', 'Roboto', 'sans-serif'],
        display: ['"Gabarito Variable"', '"Figtree Variable"', 'system-ui', 'sans-serif'],
      },
      maxWidth: { page: '72rem', prose: '42rem' },
      borderRadius: { card: '1.5rem', phone: '2.25rem' },
      boxShadow: {
        soft: '0 1px 2px rgba(58,26,79,.06), 0 12px 32px -12px rgba(58,26,79,.18)',
      },
    },
  },
  plugins: [],
};
export default config;
