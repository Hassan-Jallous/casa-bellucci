import { FlagBar } from './Brand';
import { GalleryFilmstrip } from '@/components/sections/GalleryFilmstrip';

export function Gallery() {
  return (
    <section className="gallery" id="galerie" data-screen-label="05 Galerie">
      <div className="wrap">
        <div className="top">
          <div>
            <div className="section-eyebrow">
              <span className="eyebrow" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                <FlagBar orientation="h" /> Unsere Galerie
              </span>
            </div>
            <h2>Einblicke in <span className="it">unser Haus</span></h2>
            <p className="lede" style={{ marginTop: 14 }}>
              Eindrücke aus unserem italienischen Restaurant am Kurfürstendamm. Klicke ein Bild für die Großansicht.
            </p>
          </div>
          <a className="btn btn-ghost" href="https://instagram.com" target="_blank" rel="noreferrer">@casabellucci · Instagram →</a>
        </div>
        <GalleryFilmstrip />
      </div>
    </section>
  );
}
