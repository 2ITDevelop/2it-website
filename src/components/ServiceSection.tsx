import ServiceCard from '@/components/ServiceCard';
import { SERVICES } from '@/data/services';

export default function ServicesSection() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-3xl font-semibold"><b>2IT Servizi</b></h1>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s) => (
              <ServiceCard key={s.title} title={s.title} desc={s.desc} bullets={s.bullets} />
            ))}
        </div>
    </main>    
  );
}
