import type { CSSProperties } from 'react';
import { asset } from '@/lib/assetPath';
import { routePath } from '@/lib/routes';
import { SITE } from '@/lib/site';
import { FlagBar } from './Brand';
import { GalleryFilmstrip } from './GalleryFilmstrip';
import { Lightbox } from './Lightbox';

const eyebrowStyle: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 10,
};

// Sichtbarer FAQ-Inhalt und faqJsonLd teilen sich diese Quelle, damit das
// FAQPage-Schema exakt dem dargestellten Text entspricht (Google-Richtlinie).
export const ITALIENISCH_FAQ = [
  {
    question: 'Wo ist Casa Bellucci in Charlottenburg?',
    answer:
      'Casa Bellucci liegt am Kurfürstendamm 63, 10707 Berlin-Charlottenburg, mitten in der City West direkt am Kudamm. Das italienische Restaurant ist gut zu Fuß, mit Bus und U-Bahn erreichbar und rollstuhlgerecht.',
  },
  {
    question: 'Hat das italienische Restaurant am Kudamm eine Terrasse?',
    answer:
      'Ja. Casa Bellucci hat eine Sommerterrasse direkt am Kudamm, die bei gutem Wetter geöffnet ist. Dort gibt es Frühstück, Lunch und am Abend Aperitivo. Im Haus erwartet Sie zusätzlich eine eigene Bar.',
  },
  {
    question: 'Gibt es Frühstück bei Casa Bellucci?',
    answer:
      'Ja. Als All-Day-Restaurant servieren wir Frühstück ab 09:00 Uhr, dazu Lunch, Dinner und Aperitivo. Espresso, Croissants und leichte Teller am Morgen, Pasta und Fisch über den Tag.',
  },
  {
    question: 'Kann man bei Casa Bellucci online reservieren?',
    answer:
      'Ja. Sie können bequem online über unser Reservierungsmodul einen Tisch buchen oder uns telefonisch unter +49 162 3009925 erreichen, etwa für größere Gruppen oder kurzfristige Wünsche.',
  },
  {
    question: 'Wann hat Casa Bellucci geöffnet?',
    answer:
      'Casa Bellucci ist Montag bis Samstag von 09:00 bis 00:00 Uhr geöffnet und Sonntag von 09:00 bis 18:00 Uhr.',
  },
];

