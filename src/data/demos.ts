// src/data/demos.ts

export type Project = {
  id: string;
  title: string;
  sector: string;
  description: string;
  demoUrl: string;
  image: string;
};

export const projects: Project[] = [
  {
    id: 'foodsite',
    title: 'Food Website – Ristorante La Terrazza',
    sector: 'Ristorante',
    description:
      'Sito vetrina per ristorante con menù online, sezione prenotazioni e layout ottimizzato per mobile.',
    demoUrl: 'https://2it-foodsite-git-feature-nuova-grafica-mettius-projects.vercel.app/',
    image: 'https://2it-foodsite-git-feature-nuova-grafica-mettius-projects.vercel.app/og',
    //image: '/images/portfolio/foodsite.png',
  },
];
