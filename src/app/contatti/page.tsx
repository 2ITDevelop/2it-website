import Script from 'next/script';
import { SITE } from '@/data/config';

export default function ContattiPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-semibold">Contatti</h1>
      <p className="mt-2 text-neutral-600">
        Raccontami la tua attività: ti rispondo al più presto.
      </p>

      <form
        id="contact-form"
        className="rounded-2xl border border-neutral-200 p-5 bg-white mt-6 space-y-4"
        method="POST"
        action="/api/contatti" //modifica dell'azione
      >
        <div>
          <label className="block text-sm mb-1">Nome</label>
          <input
            name="name"
            className="w-full rounded-xl border border-neutral-200 px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            name="email"
            className="w-full rounded-xl border border-neutral-200 px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Messaggio</label>
          <textarea
            name="message"
            rows={4}
            className="w-full rounded-xl border border-neutral-200 px-3 py-2"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-xl px-4 py-2 bg-neutral-900 text-white hover:bg-neutral-800 transition"
        >
          Invia richiesta
        </button>

        <p id="form-status" className="text-sm mt-2 h-5"></p>

        <p className="text-xs text-neutral-500">
          Compilando il form accetti il trattamento dei dati per rispondere alla tua richiesta.
        </p>
      </form>

      <div className="mt-6 text-sm">
        <p>
          <strong>WhatsApp:</strong>{' '}
          <a className="underline" href={`https://wa.me/${SITE.whatsapp}`}>
            Scrivimi su WhatsApp
          </a>
        </p>
        <p className="mt-1">
          <strong>Email:</strong>{' '}
          <a className="underline" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
        </p>
      </div>
      <Script id="contact-inline" strategy="afterInteractive">
        {`
  console.log('[contact-inline] attivo');
  const form = document.getElementById('contact-form');
  const statusEl = document.getElementById('form-status');

  if (form && statusEl) {
    form.addEventListener('submit', async (e) => {
  e.preventDefault();

  statusEl.classList.remove('hidden');
  statusEl.textContent = 'Invio in corso...';
  statusEl.className = 'mt-2 text-sm font-medium text-blue-500';

  const formData = new FormData(form); // <— FormData, NON JSON
  try {
    const res = await fetch('/api/contatti', {
      method: 'POST',
      body: formData,            // <— niente headers Content-Type!
    });
    const result = await res.json().catch(() => ({}));

    if (res.ok && result.ok) {
      statusEl.textContent = '✅ Messaggio inviato con successo!';
      statusEl.className = 'mt-2 text-sm font-medium text-green-600';
      form.reset();
    } else {
      statusEl.textContent = '❌ ' + (result.error || 'Errore durante l’invio');
      statusEl.className = 'mt-2 text-sm font-medium text-red-600';
    }
  } catch (err) {
    statusEl.textContent = '⚠️ Errore di rete o server';
    statusEl.className = 'mt-2 text-sm font-medium text-red-600';
  }
  setTimeout(() => statusEl.classList.add('hidden'), 5000);
});
  } else {
    console.warn('[contact-inline] form o status non trovati');
  }
`}
      </Script>
    </main>
  );
}
