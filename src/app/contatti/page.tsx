import { SITE } from '@/data/config';
import ContactForm from './ContactForm';

export default function ContattiPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-semibold">Contatti</h1>
      <p className="mt-2 text-neutral-600">
        Raccontami la tua attività: ti rispondo al più presto.
      </p>

      <ContactForm />

      <div className="mt-6 text-sm">
        <p>
          <strong>WhatsApp:</strong>{' '}
          <a
            className="underline"
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noreferrer"
          >
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
