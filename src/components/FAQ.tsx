import { Sparkles } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      q: "O que é um consórcio e como funciona?",
      a: "O consórcio é uma modalidade de compra compartilhada e planejada. Um grupo de pessoas com o mesmo objetivo financeiro contribui com parcelas mensais. A cada mês, participantes são contemplados por sorteio ou através de lances (antecipação de parcelas), tendo acesso ao valor total contratado (carta de crédito).",
    },
    {
      q: "Realmente não tem juros bancários?",
      a: "Não existe cobrança de taxa de juros. Em vez disso, há apenas uma taxa de administração, que remunera a Ademicon pela gestão do grupo. Essa taxa é fixa, muito inferior aos juros cobrados em financiamentos convencionais e é diluída linearmente ao longo de todo o plano.",
    },
    {
      q: "Como funcionam os lances?",
      a: "Além do sorteio mensal, você pode acelerar a sua contemplação ofertando um lance, que funciona como a antecipação de parcelas. Existem modalidades de lance embutido (onde você usa parte da própria carta de crédito para pagar o lance), lance fixo e lance livre. O maior lance do mês é contemplado.",
    },
    {
      q: "Posso utilizar o FGTS no consórcio imobiliário?",
      a: "Sim, você pode utilizar o saldo do seu FGTS para ofertar um lance no consórcio de imóvel, complementar o valor do crédito no momento da compra do bem, amortizar o saldo devedor ou reduzir as parcelas mensais, de acordo com as regras estabelecidas pela Caixa Econômica Federal.",
    },
    {
      q: "Qual a segurança de contratar um consórcio Ademicon?",
      a: "A Ademicon possui mais de 30 anos de atuação sólida e é totalmente regulada e fiscalizada pelo Banco Central do Brasil. Os valores arrecadados ficam em conta de reserva blindada sob supervisão rigorosa, garantindo que o seu investimento esteja 100% protegido.",
    },
  ];

  return (
    <section id="faq" className="relative px-6 py-28 border-t border-black/5 bg-[var(--background)]">
      {/* Background decorations */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-[-10%] top-[40%] h-[35vh] w-[35vh] rounded-full bg-[radial-gradient(circle,oklch(0.55_0.22_25/0.05)_0%,transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-4xl">
        <div className="reveal text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--primary)] shadow-sm">
            <Sparkles className="h-3.5 w-3.5" /> Dúvidas Frequentes
          </span>
          <h2 className="mt-5 text-4xl font-extrabold text-[var(--ink)] sm:text-5xl">
            Perguntas <span className="text-gradient-gold">Frequentes</span>
          </h2>
          <p className="mt-4 text-base text-[var(--muted-foreground)]">
            Tire suas dúvidas rápidas sobre o consórcio e faça seu planejamento com total transparência.
          </p>
        </div>

        {/* Accordion wrapper */}
        <div className="reveal mt-16 rounded-3xl border border-[var(--border)] bg-card p-4 sm:p-6 shadow-elegant">
          <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-black/5 last:border-b-0 py-2.5 transition-colors duration-300"
              >
                <AccordionTrigger className="text-base sm:text-lg font-bold text-[var(--ink)] hover:text-[var(--primary)] hover:no-underline px-4 focus:outline-none">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-[var(--muted-foreground)] px-4 pt-1 pb-4">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
