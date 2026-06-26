import { useEffect, useRef } from "react";
import { Trophy } from "lucide-react";
import reinaldoAction from "../../img/Em campo, um lance pode virar gol. No consórcio, ele também pode aproximar você da conquista.Com.jpg";

export default function AthleteSection() {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;
      const rect = imageRef.current.getBoundingClientRect();
      // Calculate scroll offset factor
      const offset = Math.max(
        -50,
        Math.min(50, (window.innerHeight / 2 - rect.top - rect.height / 2) * 0.06)
      );
      imageRef.current.style.transform = `translateY(${offset}px) scale(1.05)`;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="atleta" className="relative overflow-hidden bg-[var(--background)] px-6 py-28 border-b border-black/5">
      {/* Decorative backdrop glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-20 top-20 h-[50vh] w-[50vh] rounded-full bg-[radial-gradient(circle,oklch(0.55_0.22_25/0.05)_0%,transparent_60%)]" />
        <div className="absolute right-0 bottom-0 h-[45vh] w-[45vh] rounded-full bg-[radial-gradient(circle,oklch(0.85_0.12_85/0.15)_0%,transparent_60%)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        {/* Left Side: Parallax Image Container */}
        <div className="reveal relative">
          <div className="relative overflow-hidden rounded-[32px] border border-black/5 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10 pointer-events-none" />
            <img
              ref={imageRef}
              src={reinaldoAction}
              alt="Reinaldo da Silva no estádio - Campanha Ademicon"
              className="h-[65vh] min-h-[480px] w-full object-cover transition-transform duration-300 ease-out will-change-transform"
            />
            {/* Visual Callout Overlay */}
            <div className="absolute bottom-8 left-8 right-8 z-20">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--gold-soft)] bg-black/60 px-3 py-1 rounded-full border border-white/10 backdrop-blur">
                Campanha Oficial
              </span>
              <h3 className="text-2xl font-black text-white mt-3 leading-tight">
                No futebol ou na vida, o lance certo muda tudo.
              </h3>
            </div>
          </div>
        </div>

        {/* Right Side: Ambassador Description & Stats */}
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--primary)] shadow-sm">
            <Trophy className="h-3.5 w-3.5 text-[var(--primary)]" /> Parceria de Sucesso
          </span>
          
          <h2 className="mt-5 text-balance text-4xl font-extrabold leading-[1.1] text-[var(--ink)] sm:text-5xl">
            Reinaldo investe, apoia e <span className="text-gradient-gold">acredita</span> na Ademicon.
          </h2>
          
          <p className="mt-6 text-base leading-relaxed text-[var(--ink-soft)]">
            Mais do que um embaixador, <span className="font-bold text-[var(--ink)]">Reinaldo da Silva</span> é apoiador e investidor ativo da <span className="font-bold text-[var(--ink)]">Ademicon</span>. Ele escolheu o consórcio inteligente como a ferramenta principal de seu planejamento de longo prazo — e compartilha esse exemplo com milhares de brasileiros.
          </p>
          
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted-foreground)]">
            Foco, estratégia e constância: a mesma fórmula que constrói carreiras de prestígio dentro dos campos, aplicada diretamente à consolidação do seu patrimônio familiar.
          </p>

          {/* Metrics Grid */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { label: "Tradição", key: "+30", sub: "Anos de mercado" },
              { label: "Segurança", key: "100%", sub: "Regulado pelo Bacen" },
              { label: "Economia", key: "0%", sub: "Juros bancários" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-black/5 bg-white/80 p-4.5 shadow-sm transition-all duration-300 hover:border-[var(--primary)]/20 hover:-translate-y-0.5"
              >
                <div className="text-sm font-semibold uppercase tracking-wider text-[var(--muted-foreground)] block">
                  {s.label}
                </div>
                <div className="text-3xl font-black text-gradient-gold mt-1 block">
                  {s.key}
                </div>
                <div className="mt-1 text-[11px] font-semibold text-[var(--ink-soft)] leading-tight block">
                  {s.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
