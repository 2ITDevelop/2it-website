import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/demos';

export default function PortfolioPage() {
  return (
    <main className="px-4 py-12">
      <section className="max-w-4xl mx-auto space-y-10">
        {/* Header */}
        <header className="text-center space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
            Portfolio
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold">Progetti e demo</h1>
          <p className="max-w-2xl mx-auto text-neutral-700">
            Demo e progetti realizzati. Guarda un esempio e, se ti piace lo stile, contattami per un
            progetto su misura.
          </p>
        </header>

        {/* Card singola (per ora) */}
        <div className="grid gap-8 md:grid-cols-1">
          {projects.map((project) => (
            <article key={project.id} className="card overflow-hidden max-w-2xl mx-auto">
              {/* Immagine più piccola */}
              <div className="relative w-full h-56 md:h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={630}
                  className="w-full h-auto rounded-3xl object-cover"
                />
              </div>

              {/* Contenuto */}
              <div className="p-6 space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  {project.sector}
                </p>

                <h2 className="text-xl font-semibold">{project.title}</h2>

                <p className="text-sm text-neutral-700">{project.description}</p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary no-underline"
                  >
                    Guarda la demo live
                  </Link>

                  <Link href="/contatti" className="btn-ghost no-underline">
                    Richiedi un sito simile
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
