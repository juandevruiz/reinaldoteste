import { Phone, Mail, MessageCircle, MapPin, Instagram, Sparkles } from "lucide-react";
import ademiconLogo from "@/assets/ademicon.svg";

export default function Footer() {
  return (
    <footer className="relative bg-black px-6 pb-12 pt-24 text-white border-t border-white/10">
      {/* Decorative glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-[5%] top-[10%] h-[30vh] w-[30vh] rounded-full bg-[radial-gradient(circle,rgba(180,30,30,0.05)_0%,transparent_60%)]" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr] lg:gap-8">
        
        {/* Branding & Brand pitch */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <img src={ademiconLogo} alt="Ademicon" className="h-9 brightness-0 invert" />
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/60">
            Consórcio inteligente regulado pelo Banco Central. Construa seu patrimônio e realize conquistas sem juros, em parceria com Reinaldo e a Ademicon Guarulhos. Atendimento comercial realizado pela Gestão Bruno Sousa.
          </p>
          <div className="flex gap-3">
            {[
              { icon: Instagram, href: "#", label: "Instagram" },
              { icon: MessageCircle, href: "https://wa.me/5511970506840?text=Ol%C3%A1!%20Vim%20pelo%20site%20do%20Reinaldo%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20cons%C3%B3rcios%20da%20Ademicon%20Guarulhos.", label: "WhatsApp" },
              { icon: Mail, href: "mailto:contato@ademicon.com.br", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/80 transition-all duration-300 hover:border-[var(--gold)] hover:text-[var(--gold-soft)] hover:bg-white/5 hover:scale-105"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Contact Links */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-[var(--gold-soft)] flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5" /> Fale Conosco
          </h4>
          <ul className="mt-6 space-y-4 text-sm text-white/70">
            <li className="flex items-start gap-2.5">
              <Phone className="h-4.5 w-4.5 text-[var(--gold)] shrink-0 mt-0.5" />
              <span>+55 11 97050-6840 (Bruno Sousa)</span>
            </li>
            <li className="flex items-start gap-2.5">
              <MessageCircle className="h-4.5 w-4.5 text-[var(--gold)] shrink-0 mt-0.5" />
              <a
                href="https://wa.me/5511970506840?text=Ol%C3%A1!%20Vim%20pelo%20site%20do%20Reinaldo%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20cons%C3%B3rcios%20da%20Ademicon%20Guarulhos."
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                WhatsApp (Gestão Bruno Sousa)
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="h-4.5 w-4.5 text-[var(--gold)] shrink-0 mt-0.5" />
              <a href="mailto:contato@ademicon.com.br" className="hover:text-white transition-colors">
                contato@ademicon.com.br
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="h-4.5 w-4.5 text-[var(--gold)] shrink-0 mt-0.5" />
              <span>Rua Santo Antônio, 462 · 6º Andar (Cobertura) · Guarulhos – SP · CEP 07271-000</span>
            </li>
          </ul>
        </div>

        {/* Quick navigation */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-[var(--gold-soft)]">
            Navegação
          </h4>
          <ul className="mt-6 space-y-3.5 text-sm text-white/70">
            <li>
              <a href="#beneficios" className="hover:text-white hover:underline transition-all">
                Benefícios
              </a>
            </li>
            <li>
              <a href="#como-funciona" className="hover:text-white hover:underline transition-all">
                Como Funciona
              </a>
            </li>
            <li>
              <a href="#atleta" className="hover:text-white hover:underline transition-all">
                O Atleta
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-white hover:underline transition-all">
                Perguntas Frequentes
              </a>
            </li>
          </ul>
        </div>

        {/* Available Modalities list */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-[var(--gold-soft)]">
            Modalidades
          </h4>
          <ul className="mt-6 space-y-3.5 text-sm text-white/70">
            <li className="hover:text-white transition-colors">Consórcio Imobiliário</li>
            <li className="hover:text-white transition-colors">Consórcio de Automóveis</li>
            <li className="hover:text-white transition-colors">Consórcio de Veículos Pesados</li>
            <li className="hover:text-white transition-colors">Consórcio de Serviços</li>
          </ul>
        </div>

      </div>

      {/* Copyright & Regulatory */}
      <div className="mx-auto mt-16 max-w-7xl border-t border-white/10 pt-8 text-[11px] text-white/40 leading-relaxed">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ademicon Administradora de Consórcios. Todos os direitos reservados.</p>
          <p className="max-w-md sm:text-right">
            Ademicon é regulada e fiscalizada pelo Banco Central do Brasil. O consórcio é regulamentado pela Lei nº 11.795/08.
          </p>
        </div>
      </div>
    </footer>
  );
}
