"use client";

import { useEffect, useState } from 'react';
import { asset } from '@/lib/assetPath';
import { FlagBar } from './Brand';

interface SignatureItem {
  label: string;
  heroLabel: string;
  title: string;
  copy: string;
  img: string;
  menuKey: string;
  pdf: string;
}

interface MenuTab {
  key: string;
  label: string;
  pdf: string;
}

export function MenuSection() {
  const signatures: SignatureItem[] = [
    {
      label: "Frühstück",
      heroLabel: "Colazione",
      title: "Uova alla Fiorentina",
      copy: "Pochierte Eier, Spinat und Hollandaise, elegant genug für einen späten Start.",
      img: "images/menu-breakfast.jpg",
      menuKey: "fruehstueck",
      pdf: "menus/fruehstueck.pdf",
    },
    {
      label: "Lunch",
      heroLabel: "Pranzo",
      title: "Spaghetti alle Vongole",
      copy: "Venusmuscheln, Knoblauch, Petersilie und der kurze Moment von Küste.",
      img: "images/menu-lunch.jpg",
      menuKey: "lunch",
      pdf: "menus/lunch.pdf",
    },
    {
      label: "Dinner",
      heroLabel: "Cena",
      title: "Pasta con Caviale",
      copy: "Linguine, Beurre noisette, Kaviar Imperial und Goldblatt.",
      img: "images/menu-dinner.jpg",
      menuKey: "dinner",
      pdf: "menus/dinner.pdf",
    },
    {
      label: "Bar",
      heroLabel: "Aperitivo",
      title: "Aperitivo Bellucci",
      copy: "Bitter, Zitrus, Prosecco und ein Platz auf der Sommerterrasse.",
      img: "images/menu-wines.jpg",
      menuKey: "weine",
      pdf: "menus/weine.pdf",
    },
  ];
  const menus: MenuTab[] = [
    { key: "fruehstueck", label: "Frühstück", pdf: "menus/fruehstueck.pdf" },
    { key: "lunch", label: "Lunch", pdf: "menus/lunch.pdf" },
    { key: "dinner", label: "Dinner", pdf: "menus/dinner.pdf" },
    { key: "weine", label: "Wein", pdf: "menus/weine.pdf" },
  ];
  const [menuOpen, setMenuOpen] = useState<string | null>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(null); };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [menuOpen]);

  const current = menus.find((m) => m.key === menuOpen);

  return (
    <section className="menu signature-menu" id="menu" data-screen-label="03 Signature Moments">
      <div className="wrap">
        <div className="signature-menu-head">
          <div className="signature-menu-title">
            <div className="section-eyebrow">
              <span className="eyebrow" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                <FlagBar orientation="h" /> Signature Moments
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
            <img
              src={asset("images/menu-dinner.jpg")}
              alt="Gedeckter Tisch bei Casa Bellucci"
              className="signature-hero-img is-active"
            />
            <figcaption>
              <span>La Carta</span>
              Bellucci
            </figcaption>
          </figure>

          <div className="signature-list">
            {signatures.map((item) => (
              <button
                type="button"
                className="signature-item"
                key={item.title}
                onClick={() => setMenuOpen(item.menuKey)}
                aria-label={`${item.label} Karte öffnen`}
              >
                <span className="signature-label">{item.label}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
                <span className="signature-open" aria-hidden="true">Karte öffnen</span>
              </button>
            ))}

            <div className="signature-actions">
              <button type="button" className="btn btn-primary" onClick={() => setMenuOpen("dinner")}>Karte ansehen</button>
              <a className="btn btn-ghost" href="#reservieren">Reservieren →</a>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`menu-viewer${menuOpen ? " open" : ""}`}
        onClick={() => setMenuOpen(null)}
        aria-hidden={!menuOpen}
      >
        {current && (
          <div className="menu-viewer-card" onClick={(e) => e.stopPropagation()}>
            <button className="menu-viewer-close" type="button" onClick={() => setMenuOpen(null)} aria-label="Schließen">×</button>
            <div className="menu-viewer-tabs" role="tablist">
              {menus.map((m) => (
                <button
                  type="button"
                  key={m.key}
                  role="tab"
                  aria-selected={m.key === menuOpen}
                  className={`menu-viewer-tab${m.key === menuOpen ? " is-active" : ""}`}
                  onClick={() => setMenuOpen(m.key)}
                >
                  {m.label}
                </button>
              ))}
            </div>
            <iframe
              className="menu-viewer-frame"
              src={asset(current.pdf)}
              title={`Karte ${current.label}`}
            />
            <div className="menu-viewer-fallback">
              <a href={asset(current.pdf)} target="_blank" rel="noreferrer">In neuem Tab öffnen ↗</a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
