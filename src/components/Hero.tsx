import { SITE } from '@/data/config';

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-500">
        <span className="h-1.5 w-1.5 rounded-full bg-neutral-900" />
        Full-Stack Developer - Ingegneria Informatica — Genova / Italia
      </span>
      <h1 className="mt-4 text-4xl sm:text-5xl font-semibold leading-tight">{SITE.tagline}</h1>
      <p className="mt-4 text-neutral-600 max-w-prose">
        Siti vetrina e piccole app per attività locali: prezzi chiari, tempi rapidi e assistenza
        vicina su WhatsApp.
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <a
          href={`https://wa.me/${SITE.whatsapp}`}
          className="rounded-2xl px-4 py-3 bg-neutral-900 text-white hover:bg-neutral-800 transition"
        >
          Scrivimi su WhatsApp
        </a>
        <a
          href="/contatti"
          className="rounded-2xl px-4 py-3 border border-neutral-200 hover:bg-neutral-100 transition"
        >
          Richiedi un preventivo
        </a>
      </div>
      <ul className="mt-6 text-sm text-neutral-600 grid sm:grid-cols-3 gap-2">
        <li>Prezzi competitivi</li>
        <li>Consegne rapide</li>
        <li>Assistenza chiara</li>
      </ul>
    </section>
  );
}
