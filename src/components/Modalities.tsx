import { Home, Car, Building2, GraduationCap, ArrowRight } from "lucide-react";

export default function Modalities() {
  const items = [
    {
      icon: Home,
      label: "Imobiliário",
      desc: "Compre casas, apartamentos, terrenos, construa ou reforme sem taxas abusivas.",
    },
    {
      icon: Car,
      label: "Automóvel & Moto",
      desc: "Adquira seu veículo novo ou usado, ou planeje a renovação da frota da sua empresa.",
    },
    {
      icon: Building2,
      label: "Comercial / Pesados",
      desc: "Investimento em caminhões, ônibus, máquinas agrícolas, galpões e bens corporativos.",
    },
    {
      icon: GraduationCap,
      label: "Serviços Especiais",
      desc: "Crédito estruturado para viagens, festas, estudos, cirurgias ou consultorias.",
    },
  ];

  return (
    <section className="px-6 pb-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, label, desc }) => (
            <div
              key={label}
              className="reveal group flex flex-col justify-between rounded-3xl border border-black/6 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/20 hover:shadow-lg"
            >
              <div>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--primary)]/15 bg-[var(--primary)]/8 text-[var(--primary)] transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-bold text-[var(--ink)] transition-colors group-hover:text-[var(--primary)]">
                  Consórcio de {label}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-[var(--ink-soft)]">
                  {desc}
                </p>
              </div>
              <a
                href="#cta"
                className="mt-5 inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[var(--primary)] hover:underline"
              >
                Ver parcelas <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

