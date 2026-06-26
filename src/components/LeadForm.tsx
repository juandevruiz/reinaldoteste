import { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "sonner";
import { User, Phone, Mail, MapPin, CreditCard, Send, MessageSquare, BadgeCheck, ShieldCheck } from "lucide-react";

// Configuração de envio de e-mail (Locaweb / APIs Externas)
// Para usar o Formspree: "https://formspree.io/f/seu-id"
// Para usar o Web3Forms: "https://api.web3forms.com/submit" (requer access_key no formulário)
// Para usar o script PHP próprio na Locaweb: "/contato.php"
const EMAIL_API_URL = "/contato.php"; 

export default function LeadForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    cidade: "",
    produto: "Imóvel residencial",
    valorCarta: "",
    valorParcela: "",
    possuiFGTS: "Não",
    possuiImovel: "Não",
    possuiVeiculo: "Não",
    pretendeLance: "Não",
    conheceConsorcio: "Não",
    observacoes: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Máscara simples para celular/WhatsApp (ex: (11) 97050-6840)
  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);
    
    if (value.length > 10) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6)}`;
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }
    
    setFormData((prev) => ({ ...prev, telefone: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // 1. Montagem da Mensagem do WhatsApp
    const message = `*NOVO LEAD QUALIFICADO - SITE REINALDO*

*👤 DADOS PESSOAIS*
• *Nome:* ${formData.nome}
• *WhatsApp:* ${formData.telefone}
• *E-mail:* ${formData.email}
• *Cidade:* ${formData.cidade}

*🎯 PRODUTO DESEJADO*
• *Opção:* ${formData.produto}

*💰 CARTA DE CRÉDITO*
• *Crédito Desejado:* ${formData.valorCarta}
• *Parcela Pretendida:* ${formData.valorParcela}

*📋 PERFIL DO CLIENTE*
• *Já possui FGTS?:* ${formData.possuiFGTS}
• *Possui Imóvel?:* ${formData.possuiImovel}
• *Possui Veículo?:* ${formData.possuiVeiculo}
• *Pretende ofertar lance?:* ${formData.pretendeLance}
• *Já conhece consórcio?:* ${formData.conheceConsorcio}

