import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SITE } from '@/data/config';

export const metadata: Metadata = {
  title: `${SITE.name} — Soluzioni Web e App`,
  description: 'Siti web, gestionali e applicazioni professionali per aziende.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className="bg-white text-neutral-900">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
