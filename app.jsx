/* Casa Bellucci — Root App */
const { useState, useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#F4D03F",
  "hero": "v6",
  "font": "classic",
  "sectionStyle": "mediterran",
  "gallery": "filmstrip",
  "mobileNav": "a"
}/*EDITMODE-END*/;

const ACCENT_MAP = {
  "#F4D03F": "lemon",
  "#C67B5C": "terracotta",
  "#1B4F72": "medblue",
};

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lbOpen, setLbOpen] = useState(false);
  const [lbIdx, setLbIdx] = useState(0);

  // Apply tweaks to document
  useEffect(() => {
    const accent = ACCENT_MAP[tweaks.accent] || "lemon";
    document.documentElement.dataset.accent = accent;
    document.documentElement.dataset.font = tweaks.font;
    document.documentElement.dataset.sectionStyle = tweaks.sectionStyle || "klassisch";
  }, [tweaks.accent, tweaks.font, tweaks.sectionStyle]);

  const onReserve = () => {
    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const openLightbox = (i) => { setLbIdx(i); setLbOpen(true); };
  const closeLightbox = () => setLbOpen(false);
  const prev = () => setLbIdx(i => (i - 1 + GALLERY.length) % GALLERY.length);
  const next = () => setLbIdx(i => (i + 1) % GALLERY.length);

  const heroMap = { v6: HeroV6, v5: HeroV5, v4: HeroV4, v1: HeroV1, v3: HeroV3 };
  const Hero = heroMap[tweaks.hero] || HeroV5;

  return (
    <div id="top">
      <ScrollRevealSystem />
      <Header onReserve={onReserve} onOpenMobile={() => setMobileOpen(!mobileOpen)} mobileOpen={mobileOpen} />
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} variant={tweaks.mobileNav} />
      <Hero onReserve={onReserve} />
      <MajolikaDivider />
      <About />
      <MenuSection />
      <Terrace />
      <MajolikaDivider />
      <Wine />
      <Gallery onOpen={openLightbox} galleryStyle={tweaks.gallery} />
      <Press />
      <Contact />
      <TricoloreLine style={{ opacity: 0.6 }} />
      <Footer />
      <Lightbox
        open={lbOpen}
        idx={lbIdx}
        onClose={closeLightbox}
        onPrev={prev}
        onNext={next}
      />

      <TweaksPanel>
        <TweakSection label="Hero-Layout">
          <TweakSelect
            label="Variante"
            value={tweaks.hero}
            onChange={(v) => setTweak("hero", v)}
            options={[
              { value: "v6", label: "Video · Cinematic" },
              { value: "v5", label: "Bilderreise · Ken Burns" },
              { value: "v4", label: "Postkarte aus Sizilien" },
              { value: "v1", label: "Editorial · Split" },
              { value: "v3", label: "Vollbild · Atmosphäre" },
            ]}
          />
        </TweakSection>
        <TweakSection label="Farbwelt">
          <TweakColor
            label="Akzentfarbe"
            value={tweaks.accent}
            onChange={(v) => setTweak("accent", v)}
            options={["#F4D03F", "#C67B5C", "#1B4F72"]}
          />
          <TweakSelect
            label="Sektionen"
            value={tweaks.sectionStyle}
            onChange={(v) => setTweak("sectionStyle", v)}
            options={[
              { value: "klassisch", label: "Klassisch · Warm Sand" },
              { value: "mediterran", label: "Mediterran · Blau & Terracotta" },
              { value: "sommer", label: "Sommer · Olive & Sonne" },
            ]}
          />
        </TweakSection>
        <TweakSection label="Galerie">
          <TweakSelect
            label="Stil"
            value={tweaks.gallery}
            onChange={(v) => setTweak("gallery", v)}
            options={[
              { value: "filmstrip", label: "Filmstreifen · Horizontal" },
              { value: "polaroid", label: "Polaroid · Gestreut" },
              { value: "masonry", label: "Masonry · Raster" },
            ]}
          />
        </TweakSection>
        <TweakSection label="Mobile Navigation">
          <TweakSelect
            label="Stil"
            value={tweaks.mobileNav}
            onChange={(v) => setTweak("mobileNav", v)}
            options={[
              { value: "a", label: "A · Fullscreen Overlay" },
              { value: "b", label: "B · Seitliches Drawer" },
              { value: "c", label: "C · Bottom Sheet" },
            ]}
          />
        </TweakSection>
        <TweakSection label="Typografie">
          <TweakSelect
            label="Schriftpaarung"
            value={tweaks.font}
            onChange={(v) => setTweak("font", v)}
            options={[
              { value: "classic", label: "Playfair + Cormorant" },
              { value: "modern", label: "DM Serif + Lora" },
              { value: "couture", label: "Italiana + Cormorant" },
            ]}
          />
        </TweakSection>
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
