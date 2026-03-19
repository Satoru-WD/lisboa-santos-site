import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="bg-white border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2" aria-label="Lisboa Santos Contabilidade">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-accent font-bold" aria-hidden="true">
                LS
              </div>
              <span className="text-lg font-bold tracking-tight text-primary">
                Lisboa Santos
              </span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              Contabilidade para empresas que buscam organização, menos impostos e crescimento sustentável.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Links rápidos">
            <h2 className="font-bold text-primary mb-6 text-sm">Links Rápidos</h2>
            <ul className="space-y-4 text-sm text-text-secondary" role="list">
              <li><a href="#servicos" className="hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded">Serviços</a></li>
              <li><a href="#diferenciais" className="hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded">Diferenciais</a></li>
              <li><a href="#processo" className="hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded">Processo</a></li>
              <li><a href="#sobre" className="hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded">Sobre Nós</a></li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="font-bold text-primary mb-6 text-sm">Contato</h2>
            <ul className="space-y-4 text-sm text-text-secondary" role="list">
              <li><address className="not-italic">Campinas, SP</address></li>
              <li>
                <a href="mailto:contato@lisboasantos.com.br" className="hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded">
                  contato@lisboasantos.com.br
                </a>
              </li>
              <li>
                <a href="tel:+5519999999999" className="hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded">
                  (19) 99999-9999
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h2 className="font-bold text-primary mb-6 text-sm">Atendimento</h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              Atendemos empresas em toda região de Campinas, com suporte presencial e digital.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-10 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-widest text-text-secondary font-medium">
          <p>© {currentYear} Lisboa Santos Contabilidade. Todos os direitos reservados.</p>
          <nav aria-label="Links legais" className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded">Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded">Termos</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
