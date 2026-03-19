import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-accent font-bold">
                LS
              </div>
              <span className="text-lg font-bold tracking-tight text-primary">
                Lisboa Santos
              </span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              Contabilidade estratégica para empresas que buscam segurança, organização e crescimento sustentável.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li><a href="#servicos" className="hover:text-accent transition-colors">Serviços</a></li>
              <li><a href="#diferenciais" className="hover:text-accent transition-colors">Diferenciais</a></li>
              <li><a href="#processo" className="hover:text-accent transition-colors">Processo</a></li>
              <li><a href="#sobre" className="hover:text-accent transition-colors">Sobre Nós</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-6">Contato</h4>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li>Campinas, SP</li>
              <li>contato@lisboasantos.com.br</li>
              <li>(19) 99999-9999</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-6">Localização</h4>
            <p className="text-sm text-text-secondary leading-relaxed">
              Atendemos empresas em toda região de Campinas com suporte presencial e digital.
            </p>
          </div>
        </div>

        <div className="pt-10 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-widest text-text-secondary font-medium">
          <p>© {currentYear} Lisboa Santos Contabilidade. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
