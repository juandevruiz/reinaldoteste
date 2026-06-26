import { Target, Wallet, Calendar, Trophy, Sparkles, Clock } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: Target,
      title: "Defina seu Objetivo",
      text: "Escolha qual bem ou serviço você quer adquirir (uma casa, carro novo, frota de caminhões, maquinário ou serviço especializado).",
    },
    {
      icon: Wallet,
      title: "Selecione o Plano Ideal",
      text: "Simule e defina o valor da carta de crédito e a parcela mensal que encaixa com tranquilidade no orçamento mensal da sua família ou empresa.",
    },
    {
      icon: Calendar,
      title: "Participe das Assembleias",
      text: "Mensalmente ocorrem sorteios. Você também pode acelerar sua conquista ofertando lances para resgatar o crédito antecipadamente.",
    },
    {
      icon: Trophy,
      title: "Seja Contemplado",
      text: "Ao ser sorteado ou vencer um lance, você recebe a sua Carta de Crédito Ademicon para prosseguir com a compra desejada.",
    },
    {
      icon: Sparkles,
      title: "Realize a sua Conquista",
      text: "Adquira o bem pagando à vista. O consórcio garante maior poder de negociação e economia, sem pagar juros para o banco.",
    },
  ];

  return (
    <section id="como-funciona" className="relative overflow-hidden bg-[var(--secondary)]/40 px-6 py-28 border-y border-black/5">
      {/* Background decoration grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-5">
        <div className="absolute left-[30%] top-[-10%] h-[50vh] w-[50vh] rounded-full bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--primary)] shadow-sm">
            <Clock className="h-3.5 w-3.5 text-[var(--primary)]" /> Passo a Passo da Conquista
          </span>
          <h2 className="mt-5 text-4xl font-extrabold text-[var(--ink)] sm:text-5xl">
            Como Funciona o <span className="text-gradient-gold">Consórcio</span>?
          </h2>
          <p className="mt-4 text-base text-[var(--muted-foreground)]">
            Cinco etapas simples que separam a sua disciplina da conquista do seu patrimônio.
          </p>
        </div>

        {/* Desktop timeline */}
        <div className="reveal mt-20 relative hidden lg:block">
          {/* Connector Line */}
          <div className="absolute left-10 right-10 top-7 h-[2px] bg-gradient-to-r from-transparent via-[var(--primary)]/30 to-transparent" />
          
          <ol className="grid grid-cols-5 gap-6">
            {steps.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="group relative text-center">
                {/* Node circle */}
                <div className="relative z-10 mx-auto grid h-14 w-14 place-items-center rounded-full border border-[var(--border)] bg-card text-[var(--primary)] shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--primary)] group-hover:text-white group-hover:border-[var(--primary)]/50">
                  <Icon className="h-6 w-6" />
                </div>
                
                {/* Step badge */}
                <div className="mt-6 inline-block rounded-full bg-black/5 border border-black/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--primary)]">
                  Etapa 0{i + 1}
                </div>
                
                <h3 className="mt-3.5 text-lg font-bold text-[var(--ink)] group-hover:text-[var(--primary)] transition-colors">
                  {title}
                </h3>
                
                <p className="mt-2 text-xs leading-relaxed text-[var(--muted-foreground)] px-2">
                  {text}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* Mobile / Tablet vertical timeline */}
        <div className="reveal mt-16 lg:hidden space-y-8 relative before:absolute before:inset-y-0 before:left-6 before:w-[2px] before:bg-black/5">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <div key={title} className="group relative flex gap-6 pl-2">
              {/* Vertical Node */}
              <div className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border border-[var(--border)] bg-card text-[var(--primary)] shadow-md transition-all duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
                <Icon className="h-5 w-5" />
              </div>
              
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--primary)]">
                  Passo 0{i + 1}
                </span>
                <h3 className="text-lg font-bold text-[var(--ink)] group-hover:text-[var(--primary)] transition-colors mt-0.5">
                  {title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[var(--muted-foreground)]">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
