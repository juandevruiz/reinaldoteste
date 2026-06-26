import { ShieldCheck, BadgeCheck, Users, Calendar, Layers } from "lucide-react";

export default function TrustBar() {
  const items = [
    { icon: BadgeCheck, label: "Especialistas em consórcio" },
    { icon: Users, label: "Atendimento personalizado" },
    { icon: Calendar, label: "Parcelas planejadas" },
    { icon: ShieldCheck, label: "Sem juros abusivos" },
    { icon: Layers, label: "Diversas modalidades" },
  ];

  return (
    <section className="relative z-10 -mt-8 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-3 rounded-3xl border border-black/6 bg-white/90 p-4 shadow-xl backdrop-blur-xl sm:grid-cols-3 lg:grid-cols-5">
          {items.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-2xl border border-black/5 bg-[var(--secondary)] px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/20 hover:bg-white hover:shadow-md"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/15">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold leading-tight text-[var(--ink)]">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

