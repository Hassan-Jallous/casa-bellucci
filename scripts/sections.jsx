/* Casa Bellucci — Sections */
const { useState, useEffect, useRef } = React;

/* ---------- Brand Mark ---------- */
function BrandMark({ size = "md", invert = false }) {
  const fontSize = size === "lg" ? 50 : size === "sm" ? 24 : 32;
  return (
    <span className="brand" style={{ fontSize, color: invert ? "var(--bg)" : "var(--ink)" }}>
      <span className="casa" style={{ color: "var(--accent)" }}>Casa</span>
      <span className="bellucci">Bellucci</span>
    </span>
  );
}

/* ---------- Stamps & Decor ---------- */
function PostalStamp({ size = 100, rot = 0 }) {
  return (
    <div className="postal-stamp rotating" style={{ width: size, height: size, transform: `rotate(${rot}deg)` }}>
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <path id="circle-text" d="M 50 50 m -38 0 a 38 38 0 1 1 76 0 a 38 38 0 1 1 -76 0" />
        </defs>
        <g className="label-circle">
          <text fontFamily='"Montserrat", Arial, sans-serif' fontSize="8" letterSpacing="3.5" fill="currentColor" textLength="240">
            <textPath href="#circle-text" startOffset="0">DA SICILIA · KURFÜRSTENDAMM 63 · BERLIN · </textPath>
          </text>
        </g>
      </svg>
      <span className="center">Casa<br/><em style={{fontSize: 12, letterSpacing: "0.2em", fontStyle:"normal", fontFamily:"var(--font-mono)"}}>2026</em></span>
    </div>
  );
}

function RectStamp({ children }) {
  return (
    <span className="rect-stamp">
      <span className="dot"></span>
      {children}
    </span>
  );
}

function FlagBar({ orientation = "v", size = "md" }) {
  const cls = `flag-bar ${orientation === "h" ? "h" : ""} ${size === "lg" ? "lg" : size === "xl" ? "xl" : ""}`;
  return <span className={cls}><i></i><i></i><i></i></span>;
}

/* ---------- Header ---------- */
function Header({ onReserve, onOpenMobile, mobileOpen = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState("DE");
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="wrap row">
        <a href="#top" style={{display: "inline-flex", alignItems: "center", gap: 12}}>
          <FlagBar size="md"/>
          <BrandMark size="md"/>
        </a>
        <nav className="nav-links">
          <a href="#menu">Karte</a>
          <a href="#terrasse">Terrasse</a>
          <a href="#galerie">Galerie</a>
          <a href="#reservieren">Reservieren</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
        <div className="header-right">
          <div className="lang-switch">
            {["DE", "EN", "IT"].map((l, i) => (
              <React.Fragment key={l}>
                <button className={lang === l ? "active" : ""} onClick={() => setLang(l)}>{l}</button>
                {i < 2 && <span className="sep">·</span>}
              </React.Fragment>
            ))}
          </div>
          <button className="btn btn-dark header-cta" onClick={onReserve}>Reservieren</button>
          <button className={`burger${mobileOpen ? " is-open" : ""}`} onClick={onOpenMobile} aria-label="Menu"><span></span></button>
        </div>
      </div>
    </header>
  );
}

