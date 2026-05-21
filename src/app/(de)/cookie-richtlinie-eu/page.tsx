import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie-Richtlinie",
  description:
    "Cookie-Richtlinie von Casa Bellucci. Informationen ueber die Verwendung von Cookies auf unserer Website.",
  alternates: {
    canonical: "https://casabellucci.de/cookie-richtlinie-eu",
    languages: {
      de: "https://casabellucci.de/cookie-richtlinie-eu",
      en: "https://casabellucci.de/en/cookie-policy",
      it: "https://casabellucci.de/it/politica-cookie",
    },
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function CookieRichtliniePage() {
  return (
    <section className="bg-cream pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-4 py-20">
        <h1 className="font-playfair text-4xl font-bold tracking-tight text-charcoal">
          Cookie-Richtlinie
        </h1>
        <div className="mt-4 h-px w-16 bg-terracotta/40" />

        <div className="mt-10 flex flex-col gap-8 font-cormorant text-lg leading-relaxed text-charcoal/80">
          <div>
            <h2 className="font-playfair text-xl font-semibold text-charcoal">
              Was sind Cookies?
            </h2>
            <p className="mt-3">
              Cookies sind kleine Textdateien, die auf Ihrem Computer oder
              Mobilgeraet gespeichert werden, wenn Sie eine Website besuchen.
              Sie werden haeufig verwendet, um Websites effizient arbeiten zu
              lassen und den Betreibern der Website Informationen zu liefern.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-xl font-semibold text-charcoal">
              Wie verwenden wir Cookies?
            </h2>
            <p className="mt-3">
              Wir verwenden Cookies, um Ihnen ein optimales Erlebnis auf
              unserer Website zu bieten. Die von uns verwendeten Cookies
              lassen sich in folgende Kategorien einteilen:
            </p>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-semibold text-charcoal">
              Notwendige Cookies
            </h3>
            <p className="mt-3">
              Diese Cookies sind fuer das Funktionieren der Website
              erforderlich und koennen in unseren Systemen nicht deaktiviert
              werden. Sie werden in der Regel nur als Reaktion auf Aktionen
              gesetzt, die Sie durchfuehren, wie z.B. das Festlegen Ihrer
              Datenschutzeinstellungen, das Anmelden oder das Ausfuellen von
              Formularen.
            </p>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-semibold text-charcoal">
              Analyse-Cookies
            </h3>
            <p className="mt-3">
              Diese Cookies ermoeglichen es uns, Besuche und Zugriffsquellen
              zu zaehlen, damit wir die Leistung unserer Website messen und
              verbessern koennen. Sie helfen uns zu wissen, welche Seiten am
              beliebtesten und am wenigsten beliebt sind, und zu sehen, wie
              sich Besucher auf der Website bewegen.
            </p>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-semibold text-charcoal">
              Marketing-Cookies
            </h3>
            <p className="mt-3">
              Diese Cookies koennen ueber unsere Website von unseren
              Werbepartnern gesetzt werden. Sie koennen von diesen Unternehmen
              verwendet werden, um ein Profil Ihrer Interessen zu erstellen
              und Ihnen relevante Anzeigen auf anderen Websites zu zeigen.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-xl font-semibold text-charcoal">
              Ihre Cookie-Einstellungen
            </h2>
            <p className="mt-3">
              Sie koennen Ihre Cookie-Einstellungen jederzeit aendern, indem
              Sie auf den entsprechenden Link in der Fusszeile unserer Website
              klicken. Sie koennen auch Ihren Browser so einstellen, dass er
              Sie benachrichtigt, wenn Cookies gesendet werden, oder dass er
              alle Cookies ablehnt. Beachten Sie jedoch, dass einige
              Funktionen der Website moeglicherweise nicht ordnungsgemaess
              funktionieren, wenn Sie Cookies deaktivieren.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-xl font-semibold text-charcoal">
              Weitere Informationen
            </h2>
            <p className="mt-3">
              Fuer weitere Informationen darueber, wie wir Cookies verwenden,
              lesen Sie bitte unsere{" "}
              <a
                href="/datenschutzerklaerung"
                className="text-terracotta transition-colors duration-200 hover:text-terracotta/80"
              >
                Datenschutzerklaerung
              </a>
              .
            </p>
            <p className="mt-3">
              Bei Fragen zu unserer Cookie-Richtlinie kontaktieren Sie uns
              unter{" "}
              <a
                href="mailto:info@casabellucci.de"
                className="text-terracotta transition-colors duration-200 hover:text-terracotta/80"
              >
                info@casabellucci.de
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
