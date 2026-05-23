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
          <text fontFamily='"JetBrains Mono", monospace' fontSize="8" letterSpacing="3.5" fill="currentColor" textLength="240">
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

/* ---------- Polaroid ---------- */
function Polaroid({ src, caption, rot = 0, className = "", style = {}, onClick, photoCls = "" }) {
  return (
    <div className={`polaroid ${className}`} style={{ "--rot": `${rot}deg`, ...style }} onClick={onClick}>
      <img src={src} alt={caption || ""} className={`photo ${photoCls}`} loading="lazy"/>
      {caption && <span className="caption">{caption}</span>}
    </div>
  );
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
          <a href="#wein">Wein</a>
          <a href="#galerie">Galerie</a>
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
    { href: "#wein", label: "Wein" },
    { href: "#galerie", label: "Galerie" },
    { href: "#presse", label: "Presse" },
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

/* ---------- Mobile Nav B: Side Drawer ---------- */
function MobileNavB({ open, onClose }) {
  const items = [
    { href: "#menu", label: "Karte", icon: "🍝" },
    { href: "#terrasse", label: "Terrasse", icon: "🌿" },
    { href: "#wein", label: "Wein", icon: "🍷" },
    { href: "#galerie", label: "Galerie", icon: "📷" },
    { href: "#presse", label: "Presse", icon: "📰" },
    { href: "#kontakt", label: "Kontakt", icon: "📍" },
  ];

  React.useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <React.Fragment>
      <div className={`mobile-nav-b-backdrop${open ? " open" : ""}`} onClick={onClose}></div>
      <nav className={`mobile-nav-b${open ? " open" : ""}`} aria-label="Mobile Navigation">
        <div className="drawer-header">
          <BrandMark size="sm" />
          <button className="close-btn" onClick={onClose} aria-label="Schließen">✕</button>
        </div>
        <div className="nav-items">
          {items.map((it, i) => (
            <a key={i} href={it.href} className="nav-item" onClick={onClose}>
              <span className="icon">{it.icon}</span>
              {it.label}
            </a>
          ))}
        </div>
        <div className="drawer-footer">
          <a href="#kontakt" className="drawer-cta" onClick={onClose}>Reservieren</a>
          <div className="drawer-meta">
            <span>Kurfürstendamm 63 · 10707 Berlin</span>
            <span>+49 30 886 298 28</span>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

/* ---------- Mobile Nav C: Bottom Sheet ---------- */
function MobileNavC({ open, onClose }) {
  const tiles = [
    { href: "#menu", label: "Karte", icon: "🍝" },
    { href: "#terrasse", label: "Terrasse", icon: "🌿" },
    { href: "#wein", label: "Wein", icon: "🍷" },
    { href: "#galerie", label: "Galerie", icon: "📷" },
    { href: "#presse", label: "Presse", icon: "📰" },
    { href: "#kontakt", label: "Kontakt", icon: "📍" },
  ];

  React.useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <React.Fragment>
      <div className={`mobile-nav-c-backdrop${open ? " open" : ""}`} onClick={onClose}></div>
      <nav className={`mobile-nav-c${open ? " open" : ""}`} aria-label="Mobile Navigation">
        <div className="sheet-handle"></div>
        <div className="sheet-header">
          <BrandMark size="sm" />
          <button className="close-btn" onClick={onClose} aria-label="Schließen">✕</button>
        </div>
        <div className="nav-grid">
          {tiles.map((t, i) => (
            <a key={i} href={t.href} className="nav-tile" onClick={onClose}>
              <span className="tile-icon">{t.icon}</span>
              {t.label}
            </a>
          ))}
        </div>
        <div className="sheet-footer">
          <a href="#kontakt" className="sheet-cta" onClick={onClose}>Reservieren</a>
          <div className="sheet-meta">Kurfürstendamm 63 · Berlin · 030 886 298 28</div>
        </div>
      </nav>
    </React.Fragment>
  );
}

/* ---------- Legacy wrapper (delegates to active variant) ---------- */
function MobileNav({ open, onClose, variant = "a" }) {
  if (variant === "b") return <MobileNavB open={open} onClose={onClose} />;
  if (variant === "c") return <MobileNavC open={open} onClose={onClose} />;
  return <MobileNavA open={open} onClose={onClose} />;
}

/* ---------- HERO V4 — Postkarte ---------- */
function HeroV4({ onReserve }) {
  return (
    <section className="hero hero-v4" data-screen-label="01 Hero · Postkarte">
      <div className="wrap">
        <div className="canvas">
          {/* Scattered polaroids */}
          <div className="pol pol-1">
            <Polaroid src="images/gallery/4.jpg" caption="aperitivo · 17h" rot={-6}/>
          </div>
          <div className="pol pol-2">
            <Polaroid src="images/gallery/7.jpg" caption="ostriche · pesce" rot={5}/>
          </div>
          <div className="pol pol-3">
            <Polaroid src="images/gallery/2.jpg" caption="rigatoni della casa" rot={4}/>
          </div>
          <div className="pol pol-4">
            <Polaroid src="images/gallery/3.jpg" caption="la sala — sera" rot={-7}/>
          </div>

          {/* Postal stamp */}
          <div className="stamp-mark">
            <PostalStamp size={140} rot={12}/>
          </div>

          {/* Brand stack */}
          <div className="brand-stack">
            <div className="meta">
              <FlagBar orientation="h" size="md"/>
              Ristorante &middot; Bar &middot; Terrazza
              <FlagBar orientation="h" size="md"/>
            </div>
            <span className="casa-script">Casa</span>
            <span className="bellucci-block">BELLUCCI</span>
            <p className="sub-italic">
              Sizilianische Trattoria <span className="dot">✦</span> Kurfürstendamm 63 <span className="dot">✦</span> Berlin
            </p>
            <div className="cta">
              <button className="btn btn-primary" onClick={onReserve}>Reservieren</button>
              <a className="btn btn-ghost" href="#menu">Karte ansehen →</a>
            </div>
            <div className="ticket-row">
              <RectStamp>Da Cefalù · 2019</RectStamp>
              <RectStamp>Aperitivo 17–19 Uhr</RectStamp>
              <RectStamp>Terrasse offen ab April</RectStamp>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom ribbon ticker */}
      <div className="ribbon">
        <div className="ribbon-track">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <span>pasta fatta a mano <span className="star">✦</span></span>
              <span>pesce fresco <span className="star">✦</span></span>
              <span>limoni di Amalfi <span className="star">✦</span></span>
              <span>vini siciliani <span className="star">✦</span></span>
              <span>terrazza estiva <span className="star">✦</span></span>
              <span>aperitivo Bellucci <span className="star">✦</span></span>
              <span>dolce vita <span className="star">✦</span></span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
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
              <span className="script-overlay" style={{fontSize:"0.6em",lineHeight:"0.4",display:"block",fontFamily:'"Allura",cursive',color:"var(--accent)",marginBottom:"-0.1em",marginLeft:"0.05em"}}>Casa</span>
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

/* ---------- HERO V3 — Marktstand Full-Bleed ---------- */
function HeroV3({ onReserve }) {
  return (
    <section
      className="hero hero-v3"
      style={{ "--hero-img": "url(images/about.jpg)" }}
      data-screen-label="01 Hero · Marktstand"
    >
      <div className="bg"></div>
      <div className="content">
        <div>
          <div className="eyebrow" style={{color: "rgba(255,249,240,0.7)",display:"inline-flex",alignItems:"center",gap:12}}>
            <FlagBar orientation="h" size="md"/>
            Ristorante · Bar · Terrazza
          </div>
          <h1>
            <span style={{display:"block",fontFamily:'"Allura",cursive',color:"var(--accent-2)",fontSize:"0.5em",lineHeight:"0.5",marginBottom:"-0.05em",fontWeight:400,transform:"rotate(-3deg)",transformOrigin:"left"}}>Casa</span>
            BELLUCCI
          </h1>
          <span className="sub">Sizilien in Berlin</span>
          <p className="tag">
            Eine sizilianische Trattoria am Kurfürstendamm. Pasta fatta a mano, fangfrischer Fisch, eine Terrasse voller Zitronenbäume.
          </p>
          <div className="actions">
            <button className="btn btn-primary btn-on-dark" onClick={onReserve}>Reservieren</button>
            <a className="btn btn-ghost btn-on-dark" href="#menu">Karte ansehen →</a>
          </div>
        </div>
        <aside className="info-card">
          <div className="row">
            <span className="k">Heute geöffnet</span>
            <span className="v">09:00 — 00:00 Uhr</span>
          </div>
          <div className="row">
            <span className="k">Adresse</span>
            <span className="v">Kurfürstendamm 63<br/>10707 Berlin</span>
          </div>
          <div className="row">
            <span className="k">Reservierung</span>
            <span className="v">+49 30 886 298 28</span>
          </div>
        </aside>
      </div>
      <LemonBranch
        size={280}
        rot={-15}
        style={{ position: "absolute", top: 100, left: -40, opacity: 0.85, zIndex: 1 }}
      />
    </section>
  );
}

/* ---------- About — Magazine Spread ---------- */
function About() {
  return (
    <section className="about about-spread" id="ueber-uns" data-screen-label="02 About">
      <div className="wrap">
        <div className="grid">
          <div>
            <div className="section-eyebrow">
              <span className="eyebrow" style={{display:"inline-flex",alignItems:"center",gap:10}}>
                <FlagBar orientation="h"/> Über uns
              </span>
            </div>
            <h2>Una Tavola in <span className="it">Sicilia</span><br/>mitten am Kudamm.</h2>
            <p>
              Wir kommen aus Cefalù, einem Fischerdorf an der Nordküste Siziliens. Was wir nach Berlin mitgebracht haben: das Rezeptbuch unserer Großmutter, die Sturheit, alles selbst zu machen, und die Überzeugung, dass eine Mahlzeit Zeit braucht.
            </p>
            <div className="pull-quote">
              „Una buona tavola non si fa con la fretta — eine gute Tafel entsteht nicht in Eile."
            </div>
            <p>
              Im Sommer öffnet unsere Terrasse am Kurfürstendamm. Olivenbäume in Tontöpfen, Zitronen aus Amalfi auf den Tafeln, Kerzen am Abend. Es ist die kleinste Insel im Stadtviertel.
            </p>
            <div className="signature">
              <span className="script" style={{fontSize: 44}}>Famiglia Bellucci</span>
              <span className="who">Giuseppe &amp; Maria · seit 2019</span>
            </div>
          </div>
          <div className="img-col">
            <div className="ph ph-main"><img src="images/gallery/3.jpg" alt="Sala"/></div>
            <div className="ph ph-acc"><img src="images/gallery/6.jpg" alt="Tavolo"/></div>
            <div className="ph ph-small"><img src="images/gallery/4.jpg" alt="Dettagli"/><span className="cap">cefalù → kudamm</span></div>
            <div className="stamp-float">
              <PostalStamp size={110} rot={-8}/>
            </div>
          </div>
        </div>
        <div className="stat-strip">
          <div className="stat"><span className="n">2019</span><span className="l">Eröffnung am Kudamm</span></div>
          <div className="stat"><span className="n">120</span><span className="l">Plätze · Sala + Terrasse</span></div>
          <div className="stat"><span className="n">300+</span><span className="l">Italienische Weine</span></div>
          <div className="stat"><span className="n">5×</span><span className="l">Fischlieferung pro Woche</span></div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Menu ---------- */
function MenuSection() {
  const tabs = Object.keys(MENU);
  const [active, setActive] = useState("cena");
  const m = MENU[active];
  return (
    <section className="menu" id="menu" data-screen-label="03 Menu">
      <div className="wrap">
        <div className="top">
          <div>
            <div className="section-eyebrow">
              <span className="eyebrow" style={{display:"inline-flex",alignItems:"center",gap:10}}>
                <FlagBar orientation="h"/> Unsere Karte
              </span>
            </div>
            <h2>Unsere <span className="it">Karte</span></h2>
            <p className="lede" style={{marginTop: 16}}>
              Vier Karten, ein Tag: vom cappuccino am Morgen bis zum digestivo um Mitternacht. Saisonal angepasst, täglich neu geprüft.
            </p>
          </div>
          <div className="tabs" role="tablist">
            {tabs.map(t => (
              <button
                key={t}
                role="tab"
                className={`tab${active === t ? " active" : ""}`}
                onClick={() => setActive(t)}
              >
                {MENU[t].label} · <span style={{opacity:0.55, marginLeft:4}}>{MENU[t].de}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="grid" key={active}>
          <div className="dishes">
            {m.sections.map(sec => (
              <div key={sec.title} style={{marginBottom: 32}}>
                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontSize: 28,
                  fontWeight: 400,
                  margin: "0 0 8px",
                  color: "var(--accent)",
                  display: "flex", alignItems: "center", gap: 12,
                }}>
                  <span style={{height:1, width: 30, background: "var(--accent)", display:"inline-block"}}></span>
                  {sec.title}
                </h3>
                {sec.items.map(it => (
                  <div key={it.name} className={`dish${it.sig ? " signature" : ""}`}>
                    <div>
                      <div className="name">{it.name}</div>
                      <div className="desc">{it.it}</div>
                    </div>
                    <div className="price">{it.price}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <aside className="panel">
            <div className="img"><img src={m.img} alt={m.label}/></div>
            <div className="note">
              <div className="eyebrow" style={{marginBottom: 8}}>{m.sub}</div>
              <h4>{m.note.title}</h4>
              <p>{m.note.text}</p>
              <a className="download" href="#">PDF herunterladen ↓</a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* ---------- Terrace ---------- */
function Terrace() {
  return (
    <section className="terrace" id="terrasse" data-screen-label="04 Terrasse">
      <div className="inner">
        <div className="copy">
          <div className="section-eyebrow">
            <span className="eyebrow" style={{display:"inline-flex",alignItems:"center",gap:10}}>
              <FlagBar orientation="h"/> Sommerterrasse
            </span>
          </div>
          <h2>Sommer-<span className="it">terrasse</span><br/>am Kudamm.</h2>
          <p>
            Vom ersten warmen Tag im April bis zur letzten lauen Nacht im Oktober: unsere Terrasse öffnet sich zum Boulevard, geschützt von Olivenbäumen und einem Spalier aus Bougainvillea.
          </p>
          <p>
            Tafel-Service, eine eigene Aperitivo-Karte, am Abend Kerzenlicht. Reservierung empfehlen wir ab Mai dringend.
          </p>
          <div className="features">
            <div className="feat"><span className="k">Plätze</span><span className="v">40 Außen · 80 Innen</span></div>
            <div className="feat"><span className="k">Saison</span><span className="v">April — Oktober</span></div>
            <div className="feat"><span className="k">Aperitivo</span><span className="v">Täglich 17 — 19 Uhr</span></div>
            <div className="feat"><span className="k">Hund</span><span className="v">Willkommen, mit Wasser</span></div>
          </div>
        </div>
        <div className="img">
          <div className="quote">
            Eine der schönsten Sommerterrassen Berlins. Hier riecht es nach Zitronen und langem Nachmittag.
            <span className="cite">— tip Berlin</span>
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
    <section className="wine" id="wein" data-screen-label="05 Weine">
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
          <a className="btn btn-ghost" href="#">Komplette Weinkarte (PDF) →</a>
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

/* ---------- Gallery — Polaroid Scatter ---------- */
function Gallery({ onOpen, galleryStyle = "filmstrip" }) {
  const captions = [
    "Aperitivo am Abend",
    "Rigatoni della Casa",
    "Unsere Sala",
    "Dolce Vita",
    "Feinste Antipasti",
    "Tisch für Zwei",
    "Frisch vom Meer",
    "Die Cantina",
  ];

  const renderGallery = () => {
    if (galleryStyle === "filmstrip") return <GalleryFilmstrip onOpen={onOpen} />;
    if (galleryStyle === "masonry") return <GalleryMasonry onOpen={onOpen} />;
    // polaroid default
    return (
      <div className="stage">
        {GALLERY.map((g, i) => {
          const rot = [-6, 4, -3, 7, 5, -4, 6, -8][i] || 0;
          return (
            <Polaroid
              key={i}
              className={`pol p${i+1}`}
              src={g.src}
              caption={captions[i]}
              rot={rot}
              onClick={() => onOpen(i)}
            />
          );
        })}
        <div className="stamp-decor">
          <PostalStamp size={120} rot={-12}/>
        </div>
      </div>
    );
  };

  return (
    <section className={`gallery ${galleryStyle === 'polaroid' ? 'gallery-scatter' : ''}`} id="galerie" data-screen-label="06 Galerie">
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
        {renderGallery()}
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
    <section className="contact" id="kontakt" data-screen-label="08 Kontakt">
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
              <div style={{marginTop: 18, display:"flex", gap:12, flexWrap:"wrap"}}>
                <a className="btn btn-primary" href="tel:+493088629828">Anrufen</a>
                <a className="btn btn-ghost" href="#">Auf Karte öffnen →</a>
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
        <div className="top">
          <div>
            <div style={{display:"flex", alignItems:"center", gap: 16, marginBottom: 8}}>
              <FlagBar size="lg"/>
              <div className="brand-big">
                <span className="first" style={{fontFamily:'"Allura",cursive', color:"var(--accent-2)", fontSize:"1.4em", lineHeight:"0.6", display:"inline-block", marginRight:"-0.15em", transform:"translateY(0.15em)"}}>Casa</span>
                <span className="last" style={{textTransform:"uppercase", letterSpacing:"0.01em"}}>Bellucci</span>
              </div>
            </div>
            <span className="tagline">Sizilien in Berlin</span>
            <p style={{maxWidth: "30ch", color:"rgba(255,249,240,0.6)", marginTop: 24, fontSize: 15}}>
              Ristorante &amp; Bar am Kurfürstendamm. Geführt von Famiglia Bellucci seit 2019.
            </p>
          </div>
          <div className="col">
            <h5>Besuch</h5>
            <span className="line">Kurfürstendamm 63</span>
            <span className="line">10707 Berlin</span>
            <a href="tel:+493088629828">+49 30 886 298 28</a>
            <a href="mailto:hi@casabellucci.de">hi@casabellucci.de</a>
          </div>
          <div className="col">
            <h5>Karte</h5>
            <a href="#menu">Cena · Abendkarte</a>
            <a href="#menu">Pranzo · Mittagskarte</a>
            <a href="#wein">Carta dei Vini</a>
            <a href="#menu">Colazione · Frühstück</a>
          </div>
          <div className="col">
            <h5>Folgen</h5>
            <a href="#">Instagram · @casabellucci</a>
            <a href="#">Facebook</a>
            <a href="#">Google Reviews</a>
            <a href="#">Newsletter</a>
          </div>
        </div>
        <div className="bottom">
          <span>© 2026 Casa Bellucci Ristorante · Berlin</span>
          <div className="legal">
            <a href="#">Impressum</a>
            <a href="#">Datenschutz</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, {
  BrandMark, PostalStamp, RectStamp, FlagBar, Polaroid,
  Header, MobileNav, MobileNavA, MobileNavB, MobileNavC,
  HeroV1, HeroV3, HeroV4,
  About, MenuSection, Terrace, Wine, Gallery, Lightbox, Press, Contact, Footer,
  MajolikaPattern,
});
