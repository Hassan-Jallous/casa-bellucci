import type { CSSProperties } from 'react';
import { asset } from '@/lib/assetPath';
import { routePath } from '@/lib/routes';
import { SITE } from '@/lib/site';
import { FlagBar } from './Brand';

export interface BarFaq {
  question: string;
  answer: string;
}

const eyebrowStyle: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 10,
};

export function BarLanding({ faqs }: { faqs: BarFaq[] }) {
  const drinks = [
    {
      time: 'Aperitivo',
      title: 'Aperitivo Bellucci',
      copy: 'Unser Haus-Aperitivo aus Bitter, Zitrus und Prosecco. Spritzig, leicht herb, gemacht für den frühen Abend an der Bar oder auf der Terrasse.',
    },
    {
      time: 'Cocktails',
      title: 'Klassisch gemixt',
      copy: 'Cocktails von Negroni bis Spritz, dazu Wein, Bier und Kaffee. Die Bar ist Treffpunkt von früh bis spät, casual und einladend.',
    },
    {
      time: 'Vino',
      title: 'Glasweise aus Italien',
      copy: 'Offene Weine, die täglich wechseln. Schwerpunkt Sizilien und Süditalien, kuratiert von Sommelier Marco.',
    },
  ];

  return (
    <main className="subpage">
      {/* 1. Hero / Intro */}
      <section className="about all-day" aria-labelledby="bar-h1">
        <div className="wrap">
          <div className="all-day-grid">
            <div className="all-day-copy">
              <div className="section-eyebrow">
                <span className="eyebrow" style={eyebrowStyle}>
                  <FlagBar orientation="h" /> Bar &amp; Aperitivo am Kurfürstendamm
                </span>
              </div>
              <h1 id="bar-h1">
                Bar und Aperitivo am <span className="it">Kurfürstendamm</span>
              </h1>
              <p className="lede">
                Casa Bellucci ist eine Restaurant-Bar am Kurfürstendamm 63 in Berlin-Charlottenburg. An der Bar gibt es
                Aperitivo, Cocktails und italienischen Wein, von früh bis spät. Eine entspannte Adresse für ein Glas in
                der City West, am Tresen oder auf der Sommerterrasse.
              </p>
              <p>
                Die Atmosphäre ist gehoben und gemütlich zugleich, casual genug für nach der Arbeit und schön genug für
                den langen Abend. Am Wochenende legt ein DJ ruhige Musik auf, als Stimmung zum Aperitivo, nicht als
                Club.
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
            <div className="all-day-media" aria-label="Bar, Aperitivo und Terrasse bei Casa Bellucci">
              <figure className="all-day-photo morning">
                <img
                  src={asset('images/gallery/8.jpg')}
                  alt="Aperitivo und Drinks an der Bar von Casa Bellucci am Kurfürstendamm in Berlin-Charlottenburg"
                />
                <figcaption>Aperitivo</figcaption>
              </figure>
              <figure className="all-day-photo midday">
                <img
                  src={asset('images/menu-wines.jpg')}
                  alt="Glas italienischer Wein an der Bar von Casa Bellucci in Charlottenburg"
                />
                <figcaption>Vino</figcaption>
              </figure>
              <figure className="all-day-photo evening">
                <img
                  src={asset('images/terrace.jpg')}
                  alt="Sommerterrasse von Casa Bellucci am Kurfürstendamm am Abend bei Kerzenlicht"
                />
                <figcaption>Terrazza</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Aperitivo und Cocktails */}
      <section className="about all-day" aria-labelledby="aperitivo-h2">
        <div className="wrap">
          <div className="all-day-grid">
            <div className="all-day-copy">
              <div className="section-eyebrow">
                <span className="eyebrow" style={eyebrowStyle}>
                  <FlagBar orientation="h" /> Aperitivo und Cocktails
                </span>
              </div>
              <h2 id="aperitivo-h2">
                Aperitivo Bellucci und die <span className="it">Bar</span>
              </h2>
              <p>
                Aperitivo Berlin beginnt bei uns am frühen Abend. Der Aperitivo Bellucci verbindet Bitter, Zitrus und
                Prosecco zu einem leicht herben, spritzigen Auftakt. Dazu reicht die Bar Cocktails, Wein, Bier und
                Kaffee, also alles für den Aperitivo am Kurfürstendamm und den Drink danach.
              </p>
              <p>
                Als Cocktailbar in Charlottenburg bleiben wir bei klaren Klassikern statt Show. Negroni, Spritz und
                saisonale Drinks, sauber gemixt. So ist die Bar ein Ort für ein schnelles Glas am Tresen ebenso wie für
                einen langen Abend am Kudamm.
              </p>
              <div className="dayline" aria-label="An der Bar von Casa Bellucci">
                {drinks.map((item, index) => (
                  <div className="day-moment" key={item.title} style={{ '--i': index } as CSSProperties}>
                    <span className="moment-time">{item.time}</span>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="all-day-media" aria-label="Aperitivo und Cocktails bei Casa Bellucci">
              <figure className="all-day-photo morning">
                <img
                  src={asset('images/gallery/8.jpg')}
                  alt="Aperitivo Bellucci, Haus-Aperitivo aus Bitter, Zitrus und Prosecco bei Casa Bellucci"
                />
                <figcaption>Spritz</figcaption>
              </figure>
              <figure className="all-day-photo midday">
                <img
                  src={asset('images/gallery/6.jpg')}
                  alt="Cocktails und Drinks an der Bar von Casa Bellucci in Berlin-Charlottenburg"
                />
                <figcaption>Cocktails</figcaption>
              </figure>
              <figure className="all-day-photo evening">
                <img
                  src={asset('images/about.jpg')}
                  alt="Cozy Bar-Atmosphäre bei Casa Bellucci am Kurfürstendamm"
                />
                <figcaption>Bar</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Wein und Sizilien */}
      <section className="wine" aria-labelledby="wein-h2">
        <div className="wrap">
          <div className="top">
            <div>
              <div className="section-eyebrow">
                <span className="eyebrow" style={eyebrowStyle}>
                  <FlagBar orientation="h" /> Wein und Sizilien
                </span>
              </div>
              <h2 id="wein-h2">
                Weinbar am <span className="it">Kurfürstendamm</span>
              </h2>
              <p className="lede" style={{ marginTop: 14 }}>
                Als Weinbar in Charlottenburg legen wir den Schwerpunkt auf Sizilien und Süditalien. Kuratiert von
                Sommelier Marco, glasweise täglich wechselnd.
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
              <h3>Vom Ätna ins Glas</h3>
              <p>
                Vulkanische Mineralität vom Ätna und kräftige rote Trauben. Die Insel bestimmt den Charakter unserer
                offenen Weine.
              </p>
              <div className="list">
                <div className="row">
                  <div>
                    <div>Etna Bianco DOC</div>
                    <div className="v" style={{ fontSize: 14, color: 'var(--ink-muted)' }}>
                      Sicilia · glasweise
                    </div>
                  </div>
                  <div className="p">€ 11,00</div>
                </div>
                <div className="row">
                  <div>
                    <div>Nero d&apos;Avola</div>
                    <div className="v" style={{ fontSize: 14, color: 'var(--ink-muted)' }}>
                      Sicilia · glasweise
                    </div>
                  </div>
                  <div className="p">€ 9,00</div>
                </div>
                <div className="row">
                  <div>
                    <div>Etna Rosso</div>
                    <div className="v" style={{ fontSize: 14, color: 'var(--ink-muted)' }}>
                      Sicilia · glasweise
                    </div>
                  </div>
                  <div className="p">€ 12,50</div>
                </div>
              </div>
            </article>
            <article className="region">
              <div className="label">Dolci &amp; Liquorosi</div>
              <h3>Süße aus dem Süden</h3>
              <p>
                Süßweine und Liquorosi, wie sie zu Sizilien gehören. Vom Passito der Insel Pantelleria bis zum Marsala
                aus dem Westen.
              </p>
              <div className="list">
                <div className="row">
                  <div>
                    <div>Passito di Pantelleria</div>
                    <div className="v" style={{ fontSize: 14, color: 'var(--ink-muted)' }}>
                      Sicilia · Süßwein
                    </div>
                  </div>
                  <div className="p">€ 10,00</div>
                </div>
                <div className="row">
                  <div>
                    <div>Marsala Superiore</div>
                    <div className="v" style={{ fontSize: 14, color: 'var(--ink-muted)' }}>
                      Sicilia
                    </div>
                  </div>
                  <div className="p">€ 7,50</div>
                </div>
              </div>
            </article>
            <article className="region">
              <div className="label">Bollicine</div>
              <h3>Für den Aperitivo</h3>
              <p>
                Schaumweine als spritziger Auftakt. Sie passen zum Aperitivo an der Bar und zum Anstoßen auf der
                Terrasse.
              </p>
              <div className="list">
                <div className="row">
                  <div>
                    <div>Franciacorta Brut</div>
                    <div className="v" style={{ fontSize: 14, color: 'var(--ink-muted)' }}>
                      Lombardia · Spumante
                    </div>
                  </div>
                  <div className="p">€ 13,00</div>
                </div>
                <div className="row">
                  <div>
                    <div>Prosecco im Glas</div>
                    <div className="v" style={{ fontSize: 14, color: 'var(--ink-muted)' }}>
                      Veneto · glasweise
                    </div>
                  </div>
                  <div className="p">€ 7,00</div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 4. Live-DJ und Wochenende */}
      <section className="about all-day" aria-labelledby="musik-h2">
        <div className="wrap">
          <div className="all-day-grid">
            <div className="all-day-copy">
              <div className="section-eyebrow">
                <span className="eyebrow" style={eyebrowStyle}>
                  <FlagBar orientation="h" /> Live-DJ und Wochenende
                </span>
              </div>
              <h2 id="musik-h2">
                Bar mit Musik in <span className="it">Berlin</span>
              </h2>
              <p>
                Am Wochenende legt bei uns ein Live-DJ auf. Wer eine Bar mit Musik in Berlin sucht, findet hier ruhige
                Sounds zum Aperitivo und am Abend. Das bleibt eine Restaurant-Bar-Stimmung, kein Club. Die Musik trägt
                den Abend, ohne das Gespräch zu übertönen.
              </p>
              <p>
                So wird Casa Bellucci am Wochenende zur Bar mit DJ am Kurfürstendamm, casual und entspannt. Im Sommer
                zieht sich der Aperitivo auf die Terrasse, unter Schirme am Tag und bei Kerzenlicht am Abend. Auch als
                Restaurant mit Musik in Berlin passt das Haus für einen langen Abend zu zweit oder in der Gruppe.
              </p>
              <p>
                Mehr zur Küche am Abend auf unseren Seiten zum{' '}
                <a href={routePath('/sizilianisches-restaurant-berlin/')}>sizilianischen Restaurant in Berlin</a> und
                zum{' '}
                <a href={routePath('/italienisches-restaurant-berlin-charlottenburg/')}>
                  italienischen Restaurant in Charlottenburg
                </a>
                .
              </p>
            </div>
            <div className="all-day-media" aria-label="Wochenende, Musik und Terrasse bei Casa Bellucci">
              <figure className="all-day-photo morning">
                <img
                  src={asset('images/gallery/1.jpg')}
                  alt="Entspannter Abend mit Musik in der Bar von Casa Bellucci am Kurfürstendamm"
                />
                <figcaption>Serata</figcaption>
              </figure>
              <figure className="all-day-photo midday">
                <img
                  src={asset('images/gallery/6.jpg')}
                  alt="Gäste an der Bar von Casa Bellucci am Wochenende in Berlin-Charlottenburg"
                />
                <figcaption>Weekend</figcaption>
              </figure>
              <figure className="all-day-photo evening">
                <img
                  src={asset('images/terrace.jpg')}
                  alt="Aperitivo auf der Sommerterrasse von Casa Bellucci am Kurfürstendamm bei Kerzenlicht"
                />
                <figcaption>Terrazza</figcaption>
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
                An die Bar am <span className="it">Kurfürstendamm</span>
              </h2>
              <p className="lede">
                Casa Bellucci liegt am Kurfürstendamm 63 in Berlin-Charlottenburg, geöffnet täglich ab 09:00 Uhr,
                Montag bis Samstag bis 00:00 Uhr. Reservieren Sie online oder telefonisch, Walk-ins sind besonders an
                der Bar willkommen.
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
                  <div className="k">An der Bar</div>
                  <div className="v">
                    Aperitivo ab dem frühen Abend
                    <br />
                    <span className="muted">Live-DJ am Wochenende</span>
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
            <a href={routePath('/')}>Casa Bellucci</a>. Direkt zur{' '}
            <a href={routePath('/#terrasse')}>Terrasse</a> oder zur{' '}
            <a href={routePath('/reservierung/')}>Reservierung</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
