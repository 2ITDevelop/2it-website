import { SITE } from '@/data/config';

export default function ContattiPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-semibold">Contatti</h1>
      <p className="mt-2 text-neutral-600">
        Raccontami la tua attività: ti rispondo al più presto.
      </p>

      <form
        className="rounded-2xl border border-neutral-200 p-5 bg-white mt-6 space-y-4"
        method="POST"
        action="#"
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
    </main>
  );
}
