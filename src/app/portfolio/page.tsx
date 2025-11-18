import { projects } from '@/data/demos';
import { ProjectCard } from '@/components/ProjectCard';

export default function PortfolioPage() {
  return (
    <main className="px-4 py-12">
      <section className="max-w-4xl mx-auto space-y-10">
        <header className="text-center space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
            Portfolio
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold">Progetti e demo</h1>
          <p className="max-w-2xl mx-auto text-neutral-700">
            Demo e progetti realizzati. Puoi vedere l’anteprima live delle demo da desktop.
          </p>
        </header>

        {/* Lista progetti */}
        <div className="grid gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>
    </main>
  );
}
