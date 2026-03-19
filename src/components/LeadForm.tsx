import React, { useState } from 'react';
import { motion } from 'motion/react';

interface LeadFormProps {
  onSuccess?: () => void;
  compact?: boolean;
}

export default function LeadForm({ onSuccess, compact = false }: LeadFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({ nome: '', whatsapp: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setStatus('success');
    if (onSuccess) {
      setTimeout(onSuccess, 2000);
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        role="status"
        aria-live="polite"
        className="text-center py-8 space-y-4"
      >
        <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto" aria-hidden="true">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-xl font-semibold text-primary">Perfeito. Em breve entraremos em contato.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate aria-label="Formulário de diagnóstico gratuito">
      {!compact && (
        <p id="form-description" className="text-sm text-text-secondary mb-4">
          Preencha seus dados e entraremos em contato para entender sua necessidade.
        </p>
      )}
      
      <div className="space-y-2">
        <label htmlFor="nome" className="text-sm font-semibold text-primary">
          Nome <span aria-hidden="true" className="text-accent">*</span>
          <span className="sr-only">(obrigatório)</span>
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          required
          autoComplete="name"
          placeholder="Seu nome completo"
          aria-required="true"
          aria-describedby={!compact ? "form-description" : undefined}
          className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:border-accent transition-all text-primary placeholder:text-text-secondary/60 min-h-[48px]"
          value={formData.nome}
          onChange={e => setFormData({ ...formData, nome: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="whatsapp" className="text-sm font-semibold text-primary">
          WhatsApp <span aria-hidden="true" className="text-accent">*</span>
          <span className="sr-only">(obrigatório)</span>
        </label>
        <input
          id="whatsapp"
          name="whatsapp"
          type="tel"
          required
          autoComplete="tel"
          placeholder="(19) 99999-9999"
          aria-required="true"
          aria-label="Número do WhatsApp com DDD"
          className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:border-accent transition-all text-primary placeholder:text-text-secondary/60 min-h-[48px]"
          value={formData.whatsapp}
          onChange={e => setFormData({ ...formData, whatsapp: e.target.value })}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        aria-disabled={status === 'submitting'}
        aria-busy={status === 'submitting'}
        className="w-full py-4 min-h-[52px] bg-accent hover:bg-accent/90 text-white font-bold rounded-full transition-all shadow-lg shadow-accent/20 disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
      >
        {status === 'submitting' ? 'Enviando...' : 'Receber diagnóstico gratuito'}
      </button>

      <p className="text-[10px] text-center text-text-secondary uppercase tracking-wider" aria-live="polite">
        Seus dados serão usados apenas para contato sobre seu atendimento.
      </p>
    </form>
  );
}
