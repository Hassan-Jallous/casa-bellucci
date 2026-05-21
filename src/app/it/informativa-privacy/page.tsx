import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Informativa sulla Privacy',
  description: 'Informativa sulla privacy di Casa Bellucci. Informazioni sul trattamento dei dati personali ai sensi del GDPR.',
  alternates: {
    canonical: 'https://casabellucci.de/it/informativa-privacy',
    languages: {
      de: 'https://casabellucci.de/datenschutzerklaerung',
      en: 'https://casabellucci.de/en/privacy-policy',
      it: 'https://casabellucci.de/it/informativa-privacy',
    },
  },
  robots: { index: false, follow: true },
};

export default function InformativaPrivacyPage() {
  return (
    <main className="bg-cream pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="font-playfair text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">
          Informativa sulla Privacy
        </h1>
        <div className="mt-2 h-px w-16 bg-terracotta/40" />

        <div className="mt-10 space-y-8 font-cormorant text-lg leading-relaxed text-charcoal/80">
          <div>
            <h2 className="font-playfair text-xl font-semibold text-charcoal">
              1. Protezione dei Dati in Sintesi
            </h2>
            <p className="mt-3">
              Le seguenti informazioni forniscono una panoramica di cosa succede ai vostri dati personali
              quando visitate questo sito web. I dati personali sono tutti i dati con cui potete essere identificati personalmente.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-xl font-semibold text-charcoal">
              2. Raccolta dei Dati su Questo Sito
            </h2>
            <p className="mt-3">
              La raccolta dei dati su questo sito viene effettuata dal gestore del sito.
              I dati di contatto del gestore si trovano nelle note legali obbligatorie di questo sito.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-xl font-semibold text-charcoal">
              3. I Vostri Diritti
            </h2>
            <p className="mt-3">
              Avete il diritto di ricevere gratuitamente informazioni sull&apos;origine, il destinatario e lo scopo
              dei vostri dati personali memorizzati in qualsiasi momento. Avete inoltre il diritto di richiedere
              la correzione o la cancellazione di questi dati.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
