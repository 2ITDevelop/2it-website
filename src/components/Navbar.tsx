import Link from 'next/link';
import { SITE } from '@/data/config';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-neutral-200">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-xl">
          {SITE.name}
        </Link>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <Link href="/servizi" className="hover:opacity-70">
            Servizi
          </Link>
          <Link href="/portfolio" className="hover:opacity-70">
            Portfolio
          </Link>
          <Link href="/chi-sono" className="hover:opacity-70">
            Chi sono
          </Link>
          <Link href="/contatti" className="hover:opacity-70">
            Contatti
          </Link>
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            className="inline-block rounded-xl border border-neutral-200 px-3 py-2 hover:bg-neutral-100 transition"
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
