import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von Casa Bellucci, Kurfuerstendamm 63, 10707 Berlin.",
  alternates: {
    canonical: "https://casabellucci.de/impressum",
    languages: {
      de: "https://casabellucci.de/impressum",
      en: "https://casabellucci.de/en/imprint",
      it: "https://casabellucci.de/it/note-legali",
    },
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function ImpressumPage() {
  return (
    <section className="bg-cream pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-4 py-20">
        <h1 className="font-playfair text-4xl font-bold tracking-tight text-charcoal">
          Impressum
        </h1>
        <div className="mt-4 h-px w-16 bg-terracotta/40" />

        <div className="mt-10 flex flex-col gap-8 font-cormorant text-lg leading-relaxed text-charcoal/80">
          <div>
            <h2 className="font-playfair text-xl font-semibold text-charcoal">
              Angaben gemaess &sect; 5 TMG
            </h2>
            <div className="mt-3">
              <p>Casa Bellucci</p>
              <p>Kurfuerstendamm 63</p>
              <p>10707 Berlin</p>
            </div>
          </div>

          <div>
            <h2 className="font-playfair text-xl font-semibold text-charcoal">
              Vertreten durch
            </h2>
            <p className="mt-3">[Geschaeftsfuehrer Name]</p>
          </div>

          <div>
            <h2 className="font-playfair text-xl font-semibold text-charcoal">
              Kontakt
            </h2>
            <div className="mt-3">
              <p>Telefon: +49 30 88629828</p>
              <p>E-Mail: info@casabellucci.de</p>
            </div>
          </div>

          <div>
            <h2 className="font-playfair text-xl font-semibold text-charcoal">
              Handelsregister
            </h2>
            <div className="mt-3">
              <p>Registergericht: Amtsgericht Charlottenburg</p>
              <p>Registernummer: [HRB XXXXX]</p>
            </div>
          </div>

          <div>
            <h2 className="font-playfair text-xl font-semibold text-charcoal">
              Umsatzsteuer-Identifikationsnummer
            </h2>
            <p className="mt-3">
              Umsatzsteuer-Identifikationsnummer gemaess &sect; 27a
              Umsatzsteuergesetz: [DE XXXXXXXXX]
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-xl font-semibold text-charcoal">
              Verantwortlich fuer den Inhalt nach &sect; 55 Abs. 2 RStV
            </h2>
            <div className="mt-3">
              <p>[Name des Verantwortlichen]</p>
              <p>Kurfuerstendamm 63</p>
              <p>10707 Berlin</p>
            </div>
          </div>

          <div>
            <h2 className="font-playfair text-xl font-semibold text-charcoal">
              Streitschlichtung
            </h2>
            <div className="mt-3">
              <p>
                Die Europaeische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-terracotta transition-colors duration-200 hover:text-terracotta/80"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="mt-2">
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-playfair text-xl font-semibold text-charcoal">
              Haftung fuer Inhalte
            </h2>
            <p className="mt-3">
              Als Diensteanbieter sind wir gemaess &sect; 7 Abs. 1 TMG fuer
              eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach &sect;&sect; 8 bis 10 TMG sind wir als
              Diensteanbieter jedoch nicht verpflichtet, uebermittelte oder
              gespeicherte fremde Informationen zu ueberwachen oder nach
              Umstaenden zu forschen, die auf eine rechtswidrige Taetigkeit
              hinweisen.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-xl font-semibold text-charcoal">
              Haftung fuer Links
            </h2>
            <p className="mt-3">
              Unser Angebot enthaelt Links zu externen Websites Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb koennen wir
              fuer diese fremden Inhalte auch keine Gewaehr uebernehmen. Fuer
              die Inhalte der verlinkten Seiten ist stets der jeweilige
              Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-xl font-semibold text-charcoal">
              Urheberrecht
            </h2>
            <p className="mt-3">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfaeltigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung ausserhalb der Grenzen des Urheberrechtes beduerfen
              der schriftlichen Zustimmung des jeweiligen Autors bzw.
              Erstellers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
