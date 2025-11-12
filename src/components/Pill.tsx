export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full bg-black/35 text-white/75
                 px-3 py-1 text-[11px] tracking-widest uppercase backdrop-blur"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
      {children}
    </span>
  );
}
