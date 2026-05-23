/* Casa Bellucci — Effects & New Components */

/* ============ SCROLL REVEAL SYSTEM ============ */
/* Moved to scroll-reveal.js as a standalone script */
function ScrollRevealSystem() { return null; }

/* ============ HERO V5 — CINEMATIC KEN BURNS ============ */
function HeroV5({ onReserve }) {
  const [slide, setSlide] = React.useState(0);
  const [entered, setEntered] = React.useState(false);
  const slides = [
    { src: 'images/gallery/5.jpg', pos: 'center 35%' },
    { src: 'images/about.jpg', pos: 'center center' },
    { src: 'images/gallery/1.jpg', pos: 'center 30%' },
    { src: 'images/terrace.jpg', pos: 'center center' },
  ];

  React.useEffect(() => {
    const t = setTimeout(() => setEntered(true), 100);
    return () => clearTimeout(t);
  }, []);

  React.useEffect(() => {
    const iv = setInterval(() => setSlide(s => (s + 1) % slides.length), 5500);
    return () => clearInterval(iv);
  }, []);

  const entryStyle = (delay) => ({
    opacity: entered ? 1 : 0,
    transform: entered ? 'translateY(0)' : 'translateY(28px)',
    transition: `opacity 0.9s ease-out ${delay}s, transform 0.9s ease-out ${delay}s`,
  });
  const casaEntryStyle = {
    opacity: entered ? 1 : 0,
    transform: entered ? 'rotate(-2deg) translateY(0)' : 'rotate(-2deg) translateY(28px)',
    transition: `opacity 0.9s ease-out 0.3s, transform 0.9s ease-out 0.3s`,
  };

  return (
    <section className="hero hero-v5" data-screen-label="01 Hero · Cinematic">
      <div className="v5-slides">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`v5-slide${i === slide ? ' active' : ''}`}
            style={{ backgroundImage: `url(${s.src})`, backgroundPosition: s.pos }}
          />
        ))}
      </div>
      <div className="v5-warm-overlay"></div>
      <div className="v5-gradient"></div>

      <div className="v5-content wrap">
        <div className="v5-text">
          <div className="v5-eyebrow" style={entryStyle(0.1)}>
            <FlagBar orientation="h" size="md" />
            Ristorante · Bar · Terrasse · Kurfürstendamm 63
          </div>
          <p className="v5-sub" style={entryStyle(0.6)}>
            Sizilianische Trattoria & Sommerterrasse am Kurfürstendamm.
            Pasta fatta a mano, fangfrischer Fisch, eine Terrasse voller Zitronenbäume.
          </p>
          <div className="v5-cta" style={entryStyle(0.75)}>
            <button className="btn btn-primary btn-on-dark" onClick={onReserve}>Reservieren</button>
            <a className="btn btn-ghost btn-on-dark" href="#menu">Karte ansehen →</a>
          </div>
        </div>
      </div>

      <div className="v5-dots">
        {slides.map((_, i) => (
          <button key={i} className={`v5-dot${i === slide ? ' active' : ''}`} onClick={() => setSlide(i)} aria-label={`Bild ${i+1}`} />
        ))}
      </div>

      <div className="v5-scroll-hint">
        <span>Entdecken</span>
        <div className="v5-scroll-line"></div>
      </div>
    </section>
  );
}