/* ---------- Mobile Nav A: Full-Screen Overlay ---------- */
function MobileNavA({ open, onClose }) {
  const items = [
    { href: "#menu", label: "Karte" },
    { href: "#terrasse", label: "Terrasse" },
    { href: "#galerie", label: "Galerie" },
    { href: "#reservieren", label: "Reservieren" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  React.useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <nav className={`mobile-nav-a${open ? " open" : ""}`} aria-label="Mobile Navigation">
      <div className="nav-items">
        {items.map((it, i) => (
          <a key={i} href={it.href} className="nav-item" onClick={onClose}>
            <span className="num">{String(i + 1).padStart(2, "0")}</span>
            {it.label}
          </a>
        ))}
      </div>
      <a href="#kontakt" className="nav-cta" onClick={onClose}>
        <span>Reservieren</span>
        <span className="arrow">→</span>
      </a>
      <div className="nav-meta">
        <span>Kurfürstendamm 63 · 10707 Berlin</span>
        <span>+49 30 886 298 28</span>
      </div>
    </nav>
  );
}

function MobileNav({ open, onClose }) {
  return <MobileNavA open={open} onClose={onClose} />;
}

/* ---------- HERO V1 — Editorial Split (updated) ---------- */
function HeroV1({ onReserve }) {
  return (
    <section className="hero hero-v1" data-screen-label="01 Hero · Editorial">
      <div className="wrap">
        <div className="grid">
          <div className="copy">
            <div className="eyebrow" style={{display:"inline-flex",alignItems:"center",gap:12}}>
              <FlagBar orientation="h" size="md"/>
              Ristorante &middot; Bar &middot; Kurfürstendamm 63
            </div>
            <h1>
              <span className="script-overlay" style={{fontSize:"0.6em",lineHeight:"0.4",display:"block",fontFamily:"var(--font-logo-script)",color:"var(--accent)",marginBottom:"-0.1em",marginLeft:"0.05em"}}>Casa</span>
              BELLUCCI
            </h1>
            <span className="sub-script">Sizilien in Berlin</span>
            <p className="tag">
              Eine Trattoria mitten in Charlottenburg, von Familie geführt seit 2019. Pasta fatta a mano, fangfrischer Fisch, eine Sommerterrasse, die nach Zitronen riecht.
            </p>
            <div className="cta-row">
              <button className="btn btn-primary" onClick={onReserve}>Reservieren</button>
              <a className="btn btn-ghost" href="#menu">Karte ansehen →</a>
            </div>
            <div className="meta-row">
              <div className="item"><span className="k">Geöffnet heute</span><span className="v">09:00 — 00:00</span></div>
              <div className="item"><span className="k">Telefon</span><span className="v">030 · 886 298 28</span></div>
              <div className="item"><span className="k">Adresse</span><span className="v">Kurfürstendamm 63</span></div>
            </div>
          </div>
          <div className="img-stack">
            <img src="images/menu-dinner.jpg" alt="Pasta con caviale"/>
            <div className="badge">Sommer<br/>auf der<br/>Terrasse</div>
          </div>
        </div>
      </div>
      <LemonBranch
        size={300}
        rot={-20}
        style={{ position: "absolute", top: 100, right: -40, opacity: 0.65, zIndex: 0 }}
      />
      <LemonBranch
        size={220}
        rot={170}
        mirror
        style={{ position: "absolute", bottom: -40, left: -30, opacity: 0.45, zIndex: 0 }}
      />
    </section>
  );
}

/* ---------- All-Day Concept ---------- */
function About() {
  const moments = [
    {
      time: "Vormittag",
      title: "Frühstück & Brunch",
      copy: "Espresso, Croissant, leichte Teller und ein ruhiger Start in den Tag.",
    },
    {
      time: "Mittag",
      title: "Lunch auf der Terrasse",
      copy: "Pasta, Fisch und Salate für lange Gespräche zwischen City und Sonne.",
    },
    {
      time: "Abend",
      title: "Dinner & Bar",
      copy: "Sizilianische Küche, Aperitivo und Wein bis spät in den Abend.",
    },
  ];

  return (
    <section className="about all-day" id="ueber-uns" data-screen-label="02 All-Day Concept">
      <div className="wrap">
        <div className="all-day-grid">
          <div className="all-day-copy">
            <div className="section-eyebrow">
              <span className="eyebrow" style={{display:"inline-flex",alignItems:"center",gap:10}}>
                <FlagBar orientation="h"/> All-Day Concept
              </span>
            </div>
            <h2>Ein Tag bei <span className="it">Bellucci</span>.</h2>
            <p>
              Vom späten Frühstück bis zum Dinner: Casa Bellucci ist kein Ort für nur einen Anlass, sondern für den ganzen Tag am Kurfürstendamm.
            </p>
            <div className="dayline" aria-label="Tagesmomente">
              {moments.map((moment, index) => (
                <div className="day-moment" key={moment.title} style={{ "--i": index }}>
                  <span className="moment-time">{moment.time}</span>
                  <h3>{moment.title}</h3>
                  <p>{moment.copy}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="all-day-media" aria-label="Atmosphäre von Frühstück, Mittag und Abend">
            <figure className="all-day-photo morning">
              <img src="images/menu-breakfast.jpg" alt="Frühstücksmoment bei Casa Bellucci" />
              <figcaption>Frühstück</figcaption>
            </figure>
            <figure className="all-day-photo midday">
              <img src="images/menu-lunch.jpg" alt="Mediterraner Lunch auf weißem Tisch" />
              <figcaption>Mittag</figcaption>
            </figure>
            <figure className="all-day-photo evening">
              <img src="images/menu-dinner.jpg" alt="Dinnergericht mit italienischer Atmosphäre" />
              <figcaption>Abend</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Menu ---------- */
function MenuSection() {
  const signatures = [
    {
      label: "Frühstück",
      title: "Uova alla Fiorentina",
      copy: "Pochierte Eier, Spinat und Hollandaise, elegant genug für einen späten Start.",
      img: "images/menu-breakfast.jpg",
    },
    {
      label: "Lunch",
      title: "Spaghetti alle Vongole",
      copy: "Venusmuscheln, Knoblauch, Petersilie und der kurze Moment von Küste.",
      img: "images/menu-lunch.jpg",
    },
    {
      label: "Dinner",
      title: "Pasta con Caviale",
      copy: "Linguine, Beurre noisette, Kaviar Imperial und Goldblatt.",
      img: "images/menu-dinner.jpg",
    },
    {
      label: "Bar",
      title: "Aperitivo Bellucci",
      copy: "Bitter, Zitrus, Prosecco und ein Platz auf der Sommerterrasse.",
      img: "images/menu-wines.jpg",
    },
  ];
  const [selected, setSelected] = useState(null);

  return (
    <section className="menu signature-menu" id="menu" data-screen-label="03 Signature Moments">
      <div className="wrap">
        <div className="signature-menu-head">
          <div className="signature-menu-title">
            <div className="section-eyebrow">
              <span className="eyebrow" style={{display:"inline-flex",alignItems:"center",gap:10}}>
                <FlagBar orientation="h"/> Signature Moments
              </span>
            </div>
            <h2>Unsere <span className="it">Karte</span>, kuratiert.</h2>
          </div>
          <p>
            Nicht die ganze Speisekarte auf einen Blick. Nur die Momente, die den Tag bei Bellucci sofort verständlich machen: leicht am Morgen, sonnig am Mittag, groß am Abend.
          </p>
        </div>

        <div className="signature-menu-grid">
          <figure className="signature-menu-hero">
            <img src="images/menu-dinner.jpg" alt="Signature Pasta mit Kaviar bei Casa Bellucci" />
            <figcaption>
              <span>Cena</span>
              Pasta con Caviale
            </figcaption>
          </figure>

          <div className="signature-list">
            {signatures.map(item => (
              <button
                type="button"
                className="signature-item"
                key={item.title}
                onClick={() => setSelected(item)}
                aria-label={`${item.title} ansehen`}
              >
                <span className="signature-label">{item.label}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
                <span className="signature-open" aria-hidden="true">Ansehen</span>
              </button>
            ))}

            <div className="signature-actions">
              <a className="btn btn-primary" href="public/menus/dinner.pdf" target="_blank" rel="noreferrer">Karte ansehen</a>
              <a className="btn btn-ghost" href="#reservieren">Reservieren →</a>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`dish-pop${selected ? " open" : ""}`}
        onClick={() => setSelected(null)}
        aria-hidden={!selected}
      >
        {selected && (
          <div className="dish-pop-card" onClick={(e) => e.stopPropagation()}>
            <button className="dish-pop-close" type="button" onClick={() => setSelected(null)} aria-label="Schließen">×</button>
            <figure>
              <img src={selected.img} alt={selected.title} />
            </figure>
            <div className="dish-pop-copy">
              <span>{selected.label}</span>
              <h3>{selected.title}</h3>
              <p>{selected.copy}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------- Terrace ---------- */
function Terrace() {
  const moments = [
    { k: "10:00", v: "Frühstück unter hellen Schirmen" },
    { k: "14:30", v: "Lunch zwischen Zitronenbäumen" },
    { k: "18:00", v: "Aperitivo bis Kerzenlicht" },
  ];

  return (
    <section className="terrace" id="terrasse" data-screen-label="04 Terrasse">
      <div className="terrace-stage">
        <div className="terrace-bg" aria-hidden="true"></div>

        <figure className="terrace-photo">
          <img src="images/terrace/terrace-04.jpg" alt="Sommerterrasse des Casa Bellucci mit weiß gedeckten Tischen, Blumen und warmem Licht" />
          <figcaption>
            <span>Kurfürstendamm 63</span>
            <h2>Terrasse offen bei gutem Wetter</h2>
          </figcaption>
        </figure>

        <div className="terrace-actions">
          <a className="btn btn-primary" href="#reservieren">reservieren</a>
          <a className="btn btn-ghost" href="#galerie">Terrasse ansehen →</a>
        </div>

        <div className="terrace-panel">
          <div className="terrace-quote">
            <span>„</span>
            Lange Nachmittage, leise Gespräche, der erste Aperitivo im Glas.
          </div>
          <div className="terrace-moments">
            {moments.map(moment => (
              <div className="terrace-moment" key={moment.k}>
                <span>{moment.k}</span>
                <strong>{moment.v}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Wine ---------- */
function Wine() {
  const regions = [
    {
      label: "Sicilia",
      name: "Vom Ätna an die Küste",
      copy: "Nero d'Avola, Etna Bianco, Frappato. Vulkanische Mineralität, ehrliche Trauben.",
      list: [
        { n: "Etna Bianco, Planeta", v: "2022 · Sicilia", p: "11,00" },
        { n: "Nero d'Avola, Donnafugata", v: "2021 · Sicilia", p: "9,00" },
        { n: "Passito di Pantelleria", v: "Ben Ryé · Süßwein", p: "10,00" },
      ],
    },
    {
      label: "Toscana & Piemonte",
      name: "Die großen Klassiker",
      copy: "Sangiovese, Nebbiolo, Brunello. Lagerfähig, aber heute schon zugänglich.",
      list: [
        { n: "Barolo DOCG, Vietti", v: "2019 · Piemonte", p: "14,00" },
        { n: "Brunello, Casanova di Neri", v: "2018 · Toscana", p: "18,00" },
        { n: "Chianti Classico Riserva", v: "Felsina · 2020", p: "11,50" },
      ],
    },
    {
      label: "Bollicine & Norditalia",
      name: "Schaumwein & Weiße",
      copy: "Franciacorta statt Champagner. Vermentino aus Sardinien, Falanghina aus Kampanien.",
      list: [
        { n: "Franciacorta Brut", v: "Ca' del Bosco", p: "13,00" },
        { n: "Vermentino di Sardegna", v: "Argiolas · 2023", p: "8,50" },
        { n: "Gavi del Comune", v: "La Scolca · 2022", p: "12,00" },
      ],
    },
  ];
  return (
    <section className="wine" id="wein" data-screen-label="06 Weine">
      <div className="wrap">
        <div className="top">
          <div>
            <div className="section-eyebrow">
              <span className="eyebrow" style={{display:"inline-flex",alignItems:"center",gap:10}}>
                <FlagBar orientation="h"/> Unsere Weine
              </span>
            </div>
            <h2>Carta dei <span className="it">Vini</span></h2>
            <p className="lede" style={{marginTop: 14}}>
              300+ italienische Etiketten, kuratiert von Sommelier Marco. Glasweise täglich rotierend, die Flaschen warten geduldig im Keller.
            </p>
          </div>
          <a className="btn btn-ghost" href="public/menus/weine.pdf" target="_blank" rel="noreferrer">Komplette Weinkarte (PDF) →</a>
        </div>
        <div className="regions">
          {regions.map(r => (
            <article className="region" key={r.label}>
              <div className="label">{r.label}</div>
              <h3>{r.name}</h3>
              <p>{r.copy}</p>
              <div className="list">
                {r.list.map(w => (
                  <div className="row" key={w.n}>
                    <div>
                      <div>{w.n}</div>
                      <div className="v" style={{fontSize: 14, color: "var(--ink-muted)"}}>{w.v}</div>
                    </div>
                    <div className="p">€ {w.p}</div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Gallery ---------- */
function Gallery({ onOpen }) {
  return (
    <section className="gallery" id="galerie" data-screen-label="05 Galerie">
      <div className="wrap">
        <div className="top">
          <div>
            <div className="section-eyebrow">
              <span className="eyebrow" style={{display:"inline-flex",alignItems:"center",gap:10}}>
                <FlagBar orientation="h"/> Unsere Galerie
              </span>
            </div>
            <h2>Einblicke in <span className="it">unser Haus</span></h2>
            <p className="lede" style={{marginTop: 14}}>
              Postkarten aus dem Haus. Klicke ein Bild für die Großansicht.
            </p>
          </div>
          <a className="btn btn-ghost" href="https://instagram.com" target="_blank" rel="noreferrer">@casabellucci · Instagram →</a>
        </div>
        <GalleryFilmstrip onOpen={onOpen} />
      </div>
    </section>
  );
}

/* ---------- Reservation ---------- */
function Reservation() {
  return (
    <section className="reservation" id="reservieren" data-screen-label="06 Reservieren">
      <div className="wrap reservation-inner">
        <div>
          <div className="section-eyebrow">
            <span className="eyebrow" style={{display:"inline-flex",alignItems:"center",gap:10}}>
              <FlagBar orientation="h"/> Reservieren
            </span>
          </div>
          <h2>Ein Tisch für <span className="it">heute</span></h2>
          <p className="lede">
            Frühstück, Lunch auf der Terrasse oder ein langer Abend am Kurfürstendamm. Für Gruppen und spontane Wünsche erreichst du uns direkt telefonisch.
          </p>
        </div>
        <div className="reservation-card">
          <div className="reservation-line">
            <span>Telefon</span>
            <a href="tel:+493088629828">+49 30 886 298 28</a>
          </div>
          <div className="reservation-line">
            <span>E-Mail</span>
            <a href="mailto:reservation@casabellucci.de">reservation@casabellucci.de</a>
          </div>
          <div className="reservation-line">
            <span>Öffnungszeiten</span>
            <strong>Mo - Sa · 09:00 - 00:00<br/>So · 09:00 - 18:00</strong>
          </div>
          <div className="reservation-actions">
            <a className="btn btn-primary" href="tel:+493088629828">Jetzt anrufen</a>
            <a className="btn btn-ghost" href="mailto:reservation@casabellucci.de?subject=Reservierung%20Casa%20Bellucci">Anfrage senden →</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Lightbox({ open, idx, onClose, onPrev, onNext }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, onPrev, onNext]);
  return (
    <div className={`lightbox${open ? " open" : ""}`} onClick={onClose}>
      <button className="close" onClick={onClose}>✕</button>
      <button className="nav prev" onClick={(e) => { e.stopPropagation(); onPrev(); }}>‹</button>
      <button className="nav next" onClick={(e) => { e.stopPropagation(); onNext(); }}>›</button>
      {open && <img src={GALLERY[idx].src} alt="" onClick={(e) => e.stopPropagation()}/>}
    </div>
  );
}

/* ---------- Press ---------- */
function Press() {
  const items = [
    { outlet: "Berliner Zeitung", cls: "italic", q: PRESS_QUOTES[0], date: "April 2024" },
    { outlet: "TIP BERLIN", cls: "caps", q: PRESS_QUOTES[1], date: "Juni 2024" },
    { outlet: "Tagesspiegel", cls: "italic", q: PRESS_QUOTES[2], date: "September 2024" },
  ];
  return (
    <section className="press press-cards" id="presse" data-screen-label="07 Presse">
      <div className="wrap inner">
        <div className="head">
          <div>
            <div className="section-eyebrow">
              <span className="eyebrow" style={{display:"inline-flex",alignItems:"center",gap:10}}>
                <FlagBar orientation="h"/> Presse & Stimmen
              </span>
            </div>
            <h2>Was die <span className="it">Presse</span> sagt</h2>
          </div>
          <RectStamp>Berlin · 2024</RectStamp>
        </div>
        {items.map((it, i) => (
          <div key={i} className="row">
            <div className={`outlet ${it.cls}`}>{it.outlet}</div>
            <div className="q">„{it.q}"</div>
            <div className="date">{it.date}</div>
          </div>
        ))}
        <div className="stamp-floater">
          <PostalStamp size={140} rot={8}/>
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  return (
    <section className="contact" id="kontakt" data-screen-label="07 Kontakt">
      <div className="wrap">
        <div className="grid">
          <div>
            <div className="section-eyebrow">
              <span className="eyebrow" style={{display:"inline-flex",alignItems:"center",gap:10}}>
                <FlagBar orientation="h"/> Kontakt
              </span>
            </div>
            <h2>Kontakt &amp;<br/><span className="it">Anfahrt</span></h2>
            <p className="lede">
              Reservierungen per Telefon oder Online. Walk-ins sind bei uns immer willkommen, besonders an der Bar.
            </p>
            <div className="info">
              <div className="block">
                <div className="k">Adresse</div>
                <div className="v">Kurfürstendamm 63<br/>10707 Berlin · Charlottenburg</div>
              </div>
              <div className="block">
                <div className="k">Reservierung</div>
                <div className="v">+49 30 886 298 28<br/><span className="muted">reservation@casabellucci.de</span></div>
              </div>
              <div className="block">
                <div className="k">Öffnungszeiten</div>
                <div className="v">Mo — Sa · 09:00 — 00:00<br/><span className="muted">Sonntag · 09:00 — 18:00</span></div>
              </div>
              <div className="block" style={{borderBottom: "1px solid var(--border)"}}>
                <div className="k">U-Bahn</div>
                <div className="v">U1 Uhlandstraße · 3 min Fußweg</div>
              </div>
              <div className="contact-actions">
                <a className="btn btn-primary" href="tel:+493088629828">Anrufen</a>
                <a className="btn btn-ghost" href="https://www.google.com/maps/search/?api=1&query=Casa%20Bellucci%20Kurf%C3%BCrstendamm%2063%2010707%20Berlin" target="_blank" rel="noreferrer">Auf Karte öffnen →</a>
              </div>
            </div>
          </div>
          <div className="map" aria-label="Lage auf Karte">
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
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-mark">
              <span className="script">Casa</span>
              <span>Bellucci</span>
            </div>
            <p>
              Italienisches Restaurant und Bar am Kurfürstendamm.
            </p>
            <div className="footer-cta">
              <a className="btn btn-primary" href="#reservieren">Reservieren</a>
              <a className="btn btn-ghost" href="tel:+491623009925">Anrufen</a>
            </div>
          </div>
          <div className="footer-col">
            <h5>Besuch</h5>
            <span className="line">Kurfürstendamm 63</span>
            <span className="line">10707 Berlin</span>
            <a href="https://www.google.com/maps/search/?api=1&query=Casa%20Bellucci%20Kurf%C3%BCrstendamm%2063%2010707%20Berlin" target="_blank" rel="noreferrer">Route öffnen</a>
          </div>
          <div className="footer-col">
            <h5>Kontakt</h5>
            <a href="tel:+491623009925">+49 162 3009925</a>
            <a href="mailto:info@casabellucci.de">info@casabellucci.de</a>
            <span className="line">Mo - Sa · 09:00 - 00:00</span>
            <span className="line">So · 09:00 - 18:00</span>
          </div>
          <div className="footer-col footer-socials">
            <h5>Folgen</h5>
            <a href="https://www.instagram.com/bellucci_barberlin/" target="_blank" rel="noreferrer">
              <span>Instagram</span>
              <strong>@bellucci_barberlin</strong>
            </a>
            <a href="https://www.google.com/maps/search/?api=1&query=Casa%20Bellucci%20Kurf%C3%BCrstendamm%2063%2010707%20Berlin" target="_blank" rel="noreferrer">
              <span>Google</span>
              <strong>Bewertungen</strong>
            </a>
          </div>
        </div>
        <div className="bottom">
          <span>© 2026 Casa Bellucci Restaurant & Bar</span>
          <div className="legal">
            <a href="https://casabellucci.de/impressum/" target="_blank" rel="noreferrer">Impressum</a>
            <a href="https://casabellucci.de/datenschutzerklaerung/" target="_blank" rel="noreferrer">Datenschutz</a>
            <a href="https://casabellucci.de/cookie-richtlinie-eu/" target="_blank" rel="noreferrer">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, {
  BrandMark, PostalStamp, RectStamp, FlagBar,
  Header, MobileNav, MobileNavA,
  HeroV1,
  About, MenuSection, Terrace, Wine, Gallery, Reservation, Lightbox, Press, Contact, Footer,
  MajolikaPattern,
});
