import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklaerung",
  description:
    "Datenschutzerklaerung von Casa Bellucci. Informationen zur Verarbeitung personenbezogener Daten gemaess DSGVO.",
  alternates: {
    canonical: "https://casabellucci.de/datenschutzerklaerung",
    languages: {
      de: "https://casabellucci.de/datenschutzerklaerung",
      en: "https://casabellucci.de/en/privacy-policy",
      it: "https://casabellucci.de/it/informativa-privacy",
    },
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function DatenschutzPage() {
  return (
    <section className="bg-cream pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-4 py-20">
        <h1 className="font-playfair text-4xl font-bold tracking-tight text-charcoal">
          Datenschutzerklaerung
        </h1>
        <div className="mt-4 h-px w-16 bg-terracotta/40" />

        <div className="mt-10 flex flex-col gap-8 font-cormorant text-lg leading-relaxed text-charcoal/80">
          <div>
            <h2 className="font-playfair text-xl font-semibold text-charcoal">
              1. Datenschutz auf einen Blick
            </h2>
            <h3 className="mt-4 font-playfair text-lg font-semibold text-charcoal">
              Allgemeine Hinweise
            </h3>
            <p className="mt-3">
              Die folgenden Hinweise geben einen einfachen Ueberblick
              darueber, was mit Ihren personenbezogenen Daten passiert, wenn
              Sie diese Website besuchen. Personenbezogene Daten sind alle
              Daten, mit denen Sie persoenlich identifiziert werden koennen.
              Ausfuehrliche Informationen zum Thema Datenschutz entnehmen Sie
              unserer unter diesem Text aufgefuehrten Datenschutzerklaerung.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-xl font-semibold text-charcoal">
              2. Verantwortliche Stelle
            </h2>
            <div className="mt-3">
              <p>Casa Bellucci</p>
              <p>Kurfuerstendamm 63</p>
              <p>10707 Berlin</p>
              <p className="mt-2">Telefon: +49 30 88629828</p>
              <p>E-Mail: info@casabellucci.de</p>
            </div>
            <p className="mt-3">
              Verantwortliche Stelle ist die natuerliche oder juristische
              Person, die allein oder gemeinsam mit anderen ueber die Zwecke
              und Mittel der Verarbeitung von personenbezogenen Daten
              entscheidet.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-xl font-semibold text-charcoal">
              3. Datenerfassung auf dieser Website
            </h2>
            <h3 className="mt-4 font-playfair text-lg font-semibold text-charcoal">
              Cookies
            </h3>
            <p className="mt-3">
              Unsere Internetseiten verwenden teilweise sogenannte Cookies.
              Cookies richten auf Ihrem Rechner keinen Schaden an und
              enthalten keine Viren. Cookies dienen dazu, unser Angebot
              nutzerfreundlicher, effektiver und sicherer zu machen. Cookies
              sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden
              und die Ihr Browser speichert. Die meisten der von uns
              verwendeten Cookies sind sogenannte Session-Cookies. Sie werden
              nach Ende Ihres Besuchs automatisch geloescht. Andere Cookies
              bleiben auf Ihrem Endgeraet gespeichert bis Sie diese loeschen.
              Diese Cookies ermoeglichen es uns, Ihren Browser beim naechsten
              Besuch wiederzuerkennen.
            </p>

            <h3 className="mt-6 font-playfair text-lg font-semibold text-charcoal">
              Server-Log-Dateien
            </h3>
            <p className="mt-3">
              Der Provider der Seiten erhebt und speichert automatisch
              Informationen in sogenannten Server-Log-Dateien, die Ihr Browser
              automatisch an uns uebermittelt. Dies sind: Browsertyp und
              Browserversion, verwendetes Betriebssystem, Referrer URL,
              Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage
              und IP-Adresse. Eine Zusammenfuehrung dieser Daten mit anderen
              Datenquellen wird nicht vorgenommen.
            </p>

            <h3 className="mt-6 font-playfair text-lg font-semibold text-charcoal">
              Kontaktformular
            </h3>
            <p className="mt-3">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
              werden Ihre Angaben aus dem Anfrageformular inklusive der von
              Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
              Anfrage und fuer den Fall von Anschlussfragen bei uns
              gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung
              weiter.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-xl font-semibold text-charcoal">
              4. Analyse-Tools und Werbung
            </h2>
            <p className="mt-3">
              [Angaben zu Google Analytics, Facebook Pixel oder anderen
              Tracking-Tools hier einfuegen, falls verwendet.]
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-xl font-semibold text-charcoal">
              5. Plugins und Tools
            </h2>
            <h3 className="mt-4 font-playfair text-lg font-semibold text-charcoal">
              Google Maps
            </h3>
            <p className="mt-3">
              Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die
              Google Ireland Limited, Gordon House, Barrow Street, Dublin 4,
              Irland. Zur Nutzung der Funktionen von Google Maps ist es
              notwendig, Ihre IP-Adresse zu speichern. Diese Informationen
              werden in der Regel an einen Server von Google in den USA
              uebertragen und dort gespeichert. Der Anbieter dieser Seite hat
              keinen Einfluss auf diese Datenuebertragung.
            </p>

            <h3 className="mt-6 font-playfair text-lg font-semibold text-charcoal">
              Google Fonts
            </h3>
            <p className="mt-3">
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten
              sogenannte Google Fonts. Beim Aufruf einer Seite laedt Ihr
              Browser die benoetigten Fonts in Ihren Browsercache, um Texte
              und Schriftarten korrekt anzuzeigen.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-xl font-semibold text-charcoal">
              6. Ihre Rechte
            </h2>
            <p className="mt-3">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft ueber
              Herkunft, Empfaenger und Zweck Ihrer gespeicherten
              personenbezogenen Daten zu erhalten. Sie haben ausserdem ein
              Recht, die Berichtigung oder Loeschung dieser Daten zu
              verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung
              erteilt haben, koennen Sie diese Einwilligung jederzeit fuer die
              Zukunft widerrufen. Ausserdem haben Sie das Recht, unter
              bestimmten Umstaenden die Einschraenkung der Verarbeitung Ihrer
              personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen
              ein Beschwerderecht bei der zustaendigen Aufsichtsbehoerde zu.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-xl font-semibold text-charcoal">
              7. Widerruf Ihrer Einwilligung zur Datenverarbeitung
            </h2>
            <p className="mt-3">
              Viele Datenverarbeitungsvorgaenge sind nur mit Ihrer
              ausdruecklichen Einwilligung moeglich. Sie koennen eine bereits
              erteilte Einwilligung jederzeit widerrufen. Die Rechtmaessigkeit
              der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom
              Widerruf unberuehrt.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-xl font-semibold text-charcoal">
              8. Beschwerderecht bei der zustaendigen Aufsichtsbehoerde
            </h2>
            <p className="mt-3">
              Im Falle von Verstoessen gegen die DSGVO steht den Betroffenen
              ein Beschwerderecht bei einer Aufsichtsbehoerde zu. Die
              zustaendige Aufsichtsbehoerde ist: Berliner Beauftragte fuer
              Datenschutz und Informationsfreiheit, Friedrichstr. 219, 10969
              Berlin.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-xl font-semibold text-charcoal">
              9. SSL- bzw. TLS-Verschluesselung
            </h2>
            <p className="mt-3">
              Diese Seite nutzt aus Sicherheitsgruenden und zum Schutz der
              Uebertragung vertraulicher Inhalte eine SSL- bzw.
              TLS-Verschluesselung. Eine verschluesselte Verbindung erkennen
              Sie daran, dass die Adresszeile des Browsers von
              &quot;http://&quot; auf &quot;https://&quot; wechselt und an dem
              Schloss-Symbol in Ihrer Browserzeile.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