/* ============ GALLERY — FILMSTRIP ============ */
function GalleryFilmstrip({ onOpen }) {
  const captions = [
    "Aperitivo am Abend", "Pasta della Casa", "Unsere Sala",
    "Dolce Vita", "Feinste Antipasti", "Tisch für Zwei",
    "Frisch vom Meer", "Die Cantina",
  ];

  return (
    <div className="filmstrip-wrap">
      <div className="filmstrip-track">
        {GALLERY.map((g, i) => (
          <div key={i} className="filmstrip-frame" onClick={() => onOpen(i)}>
            <img src={g.src} alt={captions[i]} loading="lazy" />
            <span className="filmstrip-label">{captions[i]}</span>
            <div className="filmstrip-number">{String(i + 1).padStart(2, '0')}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============ GALLERY — MASONRY ============ */
function GalleryMasonry({ onOpen }) {
  return (
    <div className="masonry-grid">
      {GALLERY.map((g, i) => (
        <div key={i} className="masonry-tile" onClick={() => onOpen(i)}>
          <img src={g.src} alt="" loading="lazy" />
          <div className="masonry-overlay">
            <span>{String(i + 1).padStart(2, '0')}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ============ MAJOLIKA DIVIDER ============ */
function MajolikaDivider({ height = 56 }) {
  return (
    <div className="majolika-divider" style={{ height }}>
      <MajolikaPattern opacity={0.18} />
      <div className="majolika-fade-top"></div>
      <div className="majolika-fade-bottom"></div>
    </div>
  );
}

/* ============ TRICOLORE LINE ============ */
function TricoloreLine({ style = {} }) {
  return (
    <div className="tricolore-line" style={style}>
      <span></span><span></span><span></span>
    </div>
  );
}

/* ============ HERO V6 — VIDEO BACKGROUND ============ */
function HeroV6({ onReserve }) {
  const [entered, setEntered] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 880);
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    const t = setTimeout(() => setEntered(true), 100);
    return () => clearTimeout(t);
  }, []);

  React.useEffect(() => {
    const mq = window.matchMedia('(max-width: 880px)');
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  React.useEffect(() => {
    const v = videoRef.current;
    if (v) {
      // Force muted + no audio at all times
      v.muted = true;
      v.volume = 0;
      v.play().catch(() => {});
    }
  }, [isMobile]);

  const videoSrc = isMobile ? 'images/hero-video-mobile.mp4' : 'images/hero-video.mp4';

  const entryStyle = (delay) => ({
    opacity: entered ? 1 : 0,
    transform: entered ? 'translateY(0)' : 'translateY(28px)',
    transition: `opacity 0.9s ease-out ${delay}s, transform 0.9s ease-out ${delay}s`,
  });
  const casaEntryStyle = {
    opacity: entered ? 1 : 0,
    transform: entered ? 'rotate(-2deg) translateY(0)' : 'rotate(-2deg) translateY(28px)',
    transition: `opacity 0.9s ease-out 0.3s, transform 0.9s ease-out 0.3s`,
  };

  return (
    <section className="hero hero-v5 hero-video" data-screen-label="01 Hero · Video">
      <div className="v6-video-wrap">
        <video
          ref={videoRef}
          key={videoSrc}
          className="v6-video"
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          poster="images/gallery/5.jpg"
        />
      </div>
      <div className="v5-warm-overlay"></div>
      <div className="v5-gradient"></div>

      <div className="v5-content wrap">
        <div className="v5-text">
          <div className="v5-eyebrow" style={entryStyle(0.1)}>
            <FlagBar orientation="h" size="md" />
            Ristorante · Bar · Terrasse · Kurfürstendamm 63
          </div>
          <p className="v5-sub" style={entryStyle(0.6)}>
            Sizilianische Trattoria & Sommerterrasse am Kurfürstendamm.
            Pasta fatta a mano, fangfrischer Fisch, eine Terrasse voller Zitronenbäume.
          </p>
          <div className="v5-cta" style={entryStyle(0.75)}>
            <button className="btn btn-primary btn-on-dark" onClick={onReserve}>Reservieren</button>
            <a className="btn btn-ghost btn-on-dark" href="#menu">Karte ansehen →</a>
          </div>
        </div>
      </div>

      <div className="v5-scroll-hint">
        <span>Entdecken</span>
        <div className="v5-scroll-line"></div>
      </div>
    </section>
  );
}

/* ============ EXPORTS ============ */
Object.assign(window, {
  ScrollRevealSystem,
  HeroV5, HeroV6,
  GalleryFilmstrip, GalleryMasonry,
  MajolikaDivider, TricoloreLine,
});
