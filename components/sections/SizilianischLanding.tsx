import type { CSSProperties } from 'react';
import { asset } from '@/lib/assetPath';
import { routePath } from '@/lib/routes';
import { SITE } from '@/lib/site';
import { FlagBar } from './Brand';

export interface SizilianischFaq {
  question: string;
  answer: string;
}

const eyebrowStyle: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 10,
};

export function SizilianischLanding({ faqs }: { faqs: SizilianischFaq[] }) {
  const piatti = [
    {
      time: 'Crudo',
      title: 'Vom Meer, fast roh',
      copy: 'Tartare di Tonno mit Burrata und Minze, Carpaccio di Polpo, Gambero Rosso di Mazara und frische Ostriche.',
    },
    {
      time: 'Pasta',
      title: 'Fatta a mano',
      copy: 'Pasta con Caviale aus Linguine, Beurre noisette und Kaviar Imperial. Ravioli di Ricotta und Risotto allo Zafferano.',
    },
    {
      time: 'Pesce',
      title: 'Fangfrisch gegrillt',
      copy: 'Branzino alla Griglia, Pesce del Giorno vom Markt und Gambas al Vino Bianco. Fisch steht im Mittelpunkt.',
    },
  ];

  return (
    <main className="subpage">
      {/* 1. Hero / Intro */}
      <section className="about all-day" aria-labelledby="sizilianisch-h1">
        <div className="wrap">
          <div className="all-day-grid">
            <div className="all-day-copy">
              <div className="section-eyebrow">
                <span className="eyebrow" style={eyebrowStyle}>
                  <FlagBar orientation="h" /> Cucina Siciliana am Kurfürstendamm
                </span>
              </div>
              <h1 id="sizilianisch-h1">
                Sizilianisches Restaurant in <span className="it">Berlin</span>
              </h1>
              <p className="lede">
                Am Abend wird Casa Bellucci zur Sommerterrasse Taorminas. Cucina Siciliana am Kurfürstendamm 63 in
                Berlin-Charlottenburg, mit fangfrischem Fisch, Pasta fatta a mano und Weinen vom Ätna. Gehoben,
                ruhig, gemacht für lange Abende und besondere Anlässe.
              </p>
              <p>
                Die Abendkarte trägt den Namen „Una Serata Siciliana“. Kerzen, lange Tafeln und Gerichte, die Zeit
                brauchen. Wer in Berlin sizilianische Küche im Fine-Dining-Format sucht, ist hier richtig.
              </p>
              <div className="contact-actions">
                <a className="btn btn-primary" href={routePath('/reservierung/')}>
                  Tisch reservieren
                </a>
                <a className="btn btn-ghost" href={routePath('/#menu')}>
                  Karte ansehen →
                </a>
              </div>
            </div>
            <div className="all-day-media" aria-label="Sizilianische Zitrone und Atmosphäre bei Casa Bellucci">
              <figure className="all-day-photo morning">
                <img
                  src={asset('images/sizielen zitrone.jpeg')}
                  alt="Frisch geschnittene sizilianische Zitrone, Sinnbild der Cucina Siciliana bei Casa Bellucci"
                />
                <figcaption>Sicilia</figcaption>
              </figure>
              <figure className="all-day-photo midday">
                <img
                  src={asset('images/menu-dinner.jpg')}
                  alt="Sizilianisches Abendgericht bei Casa Bellucci in Berlin-Charlottenburg"
                />
                <figcaption>Cena</figcaption>
              </figure>
              <figure className="all-day-photo evening">
                <img
                  src={asset('images/terrace.jpg')}
                  alt="Sommerterrasse von Casa Bellucci am Kurfürstendamm mit warmem Abendlicht"
                />
                <figcaption>Terrazza</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Sizilianische Küche */}
      <section className="about all-day" aria-labelledby="sizilianische-kueche-h2">
        <div className="wrap">
          <div className="all-day-grid">
            <div className="all-day-copy">
              <div className="section-eyebrow">
                <span className="eyebrow" style={eyebrowStyle}>
                  <FlagBar orientation="h" /> Sizilianische Küche
                </span>
              </div>
              <h2 id="sizilianische-kueche-h2">
                Cucina Siciliana, ehrlich <span className="it">interpretiert</span>
              </h2>
              <p>
                Unsere sizilianische Küche folgt der Markt-Logik der Insel. Was am Morgen frisch ist, kommt am
                Abend auf den Teller. Die Pasta wird täglich fatta a mano gemacht, der Fisch kommt fangfrisch vom
                Großmarkt. So entsteht eine Cucina Siciliana, die nah am Original bleibt.
              </p>
              <p>
                Sizilianische Details ziehen sich durch die ganze Karte. Limonata Siciliana aus Amalfi-Zitronen,
                frisch gepresste Tarocco-Orangen aus Sizilien und Gambero Rosso di Mazara, die rote Garnele aus dem
                Westen der Insel.
              </p>
              <div className="dayline" aria-label="Sizilianische Gerichte">
                {piatti.map((item, index) => (
                  <div className="day-moment" key={item.title} style={{ '--i': index } as CSSProperties}>
                    <span className="moment-time">{item.time}</span>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="all-day-media" aria-label="Sizilianische Gerichte bei Casa Bellucci">
              <figure className="all-day-photo morning">
                <img
                  src={asset('images/menu-dinner.jpg')}
                  alt="Pasta con Caviale, ein Signature-Gericht der Abendkarte von Casa Bellucci"
                />
                <figcaption>Pasta</figcaption>
              </figure>
              <figure className="all-day-photo midday">
                <img
                  src={asset('images/gallery/7.jpg')}
                  alt="Crudo di Mare, roher Fisch sizilianischer Art bei Casa Bellucci"
                />
                <figcaption>Crudo di Mare</figcaption>
              </figure>
              <figure className="all-day-photo evening">
                <img
                  src={asset('images/gallery/5.jpg')}
                  alt="Antipasti der sizilianischen Küche bei Casa Bellucci in Berlin"
                />
                <figcaption>Antipasti</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Wein und Sizilien */}
      <section className="wine" aria-labelledby="wein-sizilien-h2">
        <div className="wrap">
          <div className="top">
            <div>
              <div className="section-eyebrow">
                <span className="eyebrow" style={eyebrowStyle}>
                  <FlagBar orientation="h" /> Wein und Sizilien
                </span>
              </div>
              <h2 id="wein-sizilien-h2">
                Vom Ätna bis zum <span className="it">Veneto</span>
              </h2>
              <p className="lede" style={{ marginTop: 14 }}>
                Unsere Weinkarte legt den Schwerpunkt auf Sizilien und Süditalien, 65 Prozent der Auswahl kommen von
                dort. Kuratiert von Sommelier Marco, glasweise täglich rotierend.
              </p>
            </div>
            <a
              className="btn btn-ghost"
              href={asset('menus/weine.pdf')}
              target="_blank"
              rel="noreferrer"
            >
              Komplette Weinkarte (PDF) →
            </a>
          </div>
          <div className="regions">
            <article className="region">
              <div className="label">Sicilia</div>
              <h3>Vom Ätna an die Küste</h3>
              <p>
                Vulkanische Mineralität vom Ätna, kräftige rote Trauben und süße Klassiker. Die Insel bestimmt den
                Charakter der Karte.
              </p>
              <div className="list">
                <div className="row">
                  <div>
                    <div>Etna Bianco DOC, Planeta</div>
                    <div className="v" style={{ fontSize: 14, color: 'var(--ink-muted)' }}>
                      2022 · Sicilia
                    </div>
                  </div>
                  <div className="p">€ 11,00</div>
                </div>
                <div className="row">
                  <div>
                    <div>Nero d&apos;Avola, Donnafugata</div>
                    <div className="v" style={{ fontSize: 14, color: 'var(--ink-muted)' }}>
                      2021 · Sicilia
                    </div>
                  </div>
                  <div className="p">€ 9,00</div>
                </div>
                <div className="row">
                  <div>
                    <div>Etna Rosso, Terre Nere</div>
                    <div className="v" style={{ fontSize: 14, color: 'var(--ink-muted)' }}>
                      2021 · Sicilia
                    </div>
                  </div>
                  <div className="p">€ 12,50</div>
                </div>
              </div>
            </article>
            <article className="region">
              <div className="label">Dolci & Liquorosi</div>
              <h3>Süße aus dem Süden</h3>
              <p>
                Süßweine und Liquorosi, wie sie zu Sizilien gehören. Vom Passito der Insel Pantelleria bis zum
                Marsala aus dem Westen.
              </p>
              <div className="list">
                <div className="row">
                  <div>
                    <div>Passito di Pantelleria, Ben Ryé</div>
                    <div className="v" style={{ fontSize: 14, color: 'var(--ink-muted)' }}>
                      Donnafugata · Süßwein
                    </div>
                  </div>
                  <div className="p">€ 10,00</div>
                </div>
                <div className="row">
                  <div>
                    <div>Marsala Superiore, Florio</div>
                    <div className="v" style={{ fontSize: 14, color: 'var(--ink-muted)' }}>
                      Sicilia
                    </div>
                  </div>
                  <div className="p">€ 7,50</div>
                </div>
                <div className="row">
                  <div>
                    <div>Limonata Siciliana</div>
                    <div className="v" style={{ fontSize: 14, color: 'var(--ink-muted)' }}>
                      Amalfi-Zitronen, alkoholfrei
                    </div>
                  </div>
                  <div className="p">€ 5,50</div>
                </div>
              </div>
            </article>
            <article className="region">
              <div className="label">Bollicine & Norditalia</div>
              <h3>Bis zum Veneto</h3>
              <p>
                Die Karte reicht bis in den Norden Italiens. Schaumweine und große Weiße ergänzen die sizilianische
                Basis.
              </p>
              <div className="list">
                <div className="row">
                  <div>
                    <div>Franciacorta Brut</div>
                    <div className="v" style={{ fontSize: 14, color: 'var(--ink-muted)' }}>
                      Ca&apos; del Bosco
                    </div>
                  </div>
                  <div className="p">€ 13,00</div>
                </div>
                <div className="row">
                  <div>
                    <div>Falanghina del Sannio</div>
                    <div className="v" style={{ fontSize: 14, color: 'var(--ink-muted)' }}>
                      Mustilli · 2022, Kampanien
                    </div>
                  </div>
                  <div className="p">€ 9,00</div>
                </div>
                <div className="row">
                  <div>
                    <div>Vermentino di Sardegna</div>
                    <div className="v" style={{ fontSize: 14, color: 'var(--ink-muted)' }}>
                      Argiolas · 2023
                    </div>
                  </div>
                  <div className="p">€ 8,50</div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 4. Abend, Anlass, Atmosphäre */}
      <section className="about all-day" aria-labelledby="anlass-h2">
        <div className="wrap">
          <div className="all-day-grid">
            <div className="all-day-copy">
              <div className="section-eyebrow">
                <span className="eyebrow" style={eyebrowStyle}>
                  <FlagBar orientation="h" /> Abend, Anlass, Atmosphäre
                </span>
              </div>
              <h2 id="anlass-h2">
                Fine Dining für den besonderen <span className="it">Anlass</span>
              </h2>
              <p>
                Am Abend trägt Casa Bellucci eine ruhige, gehobene Atmosphäre. Kerzenlicht, lange Tafeln und die
                Stimmung einer Sommerterrasse in Taormina. Das macht das Haus zu einem romantischen Restaurant für
                ein Dinner zu zweit und zu einer guten Adresse für Geburtstage, Jubiläen und besondere Anlässe.
              </p>
              <p>
                Für ein Date in Berlin passt die Abendkarte besonders gut. Wer es größer mag, findet an den langen
                Tafeln Platz für Gruppen. Im Sommer öffnet die Terrasse am Kurfürstendamm bei gutem Wetter.
              </p>
              <blockquote className="lede" style={{ fontStyle: 'italic', margin: '6px 0 0' }}>
                „Italiens Seele am Kurfürstendamm, als hätte jemand eine Trattoria aus Taormina nach Charlottenburg
                verpflanzt.“
              </blockquote>
              <blockquote className="lede" style={{ fontStyle: 'italic', margin: '14px 0 0' }}>
                „Authentisch sizilianisch, von der Pasta bis zur Karte. Selten so ehrlich gegessen.“
              </blockquote>
            </div>
            <div className="all-day-media" aria-label="Abendatmosphäre und Terrasse bei Casa Bellucci">
              <figure className="all-day-photo morning">
                <img
                  src={asset('images/terrace.jpg')}
                  alt="Sommerterrasse von Casa Bellucci am Kurfürstendamm am Abend"
                />
                <figcaption>Terrasse</figcaption>
              </figure>
              <figure className="all-day-photo midday">
                <img
                  src={asset('images/gallery/3.jpg')}
                  alt="Sala von Casa Bellucci, gedeckte Tische für den Abend"
                />
                <figcaption>Sala</figcaption>
              </figure>
              <figure className="all-day-photo evening">
                <img
                  src={asset('images/about.jpg')}
                  alt="Casa Bellucci, Atmosphäre eines gehobenen italienischen Restaurants in Berlin"
                />
                <figcaption>Serata</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Öffnungszeiten und Reservierung */}
      <section className="contact" aria-labelledby="reservierung-h2">
        <div className="wrap">
          <div className="grid">
            <div>
              <div className="section-eyebrow">
                <span className="eyebrow" style={eyebrowStyle}>
                  <FlagBar orientation="h" /> Öffnungszeiten und Reservierung
                </span>
              </div>
              <h2 id="reservierung-h2">
                Reservieren am <span className="it">Kurfürstendamm</span>
              </h2>
              <p className="lede">
                Casa Bellucci liegt am Kurfürstendamm 63 in Berlin-Charlottenburg. Die Abendkarte ist ab 18:00 Uhr
                verfügbar. Für einen Tisch am Abend empfehlen wir eine Reservierung, telefonisch oder online über
                Quandoo.
              </p>
              <div className="info">
                <div className="block">
                  <div className="k">Adresse</div>
                  <div className="v">
                    Kurfürstendamm 63
                    <br />
                    10707 Berlin · Charlottenburg
                  </div>
                </div>
                <div className="block">
                  <div className="k">Reservierung</div>
                  <div className="v">
                    {SITE.phone}
                    <br />
                    <span className="muted">{SITE.email}</span>
                  </div>
                </div>
                <div className="block">
                  <div className="k">Öffnungszeiten</div>
                  <div className="v">
                    {SITE.openingHours.weekdays}
                    <br />
                    <span className="muted">{SITE.openingHours.sunday}</span>
                  </div>
                </div>
                <div className="block">
                  <div className="k">Abendkarte</div>
                  <div className="v">
                    Cena ab 18:00 Uhr
                    <br />
                    <span className="muted">Una Serata Siciliana</span>
                  </div>
                </div>
                <div className="contact-actions">
                  <a className="btn btn-primary" href={routePath('/reservierung/')}>
                    Online reservieren
                  </a>
                  <a className="btn btn-ghost" href={SITE.phoneHref}>
                    Anrufen
                  </a>
                </div>
              </div>
            </div>
            <div className="map" aria-label="Lage von Casa Bellucci auf der Karte">
              <div className="corner">Kurfürstendamm · Charlottenburg</div>
              <div className="pin">
                <div className="dot"></div>
                <div className="pulse"></div>
                <div className="label">Casa Bellucci</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ, sichtbar und passend zum faqJsonLd */}
      <section className="subpage-info" aria-labelledby="faq-h2">
        <div className="wrap">
          <div className="section-eyebrow">
            <span className="eyebrow" style={eyebrowStyle}>
              <FlagBar orientation="h" /> Häufige Fragen
            </span>
          </div>
          <h2 id="faq-h2">
            Häufige <span className="it">Fragen</span>
          </h2>
          <div className="subpage-info-grid" style={{ marginTop: 24 }}>
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 28 }}>
            Mehr zum Haus auf der Startseite,{' '}
            <a href={routePath('/')}>Casa Bellucci</a>, und unter{' '}
            <a href={routePath('/italienisches-restaurant-berlin-charlottenburg/')}>
              italienisches Restaurant in Charlottenburg
            </a>
            . Direkt zur{' '}
            <a href={routePath('/#menu')}>Karte</a> oder zur{' '}
            <a href={routePath('/#terrasse')}>Terrasse</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
