// src/app/api/contatti/route.ts
import { NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabaseServer';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Compila tutti i campi' }, { status: 400 });
    }

    const { error } = await supabaseServer.from('contacts').insert({ name, email, message });

    if (error) {
      console.error('[contatti] supabase error', error);
      return NextResponse.json(
        { ok: false, error: 'Errore nel salvataggio su database' },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contatti] errore generico', err);
    return NextResponse.json({ ok: false, error: 'Errore interno del server' }, { status: 500 });
  }
}
