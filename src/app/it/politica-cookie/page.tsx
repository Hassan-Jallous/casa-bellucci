import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politica sui Cookie',
  description: 'Politica sui cookie di Casa Bellucci. Informazioni sull\'utilizzo dei cookie sul nostro sito web.',
  alternates: {
    canonical: 'https://casabellucci.de/it/politica-cookie',
    languages: {
      de: 'https://casabellucci.de/cookie-richtlinie-eu',
      en: 'https://casabellucci.de/en/cookie-policy',
      it: 'https://casabellucci.de/it/politica-cookie',
    },
  },
  robots: { index: false, follow: true },
};

export default function PoliticaCookiePage() {
  return (
    <main className="bg-cream pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="font-playfair text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">
          Politica sui Cookie
        </h1>
        <div className="mt-2 h-px w-16 bg-terracotta/40" />

        <div className="mt-10 space-y-8 font-cormorant text-lg leading-relaxed text-charcoal/80">
          <div>
            <h2 className="font-playfair text-xl font-semibold text-charcoal">
              Cosa Sono i Cookie?
            </h2>
            <p className="mt-3">
              I cookie sono piccoli file di testo che vengono memorizzati sul vostro dispositivo quando visitate il nostro sito web.
              Ci aiutano a offrirvi un&apos;esperienza migliore.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-xl font-semibold text-charcoal">
              Cookie Essenziali
            </h2>
            <p className="mt-3">
              Questi cookie sono necessari per il funzionamento del sito e non possono essere disattivati.
              Vengono solitamente impostati in risposta alle vostre azioni, come la configurazione delle preferenze sulla privacy.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-xl font-semibold text-charcoal">
              Le Vostre Scelte
            </h2>
            <p className="mt-3">
              Potete configurare il vostro browser per bloccare o segnalarvi questi cookie.
              Tuttavia, alcune parti del sito potrebbero non funzionare correttamente senza di essi.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
