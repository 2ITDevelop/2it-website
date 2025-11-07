console.log('[contact.js] Script caricato correttamente');
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('main form');
  const statusEl = document.getElementById('form-status');

  if (!form || !statusEl) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Mostra la barra
    statusEl.classList.remove('hidden');
    statusEl.textContent = 'Invio in corso...';
    statusEl.className = 'mt-3 text-sm text-blue-500 font-medium';

    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch('/api/contatti', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json().catch(() => ({}));

      if (res.ok && result.ok) {
        statusEl.textContent = '✅ Messaggio inviato con successo!';
        statusEl.className = 'mt-3 text-sm text-green-600 font-medium';
        form.reset();
      } else {
        statusEl.textContent = '❌ Errore: ' + (result.error || 'Errore sconosciuto');
        statusEl.className = 'mt-3 text-sm text-red-600 font-medium';
      }
    } catch (err) {
      console.error('Errore di rete o server:', err);
      statusEl.textContent = '⚠️ Errore di rete o server';
      statusEl.className = 'mt-3 text-sm text-red-600 font-medium';
    }

    // Nasconde la barra dopo 5 secondi
    setTimeout(() => {
      statusEl.classList.add('hidden');
    }, 5000);
  });
});
