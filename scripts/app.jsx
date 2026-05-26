/* Casa Bellucci — Root App */
const { useState, useEffect } = React;

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lbOpen, setLbOpen] = useState(false);
  const [lbIdx, setLbIdx] = useState(0);

  useEffect(() => {
    document.documentElement.dataset.accent = "lemon";
    document.documentElement.dataset.font = "classic";
  }, []);

  const onReserve = () => {
    document.getElementById("reservieren")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const openLightbox = (i) => { setLbIdx(i); setLbOpen(true); };
  const closeLightbox = () => setLbOpen(false);
  const prev = () => setLbIdx(i => (i - 1 + GALLERY.length) % GALLERY.length);
  const next = () => setLbIdx(i => (i + 1) % GALLERY.length);

  return (
    <div id="top">
      <ScrollRevealSystem />
      <Header onReserve={onReserve} onOpenMobile={() => setMobileOpen(!mobileOpen)} mobileOpen={mobileOpen} />
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
      <VideoHero onReserve={onReserve} />
      <About />
      <MenuSection />
      <Terrace />
      <Gallery onOpen={openLightbox} />
      <Reservation />
      <Contact />
      <Footer />
      <Lightbox
        open={lbOpen}
        idx={lbIdx}
        onClose={closeLightbox}
        onPrev={prev}
        onNext={next}
      />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
