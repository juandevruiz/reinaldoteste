import { Wallet, Target, TrendingUp, Layers, Calendar, Trophy, Sparkles, Clock, ShieldCheck } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      icon: Wallet,
      title: "Zero Juros Bancários",
      text: "Sem juros abusivos de financiamento. Você paga apenas uma taxa de administração competitiva e diluída.",
    },
    {
      icon: Target,
      title: "Planejamento sob Medida",
      text: "Prazos e parcelas de acordo com a sua capacidade financeira, criando uma disciplina saudável.",
    },
    {
      icon: TrendingUp,
      title: "Poder de Compra à Vista",
      text: "A carta de crédito dá poder de compra à vista para conseguir ótimas margens de negociação.",
    },
    {
      icon: Layers,
      title: "Total Flexibilidade",
      text: "Use o crédito para comprar imóveis, veículos, frotas, reformar ou contratar serviços.",
    },
  ];

  const steps = [
    {
      title: "Defina seu Objetivo",
      text: "Escolha qual bem ou serviço você quer adquirir (casa, carro, frota, etc).",
    },
    {
      title: "Selecione o Plano Ideal",
      text: "Simule a carta de crédito e a parcela que cabe no seu orçamento.",
    },
    {
      title: "Participe das Assembleias",
      text: "Acompanhe sorteios mensais ou oferte lances para antecipar.",
    },
    {
      title: "Seja Contemplado",
      text: "Receba sua Carta de Crédito Ademicon para realizar a compra.",
    },
    {
      title: "Realize a Conquista",
      text: "Adquira o bem pagando à vista com total poder de barganha.",
    },
  ];

  return (
    <section id="beneficios" className="relative px-6 py-20 bg-[var(--background)] border-b border-black/5">
      {/* Background decorations */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-[5%] top-[20%] h-[35vh] w-[35vh] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_60%)]" />
        <div className="absolute left-[5%] bottom-[10%] h-[30vh] w-[30vh] rounded-full bg-[radial-gradient(circle,oklch(0.55_0.22_25/0.04)_0%,transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          
          {/* Column 1: Por que planejar */}
          <div className="space-y-8 reveal">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-black/5 bg-white/60 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--primary)] shadow-sm">
                <ShieldCheck className="h-3.5 w-3.5" /> Diferenciais
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-[var(--ink)] sm:text-4xl">
                Por que Planejar com <span className="text-gradient-gold">Consórcio</span>?
              </h2>
              <p className="mt-3 text-sm text-[var(--ink-soft)] max-w-lg leading-relaxed">
                A estratégia mais inteligente para blindar seu patrimônio e crescer de forma sustentável, livre de juros.
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map(({ icon: Icon, title, text }, i) => (
                <div key={title} className="flex gap-4 items-start group">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-colors duration-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[var(--ink)] group-hover:text-[var(--primary)] transition-colors">
                      {title}
                    </h3>
                    <p className="mt-1 text-xs text-[var(--ink-soft)] leading-relaxed">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Como funciona */}
          <div id="como-funciona" className="space-y-8 lg:border-l lg:border-black/5 lg:pl-16 reveal">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-black/5 bg-white/60 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--primary)] shadow-sm">
                <Clock className="h-3.5 w-3.5" /> Passo a Passo
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-[var(--ink)] sm:text-4xl">
                Como Funciona a <span className="text-gradient-gold">Conquista</span>?
              </h2>
              <p className="mt-3 text-sm text-[var(--ink-soft)] max-w-lg leading-relaxed">
                Entenda o fluxo simplificado do planejamento até o recebimento da sua carta de crédito.
              </p>
            </div>

            <div className="relative border-l border-black/5 pl-6 space-y-6 ml-2.5">
              {steps.map((step, i) => (
                <div key={step.title} className="relative group">
                  {/* Circle number marker */}
                  <div className="absolute -left-[37px] top-0 grid h-6.5 w-6.5 place-items-center rounded-full border border-black/5 bg-white text-[9px] font-black text-[var(--primary)] shadow group-hover:bg-[var(--primary)] group-hover:text-white group-hover:border-[var(--primary)] transition-colors duration-300">
                    0{i + 1}
                  </div>
                  
                  <div>
                    <h3 className="text-base font-bold text-[var(--ink)] group-hover:text-[var(--primary)] transition-colors">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-xs text-[var(--ink-soft)] leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
