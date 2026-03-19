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
    
    // Simulate API call
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
        className="text-center py-8 space-y-4"
      >
        <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-xl font-semibold text-primary">Perfeito. Em breve entraremos em contato.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {!compact && (
        <p className="text-sm text-text-secondary mb-4">
          Preencha seus dados e entraremos em contato para entender sua necessidade.
        </p>
      )}
      
      <div className="space-y-2">
        <label htmlFor="nome" className="text-sm font-medium text-primary">Nome</label>
        <input
          id="nome"
          type="text"
          required
          placeholder="Seu nome completo"
          className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
          value={formData.nome}
          onChange={e => setFormData({ ...formData, nome: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="whatsapp" className="text-sm font-medium text-primary">WhatsApp</label>
        <input
          id="whatsapp"
          type="tel"
          required
          placeholder="(00) 00000-0000"
          className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
          value={formData.whatsapp}
          onChange={e => setFormData({ ...formData, whatsapp: e.target.value })}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-xl transition-all shadow-lg shadow-accent/20 disabled:opacity-70"
      >
        {status === 'submitting' ? 'Enviando...' : 'Receber diagnóstico'}
      </button>

      <p className="text-[10px] text-center text-text-secondary uppercase tracking-wider">
        Seus dados serão usados apenas para contato sobre seu atendimento.
      </p>
    </form>
  );
}
