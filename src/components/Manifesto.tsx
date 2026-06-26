import { Trophy } from "lucide-react";

export default function Manifesto() {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      {/* Background decorations */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--secondary)] via-[var(--background)] to-[var(--background)]" />
        <div className="absolute left-1/2 top-1/2 h-[50vh] w-[50vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.40_0.17_25/0.05)_0%,transparent_65%)]" />
      </div>

      <div className="mx-auto max-w-4xl">
        <div className="reveal relative overflow-hidden rounded-[36px] border border-black/8 bg-white p-8 sm:p-14 shadow-xl">
          {/* Top corner gradient glow */}
          <div aria-hidden className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[var(--primary)]/8 blur-2xl" />
          <div aria-hidden className="absolute -left-10 bottom-0 h-24 w-24 rounded-full bg-[var(--gold)]/10 blur-2xl" />

          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/15 bg-[var(--primary)]/8 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[var(--primary)]">
            <Trophy className="h-3.5 w-3.5" /> Manifesto do Atleta
          </span>

          <blockquote className="mt-8 font-sans text-xl leading-relaxed text-[var(--ink)] sm:text-2xl sm:leading-[1.5]">
            <span className="text-gradient-gold text-4xl font-serif inline-block mr-1">"</span>
            Em campo, um único lance estratégico pode decidir um campeonato inteiro. No planejamento de vida, a dinâmica é a mesma. O consórcio Ademicon oferece opções sob medida para você dar o lance certo em direção aos seus objetivos sem o desperdício dos juros. Afinal, a verdadeira conquista nasce da união entre estratégia e preparo.
            <span className="text-gradient-gold text-4xl font-serif inline-block ml-1">"</span>
          </blockquote>

          <div className="mt-8 flex items-center gap-4">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-[var(--primary)]/30 to-transparent" />
            <div className="text-right">
              <cite className="not-italic text-sm font-extrabold text-[var(--ink)] block">
                Reinaldo da Silva
              </cite>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--primary)] block mt-0.5">
                Investidor & Embaixador Ademicon
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

