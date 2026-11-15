type P = { className?: string };
const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  focusable: false,
};
export const Check = ({ className }: P) => (
  <svg {...base} className={className}><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
);
export const Cross = ({ className }: P) => (
  <svg {...base} className={className}><path d="M6 6l12 12M18 6L6 18" /></svg>
);
export const Arrow = ({ className }: P) => (
  <svg {...base} className={className}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const Lock = ({ className }: P) => (
  <svg {...base} className={className}><rect x="5" y="11" width="14" height="9" rx="2.5" /><path d="M8 11V8a4 4 0 018 0v3" /></svg>
);
export const Moon = ({ className }: P) => (
  <svg {...base} className={className}><path d="M20 14.5A8 8 0 019.5 4a8 8 0 1010.5 10.5z" /></svg>
);
export const Phone = ({ className }: P) => (
  <svg {...base} className={className}><rect x="7" y="3" width="10" height="18" rx="2.5" /><path d="M11 18h2" /></svg>
);

/** Le symbole Allyia : deux cercles qui se recouvrent. */
export function Mark({ className }: P) {
  return (
    <svg viewBox="0 0 68 58" className={className} aria-hidden focusable="false">
      <circle cx="25" cy="33" r="25" fill="#FFA9FE" />
      <circle cx="50" cy="18" r="17.5" fill="#5B3A9C" fillOpacity="0.88" />
    </svg>
  );
}
