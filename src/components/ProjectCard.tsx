'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/data/demos';

export function ProjectCard({ project }: { project: Project }) {
  const [previewActive, setPreviewActive] = useState(false);

  return (
    <article className="card overflow-hidden max-w-2xl mx-auto">
      {/* Preview: immagine + iframe live */}
      <div
        className="relative w-full aspect-video overflow-hidden rounded-2xl group"
        onMouseEnter={() => setPreviewActive(true)}
      >
        {/* Immagine statica */}
        <Image
          src={project.image}
          alt={project.title}
          width={1200}
          height={630}
          className="w-full h-full rounded-3xl object-cover transition-opacity duration-200 md:group-hover:opacity-0"
        />

        {/* Iframe live (solo desktop) */}
        {previewActive && (
          <iframe
            src={project.demoUrl}
            title={project.title}
            loading="lazy"
            className="absolute inset-0 hidden w-full h-full border-0 rounded-3xl md:block opacity-0 md:group-hover:opacity-100 transition-opacity duration-200"
          />
        )}
      </div>

      {/* Testo */}
      <div className="p-6 space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
          {project.sector}
        </p>

        <h2 className="text-xl font-semibold">{project.title}</h2>

        <p className="text-sm text-neutral-700">{project.description}</p>

        <div className="flex flex-wrap gap-3 pt-2 items-center">
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

          <span className="hidden text-xs text-neutral-500 md:inline">
            Passa sopra l&apos;immagine per anteprima live
          </span>
        </div>
      </div>
    </article>
  );
}
