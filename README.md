 🧠 2IT – Website & Development Workflow

Benvenuto nel repository ufficiale del sito **2IT**.  
Questo progetto rappresenta il sito web ufficiale e la base operativa per la nostra organizzazione.

---

## 🚀 Obiettivo del progetto
Realizzare il sito aziendale di **2IT**, con struttura moderna, responsiva e gestita tramite **Next.js** + **Vercel**.  
Il repository segue un flusso Git professionale con protezione del branch principale e deploy automatizzato.

---

## 🧱 Stack Tecnologico
- **Framework:** [Next.js](https://nextjs.org/)
- **Linguaggio:** TypeScript / JavaScript
- **Styling:** Tailwind CSS
- **Hosting & CI/CD:** [Vercel](https://vercel.com/)
- **Versionamento:** [GitHub](https://github.com/)
- **Gestione ambienti:** `.env` + variabili Vercel

---

## 🧩 Struttura Branch
| Branch | Scopo | Chi può modificarlo |
|--------|--------|---------------------|
| `main` | Versione stabile online (produzione) | Nessuno direttamente – solo tramite PR approvata |
| `dev` | Integrazione e test pre-produzione | Tutti i membri 2IT |
| `feature/...` | Nuove funzionalità o sezioni | Sviluppatore che la crea |
| `fix/...` | Correzioni di bug o errori minori | Sviluppatore che la crea |

> 💡 Regola base: **mai push diretto su `main`**.  
> Tutto passa tramite **Pull Request (PR)** e review.

---

## 🔁 Flusso di lavoro standard

### 1️⃣ Creazione di un nuovo branch
```bash
git checkout dev
git pull
git checkout -b feature/nome-funzionalita
2️⃣ Sviluppo locale
bash
Copia codice
npm install
npm run dev
Effettua le modifiche, testa in locale e poi:

bash
Copia codice
git add .
git commit -m "feat: descrizione breve della modifica"
git push origin feature/nome-funzionalita
3️⃣ Pull Request verso dev
Vai su GitHub → Compare & Pull Request

Base branch: dev

Inserisci titolo e descrizione chiari

Crea la PR

✅ Ogni PR deve essere approvata da almeno 1 reviewer
✅ Deve passare i Vercel status checks

4️⃣ Merge su dev
Dopo l’approvazione, effettua il merge (preferibilmente Squash and Merge per tenere pulita la storia).

5️⃣ Test su ambiente di preview
Vercel crea un URL temporaneo per testare il codice:

arduino
Copia codice
https://feature-nomefunzionalita-2it-website.vercel.app
6️⃣ Merge finale su main
Quando dev è stabile:

Apri PR da dev → main

Attendi il check “✅ Vercel — Build succeeded”

Approvazione → Merge
Il deploy su https://2it.dev avviene in automatico 🚀




⚙️ Regole Repository
Branch Protection (main)
✅ Pull Request obbligatoria

✅ Almeno 1 approvazione

✅ Status checks (Vercel) obbligatori

❌ No force push

❌ No delete branch



Convenzioni commit
Tipo	Scopo
feat:	nuova funzionalità
fix:	correzione bug
style:	modifiche grafiche/CSS
refactor:	miglioramenti al codice senza cambiare comportamento
chore:	operazioni di manutenzione

Esempio:

makefile
Copia codice
feat: aggiunta sezione servizi e aggiornato footer


🔒 Sicurezza e privacy
Il repository è privato e non contiene codice open-source.

Tutti i diritti riservati a 2IT.

Vietata la copia o distribuzione del codice senza autorizzazione.

Le chiavi e variabili sensibili vanno inserite in Vercel Environment Variables, non nel codice.



🌍 Deploy e ambienti
Ambiente	Branch	URL	Note
Produzione	main	https://2it.dev	Deploy automatico
Preview / Dev	dev	generato da Vercel	Per test interni
Feature preview	feature/...	generato da Vercel	Anteprima singole PR

🧠 Convenzioni Team
Usa nomi branch chiari (feature/navbar, fix/form-contatti)

Mantieni commit frequenti e descrittivi

Evita PR troppo grandi (max 100-150 righe di diff)

Ogni PR → descrizione + screenshot se modifica visiva

Commenta il codice importante

👥 Ruoli attuali
Nome	Ruolo	Compiti principali
Matteo	Project Manager / Frontend , Coordinamento, frontend, UX/UI, deploy
Domenico	Backend / Technical, Lead API, database, ottimizzazione codice

🧾 Licenza
Tutti i diritti riservati © 2IT
Il codice contenuto in questo repository è di proprietà esclusiva di 2IT.
È vietata la copia, distribuzione o utilizzo non autorizzato del contenuto.


⚠️ Nota: le branch protection rules non sono attualmente enforceate su questo repo privato (GitHub Free Plan). Tuttavia, vanno rispettate manualmente come da workflow standard.
 
Lavorate su un branch dedicato (es. feature/hero-section)

Fate la pull request verso dev o main

L’altro del team la controlla e approva

Poi si fa il merge

Questo evita errori in produzione e mantiene il flusso ordinato.

👥 2️⃣ Almeno una revisione (approvazione)

Anche se GitHub non la impone, decidete internamente questa regola:

“Chi crea una PR non la mergea da solo.”

Esempio:

Matteo crea PR feature/navbar

Andrea controlla e commenta / approva

Matteo fa merge solo dopo l’ok di Andrea
(o viceversa)

In questo modo replicate la require approvals = 1 che GitHub non può forzare nel piano free.

🔁 3️⃣ Sempre via Pull Request (mai commit diretto)

Ogni modifica deve passare da una PR.
Esempio tipico:

# creo branch dalla dev
git checkout dev
git pull
git checkout -b feature/contatti

# lavoro...
git add .
git commit -m "feat: aggiunta sezione contatti"
git push origin feature/contatti


Poi su GitHub → Compare & Pull Request.

Una PR = una feature o una modifica chiara.
Così ogni cosa resta tracciata e reversibile.

🧪 4️⃣ Test e check su Vercel

Quando apri una PR, Vercel genera automaticamente un Preview Link, tipo:

https://feature-contatti-2it-website.vercel.app


💡 Usalo per:

controllare il risultato finale

farlo vedere all’altro del team per approvazione

Se la build fallisce, non mergeare la PR.
Così rispettate la “require status check” anche senza enforcement.

🧱 5️⃣ Merge pulito e ordinato

Quando la PR è approvata:

clicca “Squash and Merge” (mantiene la storia più pulita)

elimina il branch se vuoi (GitHub lo propone automaticamente)

aggiorna il branch dev o main con git pull in locale.

🚫 6️⃣ Evitare i “force push” (molto importante)

Mai fare:

git push origin main --force


oppure:

git push origin dev --force


⚠️ Cancella la cronologia condivisa e può creare conflitti disastrosi.

Se dovete risolvere errori, fate piuttosto un nuovo commit o una PR di fix.

🧩 7️⃣ Riassunto delle “regole manuali” del team 2IT
Regola	Cosa fare concretamente
🚫 Niente push diretto su main	Usare sempre PR
✅ 1 approvazione minima	L’altro deve visionare e approvare
🚀 Merge solo se build Vercel è ok	Guardare check o test
🔄 Branch dedicato per ogni feature	feature/, fix/, ecc.
🧹 Merge “Squash”	Storia pulita
🧱 Niente --force	Mai riscrivere la storia del branch
🧠 Aggiornare dev e main solo con PR	Mantiene tutto ordinato.





📬 Contatti
🌐 https://2it.dev
✉️ info@2it.dev (in arrivo)
