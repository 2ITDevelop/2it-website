import { NextResponse } from 'next/server'; //è una classe helper fornita da Next.js per semplificare la creazione di risposte
import { getSupabaseServer } from '../../../lib/supabaseServer'; //connessione con supabase, se non configurato errore "503"

export async function POST(req: Request) {
  const supabase = getSupabaseServer(); //prendo il client
  if (!supabase)
    //verifico esistenza client
    return NextResponse.json({ error: 'Database non configurato' }, { status: 503 });

  // 🔸 rileva il tipo di contenuto della richiesta
  const contentType = req.headers.get('content-type') || ''; // Legge l’header Content-Type per capire in che formato sono arrivati i dati
  // inizializza le variabili
  let name: string | null = null;
  let email: string | null = null;
  let message: string | null = null;
  /*
  if (contentType.includes('application/json')) {
    // se arriva JSON
    const body = await req.json();
    name = body.name ?? null;
    email = body.email ?? null;
    message = body.message ?? null;
  } else {*/
  // se arriva da form HTML classico
  const form = await req.formData();
  name = (form.get('name') as string) ?? null;
  email = (form.get('email') as string) ?? null;
  message = (form.get('message') as string) ?? null;
  //}

  if (!name || !email || !message)
    return NextResponse.json({ error: 'Tutti i campi sono obbligatori' }, { status: 400 });

  const { error } = await supabase.from('contacts').insert([{ name, email, message }]); //inserisce i dati nella tabella contacts
  if (error)
    return NextResponse.json(
      { error: 'Errore nel salvataggio', details: error.message },
      { status: 500 },
    ); //errore nel caso non fosse andata a buon fine

  return NextResponse.json({ ok: true }); //tutto ok se invece si è conclusa
}
