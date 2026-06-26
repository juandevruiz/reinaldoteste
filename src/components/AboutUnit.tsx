import { useState } from "react";
import { MapPin, Building, Sparkles, ChevronLeft, ChevronRight, Compass, Camera, Maximize2, X } from "lucide-react";
import gru1 from "../../img/gru1.jpeg";
import gru2 from "../../img/gru2.jpeg";
import gru3 from "../../img/gru3.jpeg";
import gru4 from "../../img/gru4.jpeg";
import gru5 from "../../img/gru5.jpeg";
import gru6 from "../../img/gru6.jpeg";
import gru7 from "../../img/gru7.jpeg";

export default function AboutUnit() {
  const images = [gru1, gru2, gru3, gru4, gru5, gru6, gru7];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="sobre-unidade" className="relative overflow-hidden bg-[var(--secondary)]/20 px-6 py-24 border-b border-black/5">
      {/* Decorative glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-[-10%] top-[20%] h-[50vh] w-[50vh] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.08)_0%,transparent_60%)]" />
        <div className="absolute left-[-15%] bottom-[10%] h-[40vh] w-[40vh] rounded-full bg-[radial-gradient(circle,oklch(0.55_0.22_25/0.06)_0%,transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--primary)] shadow-sm">
            <Building className="h-3.5 w-3.5" /> Nossa Estrutura
          </span>
          <h2 className="mt-5 text-balance text-4xl font-extrabold leading-[1.1] text-[var(--ink)] sm:text-5xl">
            Sobre a Unidade <span className="text-gradient-gold">Guarulhos</span>
          </h2>
          <p className="mt-6 text-base text-[var(--ink-soft)] leading-relaxed">
            Conheça a nossa sede e estrutura física projetada para oferecer o melhor atendimento e planejamento patrimonial com total segurança. A parceria estratégica entre **Reinaldo** e a **Ademicon Guarulhos** sob a liderança da **Gestão Bruno Sousa** conecta credibilidade esportiva com excelência em consórcios.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
          {/* Left: Interactive Photo Carousel */}
          <div className="space-y-4 reveal">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-[var(--ink)] flex items-center gap-2">
                <Camera className="h-4 w-4 text-[var(--primary)]" /> Galeria da Unidade
              </h3>
              <div className="text-xs text-[var(--muted-foreground)] font-semibold">
                Foto {currentIndex + 1} de {images.length}
              </div>
            </div>

            <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] border border-black/5 bg-black shadow-xl group">
              <img
                src={images[currentIndex]}
                alt={`Unidade Ademicon Guarulhos - Foto ${currentIndex + 1}`}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
              
              {/* Glass controls */}
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between pointer-events-none">
                <div className="flex gap-2 pointer-events-auto">
                  <button
                    onClick={prevSlide}
                    className="grid h-10 w-10 place-items-center rounded-full bg-white/90 text-[var(--ink)] shadow-md hover:bg-white transition-colors cursor-pointer"
                    aria-label="Foto anterior"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="grid h-10 w-10 place-items-center rounded-full bg-white/90 text-[var(--ink)] shadow-md hover:bg-white transition-colors cursor-pointer"
                    aria-label="Próxima foto"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
                <button
                  onClick={() => setLightboxOpen(true)}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/90 text-[var(--ink)] shadow-md hover:bg-white transition-colors pointer-events-auto cursor-pointer"
                  aria-label="Zoom foto"
                >
                  <Maximize2 className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Thumbnail selector */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-xl border-2 transition-all ${
                    currentIndex === idx ? "border-[var(--primary)] scale-95" : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Address & Map Details */}
          <div className="space-y-6 reveal">
            <div className="rounded-3xl border border-black/5 bg-white/80 p-6 shadow-lg backdrop-blur-md">
              <h3 className="text-lg font-bold text-[var(--ink)] flex items-center gap-2 mb-4">
                <MapPin className="h-4.5 w-4.5 text-[var(--primary)]" /> Endereço Oficial
              </h3>
              
              <div className="space-y-3 text-sm text-[var(--ink-soft)] font-medium">
                <p className="flex items-start gap-2.5">
                  <span className="font-semibold text-[var(--ink)] shrink-0">Logradouro:</span>
                  <span>Rua Santo Antônio, 1542</span>
                </p>
                <p className="flex items-start gap-2.5">
                  <span className="font-semibold text-[var(--ink)] shrink-0">Complemento:</span>
                  <span>6º Andar – Cobertura</span>
                </p>
                <p className="flex items-start gap-2.5">
                  <span className="font-semibold text-[var(--ink)] shrink-0">Bairro/Cidade:</span>
                  <span>Vila Augusta, Guarulhos – SP</span>
                </p>
                <p className="flex items-start gap-2.5">
                  <span className="font-semibold text-[var(--ink)] shrink-0">CEP:</span>
                  <span>07271-000</span>
                </p>
              </div>
            </div>

            {/* Satellite/3D Google Map Embed */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-[var(--muted-foreground)] font-bold uppercase tracking-wider px-1">
                <span className="flex items-center gap-1">
                  <Compass className="h-3.5 w-3.5 text-[var(--primary)]" /> Visualização em Satélite
                </span>
                <span>Foco no Prédio</span>
              </div>
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-[32px] border border-black/5 bg-white/80 shadow-md">
                <iframe
                  title="Mapa Satélite Ademicon Guarulhos"
                  src="https://maps.google.com/maps?q=Rua%20Santo%20Ant%C3%B4nio%201542,%20Guarulhos%20-%20SP&t=k&z=19&ie=UTF8&iwloc=&output=embed"
                  className="absolute inset-0 h-full w-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 animate-fade-in">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="h-6 w-6" />
          </button>
          
          <div className="relative max-h-[85vh] max-w-[95vw]">
            <img
              src={images[currentIndex]}
              alt="Unidade Ampliada"
              className="mx-auto max-h-[85vh] max-w-[95vw] rounded-2xl object-contain shadow-2xl"
            />
            
            {/* Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors cursor-pointer"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors cursor-pointer"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
