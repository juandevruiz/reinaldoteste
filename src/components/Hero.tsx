import { useState } from "react";
import { ArrowRight, ShieldCheck, BadgeCheck, Users, Trophy, TrendingUp, Sparkles, Home, Car, HelpCircle } from "lucide-react";
import reinaldoPortrait from "../../img/Reinaldo embaixador.jpg";

export default function Hero() {
  const [modalidade, setModalidade] = useState<"imovel" | "auto">("imovel");
  const [credito, setCredito] = useState(300000);
  const [prazo, setPrazo] = useState(180);
  const [tipoParcela, setTipoParcela] = useState<"integral" | "reduzida">("integral");

  // ─── CONSÓRCIO (modelo Ademicon real) ────────────────────────────────────
  // Imóvel: taxa adm. = 17% total + fundo de reserva = 1.5% (Total 18.5%)
  // Auto:   taxa adm. = 18% total + fundo de reserva = 2% (Total 20%)
  const taxaAdm      = modalidade === "imovel" ? 0.17   : 0.18;
  const taxaReserva  = modalidade === "imovel" ? 0.015  : 0.02;  // fundo de reserva
  
  const fundoComumMensal = credito / prazo;
  const taxaAdmMensal = (credito * taxaAdm) / prazo;
  const fundoReservaMensal = (credito * taxaReserva) / prazo;

  const consorcioParcelaIntegral = fundoComumMensal + taxaAdmMensal + fundoReservaMensal;
  const consorcioParcelaReduzida = (fundoComumMensal * 0.5) + taxaAdmMensal + fundoReservaMensal;
  
  // Parcela pós-contemplação se escolher reduzida (estimativa média na metade do prazo)
  // Paga 150% do fundo comum para compensar a redução inicial de 50% paga na metade do prazo anterior
  const consorcioParcelaPosContemplacao = (fundoComumMensal * 1.5) + taxaAdmMensal + fundoReservaMensal;

  const consorcioParcela = tipoParcela === "integral" ? consorcioParcelaIntegral : consorcioParcelaReduzida;
  const consorcioTotal   = credito * (1 + taxaAdm + taxaReserva);

  // ─── FINANCIAMENTO (Tabela Price — PMT real) ──────────────────────────────
  // Imóvel: Caixa/Itaú 2025 ≈ 11% a.a. (mínimo mercado, clientes bons)
  // Auto:   Bacen média 2026 ≈ 26% a.a. (1,93% a.m.)
  const taxaAnual    = modalidade === "imovel" ? 0.11   : 0.26;
  const taxaMensal   = Math.pow(1 + taxaAnual, 1 / 12) - 1;
  const fatorPMT     = (taxaMensal * Math.pow(1 + taxaMensal, prazo))
                     / (Math.pow(1 + taxaMensal, prazo) - 1);
  const financiamentoParcela = credito * fatorPMT;
  const financiamentoTotal   = financiamentoParcela * prazo;
  const economiaTotal        = financiamentoTotal - consorcioTotal;

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 0,
    }).format(val);

  const handleModalidadeChange = (type: "imovel" | "auto") => {
    setModalidade(type);
    setTipoParcela("integral");
    if (type === "imovel") {
      setCredito(300000);
      setPrazo(180);
    } else {
      setCredito(80000);
      setPrazo(60);
    }
  };


  return (
    <section id="top" className="relative isolate min-h-screen overflow-hidden pt-32 pb-20 sm:pt-36 bg-[var(--background)]">
      {/* Background decorations */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Light radial gradients and flows */}
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,oklch(0.96_0.01_30)_0%,transparent_60%)]" />
        <div className="absolute right-[-10%] top-[10%] h-[55vh] w-[55vh] rounded-full bg-[radial-gradient(circle_at_center,oklch(0.55_0.22_25/0.55),transparent_60%)] animate-glow-pulse" />
        <div className="absolute left-[10%] bottom-[15%] h-[28vh] w-[28vh] rounded-full bg-[radial-gradient(circle_at_center,oklch(0.85_0.12_85/0.35),transparent_60%)]" />
        
        {/* Grid Overlay */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="56" height="56" patternUnits="userSpaceOnUse">
              <path d="M56 0H0V56" fill="none" stroke="currentColor" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" className="text-[var(--ink)]" />
        </svg>

        {/* Floating decorative circles */}
        <svg viewBox="0 0 800 800" className="absolute -left-40 top-1/3 h-[80vh] w-[80vh] opacity-20 animate-float-slow pointer-events-none">
          <circle cx="400" cy="400" r="380" fill="none" stroke="oklch(0.40 0.17 25)" strokeWidth="1.5" />
          <circle cx="400" cy="400" r="240" fill="none" stroke="oklch(0.40 0.17 25)" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        
        {/* Left Content */}
        <div className="animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/60 px-4 py-1.5 text-xs font-semibold text-[var(--ink-soft)] backdrop-blur shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
            Reinaldo – Parceiro da Ademicon Guarulhos | Gestão Bruno Sousa
          </div>
          
          <h1 className="text-balance text-4xl font-extrabold leading-[1.05] text-[var(--ink)] sm:text-5xl md:text-6xl lg:text-7xl">
            Planeje hoje. <br />
            <span className="text-gradient-gold">Conquiste</span>{" "}
            <span className="relative inline-block">
              amanhã.
              <svg className="absolute -bottom-2 left-0 h-2.5 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 8 Q 50 1 100 8" stroke="var(--primary)" strokeWidth="2.5" fill="none" />
              </svg>
            </span>
          </h1>
          
          <p className="mt-8 max-w-xl text-base leading-relaxed text-[var(--ink-soft)] sm:text-lg">
            O consórcio inteligente para quem quer construir patrimônio de verdade, comprar bens ou renovar a frota{" "}
            <span className="font-semibold text-[var(--ink)]">sem pagar juros abusivos.</span> Atendimento comercial e suporte exclusivos realizados pela <span className="font-semibold text-[var(--ink)]">Gestão Bruno Sousa</span>.
          </p>

          <p className="mt-3 max-w-xl text-sm text-[var(--muted-foreground)]">
            Com a chancela de <span className="font-semibold text-[var(--ink)]">Reinaldo</span>, parceiro oficial da <span className="font-semibold text-[var(--ink)]">Ademicon Guarulhos (Gestão Bruno Sousa)</span>.
          </p>

          {/* Key Stats Bar */}
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-[var(--muted-foreground)]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[var(--primary)]" /> Banco Central · Regulado
            </div>
            <div className="flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 text-[var(--primary)]" /> +30 anos no mercado
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-[var(--primary)]" /> Milhares de contemplados
            </div>
          </div>

          {/* Dynamic Simulator Widget */}
          <div className="mt-8 rounded-3xl border border-black/5 bg-white/80 p-6 shadow-xl backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-black/5 pb-4">
              <span className="text-sm font-bold uppercase tracking-wider text-[var(--ink)]">
                Simulador Rápido de Parcelas
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => handleModalidadeChange("imovel")}
                  className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold transition-all ${
                    modalidade === "imovel"
                      ? "bg-[var(--primary)] text-white shadow-md"
                      : "bg-black/5 text-[var(--ink-soft)] hover:bg-black/10"
                  }`}
                >
                  <Home className="h-3.5 w-3.5" /> Imóvel
                </button>
                <button
                  onClick={() => handleModalidadeChange("auto")}
                  className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold transition-all ${
                    modalidade === "auto"
                      ? "bg-[var(--primary)] text-white shadow-md"
                      : "bg-black/5 text-[var(--ink-soft)] hover:bg-black/10"
                  }`}
                >
                  <Car className="h-3.5 w-3.5" /> Automóvel
                </button>
              </div>
            </div>

            <div className="mt-6 space-y-5">
              {/* Slider 1: Credito */}
              <div>
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--ink-soft)]">Crédito Desejado</span>
                  <span className="font-bold text-[var(--primary)]">{formatCurrency(credito)}</span>
                </div>
                <input
                  type="range"
                  min={modalidade === "imovel" ? 100000 : 30000}
                  max={modalidade === "imovel" ? 1500000 : 300000}
                  step={modalidade === "imovel" ? 10000 : 5000}
                  value={credito}
                  onChange={(e) => setCredito(Number(e.target.value))}
                  className="custom-slider mt-2 h-1.5 w-full cursor-pointer rounded-lg bg-black/10 accent-[var(--primary)]"
                />
                <div className="flex justify-between text-[10px] text-[var(--muted-foreground)] mt-1">
                  <span>{formatCurrency(modalidade === "imovel" ? 100000 : 30000)}</span>
                  <span>{formatCurrency(modalidade === "imovel" ? 1500000 : 300000)}</span>
                </div>
              </div>

              {/* Slider 2: Prazo */}
              <div>
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--ink-soft)]">Prazo</span>
                  <span className="font-bold text-[var(--primary)]">
                    {prazo} meses ({(prazo / 12).toFixed(0)} anos)
                  </span>
                </div>
                <input
                  type="range"
                  min={modalidade === "imovel" ? 60 : 24}
                  max={modalidade === "imovel" ? 240 : 100}
                  step={12}
                  value={prazo}
                  onChange={(e) => setPrazo(Number(e.target.value))}
                  className="custom-slider mt-2 h-1.5 w-full cursor-pointer rounded-lg bg-black/10 accent-[var(--primary)]"
                />
                <div className="flex justify-between text-[10px] text-[var(--muted-foreground)] mt-1">
                  <span>{modalidade === "imovel" ? "5 anos" : "2 anos"}</span>
                  <span>{modalidade === "imovel" ? "20 anos" : "~8 anos"}</span>
                </div>
              </div>

              {/* Payment Type Selection (Ademicon Signature Feature) */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-[var(--ink-soft)] flex items-center gap-1.5">
                    Opção de Parcela
                    <span className="group relative cursor-help flex items-center justify-center">
                      <HelpCircle className="h-3.5 w-3.5 text-black/35 hover:text-black/55 transition-colors" />
                      <span className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-2 w-64 -translate-x-1/2 rounded-xl bg-[var(--ink)] p-3 text-[11px] font-normal leading-normal text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 shadow-xl backdrop-blur-sm">
                        No **Plano 50** você paga meia parcela do fundo comum + taxas integralmente até a contemplação. Após ser contemplado, o saldo restante é diluído nas parcelas seguintes.
                        <span className="absolute top-full left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1 bg-[var(--ink)] rotate-45"></span>
                      </span>
                    </span>
                  </span>
                  <span className="text-[10px] text-[var(--primary)] font-bold">
                    {tipoParcela === "reduzida" && "✓ Plano 50 Ativo"}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-1.5 bg-black/5 p-1 rounded-xl">
                  <button
                    type="button"
                    onClick={() => setTipoParcela("integral")}
                    className={`rounded-lg py-1.5 text-xs font-bold transition-all ${
                      tipoParcela === "integral"
                        ? "bg-white text-[var(--ink)] shadow-sm"
                        : "text-[var(--ink-soft)] hover:text-[var(--ink)]"
                    }`}
                  >
                    Integral (100%)
                  </button>
                  <button
                    type="button"
                    onClick={() => setTipoParcela("reduzida")}
                    className={`rounded-lg py-1.5 text-xs font-bold transition-all ${
                      tipoParcela === "reduzida"
                        ? "bg-white text-[var(--primary)] shadow-sm"
                        : "text-[var(--ink-soft)] hover:text-[var(--ink)]"
                    }`}
                  >
                    Reduzida (Plano 50)
                  </button>
                </div>
              </div>

              {/* Results Grid */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                {/* Consortium card */}
                <div className="rounded-2xl bg-[var(--primary)]/5 p-4 border border-[var(--primary)]/15 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-[var(--muted-foreground)]">Consórcio Ademicon</span>
                      <span className="text-[9px] font-bold uppercase tracking-wide text-[var(--primary)] bg-[var(--primary)]/10 rounded-full px-2 py-0.5">
                        {tipoParcela === "reduzida" ? "Plano 50" : `Taxa ${((taxaAdm + taxaReserva) * 100).toFixed(1)}%`}
                      </span>
                    </div>
                    <span className="text-xl font-extrabold text-[var(--ink)] block mt-1">
                      {formatCurrency(consorcioParcela)}
                      <span className="text-xs font-normal text-[var(--ink-soft)]">/mês</span>
                    </span>
                    {tipoParcela === "reduzida" ? (
                      <span className="text-[9px] text-[var(--primary)] font-semibold block mt-0.5">
                        (Até a contemplação)
                      </span>
                    ) : (
                      <span className="text-[10px] text-[var(--primary)] font-bold mt-1 block">
                        ✓ Sem Juros · Total: {formatCurrency(consorcioTotal)}
                      </span>
                    )}
                  </div>

                  {tipoParcela === "reduzida" && (
                    <div className="mt-3 border-t border-[var(--primary)]/10 pt-2">
                      <div className="flex items-center justify-between text-[10px] text-[var(--ink-soft)]">
                        <span>Pós-Contemplação:</span>
                        <span className="group relative cursor-help flex items-center justify-center">
                          <HelpCircle className="h-3 w-3 text-black/30 hover:text-black/50" />
                          <span className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-2 w-52 -translate-x-1/2 rounded-lg bg-[var(--ink)] p-2.5 text-[9px] font-normal leading-normal text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 shadow-xl">
                            Simulação estimada pós-contemplação na metade do prazo, recalculando o saldo devedor do fundo comum.
                            <span className="absolute top-full left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1 bg-[var(--ink)] rotate-45"></span>
                          </span>
                        </span>
                      </div>
                      <span className="font-extrabold text-[var(--ink)] text-xs block mt-0.5">
                        {formatCurrency(consorcioParcelaPosContemplacao)}
                        <span className="text-[10px] font-normal text-[var(--ink-soft)]">/mês</span>
                      </span>
                    </div>
                  )}
                </div>

                {/* Bank financing card */}
                <div className="rounded-2xl bg-black/5 p-4 border border-black/5 relative overflow-hidden flex flex-col justify-between">
                  <div className="absolute right-0 top-0 h-12 w-12 bg-red-950/5 rounded-bl-full pointer-events-none" />
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-[var(--muted-foreground)]">Financiamento Banco</span>
                      <span className="text-[9px] font-bold uppercase tracking-wide text-red-500 bg-red-500/10 rounded-full px-2 py-0.5">
                        {modalidade === "imovel" ? "11% a.a." : "26% a.a."}
                      </span>
                    </div>
                    <span className="text-xl font-extrabold text-[var(--ink-soft)]/50 block mt-1 line-through">
                      {formatCurrency(financiamentoParcela)}
                      <span className="text-xs font-normal">/mês</span>
                    </span>
                    <span className="text-[10px] text-red-500 mt-1 block">
                      ✗ Com Juros · Total: {formatCurrency(financiamentoTotal)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Savings callout */}
              <div className="flex items-center justify-between rounded-2xl bg-[var(--primary)]/5 border border-[var(--primary)]/10 p-4">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--primary)] text-white">
                    <Trophy className="h-4 w-4" />
                  </span>
                  <div>
                    <span className="text-xs font-semibold text-[var(--ink)] block">Economia Total Estimada</span>
                    <span className="text-[10px] text-[var(--ink-soft)]">vs. financiamento bancário</span>
                  </div>
                </div>
                <span className="text-lg font-black text-[var(--primary)]">
                  {formatCurrency(economiaTotal)}
                </span>
              </div>
            </div>

            <div className="mt-5 flex gap-3">
              <a href="#cta" className="btn-primary !py-3.5 !text-sm w-full text-center flex-1 shadow-lg">
                Garantir este plano <ArrowRight className="h-4 w-4 inline ml-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Media (Player Image with layers) */}
        <div className="relative mx-auto w-full max-w-[500px] animate-fade-up [animation-delay:150ms] lg:max-w-none lg:pl-6">
          {/* Back glows */}
          <div className="absolute inset-0 -z-10 translate-y-6 rounded-[36px] bg-gradient-to-br from-[var(--primary)] to-white opacity-40 blur-2xl" />
          
          <div className="relative overflow-hidden rounded-[36px] border border-black/5 bg-white shadow-2xl">
            <img
              src={reinaldoPortrait}
              alt="Reinaldo da Silva, embaixador Ademicon"
              className="h-[62vh] min-h-[460px] w-full object-cover object-top transition-transform duration-700 hover:scale-105"
              loading="eager"
            />
            {/* Ambassador Ring Badge */}
            <div className="absolute right-6 top-6 flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[var(--primary)] backdrop-blur border border-black/5 shadow-md">
              <Trophy className="h-3.5 w-3.5 text-[var(--primary)]" /> Embaixador Oficial
            </div>
            
            {/* Floating Glass Box */}
            <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-5 border border-black/5 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[var(--primary)] text-white">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-[var(--muted-foreground)] font-semibold uppercase tracking-wider">Apoio & Parceria</p>
                  <h4 className="truncate text-base font-bold text-[var(--ink)]">Reinaldo – Parceiro da Ademicon Guarulhos | Gestão Bruno Sousa</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
