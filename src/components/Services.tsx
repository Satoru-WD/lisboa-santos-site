import React from 'react';
import { TrendingDown, LayoutGrid, BarChart3, Users2, FilePlus2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    icon: <TrendingDown size={28} strokeWidth={1.75} />,
    label: "Tributário",
    title: "Pague menos impostos, na legalidade",
    description: "Escolhemos o regime tributário certo para o seu negócio e reduzimos o que você paga ao governo — sem nenhum risco."
  },
  {
    icon: <LayoutGrid size={28} strokeWidth={1.75} />,
    label: "Contábil",
    title: "Escrituração contábil sem erros",
    description: "Sua empresa em dia: balancetes, demonstrações e obrigações acessórias entregues no prazo, sempre."
  },
  {
    icon: <BarChart3 size={28} strokeWidth={1.75} />,
    label: "Financeiro",
    title: "Números claros para decidir melhor",
    description: "Relatórios que você entende de verdade — DRE, fluxo de caixa e indicadores que ajudam você a crescer."
  },
  {
    icon: <Users2 size={28} strokeWidth={1.75} />,
    label: "RH",
    title: "Folha de pagamento e DP completo",
    description: "Admissão, demissão, férias, holerites e encargos. Cuidamos de tudo para você focar no seu negócio."
  },
  {
    icon: <FilePlus2 size={28} strokeWidth={1.75} />,
    label: "Abertura",
    title: "Abra ou regularize sua empresa corretamente",
    description: "Do CNPJ ao enquadramento tributário, orientamos cada passo para você começar do jeito certo."
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <span className="inline-block text-accent font-bold uppercase tracking-widest text-xs mb-4">
            O que fazemos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-primary mb-6">
            Contabilidade que resolve.<br />
            <span className="text-text-secondary font-normal text-3xl md:text-4xl">Do tributário ao financeiro.</span>
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed max-w-xl">
            Cada serviço com atenção direta dos sócios.<br className="hidden sm:block" />
            Sem estagiários. Sem atendentes no meio do caminho.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6, boxShadow: '0 24px 48px rgba(0,0,0,0.08)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="p-8 bg-white rounded-3xl border border-border hover:border-accent/30 transition-all group cursor-default"
            >
              {/* Icon + Label */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent/8 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <span className="text-xs font-bold text-accent uppercase tracking-widest">{service.label}</span>
              </div>

              <h3 className="text-[1.15rem] font-bold text-primary mb-3 leading-snug">{service.title}</h3>
              <p className="text-text-secondary leading-relaxed text-[0.95rem]">{service.description}</p>
            </motion.div>
          ))}

          {/* Final card: CTA */}
          <motion.a
            href="#contato"
            whileHover={{ y: -6, boxShadow: '0 24px 48px rgba(0,0,0,0.08)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="p-8 bg-[#DCFCE7]/30 rounded-3xl border border-[#22C55E]/20 flex flex-col justify-between group cursor-pointer hover:border-[#15803D]/40 transition-all"
          >
            <div className="space-y-4">
              <p className="text-[#15803D] text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#15803D] animate-pulse"></span>
                Precisa de algo específico?
              </p>
              <h3 className="text-2xl font-bold text-primary leading-snug">Fale com a gente antes de decidir.</h3>
              <p className="text-text-secondary text-sm leading-relaxed">Fazemos um diagnóstico gratuito e mostramos o melhor caminho para o seu negócio.</p>
            </div>
            <div className="mt-8 inline-flex items-center gap-2 text-[#15803D] font-bold group-hover:text-[#166534] transition-colors">
              Solicitar diagnóstico da minha empresa
              <ArrowRight size={18} aria-hidden="true" className="group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
