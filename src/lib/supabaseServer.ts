import { createClient } from '@supabase/supabase-js'; //connessione con supabase (creiamo l'oggetto per la connessione con il DB)

const hasSupabaseEnv = !!process.env.SUPABASE_URL && !!process.env.SUPABASE_SERVICE_ROLE_KEY; // controlla se sono presenti le variabili per il DB ovvero URL e KAY di accesso

export function getSupabaseServer() {
  if (!hasSupabaseEnv) return null; //verifica dell'esistenza delle variabili
  return createClient(
    //costruzione del client Supabase
    process.env.SUPABASE_URL!, //passaggipo al client dell'url
    process.env.SUPABASE_SERVICE_ROLE_KEY!, //passaggio della chiave
    { auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false } }, //niente autenticazione
  );
}
