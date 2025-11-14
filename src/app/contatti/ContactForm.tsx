'use client';

import { FormEvent, useState } from 'react';

type StatusType = 'loading' | 'success' | 'error' | null;

export default function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<StatusType>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setStatus('Invio in corso...');
    setStatusType('loading');

    try {
      const res = await fetch('/api/contatti', {
        method: 'POST',
        body: formData,
      });

      const result = await res.json().catch(() => ({}));

      if (res.ok && result.ok) {
        setStatus('✅ Messaggio inviato con successo!');
        setStatusType('success');
        form.reset();
      } else {
        setStatus('❌ ' + (result.error || 'Errore durante l’invio'));
        setStatusType('error');
      }
    } catch (_err) {
      setStatus('⚠️ Errore di rete o server');
      setStatusType('error');
    }
  }

  return (
    <form
      id="contact-form"
      className="rounded-2xl border border-neutral-200 p-5 bg-white mt-6 space-y-4"
      method="POST"
      action="/api/contatti"
      onSubmit={handleSubmit}
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

      {status && (
        <p
          id="form-status"
          className={`mt-2 text-sm font-medium ${
            statusType === 'success'
              ? 'text-green-600'
              : statusType === 'error'
              ? 'text-red-600'
              : statusType === 'loading'
              ? 'text-blue-500'
              : 'text-neutral-600'
          }`}
        >
          {status}
        </p>
      )}

      <p className="text-xs text-neutral-500">
        Compilando il form accetti il trattamento dei dati per rispondere alla
        tua richiesta.
      </p>
    </form>
  );
}
