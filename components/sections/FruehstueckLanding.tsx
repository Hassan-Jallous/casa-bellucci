import type { CSSProperties } from 'react';
import { asset } from '@/lib/assetPath';
import { routePath } from '@/lib/routes';
import { SITE } from '@/lib/site';
import { FlagBar } from './Brand';

export interface FruehstueckFaq {
  question: string;
  answer: string;
}

const eyebrowStyle: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 10,
};

export function FruehstueckLanding({ faqs }: { faqs: FruehstueckFaq[] }) {
  const colazione = [
    {
      time: 'Uova',
      title: 'Eier am Morgen',
      copy: 'Uova alla Fiorentina mit pochierten Eiern, Spinat und Sauce Hollandaise. Dazu Avocado Toast Mediterraneo, frisch belegt.',
    },
    {
      time: 'Dolce',
      title: 'Süß und warm',
      copy: 'Pancakes con Frutti di Bosco mit Waldbeeren und unser Cornetto, hausgemacht und täglich frisch gebacken.',
    },
    {
      time: 'Caffè',
      title: 'Italienischer Kaffee',
      copy: 'Espresso Bellucci und Cappuccino, dazu Spremuta d Arancia aus Tarocco-Orangen und Limonata Siciliana mit Amalfi-Zitronen.',
    },
  ];

  return (
    <main className="subpage">
      {/* 1. Hero / Intro */}
      <section className="about all-day" aria-labelledby="fruehstueck-h1">
        <div className="wrap">
          <div className="all-day-grid">
            <div className="all-day-copy">
              <div className="section-eyebrow">
                <span className="eyebrow" style={eyebrowStyle}>
                  <FlagBar orientation="h" /> Colazione am Kurfürstendamm
                </span>
              </div>
              <h1 id="fruehstueck-h1">
                Frühstück und Brunch in <span className="it">Charlottenburg</span>
              </h1>
              <p className="lede">
                Casa Bellucci serviert italienisches Frühstück in Berlin-Charlottenburg, am Kurfürstendamm 63.
                „La Dolce Mattina“ heißt der ruhige Start in den Tag, mit Cornetto statt Croissant, Espresso
                Bellucci und einer sizilianischen Note aus Amalfi-Zitronen und Tarocco-Orangen.
              </p>
              <p>
                Frühstück gibt es täglich von 09:00 bis 12:00 Uhr, am Wochenende länger bis 14:00 Uhr als Brunch.
                Wer in Charlottenburg-Wilmersdorf ein Frühstück am Kudamm sucht, findet hier einen Platz drinnen
                oder auf der Sommerterrasse am Morgen.
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
            <div className="all-day-media" aria-label="Italienisches Frühstück bei Casa Bellucci">
              <figure className="all-day-photo morning">
                <img
                  src={asset('images/menu-breakfast.jpg')}
                  alt="Italienisches Frühstück bei Casa Bellucci in Berlin-Charlottenburg mit Cornetto und Espresso"
                />
                <figcaption>Colazione</figcaption>
              </figure>
              <figure className="all-day-photo midday">
                <img
                  src={asset('images/gallery/2.jpg')}
                  alt="Frühstückstisch am Kurfürstendamm bei Casa Bellucci am Morgen"
                />
                <figcaption>Mattina</figcaption>
              </figure>
              <figure className="all-day-photo evening">
                <img
                  src={asset('images/terrace.jpg')}
                  alt="Sommerterrasse von Casa Bellucci am Kurfürstendamm im Morgenlicht"
                />
                <figcaption>Terrazza</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Italienisches Frühstück */}
      <section className="about all-day" aria-labelledby="italienisches-fruehstueck-h2">
        <div className="wrap">
          <div className="all-day-grid">
            <div className="all-day-copy">
              <div className="section-eyebrow">
                <span className="eyebrow" style={eyebrowStyle}>
                  <FlagBar orientation="h" /> Italienisches Frühstück
                </span>
              </div>
              <h2 id="italienisches-fruehstueck-h2">
                La Dolce Mattina, <span className="it">italienisch</span>
              </h2>
              <p>
                Ein italienisches Frühstück ist leicht und süß. Statt großem Teller gibt es bei uns Cornetto und
                Caffè, dazu kleine warme Gerichte. Der Cornetto ist die italienische Variante des Croissants,
                hausgemacht und täglich frisch gebacken. Dazu der Espresso Bellucci oder ein Cappuccino.
              </p>
              <p>
                Wer mehr mag, wählt Uova alla Fiorentina mit pochierten Eiern, Spinat und Sauce Hollandaise, einen
                Avocado Toast Mediterraneo oder Pancakes con Frutti di Bosco. Frisch gepresst kommt die Spremuta
                d Arancia aus Tarocco-Orangen, dazu die Limonata Siciliana mit Amalfi-Zitronen. Das macht das
                italienische Frühstück in Berlin zu einem ruhigen Start am Kurfürstendamm.
              </p>
              <div className="dayline" aria-label="Gerichte vom italienischen Frühstück">
                {colazione.map((item, index) => (
                  <div className="day-moment" key={item.title} style={{ '--i': index } as CSSProperties}>
                    <span className="moment-time">{item.time}</span>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="all-day-media" aria-label="Gerichte vom Frühstück bei Casa Bellucci">
              <figure className="all-day-photo morning">
                <img
                  src={asset('images/menu-breakfast.jpg')}
                  alt="Cornetto und Espresso, das italienische Frühstück bei Casa Bellucci"
                />
                <figcaption>Cornetto</figcaption>
              </figure>
              <figure className="all-day-photo midday">
                <img
                  src={asset('images/gallery/4.jpg')}
                  alt="Frisches Gebäck und Kaffee zum Frühstück bei Casa Bellucci am Kurfürstendamm"
                />
                <figcaption>Caffè</figcaption>
              </figure>
              <figure className="all-day-photo evening">
                <img
                  src={asset('images/about.jpg')}
                  alt="Ruhige Atmosphäre zum Frühstück im Innenraum von Casa Bellucci in Charlottenburg"
                />
                <figcaption>Sala</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Brunch am Wochenende */}
      <section className="about all-day" aria-labelledby="brunch-h2">
        <div className="wrap">
          <div className="all-day-grid">
            <div className="all-day-copy">
              <div className="section-eyebrow">
                <span className="eyebrow" style={eyebrowStyle}>
                  <FlagBar orientation="h" /> Brunch am Wochenende
                </span>
              </div>
              <h2 id="brunch-h2">
                Brunch in <span className="it">Charlottenburg</span>
              </h2>
              <p>
                Am Wochenende läuft das Frühstück länger und wird zum Brunch. Statt bis 12:00 Uhr servieren wir bis
                14:00 Uhr, in Ruhe und ohne Eile. So bleibt Zeit für einen zweiten Cappuccino und einen langen
                Vormittag in Charlottenburg.
              </p>
              <p>
                Bei gutem Wetter öffnet die Sommerterrasse am Kurfürstendamm schon am Morgen. Brunch draußen,
                mit Cornetto, Eiern und frisch gepresstem Orangensaft, ist ein guter Grund, das Wochenende am
                Kudamm zu beginnen. Für einen Tisch zum Brunch empfehlen wir eine Reservierung.
              </p>
            </div>
            <div className="all-day-media" aria-label="Brunch am Wochenende bei Casa Bellucci">
              <figure className="all-day-photo morning">
                <img
                  src={asset('images/terrace.jpg')}
                  alt="Brunch auf der Sommerterrasse von Casa Bellucci am Kurfürstendamm in Charlottenburg"
                />
                <figcaption>Terrasse</figcaption>
              </figure>
              <figure className="all-day-photo midday">
                <img
                  src={asset('images/gallery/2.jpg')}
                  alt="Gedeckter Tisch zum Wochenend-Brunch bei Casa Bellucci"
                />
                <figcaption>Weekend</figcaption>
              </figure>
              <figure className="all-day-photo evening">
                <img
                  src={asset('images/gallery/4.jpg')}
                  alt="Italienischer Brunch in Berlin-Charlottenburg bei Casa Bellucci"
                />
                <figcaption>Brunch</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Zeiten und Reservierung */}
      <section className="contact" aria-labelledby="reservierung-h2">
        <div className="wrap">
          <div className="grid">
            <div>
              <div className="section-eyebrow">
                <span className="eyebrow" style={eyebrowStyle}>
                  <FlagBar orientation="h" /> Zeiten und Reservierung
                </span>
              </div>
              <h2 id="reservierung-h2">
                Frühstück am <span className="it">Kurfürstendamm</span>
              </h2>
              <p className="lede">
                Casa Bellucci liegt am Kurfürstendamm 63 in Berlin-Charlottenburg. Frühstück gibt es täglich ab
                09:00 Uhr, am Wochenende als Brunch bis 14:00 Uhr. Reservieren Sie online über Quandoo oder
                telefonisch.
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
                  <div className="k">Frühstück</div>
                  <div className="v">
                    Colazione 09:00 - 12:00 Uhr
                    <br />
                    <span className="muted">Wochenende Brunch bis 14:00 Uhr</span>
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

      {/* 5. FAQ, sichtbar und passend zum faqJsonLd */}
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
            </a>{' '}
            sowie{' '}
            <a href={routePath('/sizilianisches-restaurant-berlin/')}>
              sizilianisches Restaurant in Berlin
            </a>
            . Direkt zur <a href={routePath('/#menu')}>Karte</a> oder zur{' '}
            <a href={routePath('/reservierung/')}>Reservierung</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
