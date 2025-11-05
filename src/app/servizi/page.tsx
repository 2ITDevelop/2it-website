import ServiceCard from '@/components/ServiceCard';
import { SERVICES } from '@/data/services';

export default function ServiziPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-semibold">Servizi</h1>
      <p className="mt-2 text-neutral-600">
        Soluzioni semplici, performanti e facili da gestire per piccole attività locali.
      </p>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {SERVICES.map((s) => (
          <ServiceCard key={s.title} title={s.title} desc={s.desc} bullets={s.bullets} />
        ))}
      </div>
    </main>
  );
}
