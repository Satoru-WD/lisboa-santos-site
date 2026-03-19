import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Serviços', href: '#servicos' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Processo', href: '#processo' },
    { name: 'Sobre', href: '#sobre' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-accent font-bold text-xl">
            LS
          </div>
          <span className={`text-xl font-bold tracking-tight hidden sm:block transition-colors ${isScrolled ? 'text-primary' : 'text-primary'}`}>
            Lisboa Santos
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium transition-colors ${isScrolled ? 'text-text-secondary hover:text-primary' : 'text-text-secondary hover:text-primary'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contato"
            className={`px-5 py-2.5 text-sm font-semibold rounded-full transition-all shadow-md ${
              isScrolled ? 'bg-primary text-white hover:bg-primary/90' : 'bg-primary text-white hover:bg-primary/90'
            }`}
          >
            Falar com especialista
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 transition-colors ${isScrolled ? 'text-primary' : 'text-primary'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-border p-6 space-y-4 shadow-xl">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-lg font-medium text-text-secondary"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contato"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full py-4 bg-primary text-white text-center font-semibold rounded-xl"
          >
            Falar com especialista
          </a>
        </div>
      )}
    </header>
  );
}
