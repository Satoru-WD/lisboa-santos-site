import React from 'react';
import { CheckCircle2, ShieldCheck, Zap, Target, Clock } from 'lucide-react';
import { motion } from 'motion/react';

const differentials = [
  {
    icon: <ShieldCheck size={20} strokeWidth={2} />,
    title: "Segurança fiscal real",
    description: "Sua empresa em conformidade com o Fisco. Sem surpresas, sem autuações."
  },
  {
    icon: <Clock size={20} strokeWidth={2} />,
    title: "Resposta em até 24h",
    description: "Dúvidas respondidas rapidamente — sem fila de espera nem sistema de tickets."
  },
  {
    icon: <Zap size={20} strokeWidth={2} />,
    title: "Atendimento direto com os sócios",
    description: "Você fala direto com quem conhece o seu negócio. Sempre."
  },
  {
    icon: <Target size={20} strokeWidth={2} />,
    title: "Foco no crescimento do cliente",
    description: "Não apenas registramos o passado — ajudamos você a planejar o futuro."
  }
];

const stats = [
  { value: "14+", label: "anos de mercado" },
  { value: "200+", label: "empresas atendidas" },
  { value: "100%", label: "foco no cliente" },
];

export default function Differential() {
  return (
    <section id="diferenciais" className="py-24 lg:py-32 bg-primary text-white overflow-hidden relative">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] -ml-48 -mb-48 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Text + Differentials */}
          <div className="space-y-10">
            <div className="space-y-5">
              <span className="text-accent font-bold uppercase tracking-widest text-xs">Por que a Lisboa Santos?</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Contabilidade que você entende.<br/>
                <span className="text-white/60 font-normal text-3xl md:text-4xl">E que realmente funciona.</span>
              </h2>
              <p className="text-lg text-white/65 leading-relaxed max-w-lg">
                14 anos atendendo empresas em Campinas.<br className="hidden sm:block" />
                O empresário não quer relatórios — quer respostas claras e suporte de verdade.
              </p>
            </div>

            <div className="space-y-5">
              {differentials.map((d, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-9 h-9 bg-accent/15 text-accent rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    {d.icon}
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">{d.title}</p>
                    <p className="text-white/55 text-sm mt-0.5 leading-relaxed">{d.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: About card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 md:p-12 rounded-3xl space-y-10"
          >
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 pb-10 border-b border-white/10">
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <p className="text-3xl font-bold text-white">{s.value}</p>
                  <p className="text-white/50 text-xs mt-1 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Sobre a Lisboa Santos</h3>
              <p className="text-white/65 leading-relaxed text-sm">
                Somos um escritório contábil com <strong className="text-white">mais de 14 anos de história</strong> em Campinas. Atendemos desde MEIs e pequenas empresas até negócios em expansão — sempre com atendimento direto e personalizado.
              </p>
              <p className="text-white/65 leading-relaxed text-sm">
                Nossa missão é simples: <strong className="text-accent">fazer sua empresa pagar menos imposto</strong>, estar em dia com o Fisco e ter clareza para crescer.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <CheckCircle2 size={18} className="text-accent flex-shrink-0" />
              <span className="text-white/70 text-sm">Escritório registrado no CRC — Conselho Regional de Contabilidade</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
