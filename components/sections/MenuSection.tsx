"use client";

import { useEffect, useRef, useState } from 'react';
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
      copy: "Pochierte Eier, Blattspinat und Hollandaise, unser Klassiker fürs Frühstück und den Brunch.",
      img: "images/menu-breakfast.jpg",
      menuKey: "fruehstueck",
      pdf: "menus/fruehstueck.pdf",
    },
    {
      label: "Lunch",
      heroLabel: "Pranzo",
      title: "Spaghetti alle Vongole",
      copy: "Frische Pasta mit Venusmuscheln, Knoblauch und Petersilie, ein Mittagstisch mit dem Geschmack von Küste.",
      img: "images/menu-lunch.jpg",
      menuKey: "lunch",
      pdf: "menus/lunch.pdf",
    },
    {
      label: "Dinner",
      heroLabel: "Cena",
      title: "Pasta con Caviale",
      copy: "Linguine fatta a mano, Beurre noisette, Kaviar Imperial und Goldblatt, der große Auftritt am Abend.",
      img: "images/menu-dinner.jpg",
      menuKey: "dinner",
      pdf: "menus/dinner.pdf",
    },
    {
      label: "Bar",
      heroLabel: "Aperitivo",
      title: "Aperitivo Bellucci",
      copy: "Bitter, Zitrus und Prosecco, der Aperitivo an der Bar oder auf der Sommerterrasse.",
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
  // activeMenu haelt die sichtbare Karte (bleibt waehrend der Schliess-Animation
  // gemountet), isOpen steuert die Enter/Exit-Transition. So laeuft die Animation
  // auch beim Schliessen, bevor das Markup entfernt wird.
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = (key: string) => {
    if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; }
    setActiveMenu(key);
    setIsOpen(true);
  };
  const closeMenu = () => {
    setIsOpen(false);
    closeTimer.current = setTimeout(() => {
      setActiveMenu(null);
      closeTimer.current = null;
    }, 380);
  };

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeMenu(); };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  useEffect(() => () => { if (closeTimer.current) clearTimeout(closeTimer.current); }, []);

  const current = menus.find((m) => m.key === activeMenu);

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
            <h2>Unsere italienische <span className="it">Speisekarte</span>, kuratiert.</h2>
          </div>
          <p>
            Nicht die ganze Speisekarte auf einen Blick. Nur die Momente, die den Tag bei Bellucci ausmachen: italienisches Frühstück am Morgen, frische Pasta und frischer Fisch zum Lunch, sizilianische Küche und Aperitivo an der Bar am Abend.
          </p>
        </div>

        <div className="signature-menu-grid">
          <figure className="signature-menu-hero">
            <img
              src={asset("images/menu-dinner.jpg")}
              alt="Gedeckter Tisch bei Casa Bellucci, italienische und sizilianische Speisekarte in Berlin-Charlottenburg"
              className="signature-hero-img is-active"
            />
            <figcaption>
              Bellucci
            </figcaption>
          </figure>

          <div className="signature-list">
            {signatures.map((item) => (
              <button
                type="button"
                className="signature-item"
                key={item.title}
                onClick={() => openMenu(item.menuKey)}
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
              <a className="btn btn-primary" href="#reservieren">Reservieren</a>
              <a className="btn btn-ghost" href="#terrasse">Terrasse →</a>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`menu-viewer${isOpen ? " open" : ""}`}
        onClick={closeMenu}
        aria-hidden={!isOpen}
      >
        {current && (
          <div className="menu-viewer-card" onClick={(e) => e.stopPropagation()}>
            <header className="menu-viewer-head">
              <span className="menu-viewer-eyebrow">La Carta</span>
              <div className="menu-viewer-tabs" role="tablist">
                {menus.map((m) => (
                  <button
                    type="button"
                    key={m.key}
                    role="tab"
                    aria-selected={m.key === activeMenu}
                    className={`menu-viewer-tab${m.key === activeMenu ? " is-active" : ""}`}
                    onClick={() => openMenu(m.key)}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
              <button className="menu-viewer-close" type="button" onClick={closeMenu} aria-label="Schließen">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>
            </header>
            <iframe
              className="menu-viewer-frame"
              src={`${asset(current.pdf)}#toolbar=0&navpanes=0&view=FitH`}
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
