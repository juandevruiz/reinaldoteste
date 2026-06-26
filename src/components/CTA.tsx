import { ArrowRight, ShieldCheck, Clock, BadgeCheck } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden px-6 py-24 bg-[var(--background)]">
      {/* Visual background elements */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-[-10%] top-[-20%] h-[60vh] w-[60vh] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.12)_0%,transparent_60%)]" />
        <div className="absolute left-[-10%] bottom-[-20%] h-[50vh] w-[50vh] rounded-full bg-[radial-gradient(circle,oklch(0.55_0.22_25/0.1)_0%,transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[oklch(0.32_0.16_25)] via-[var(--primary)] to-[oklch(0.22_0.10_25)] px-8 py-16 text-center border border-white/10 shadow-2xl sm:px-16 sm:py-24">
          
          {/* Subtle background graphic line */}
          <div aria-hidden className="absolute inset-0 opacity-30 pointer-events-none">
            <svg className="absolute -left-20 -top-20 h-96 w-96 text-white" viewBox="0 0 200 200">
              <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="100" cy="100" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </svg>
            <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[var(--gold)]/30 blur-3xl" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[var(--gold-soft)] backdrop-blur">
              Próximo Passo
            </span>
            
            <h2 className="mt-6 text-balance text-4xl font-extrabold leading-[1.1] text-white sm:text-6xl">
              Está pronto para realizar seu <span className="text-gradient-gold">próximo sonho</span>?
            </h2>
            
            <p className="mt-6 text-base text-white/80 max-w-xl mx-auto">
              Fale agora com o gestor Bruno Sousa da Ademicon Guarulhos e descubra o plano ideal para você.
            </p>

            {/* Triggers */}
            <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
              <a
                href="#lead-form"
                className="btn-gold w-full sm:w-auto text-center shadow-lg"
              >
                Quero meu consórcio <ArrowRight className="h-5 w-5 inline ml-1" />
              </a>
            </div>

            {/* Credibility pointers */}
            <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs text-white/60">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-[var(--gold)]" /> Atendimento Humano
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-[var(--gold)]" /> Retorno em menos de 24h
              </span>
              <span className="inline-flex items-center gap-1.5">
                <BadgeCheck className="h-4 w-4 text-[var(--gold)]" /> Sem taxa de adesão
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
