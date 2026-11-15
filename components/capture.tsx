type Props = {
  src: string;
  width: number;
  height: number;
  alt: string;
  priority?: boolean;
  className?: string;
};

/** Capture de l'app, dans un cadre arrondi. Dimensions fixées pour éviter tout décalage. */
export default function Capture({ src, width, height, alt, priority, className = '' }: Props) {
  return (
    <div className={`overflow-hidden rounded-phone border-[6px] border-plum bg-white shadow-soft ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        width={width}
        height={height}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        // @ts-expect-error attribut valide, absent des types React 18
        fetchpriority={priority ? 'high' : undefined}
        className="block h-auto w-full"
      />
    </div>
  );
}
