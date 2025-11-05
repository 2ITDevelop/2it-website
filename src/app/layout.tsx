import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SITE } from '@/data/config';

export const metadata: Metadata = {
  title: `${SITE.name} — Full-Stack Developer`,
  description: 'Siti e piccole app puliti e veloci per attività locali.',
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
