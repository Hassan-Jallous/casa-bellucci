"use client";

import { useEffect, useRef } from 'react';
import { SITE } from '@/lib/site';
import { useLang } from '@/lib/i18n/LanguageProvider';

const localeMap = {
  de: 'de_DE',
  en: 'en_GB',
  it: 'it_IT',
} as const;

const SCRIPT_ID = 'quandoo-booking-widget-script';
const CONTAINER_ID = 'quandoo-booking-widget';

export function QuandooWidget() {
  const { lang } = useLang();
  const shellRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Sicherheitsnetz gegen gestapelte Widgets. Quandoos index.js loest seinen
  // Mount via getElementById(CONTAINER_ID) erst zur AUSFUEHRUNGSzeit auf (nicht
  // beim Laden) und haengt dann einen Wrapper an, OHNE den Container je zu leeren.
  // Sobald zwei Script-Laeufe rennen -- was bei JEDEM Initial-Load passiert, weil
  // die Seite fuer SSR-Paritaet zuerst in `de` rendert und direkt nach der
  // Hydration auf die gespeicherte Sprache umschaltet -- haengen beide Laeufe in
  // den jeweils aktuellen Container und stapeln 2-3 Widgets. Jedes Widget ist
  // genau EIN direktes Kind-<div> des Containers, daher garantiert das Trimmen auf
  // das letzte Kind bei jeder Mutation, dass hoechstens ein Widget uebrig bleibt,
  // egal wie die async-Laeufe sich verschachteln.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const trim = () => {
      while (container.children.length > 1) {
        container.removeChild(container.firstElementChild!);
      }
    };
    trim();
    const observer = new MutationObserver(trim);
    observer.observe(container, { childList: true });
    return () => observer.disconnect();
  }, []);

  // Quandoos Widget hat eine feste native Breite von 380px. Auf schmaleren
  // Viewports (Phones) wuerde Quandoos max-width:100% das iframe stauchen, der
  // Inhalt scrollt dann intern statt umzubrechen. Stattdessen halten wir die
  // native Breite (CSS) und verkleinern den Container per transform:scale genau
  // so weit, dass er in den verfuegbaren Platz passt.
  // transform skaliert die Layout-Box nicht mit, daher setzen wir die Groesse
  // der Shell hier live auf die skalierte Groesse (sonst bleibt Leerraum oder es
  // ueberlappt). Wir messen die verfuegbare Breite an der Karte (stabil, vom
  // Viewport bestimmt), nicht an der Shell, deren Breite wir selbst setzen.
  useEffect(() => {
    const container = containerRef.current;
    const shell = shellRef.current;
    const card = shell?.parentElement;
    if (!container || !shell || !card) return;
    const NATIVE_WIDTH = 380;
    const NATIVE_HEIGHT = 550;
    // Sichtbare Fensterhoehe, die wir auf schmalen Phones mindestens halten
    // wollen. Da transform:scale die Hoehe mitverkleinert (550 * scale ~= 481px
    // bei 390px Viewport), wuerde das Fenster sonst zu kurz und das Formular
    // muesste stark intern scrollen. Wir rendern das iframe daher hoeher
    // (target / scale), sodass das verkleinerte Fenster wieder gross genug ist.
    const MOBILE_MIN_VISIBLE = 600;
    const apply = () => {
      const cs = getComputedStyle(card);
      const avail =
        card.clientWidth -
        parseFloat(cs.paddingLeft || '0') -
        parseFloat(cs.paddingRight || '0');
      const scale = Math.min(1, avail / NATIVE_WIDTH);
      const iframe = container.querySelector('iframe');
      // Nur auf echten schmalen Phones die Hoehe anheben. Auf Desktop liegt scale
      // minimal unter 1 (Karte etwas schmaler als 380px), das darf den Bump NICHT
      // ausloesen, sonst entsteht dort wieder Leerraum. 430px gilt laut Test schon
      // als "perfekt" und bleibt nativ.
      const isNarrowPhone = window.innerWidth < 430;
      // Hoehe IMMER explizit setzen. Quandoo legt seine 550px per inline-style aufs
      // iframe; ein Zuruecksetzen auf '' wuerde es auf den HTML-Default (150px)
      // kollabieren lassen. Desktop = native 550, schmale Phones = groesser.
      const frameHeight = isNarrowPhone
        ? Math.round(MOBILE_MIN_VISIBLE / scale)
        : NATIVE_HEIGHT;
      if (iframe && iframe.style.height !== `${frameHeight}px`) {
        iframe.style.height = `${frameHeight}px`;
      }
      container.style.setProperty('--quandoo-scale', String(scale));
      shell.style.width = `${NATIVE_WIDTH * scale}px`;
      shell.style.height = `${frameHeight * scale}px`;
    };
    apply();
    const ro = new ResizeObserver(apply);
    ro.observe(card);
    // Faengt das async eingefuegte iframe und etwaige Hoehen-/Schrittwechsel.
    const mo = new MutationObserver(apply);
    mo.observe(container, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'height'],
    });
    return () => {
      ro.disconnect();
      mo.disconnect();
    };
  }, []);

  // Widget fuer die aktive Sprache (neu) laden. Debounced, damit der initiale
  // de -> gespeicherte-Sprache-Wechsel (und schnelles Umschalten) in einen
  // einzigen Script-Lauf kollabiert statt einen pro Zwischensprache. Quandoo liest
  // seine Config aus dem ERSTEN script[data-merchant-id], daher das alte Tag immer
  // zuerst entfernen.
  useEffect(() => {
    const timer = window.setTimeout(() => {
      document.getElementById(SCRIPT_ID)?.remove();

      const script = document.createElement('script');
      script.id = SCRIPT_ID;
      script.src = 'https://booking-widget.quandoo.com/index.js';
      script.async = true;
      script.dataset.merchantId = SITE.quandooMerchantId;
      script.dataset.theme = 'light';
      script.dataset.primaryColor = '202020';
      script.dataset.locale = localeMap[lang];
      document.body.appendChild(script);
    }, 80);

    return () => {
      window.clearTimeout(timer);
      document.getElementById(SCRIPT_ID)?.remove();
    };
  }, [lang]);

  return (
    <div className="quandoo-widget-shell" ref={shellRef}>
      <div id={CONTAINER_ID} ref={containerRef} />
      <noscript>
        <a href="https://www.quandoo.de/" target="_blank" rel="noreferrer">
          Reservierung über Quandoo öffnen
        </a>
      </noscript>
    </div>
  );
}
