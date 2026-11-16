type Props = {
  src: string;
  width: number;
  height: number;
  alt: string;
  label: string;
};

/** Capture d'écran d'une page web, dans une fenêtre de navigateur simplifiée. Un clic ouvre l'image en grand. */
export default function BrowserCapture({ src, width, height, alt, label }: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-soft">
      <div aria-hidden className="flex items-center gap-2 border-b border-line bg-lavender px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="ml-3 truncate rounded-full bg-white px-3 py-0.5 text-xs font-semibold text-muted">
          Espace psy · {label}
        </span>
      </div>
      <a href={src} target="_blank" rel="noopener" className="block" aria-label={`${label} : agrandir la maquette (nouvel onglet)`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} width={width} height={height} alt={alt} loading="lazy" decoding="async" className="block h-auto w-full" />
      </a>
    </div>
  );
}
