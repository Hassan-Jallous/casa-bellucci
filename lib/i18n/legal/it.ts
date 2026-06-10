import type { LegalEntry, LegalSlug } from './index';

const contactBlock = `
<p>
  Bellucci Gastronomie GmbH<br>
  Kurfürstendamm 63<br>
  10625 Berlin<br>
  Germania<br>
  Telefono: <a href="tel:4901623009925">+49 (0) 162 3009925</a><br>
  Email: <a href="mailto:info@casabellucci.de">info@casabellucci.de</a>
</p>
`;

const impressum = `
<h2>Note legali</h2>
${contactBlock}
<p><strong>Nota sull'indirizzo:</strong> l'indirizzo legale del fornitore è Kurfürstendamm 63, 10625 Berlin. L'indirizzo pubblico per gli ospiti del ristorante e l'indirizzo usato per Local SEO/schema sono Kurfürstendamm 63, 10707 Berlin-Charlottenburg.</p>
<h2>Registro commerciale</h2>
<p>Registro commerciale: HRB 227777 B<br>Tribunale del registro: Amtsgericht Charlottenburg</p>
<h2>Rappresentata da</h2>
<p>Sig. A. Hess</p>
<h2>IVA</h2>
<p>Numero di identificazione IVA ai sensi dell'art. 27a della legge tedesca sull'IVA: DE273611502</p>
<h2>Autorità di vigilanza</h2>
<p>Ordnungsamt Charlottenburg-Wilmersdorf<br>Hohenzollerndamm 174-177<br>10713 Berlin</p>
<h2>Responsabile dei contenuti ai sensi del § 18 comma 2 MStV</h2>
${contactBlock}
<h2>Risoluzione delle controversie</h2>
<p>La Commissione europea mette a disposizione una piattaforma per la risoluzione online delle controversie: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener">https://ec.europa.eu/consumers/odr/</a>. Non siamo disposti né obbligati a partecipare a procedure di risoluzione delle controversie davanti a un organismo di conciliazione dei consumatori.</p>
<h2>Diritto d'autore</h2>
<p>I contenuti e le opere creati dal gestore del sito sono soggetti al diritto d'autore tedesco. Download e copie sono consentiti solo per uso privato e non commerciale.</p>
`;

const datenschutz = `
<h2>1. Titolare del trattamento</h2>
${contactBlock}
<p>Il titolare del trattamento è la persona fisica o giuridica che decide, da sola o insieme ad altri, sulle finalità e sui mezzi del trattamento dei dati personali.</p>
<h2>2. Fornitura del sito e log del server</h2>
<p>Quando questo sito viene visitato, il provider di hosting tratta dati tecnicamente necessari, in particolare indirizzo IP, data e ora, URL richiesto, referrer, informazioni su browser e sistema operativo. Il trattamento è necessario per fornire il sito in modo sicuro e stabile. Base giuridica: art. 6(1)(f) GDPR.</p>
<h2>3. Contatto</h2>
<p>Se ci contattate per telefono o email, trattiamo i dati trasmessi per gestire la richiesta. La base giuridica può essere l'art. 6(1)(b) GDPR o l'art. 6(1)(f) GDPR, a seconda della richiesta.</p>
<h2>4. Prenotazioni tramite Quandoo</h2>
<p>Per le prenotazioni online integriamo il widget di prenotazione Quandoo. Fornitore: Quandoo GmbH, Sonnenburger Str. 73, 10437 Berlin. Quando usate la funzione di prenotazione, dati personali e dati tecnici di utilizzo possono essere trasmessi a Quandoo e lì trattati. Maggiori informazioni: <a href="https://www.quandoo.de/data_privacy/" target="_blank" rel="noopener">https://www.quandoo.de/data_privacy/</a>.</p>
<h2>5. Google Fonts</h2>
<p>Questo sito carica caratteri tramite Google Fonts. Durante il caricamento dei file dei font, il vostro indirizzo IP può essere trasmesso ai server di Google. Fornitore: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irlanda. Base giuridica: il nostro legittimo interesse a una presentazione coerente e performante del sito ai sensi dell'art. 6(1)(f) GDPR.</p>
<h2>6. Memorizzazione locale nel browser</h2>
<p>Il sito salva la lingua scelta esplicitamente nel browser con la chiave <code>cb-lang</code>. Questa memorizzazione serve solo alla fruibilità e non viene usata per analisi o pubblicità. L'area admin interna usa <code>sessionStorage</code> per conservare un token admin durante la sessione.</p>
<h2>7. Nessun tag di analisi o pubblicità nel build attuale</h2>
<p>Il build Next.js attuale non include script di Google Analytics, Google Ads, Google Tag Manager o Meta Pixel. Se in futuro verrà aggiunto tracking, questa informativa e la cookie policy dovranno essere aggiornate prima dell'uso.</p>
<h2>8. I vostri diritti</h2>
<p>Ai sensi del GDPR avete in particolare diritti di accesso, rettifica, cancellazione, limitazione del trattamento, portabilità dei dati e opposizione. Potete inoltre presentare reclamo a un'autorità competente per la protezione dei dati.</p>
`;

const cookies = `
<h2>1. Introduzione</h2>
<p>Questa cookie policy descrive i cookie, i meccanismi di memorizzazione locale e i servizi esterni effettivamente usati nel build Next.js attuale.</p>
<h2>2. Memorizzazione locale tecnicamente necessaria</h2>
<p>Il sito salva localmente nel browser la lingua scelta attivamente con la chiave <code>cb-lang</code>. Questa memorizzazione è funzionale e mantiene la scelta della lingua sullo stesso URL.</p>
<h2>3. Sessione admin</h2>
<p>L'area admin interna salva un token admin in <code>sessionStorage</code> dopo il login. Questo riguarda solo gli amministratori autorizzati e viene eliminato alla fine della sessione.</p>
<h2>4. Widget di prenotazione Quandoo</h2>
<p>La pagina di prenotazione carica il widget Quandoo. Quandoo può usare cookie, memorizzazione locale o tecnologie simili per fornire la funzione di prenotazione. Maggiori informazioni: <a href="https://www.quandoo.de/data_privacy/" target="_blank" rel="noopener">https://www.quandoo.de/data_privacy/</a>.</p>
<h2>5. Google Fonts</h2>
<p>Il sito carica font da Google Fonts. Dati tecnici di accesso possono essere trasmessi a Google. Google Fonts viene usato per una presentazione uniforme del sito.</p>
<h2>6. Nessun cookie banner nel build attuale</h2>
<p>Il build attuale non mostra un popup cookie o consenso e non imposta cookie propri di analisi, annunci o marketing. Se in futuro verranno aggiunti servizi che richiedono consenso, dovrà essere implementato un meccanismo di consenso adeguato e questa policy dovrà essere aggiornata prima del lancio.</p>
<h2>7. Gestione dei cookie</h2>
<p>Potete eliminare o bloccare cookie e dati locali nelle impostazioni del browser. Il blocco dei cookie di terze parti può limitare la funzione di prenotazione.</p>
<h2>8. Contatto</h2>
${contactBlock}
`;

export const it: Record<LegalSlug, LegalEntry> = {
  impressum: { title: 'Note legali', html: impressum.trim() },
  datenschutz: { title: 'Informativa sulla privacy', html: datenschutz.trim() },
  cookies: { title: 'Cookie Policy', html: cookies.trim() },
};
