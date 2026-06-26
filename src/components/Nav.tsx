import { useState, useEffect } from "react";
import { Sparkles, ArrowRight, Menu, X } from "lucide-react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div
        className={`mx-auto max-w-7xl px-4 py-3 sm:px-6 transition-all duration-300 ${
          scrolled ? "mt-2" : "mt-4"
        }`}
      >
        <div className="flex items-center justify-between gap-4 rounded-full glass-premium px-6 py-2.5 shadow-md">
          {/* Logo */}
          <a href="#top" className="flex min-w-0 items-center gap-2.5 group">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[var(--primary)] text-white group-hover:scale-105 transition-transform duration-300">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="truncate text-sm font-semibold tracking-tight text-[var(--ink)]">
              Reinaldo × <span className="text-gradient-gold">Ademicon</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden items-center gap-8 text-sm font-medium text-[var(--ink-soft)] md:flex">
            <a href="#beneficios" className="transition-all hover:text-[var(--primary)] hover:translate-y-[-1px]">
              Benefícios
            </a>
            <a href="#como-funciona" className="transition-all hover:text-[var(--primary)] hover:translate-y-[-1px]">
              Como funciona
            </a>
            <a href="#atleta" className="transition-all hover:text-[var(--primary)] hover:translate-y-[-1px]">
              Parceria
            </a>
            <a href="#sobre-unidade" className="transition-all hover:text-[var(--primary)] hover:translate-y-[-1px]">
              Sobre a Unidade
            </a>
            <a href="#galeria" className="transition-all hover:text-[var(--primary)] hover:translate-y-[-1px]">
              O atleta
            </a>
            <a href="#faq" className="transition-all hover:text-[var(--primary)] hover:translate-y-[-1px]">
              FAQ
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <a
              href="#lead-form"
              className="btn-primary text-xs sm:text-sm !py-2.5 !px-5 hidden sm:inline-flex shadow-sm"
            >
              Simular agora <ArrowRight className="h-4 w-4" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="grid h-9 w-9 place-items-center rounded-full border border-black/5 text-[var(--ink)] hover:bg-black/5 md:hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-md md:hidden">
          <div className="absolute right-4 top-20 w-64 rounded-3xl border border-black/5 bg-[var(--card)] p-6 shadow-2xl animate-fade-up">
            <nav className="flex flex-col gap-5 text-base font-semibold text-[var(--ink-soft)]">
              <a
                href="#beneficios"
                onClick={() => setIsOpen(false)}
                className="pb-2 border-b border-black/5 hover:text-[var(--primary)]"
              >
                Benefícios
              </a>
              <a
                href="#como-funciona"
                onClick={() => setIsOpen(false)}
                className="pb-2 border-b border-black/5 hover:text-[var(--primary)]"
              >
                Como funciona
              </a>
              <a
                href="#atleta"
                onClick={() => setIsOpen(false)}
                className="pb-2 border-b border-black/5 hover:text-[var(--primary)]"
              >
                Parceria
              </a>
              <a
                href="#sobre-unidade"
                onClick={() => setIsOpen(false)}
                className="pb-2 border-b border-black/5 hover:text-[var(--primary)]"
              >
                Sobre a Unidade
              </a>
              <a
                href="#galeria"
                onClick={() => setIsOpen(false)}
                className="pb-2 border-b border-black/5 hover:text-[var(--primary)]"
              >
                O atleta
              </a>
              <a
                href="#faq"
                onClick={() => setIsOpen(false)}
                className="pb-2 border-b border-black/5 hover:text-[var(--primary)]"
              >
                FAQ
              </a>
              <a
                href="#lead-form"
                onClick={() => setIsOpen(false)}
                className="btn-primary text-sm mt-2 w-full text-center"
              >
                Simular Agora
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
