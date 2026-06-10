"use client";

import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  /** Praefix fuer die ARIA-IDs, damit mehrere Accordions auf einer Seite eindeutig bleiben. */
  idBase?: string;
}

/**
 * Editorial-Accordion fuer die FAQ-Sektionen der Unterseiten.
 *
 * Die Antworten bleiben IMMER im DOM (Collapse rein per CSS via
 * grid-template-rows), nicht conditional gerendert. Damit deckt sich der
 * sichtbare Text weiterhin exakt mit dem faqJsonLd-Schema (Google-Richtlinie).
 */
export function FaqAccordion({ items, idBase = 'faq' }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="faq-accordion">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const triggerId = `${idBase}-trigger-${i}`;
        const panelId = `${idBase}-panel-${i}`;
        return (
          <div className="faq-item" data-open={isOpen} key={item.question}>
            <h3 className="faq-q">
              <button
                id={triggerId}
                type="button"
                className="faq-trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                <span className="faq-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <span className="faq-q-text">{item.question}</span>
                <span className="faq-icon" aria-hidden="true" />
              </button>
            </h3>
            <div id={panelId} className="faq-panel" role="region" aria-labelledby={triggerId}>
              <div className="faq-panel-inner">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