*💬 OBSERVAÇÕES*
${formData.observacoes || "Nenhuma observação informada."}`;

    const whatsappUrl = `https://wa.me/5511970506840?text=${encodeURIComponent(message)}`;

    try {
      // 2. Envio de e-mail (caso a API esteja configurada)
      if (EMAIL_API_URL) {
        // Envia os dados estruturados por e-mail para a API configurada
        const response = await fetch(EMAIL_API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            subject: `Novo Lead do Site - ${formData.nome}`,
            to_email: "equipe@exemplo.com", // Usuário configura depois no backend/API
            ...formData,
            mensagem_formatada: message
          }),
        });

        // Não travamos a navegação mesmo se a API retornar erro (por exemplo, antes de configurarem o e-mail no servidor)
        if (!response.ok) {
          console.warn("API de e-mail retornou um status de erro, prosseguindo com o WhatsApp.");
        }
      }
      
      toast.success("Dados enviados com sucesso! Abrindo atendimento no WhatsApp...");
      
      // Abre o WhatsApp com a mensagem estruturada
      setTimeout(() => {
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      }, 1500);

    } catch (error) {
      console.error("Erro no envio do e-mail:", error);
      toast.error("Ocorreu um erro no envio de e-mail, mas você será direcionado ao WhatsApp.");
      
      // Fallback: garante que abre o WhatsApp mesmo se o fetch falhar (sem internet ou API fora do ar)
      setTimeout(() => {
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      }, 2000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="lead-form" className="relative overflow-hidden bg-[var(--background)] px-6 py-24 border-b border-black/5">
      {/* Decorative radial gradients */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[10%] top-[10%] h-[45vh] w-[45vh] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.06)_0%,transparent_60%)]" />
        <div className="absolute right-[5%] bottom-[15%] h-[35vh] w-[35vh] rounded-full bg-[radial-gradient(circle,oklch(0.55_0.22_25/0.05)_0%,transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12 reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--primary)] shadow-sm">
            <MessageSquare className="h-3.5 w-3.5" /> Solicitação de Simulação
          </span>
          <h2 className="mt-5 text-balance text-3xl font-extrabold leading-[1.1] text-[var(--ink)] sm:text-4xl">
            Simulador & Contato <span className="text-gradient-gold">Direto</span>
          </h2>
          <p className="mt-4 text-sm text-[var(--ink-soft)] max-w-xl mx-auto leading-relaxed">
            Preencha os dados abaixo para receber uma simulação customizada sob a **Gestão Bruno Sousa**. Ao enviar, os dados serão encaminhados por e-mail e você iniciará o atendimento direto no WhatsApp.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="reveal rounded-3xl border border-black/5 bg-white/80 p-8 shadow-xl backdrop-blur-md space-y-8">
          
          {/* Section 1: Dados Pessoais */}
          <div>
            <h3 className="text-base font-bold text-[var(--ink)] flex items-center gap-2 border-b border-black/5 pb-2 mb-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-xs">1</span>
              Dados Pessoais
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="nome" className="block text-xs font-bold uppercase tracking-wider text-[var(--ink-soft)] mb-1.5">Nome Completo</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-black/30" />
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    placeholder="Digite seu nome completo"
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-black/10 bg-white/50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-[var(--primary)] focus:bg-white"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="telefone" className="block text-xs font-bold uppercase tracking-wider text-[var(--ink-soft)] mb-1.5">Telefone / WhatsApp</label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-black/30" />
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    required
                    placeholder="(11) 99999-9999"
                    value={formData.telefone}
                    onChange={handlePhoneChange}
                    className="w-full rounded-2xl border border-black/10 bg-white/50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-[var(--primary)] focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[var(--ink-soft)] mb-1.5">E-mail</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-black/30" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="exemplo@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-black/10 bg-white/50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-[var(--primary)] focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="cidade" className="block text-xs font-bold uppercase tracking-wider text-[var(--ink-soft)] mb-1.5">Cidade / UF</label>
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-black/30" />
                  <input
                    type="text"
                    id="cidade"
                    name="cidade"
                    required
                    placeholder="Ex: Guarulhos - SP"
                    value={formData.cidade}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-black/10 bg-white/50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-[var(--primary)] focus:bg-white"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Produto e Carta */}
          <div>
            <h3 className="text-base font-bold text-[var(--ink)] flex items-center gap-2 border-b border-black/5 pb-2 mb-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-xs">2</span>
              Produto & Crédito Desejado
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="produto" className="block text-xs font-bold uppercase tracking-wider text-[var(--ink-soft)] mb-1.5">Produto Desejado</label>
                <select
                  id="produto"
                  name="produto"
                  value={formData.produto}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-black/10 bg-white py-3 px-4 text-sm outline-none transition focus:border-[var(--primary)] cursor-pointer"
                >
                  <option value="Automóvel">Automóvel</option>
                  <option value="Moto">Moto</option>
                  <option value="Caminhão">Caminhão</option>
                  <option value="Veículo pesado">Veículo pesado</option>
                  <option value="Imóvel residencial">Imóvel residencial</option>
                  <option value="Imóvel comercial">Imóvel comercial</option>
                  <option value="Imóvel para investimento">Imóvel para investimento</option>
                  <option value="Imóvel para aluguel">Imóvel para aluguel</option>
                  <option value="Imóvel para pousada">Imóvel para pousada</option>
                  <option value="Construção">Construção</option>
                  <option value="Reforma">Reforma</option>
                  <option value="Serviços">Serviços</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>

              <div>
                <label htmlFor="valorCarta" className="block text-xs font-bold uppercase tracking-wider text-[var(--ink-soft)] mb-1.5">Valor do Crédito</label>
                <div className="relative">
                  <CreditCard className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-black/30" />
                  <input
                    type="text"
                    id="valorCarta"
                    name="valorCarta"
                    required
                    placeholder="Ex: R$ 200.000"
                    value={formData.valorCarta}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-black/10 bg-white/50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-[var(--primary)] focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="valorParcela" className="block text-xs font-bold uppercase tracking-wider text-[var(--ink-soft)] mb-1.5">Parcela Desejada</label>
                <div className="relative">
                  <CreditCard className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-black/30" />
                  <input
                    type="text"
                    id="valorParcela"
                    name="valorParcela"
                    required
                    placeholder="Ex: R$ 1.200"
                    value={formData.valorParcela}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-black/10 bg-white/50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-[var(--primary)] focus:bg-white"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Perfil */}
          <div>
            <h3 className="text-base font-bold text-[var(--ink)] flex items-center gap-2 border-b border-black/5 pb-2 mb-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-xs">3</span>
              Perfil Financeiro
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {[
                { name: "possuiFGTS", label: "Possui FGTS?" },
                { name: "possuiImovel", label: "Possui Imóvel?" },
                { name: "possuiVeiculo", label: "Possui Veículo?" },
                { name: "pretendeLance", label: "Pretende Lance?" },
                { name: "conheceConsorcio", label: "Conhece Consórcio?" },
              ].map((field) => (
                <div key={field.name} className="flex flex-col">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[var(--ink-soft)] mb-1.5 block">
                    {field.label}
                  </label>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, [field.name]: "Sim" }))}
                      className={`flex-1 rounded-xl py-2 text-xs font-bold border transition ${
                        formData[field.name as keyof typeof formData] === "Sim"
                          ? "bg-[var(--primary)] text-white border-[var(--primary)] shadow-sm"
                          : "bg-white text-[var(--ink-soft)] border-black/10 hover:border-black/25"
                      }`}
                    >
                      Sim
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, [field.name]: "Não" }))}
                      className={`flex-1 rounded-xl py-2 text-xs font-bold border transition ${
                        formData[field.name as keyof typeof formData] === "Não"
                          ? "bg-black/5 text-[var(--ink)] border-transparent"
                          : "bg-white text-[var(--ink-soft)] border-black/10 hover:border-black/25"
                      }`}
                    >
                      Não
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Observações */}
          <div>
            <label htmlFor="observacoes" className="block text-xs font-bold uppercase tracking-wider text-[var(--ink-soft)] mb-1.5 flex items-center gap-1">
              <MessageSquare className="h-3.5 w-3.5" /> Objetivos & Observações (Opcional)
            </label>
            <textarea
              id="observacoes"
              name="observacoes"
              rows={3}
              placeholder="Descreva aqui o seu objetivo (Ex: Comprar meu primeiro apartamento em Guarulhos, trocar de frota, etc.)"
              value={formData.observacoes}
              onChange={handleChange}
              className="w-full rounded-2xl border border-black/10 bg-white/50 py-3 px-4 text-sm outline-none transition focus:border-[var(--primary)] focus:bg-white resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-black/5 pt-6">
            <div className="flex items-center gap-4 text-xs text-[var(--muted-foreground)] font-semibold">
              <span className="flex items-center gap-1"><ShieldCheck className="h-4 w-4 text-emerald-500" /> Proteção de dados</span>
              <span className="flex items-center gap-1"><BadgeCheck className="h-4 w-4 text-[var(--primary)]" /> Envio instantâneo</span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full sm:w-auto shadow-md !px-8 !py-3.5 cursor-pointer disabled:opacity-50"
            >
              {loading ? (
                "Processando..."
              ) : (
                <>
                  Enviar Proposta & Iniciar Atendimento <Send className="h-4 w-4 ml-1.5 inline" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
