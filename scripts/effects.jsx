/* Casa Bellucci — Effects & New Components */

/* ============ SCROLL REVEAL SYSTEM ============ */
/* Moved to scroll-reveal.js as a standalone script */
function ScrollRevealSystem() { return null; }

/* ============ VIDEO HERO ============ */
function VideoHero({ onReserve }) {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 880);
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    const mq = window.matchMedia('(max-width: 880px)');
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.volume = 0;
    video.play().catch(() => {});
  }, [isMobile]);

  const videoSrc = isMobile ? 'images/hero-video-mobile.mp4' : 'images/hero-video.mp4';

  return (
    <section className="hero video-hero" data-screen-label="01 Hero · Video">
      <video
        ref={videoRef}
        key={videoSrc}
        className="video-hero-media"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        poster="images/hero-poster.jpg"
      />
      <div className="video-hero-shade" aria-hidden="true"></div>
      <div className="video-hero-content wrap">
        <div className="video-hero-copy">
          <div className="video-hero-eyebrow">
            <FlagBar orientation="h" size="md" />
            Ristorante · Bar · Terrasse · Kurfürstendamm 63
          </div>
          <h1>Sizilien in Berlin</h1>
          <p>Handgemachte Pasta, fangfrischer Fisch und Aperitivo auf der Sommerterrasse.</p>
          <div className="video-hero-actions">
            <button className="btn btn-primary btn-on-dark" onClick={onReserve}>Reservieren</button>
            <a className="btn btn-ghost btn-on-dark" href="#menu">Karte ansehen →</a>
          </div>
        </div>
      </div>
      <div className="video-hero-scroll" aria-hidden="true">
        <span>Entdecken</span>
        <i></i>
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

/* ============ EXPORTS ============ */
Object.assign(window, {
  ScrollRevealSystem, VideoHero,
  GalleryFilmstrip,
  MajolikaDivider, TricoloreLine,
});
