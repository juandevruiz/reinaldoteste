import { Wallet, Target, TrendingUp, Layers, Sparkles, ArrowRight } from "lucide-react";

export default function Benefits() {
  const items = [
    {
      icon: Wallet,
      title: "Zero Juros Bancários",
      text: "Ao contrário dos financiamentos bancários convencionais, o consórcio não cobra juros. Você paga apenas uma taxa de administração competitiva e diluída.",
    },
    {
      icon: Target,
      title: "Planejamento sob Medida",
      text: "Escolha prazos e parcelas de acordo com a sua capacidade financeira. Crie uma disciplina de investimento saudável e duradoura.",
    },
    {
      icon: TrendingUp,
      title: "Poder de Compra à Vista",
      text: "Quando contemplado, você recebe a carta de crédito e realiza a compra como se estivesse pagando à vista, obtendo excelente margem de negociação.",
    },
    {
      icon: Layers,
      title: "Total Flexibilidade",
      text: "Use seu crédito para comprar imóveis, veículos, frotas, reformar ou contratar serviços nacionais de forma rápida e segura.",
    },
  ];

  return (
    <section id="beneficios" className="relative px-6 py-28 bg-[var(--background)]">
      {/* Background decorations */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-[10%] top-[30%] h-[35vh] w-[35vh] rounded-full bg-[radial-gradient(circle_at_center,rgba(180,30,30,0.06)_0%,transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--primary)] shadow-sm">
            <Sparkles className="h-3.5 w-3.5" /> Vantagens do Consórcio
          </span>
          <h2 className="mt-5 text-balance text-4xl font-extrabold text-[var(--ink)] sm:text-5xl">
            Por que planejar com <span className="text-[var(--primary)]">Consórcio</span>?
          </h2>
          <p className="mt-4 text-base text-[var(--muted-foreground)]">
            A estratégia mais inteligente para conquistar bens sem ficar preso às armadilhas dos juros altos.
          </p>
        </div>

        <div className="reveal mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text }, i) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-black/6 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2.5 hover:border-[var(--primary)]/20 hover:shadow-xl"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Card corner accent gradient */}
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[var(--primary)]/5 transition-all duration-500 group-hover:scale-150 group-hover:bg-[var(--primary)]/10" />

              <div className="relative">
                {/* Icon wrapper */}
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[oklch(0.30_0.15_25)] text-white shadow-md transition-transform duration-500 group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>
                
                <h3 className="mt-6 text-xl font-bold text-[var(--ink)] transition-colors group-hover:text-[var(--primary)]">
                  {title}
                </h3>
                
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted-foreground)]">
                  {text}
                </p>

                <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-[var(--primary)] opacity-0 translate-x-[-5px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  Fale com um especialista <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
