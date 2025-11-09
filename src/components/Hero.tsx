import { SITE } from '@/data/config';

export default function Hero() {
  return (
    
   // <section className="relative py-16 sm:py-20 min-h-screen">
     // <div className="absolute inset-0 -z-10 bg-[url('/images/hero-bg.webp')] bg-cover bg-center bg-no-repeat" />
     // <div className="absolute inset-0 bg-white/70 backdrop-blur-xs" />
     <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
       {/* video di sfondo */}
        <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden
      >
      <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* overlay per contrasto */}
      {/*<div className="absolute inset-0 bg-black/40" />*/}
      <div className="absolute inset-0 bg-black/35" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0.25)_35%,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4">
      {/*<span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-500">
        <span className="h-1.5 w-1.5 rounded-full bg-neutral-900" />*/}
      <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs uppercase tracking-widest text-white/70 bg-black/20 rounded-full px-3 py-1 backdrop-blur">
      <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
            Soluzioni web su misura per aziende e professionisti — Genova / Italia
      </span>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-left">
        <h1 className="text-5xl sm:text-6xl font-semibold leading-tight text-white/95 drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
          <span className="block">Rendo online la tua attività:</span>
          <span className="bg-linear-to-r from-sky-300 to-blue-500 bg-clip-text text-transparent">
            semplice, rapido, chiaro
          </span>
        </h1>
      </div>
      

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <a
          href={`https://wa.me/${SITE.whatsapp}`}
          className="rounded-2xl px-4 py-3 text-center mx-auto bg-neutral-900 text-white hover:bg-neutral-800 transition"
        >
          Scrivimi su WhatsApp
        </a>
        <a
          href="/contatti"
          className="rounded-2xl px-4 py-3 text-center mx-auto bg-neutral-900 text-white hover:bg-neutral-800 transition"
        >
          Richiedi un preventivo
        </a>
      </div>
    </div>
    </section>
    
  );
}
