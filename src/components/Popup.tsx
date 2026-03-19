import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import LeadForm from './LeadForm';

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const hasClosed = sessionStorage.getItem('popup-closed');
    if (hasClosed) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 20000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('popup-closed', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-1 text-text-secondary hover:text-primary transition-colors"
            >
              <X size={20} />
            </button>

            <div className="p-8">
              {!showForm ? (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl leading-tight">
                      Quer entender como sua empresa pode ganhar mais clareza e organização?
                    </h3>
                    <p className="text-text-secondary">
                      Receba um diagnóstico inicial e veja onde sua estrutura contábil pode evoluir.
                    </p>
                  </div>
                  <button
                    onClick={() => setShowForm(true)}
                    className="w-full py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-xl transition-all shadow-lg shadow-accent/20"
                  >
                    Quero meu diagnóstico
                  </button>
                </div>
              ) : (
                <LeadForm onSuccess={handleClose} />
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
