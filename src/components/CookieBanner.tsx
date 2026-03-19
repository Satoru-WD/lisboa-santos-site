import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const COOKIE_KEY = 'ls_cookie_consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const acceptRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (!stored) {
      // Small delay so the banner doesn't flash immediately on load
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    setVisible(false);
  };

  const handleDismiss = () => {
    localStorage.setItem(COOKIE_KEY, 'dismissed');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-modal="false"
          aria-label="Aviso de cookies"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-sm z-50"
        >
          <div className="bg-white border border-border rounded-2xl shadow-2xl shadow-primary/8 p-5 sm:p-6">
            {/* Header row */}
            <div className="flex items-start justify-between gap-4 mb-3">
              <p className="text-sm font-bold text-primary leading-snug">🍪 Uso de cookies</p>
              <button
                onClick={handleDismiss}
                aria-label="Fechar aviso de cookies"
                className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full text-text-secondary hover:bg-slate-100 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors"
              >
                <X size={15} strokeWidth={2.5} />
              </button>
            </div>

            {/* Body text */}
            <p className="text-[0.82rem] text-text-secondary leading-relaxed mb-4">
              Este site utiliza cookies para melhorar a navegação e entender o uso da página.
            </p>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                ref={acceptRef}
                onClick={handleAccept}
                className="flex-1 py-2.5 bg-accent hover:bg-accent/90 text-white text-sm font-bold rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 shadow-lg shadow-accent/20"
              >
                Aceitar
              </button>
              <a
                href="#"
                className="text-xs text-text-secondary hover:text-primary underline underline-offset-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                aria-label="Saiba mais sobre nossa política de privacidade"
              >
                Saiba mais
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
