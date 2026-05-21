'use client';

import { useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface PdfViewerProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
}

export default function PdfViewer({
  isOpen,
  onClose,
  pdfUrl,
  title,
}: PdfViewerProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-charcoal/80 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative z-10 flex w-full max-w-4xl flex-col overflow-hidden rounded-sm bg-cream shadow-2xl"
            style={{ maxHeight: '90vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-charcoal/10 px-6 py-4">
              <h2 className="font-playfair text-lg font-semibold tracking-wide text-charcoal">
                {title}
              </h2>
              <button
                type="button"
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center text-charcoal/50 transition-colors duration-200 hover:text-charcoal"
                aria-label="Close"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <line x1="4" y1="4" x2="20" y2="20" />
                  <line x1="20" y1="4" x2="4" y2="20" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-hidden">
              <iframe
                src={pdfUrl}
                className="h-[70vh] w-full border-0"
                title={title}
              />
            </div>

            <div className="flex items-center justify-end border-t border-charcoal/10 px-6 py-4">
              <a
                href={pdfUrl}
                download
                className="inline-flex items-center gap-2 rounded-sm bg-terracotta px-6 py-2.5 font-cormorant text-sm font-medium tracking-wider text-cream uppercase transition-colors duration-200 hover:bg-terracotta/90"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Herunterladen
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
