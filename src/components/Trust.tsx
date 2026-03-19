import React from 'react';
import { Calendar, Users, CheckCircle2, Award } from 'lucide-react';
import { motion } from 'motion/react';

const stats = [
  {
    icon: <Calendar strokeWidth={1.75} size={22} />,
    value: "+14 anos",
    label: "de mercado em Campinas",
    description: "Solidez comprovada em diferentes cenários econômicos"
  },
  {
    icon: <Users strokeWidth={1.75} size={22} />,
    value: "+200",
    label: "empresas atendidas",
    description: "De MEIs a médias empresas em crescimento"
  },
  {
    icon: <CheckCircle2 strokeWidth={1.75} size={22} />,
    value: "Direto",
    label: "com os sócios",
    description: "Seu contato é sempre com quem tem autoridade para decidir"
  },
  {
    icon: <Award strokeWidth={1.75} size={22} />,
    value: "CRC",
    label: "registrado",
    description: "Escritório regularizado e em conformidade com o conselho"
  }
];

export default function Trust() {
  return (
    <section className="py-16 lg:py-20 bg-white border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-start gap-3 group"
            >
              <div className="p-2.5 bg-accent/8 rounded-xl text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                {stat.icon}
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm font-semibold text-primary/70">{stat.label}</p>
                <p className="text-xs text-text-secondary mt-1 leading-relaxed">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