export function ItalienischLanding() {
  return (
    <main className="subpage subpage-italienisch">
      {/* 1. Hero / Intro */}
      <section className="about all-day" aria-labelledby="ital-h1">
        <div className="wrap">
          <div className="all-day-grid">
            <div className="all-day-copy">
              <div className="section-eyebrow">
                <span className="eyebrow" style={eyebrowStyle}>
                  <FlagBar orientation="h" /> Italienisch am Kudamm
                </span>
              </div>
              <h1 id="ital-h1">
                Italienisches Restaurant in <span className="it">Berlin-Charlottenburg</span>
              </h1>
              <p className="lede">
                Casa Bellucci am Kurfürstendamm 63 ist ein italienisches Restaurant für den ganzen Tag.
                Frühstück, Lunch auf der Terrasse, Dinner und Bar, mitten in der City West. Vom ersten
                Espresso bis zum späten Aperitivo, an einem Ort.
              </p>
              <div className="contact-actions">
                <a className="btn btn-primary" href={routePath('/reservierung/')}>
                  Reservieren
                </a>
                <a className="btn btn-ghost" href={routePath('/#menu')}>
                  Karte ansehen →
                </a>
              </div>
            </div>
            <div className="all-day-media" aria-label="Frühstück, Lunch und Abend bei Casa Bellucci am Kudamm">
              <figure className="all-day-photo morning">
                <img
                  src={asset('images/menu-breakfast.jpg')}
                  alt="Italienisches Frühstück bei Casa Bellucci am Kudamm in Berlin-Charlottenburg"
                />
                <figcaption>Colazione</figcaption>
              </figure>
              <figure className="all-day-photo midday">
                <img
                  src={asset('images/gallery/2.jpg')}
                  alt="Hausgemachte Pasta zum Lunch im italienischen Restaurant Casa Bellucci"
                />
                <figcaption>Pranzo</figcaption>
              </figure>
              <figure className="all-day-photo evening">
                <img
                  src={asset('images/gallery/4.jpg')}
                  alt="Abend auf der Sommerterrasse des italienischen Restaurants Casa Bellucci am Kudamm"
                />
                <figcaption>Sera</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Lage und Konzept */}
      <section className="about ital-section ital-section--paper">
        <div className="wrap">
          <div className="grid">
            <div>
              <div className="section-eyebrow">
                <span className="eyebrow" style={eyebrowStyle}>
                  <FlagBar orientation="h" /> Lage und Konzept
                </span>
              </div>
              <h2>
                Mitten am <span className="it">Kudamm</span>, in Charlottenburg
              </h2>
              <p>
                Unser italienisches Restaurant in Berlin-Charlottenburg liegt am Kurfürstendamm 63,
                10707 Berlin, im Herzen der City West. Zwischen Shopping am Kudamm und einem
                ruhigen Platz auf der Terrasse ist Casa Bellucci eine Adresse für den ganzen Tag, vom
                Frühstück bis zum späten Abend.
              </p>
              <p>
                Das All-Day-Konzept verbindet vier Momente unter einem Dach. Frühstück und Brunch am
                Morgen, Lunch auf der Sommerterrasse, Dinner am Abend und dazu eine eigene Bar für
                Aperitivo und einen Drink danach. Ob Geschäftsessen am Mittag, ein gemütliches Essen
                mit Familie oder ein Glas Wein solo an der Bar, hier passt jeder Anlass am
                Kudamm.
              </p>
              <p>
                Am Abend rückt die sizilianische Küche in den Vordergrund. Mehr dazu auf unserer Seite
                zum{' '}
                <a href={routePath('/sizilianisches-restaurant-berlin/')}>sizilianischen Restaurant in Berlin</a>.
              </p>
            </div>
            <figure className="about img-col ital-photo-card">
              <img
                src={asset('images/about.jpg')}
                alt="Innenraum von Casa Bellucci, einem Italiener in der City West am Kudamm in Charlottenburg"
              />
              <figcaption>
                <span>Charlottenburg</span>
                <strong>Sala</strong>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* 3. Küche */}
      <section className="menu ital-section ital-section--surface">
        <div className="wrap">
          <div className="grid">
            <div>
              <div className="section-eyebrow">
                <span className="eyebrow" style={eyebrowStyle}>
                  <FlagBar orientation="h" /> Aus der Küche
                </span>
              </div>
              <h2>
                Italienische Küche, <span className="it">sizilianisch geprägt</span>
              </h2>
              <div className="dishes">
                <div className="dish">
                  <div className="name">
                    Pasta fatta a <span className="it">mano</span>
                  </div>
                  <div className="desc">
                    Frische Pasta machen wir täglich von Hand. Dazu fangfrischen Fisch vom Großmarkt,
                    italienisch und mediterran interpretiert.
                  </div>
                </div>
                <div className="dish">
                  <div className="name">
                    Tagliatelle al <span className="it">Tartufo</span>
                  </div>
                  <div className="desc">Frische Bandnudeln mit Trüffel, ein Klassiker der Karte.</div>
                </div>
                <div className="dish">
                  <div className="name">
                    Spaghetti alle <span className="it">Vongole</span>
                  </div>
                  <div className="desc">Venusmuscheln, Knoblauch, Petersilie und ein Spritzer Weißwein.</div>
                </div>
                <div className="dish">
                  <div className="name">
                    Branzino alla <span className="it">Griglia</span>
                  </div>
                  <div className="desc">Gegrillter Wolfsbarsch, schlicht und auf den Punkt zubereitet.</div>
                </div>
                <div className="dish">
                  <div className="name">
                    Burrata di <span className="it">Andria</span>
                  </div>
                  <div className="desc">Cremige Burrata als leichter Start in das italienische Essen.</div>
                </div>
                <div className="dish">
                  <div className="name">
                    Vitello <span className="it">Tonnato</span> und Tiramisù della Casa
                  </div>
                  <div className="desc">
                    Vitello Tonnato als Vorspeise und zum Abschluss unser hausgemachtes Tiramisù.
                  </div>
                </div>
              </div>
              <div className="contact-actions">
                <a className="btn btn-primary" href={routePath('/#menu')}>
                  Zur Karte
                </a>
              </div>
            </div>
            <figure className="about img-col ital-photo-card">
              <img
                src={asset('images/menu-dinner.jpg')}
                alt="Italienisches Gericht der sizilianisch geprägten Küche bei Casa Bellucci am Kudamm"
              />
              <figcaption>
                <span>Fatto a mano</span>
                <strong>Cucina</strong>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* 4. Atmosphäre und Angebot */}
      <section className="about ital-section ital-section--gold">
        <div className="wrap">
          <div className="grid">
            <figure className="about img-col ital-photo-card">
              <img
                src={asset('images/gallery/3.jpg')}
                alt="Gemütliche und gehobene Atmosphäre im italienischen Restaurant Casa Bellucci in Berlin-Charlottenburg"
              />
              <figcaption>
                <span>Am Kudamm</span>
                <strong>Terrazza</strong>
              </figcaption>
            </figure>
            <div>
              <div className="section-eyebrow">
                <span className="eyebrow" style={eyebrowStyle}>
                  <FlagBar orientation="h" /> Atmosphäre und Angebot
                </span>
              </div>
              <h2>
                Gehoben und <span className="it">gemütlich</span> zugleich
              </h2>
              <p>
                Casa Bellucci ist gehoben und gemütlich zugleich, casual genug für den Alltag und
                schön genug für den besonderen Abend. Drinnen wie auf der Sommerterrasse am
                Kudamm sitzen Gruppen, Familien und Gäste, die solo auf einen Aperitivo
                vorbeikommen.
              </p>
              <p>
                Die eigene Bar ist der Treffpunkt für Aperitivo und Drinks, von früh bis spät. Auf der
                Speisekarte stehen vegetarische und vegane Optionen. Das italienische Restaurant ist
                rollstuhlgerecht und hundefreundlich, gut geeignet für Gruppen und ein entspanntes
                Essen in Charlottenburg.
              </p>
              <div className="contact-actions">
                <a className="btn btn-primary" href={routePath('/reservierung/')}>
                  Tisch reservieren
                </a>
                <a className="btn btn-ghost" href={routePath('/#terrasse')}>
                  Terrasse ansehen →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Galerie, gleicher Rahmen wie die Homepage-Galerie */}
      <section className="gallery ital-gallery" aria-labelledby="ital-gallery-h2">
        <div className="wrap">
          <div className="top">
            <div>
              <div className="section-eyebrow">
                <span className="eyebrow" style={eyebrowStyle}>
                  <FlagBar orientation="h" /> Galerie am Kudamm
                </span>
              </div>
              <h2 id="ital-gallery-h2">
                Einblicke ins <span className="it">italienische Restaurant</span>
              </h2>
              <p className="lede" style={{ marginTop: 14 }}>
                Eindrücke aus unserem italienischen Restaurant am Kurfürstendamm in Berlin-Charlottenburg,
                von der Sala über die Terrasse bis zur Bar.
              </p>
            </div>
            <a className="btn btn-ghost" href={routePath('/#galerie')}>
              Zur ganzen Galerie →
            </a>
          </div>
          <GalleryFilmstrip />
        </div>
      </section>

      {/* 6. Öffnungszeiten und Anfahrt */}
      <section className="contact">
        <div className="wrap">
          <div className="grid">
            <div>
              <div className="section-eyebrow">
                <span className="eyebrow" style={eyebrowStyle}>
                  <FlagBar orientation="h" /> Öffnungszeiten und Anfahrt
                </span>
              </div>
              <h2>
                Besuch am <span className="it">Kudamm</span>
              </h2>
              <p className="lede">
                Der Italiener mitten in der City West. Reservieren Sie online oder telefonisch,
                Walk-ins sind besonders an der Bar willkommen.
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
                <div className="contact-actions">
                  <a className="btn btn-primary" href={routePath('/reservierung/')}>
                    Tisch reservieren
                  </a>
                  <a className="btn btn-ghost" href={SITE.mapsUrl} target="_blank" rel="noreferrer">
                    Auf Karte öffnen →
                  </a>
                </div>
              </div>
            </div>
            <div className="map" aria-label="Lage auf Karte">
              <div className="corner">Kudamm · Charlottenburg</div>
              <div className="pin">
                <div className="dot"></div>
                <div className="pulse"></div>
                <div className="label">Casa Bellucci</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ, sichtbar und passend zum faqJsonLd */}
      <section className="subpage-info" aria-labelledby="ital-faq-h2">
        <div className="wrap">
          <div className="section-eyebrow">
            <span className="eyebrow" style={eyebrowStyle}>
              <FlagBar orientation="h" /> Häufige Fragen
            </span>
          </div>
          <h2 id="ital-faq-h2">
            Häufige <span className="it">Fragen</span>
          </h2>
          <div className="subpage-info-grid" style={{ marginTop: 24 }}>
            {ITALIENISCH_FAQ.map((faq) => (
              <div key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 28 }}>
            Mehr zum Haus auf der Startseite,{' '}
            <a href={routePath('/')}>Casa Bellucci</a>. Am Abend das{' '}
            <a href={routePath('/sizilianisches-restaurant-berlin/')}>sizilianische Restaurant in Berlin</a>, am Morgen{' '}
            <a href={routePath('/fruehstueck-brunch-kurfuerstendamm/')}>Frühstück und Brunch am Kudamm</a> und für den
            Aperitivo unsere <a href={routePath('/bar-aperitivo-kurfuerstendamm/')}>Bar am Kudamm</a>.
          </p>
        </div>
      </section>

      <Lightbox />
    </main>
  );
}
