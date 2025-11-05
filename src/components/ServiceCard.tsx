type Props = { title: string; desc: string; bullets?: string[] };

export default function ServiceCard({ title, desc, bullets = [] }: Props) {
  return (
    <div className="rounded-2xl border border-neutral-200 p-5 hover:shadow-sm transition bg-white">
      <h3 className="font-medium text-lg">{title}</h3>
      <p className="mt-1 text-sm text-neutral-600">{desc}</p>
      {bullets.length > 0 && (
        <ul className="mt-3 text-sm text-neutral-700 list-disc list-inside space-y-1">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
