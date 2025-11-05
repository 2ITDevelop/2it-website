export default function Footer() {
  return (
    <footer className="border-t border-neutral-200">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-neutral-600">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Matteo Ferrea — Tutti i diritti riservati.</p>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="underline underline-offset-4">
              Privacy
            </a>
            <a href="/cookie" className="underline underline-offset-4">
              Cookie
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
