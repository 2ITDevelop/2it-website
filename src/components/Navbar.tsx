import Link from 'next/link';
import { SITE } from '@/data/config';
import Image from "next/image";


export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-neutral-200">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80">
          <Image
            src="/logo.png"
            alt="Logo 2IT"
            width={90}
            height={26}
            priority
            />
          </Link>

        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <Link href="/servizi" className="hover:opacity-70 font-semibold">
            Servizi
          </Link>
          <Link href="/portfolio" className="hover:opacity-70 font-semibold">
            Portfolio
          </Link>
          <Link href="/chi-sono" className="hover:opacity-70 font-semibold">
            Chi siamo
          </Link>
          <Link href="/contatti" className="hover:opacity-70 font-semibold">
            Contatti
          </Link>
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            className="inline-block rounded-xl border border-blue-300 px-3 py-2 hover:bg-neutral-100 transition font-semibold"
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
