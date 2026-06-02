"use client";

import { useEffect } from 'react';
import { SITE } from '@/lib/site';

export function QuandooWidget() {
  useEffect(() => {
    const scriptId = 'quandoo-booking-widget-script';
    document.getElementById(scriptId)?.remove();

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = 'https://booking-widget.quandoo.com/index.js';
    script.async = true;
    script.dataset.merchantId = SITE.quandooMerchantId;
    script.dataset.theme = 'light';
    script.dataset.primaryColor = '202020';
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div className="quandoo-widget-shell">
      <div id="quandoo-booking-widget" />
      <noscript>
        <a href="https://www.quandoo.de/" target="_blank" rel="noreferrer">
          Reservierung über Quandoo öffnen
        </a>
      </noscript>
    </div>
  );
}
