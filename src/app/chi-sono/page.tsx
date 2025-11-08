export default function ChiSonoPage() {
  return (
    <section className="relative py-24 sm:py-32">
      {/* sfondo */}
      <div className="absolute inset-0 -z-10 bg-[url('/images/hero-bg.webp')] bg-cover bg-center bg-no-repeat" />
      <div className="absolute inset-0 bg-white/70 backdrop-blur-xs" />

       {/* contenuto */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-neutral-800 leading-relaxed">
        <h1 className="text-3xl font-semibold">Chi siamo</h1>
        <p>
          Siamo una giovane realtà di Genova nata dalla passione di due ragazzi per il mondo dell’informatica e dell’innovazione digitale.
          <br></br>
          Unendo formazione solida ed esperienza sul campo, offriamo soluzioni moderne e personalizzate per ogni esigenza web e software.
          Il nostro percorso comprende un <b>Diploma ITS in Full Stack Development</b>, una <b>Laurea in Ingegneria Informatica</b> e<b> esperienze lavorative concrete nel settore</b>, che ci permettono di garantire professionalità, efficienza e <b>risultati di qualità.</b>
        </p>

      </div>

    </section>
  );
}
