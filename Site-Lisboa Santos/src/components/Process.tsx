import React from 'react';
import { Search, Settings, TrendingUp, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const steps = [
  {
    icon: <Search size={22} strokeWidth={2} />,
    number: "01",
    title: "Diagnóstico gratuito",
    description: "Analisamos sua empresa, o regime tributário atual e identificamos onde você está pagando mais do que deveria."
  },
  {
    icon: <Settings size={22} strokeWidth={2} />,
    number: "02",
    title: "Organização e estruturação",
    description: "Regularizamos a contabilidade, adequamos obrigações e montamos a estrutura fiscal mais eficiente para o seu negócio."
  },
  {
    icon: <TrendingUp size={22} strokeWidth={2} />,
    number: "03",
    title: "Acompanhamento contínuo",
    description: "Mês a mês, você tem suporte direto dos sócios para tomar decisões com dados reais e segurança fiscal."
  }
];

export default function Process() {
  return (
    <section id="processo" className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block text-accent font-bold uppercase tracking-widest text-xs mb-4">Como trabalhamos</span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight mb-5">
            Do diagnóstico ao resultado
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            Simples, claro e sem enrolação.<br className="hidden sm:block" />
            Você sabe exatamente o que acontece em cada etapa.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector Line — desktop only */}
          <div className="hidden lg:block absolute top-16 left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-border to-transparent z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.55 }}
                className="group"
              >
                <div className="bg-background rounded-3xl p-8 border border-border hover:border-accent/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 h-full">
                  {/* Number + Icon */}
                  <div className="flex items-center gap-4 mb-7">
                    <div className="w-13 h-13 w-12 h-12 bg-accent text-white rounded-2xl flex items-center justify-center shadow-lg shadow-accent/25 group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                    <span className="text-4xl font-bold text-border group-hover:text-accent/30 transition-colors duration-300 select-none">{step.number}</span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-primary">{step.title}</h3>
                    <p className="text-text-secondary leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 text-accent font-bold hover:gap-4 transition-all"
          >
            Quero começar com um diagnóstico gratuito <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
