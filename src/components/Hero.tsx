import React from 'react';
import { ArrowRight, CheckCircle2, Star } from 'lucide-react';
import { motion } from 'motion/react';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0" aria-hidden="true" focusable="false">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Hero() {
  return (
    <section className="relative bg-background overflow-hidden">

      {/* ===== DESKTOP LAYOUT ===== */}
      <div className="hidden lg:flex min-h-screen items-end relative">
        {/* Ambient glow on right side */}
        <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none -z-10">
          <div className="absolute inset-0 bg-gradient-to-bl from-accent/6 via-accent/3 to-transparent" />
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-accent/12 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/6 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-10 xl:px-16 grid grid-cols-2 items-end gap-4 w-full">

          {/* LEFT: Text content */}
          <motion.div
            initial={{ opacity: 0, y: 44 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-start text-left space-y-8 pb-24 pt-48"
          >

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-xs font-bold tracking-widest uppercase border border-accent/20"
            >
              <CheckCircle2 size={14} />
              Contabilidade que gera resultado · Campinas
            </motion.div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-[3.2rem] xl:text-[3.8rem] font-bold leading-[1.1] text-primary tracking-tighter max-w-[520px]">
                Pague menos impostos.<br />
                Organize sua empresa.<br />
                <span className="text-accent">Cresça com clareza.</span>
              </h1>
              <p className="text-lg xl:text-xl text-text-secondary leading-relaxed max-w-[420px] pt-1">
                Atendimento direto com os sócios.
              </p>
            </div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <div className="flex items-center gap-0.5">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={15} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-text-secondary font-medium">
                Mais de <strong className="text-primary">200 empresas</strong> em Campinas confiam na Lisboa Santos
              </span>
            </motion.div>

            {/* CTAs */}
            <div className="flex items-center gap-4 pt-2">
              <motion.a
                href="#contato"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-white font-bold rounded-full shadow-xl shadow-accent/25 hover:bg-accent/90 transition-all text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                <WhatsAppIcon />
                Falar com especialista
                <ArrowRight size={18} aria-hidden="true" className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <a
                href="#diagnostico"
                className="text-sm font-semibold text-text-secondary hover:text-primary transition-colors underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
              >
                Solicitar diagnóstico gratuito
              </a>
            </div>
          </motion.div>

          {/* RIGHT: Partners image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-end justify-center h-full pt-32"
          >
            {/* Soft glow behind image */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] bg-accent/15 rounded-full blur-[90px] -z-10" />
            
            <img
              src="/partners.png"
              alt="Lisboa e Santos — Sócios Fundadores da Lisboa Santos Contabilidade"
              className="relative z-10 w-auto h-auto max-h-[90vh] max-w-full object-contain object-bottom"
              style={{ filter: 'drop-shadow(0 30px 50px rgba(0,0,0,0.13))' }}
            />
          </motion.div>
        </div>
      </div>

      {/* ===== MOBILE LAYOUT ===== */}
      <div className="flex flex-col lg:hidden min-h-screen">

        {/* Text block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center px-6 pt-32 pb-6 space-y-6"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 text-accent rounded-full text-[11px] font-bold tracking-widest uppercase border border-accent/20">
            <CheckCircle2 size={12} />
            Contabilidade que gera resultado
          </div>

          {/* Headline */}
          <h1 className="text-[1.95rem] leading-[1.25] font-bold text-primary tracking-tight">
            Pague menos impostos.<br />
            Organize sua empresa.<br />
            <span className="text-accent">Cresça com clareza.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base text-text-secondary leading-relaxed max-w-sm">
            Atendimento direto com os sócios.
          </p>

          {/* Social proof */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {[1,2,3,4,5].map(i => <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />)}
            </div>
            <span className="text-xs text-text-secondary font-medium">+200 empresas em Campinas</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col w-full max-w-xs gap-3 pt-2">
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-accent text-white font-bold rounded-full shadow-lg shadow-accent/25 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              <WhatsAppIcon />
              Falar com especialista
            </a>
            <a
              href="#diagnostico"
              className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-white text-primary font-semibold rounded-full border-2 border-border text-sm hover:bg-slate-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Solicitar diagnóstico gratuito
            </a>
          </div>
        </motion.div>

        {/* Image block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="relative flex-1 flex items-end justify-center mt-4 min-h-[340px]"
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[320px] h-[320px] bg-accent/20 rounded-full blur-[70px] -z-10" />
          <img
            src="/partners.png"
            alt="Lisboa e Santos — Sócios Fundadores"
            className="relative z-10 w-full max-w-[360px] h-auto object-contain object-bottom"
            style={{ filter: 'drop-shadow(0 20px 35px rgba(0,0,0,0.10))' }}
          />
        </motion.div>
      </div>
    </section>
  );
}
