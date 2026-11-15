type Props = { eyebrow?: string; title: string; lead?: string; tone?: string };

export default function PageHero({ eyebrow, title, lead, tone = 'from-lavender' }: Props) {
  return (
    <div className={`bg-gradient-to-b ${tone} to-paper`}>
      <div className="wrap pb-10 pt-14 sm:pb-14 sm:pt-20">
        {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
        <h1 className="h1 max-w-3xl">{title}</h1>
        {lead && <p className="lead mt-6 max-w-2xl">{lead}</p>}
      </div>
    </div>
  );
}
