import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import imgAmbassador from "../../img/Reinaldo embaixador.jpg";
import imgLeao from "../../img/👍🏽👍🏽👑 Rei Leão! 🦁 Reinaldo 🔛 @mirassolfc.jpg";
import imgCoragem from "../../img/Jogamos com coragem, mostrando a nossa força no Maião. Infelizmente não foi o resultado que quer.jpg";
import imgContrato from "../../img/reinaldo_contrato.png";
import ademiconLogo from "@/assets/ademicon.svg";

interface ImageItem {
  src: string;
  tag: string;
  title: string;
  accent?: boolean;
}

export default function Gallery() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const images: ImageItem[] = [
    {
      src: imgAmbassador,
      tag: "Embaixador & Investidor Oficial",
      title: "Reinaldo da Silva",
      accent: true,
    },
    {
      src: imgContrato,
      tag: "Assinatura do Contrato Ademicon",
      title: "Parceria Oficial",
      accent: true,
    },
    {
      src: imgLeao,
      tag: "Rei Leão no Mirassol FC",
      title: "Foco no Campeonato",
    },
    {
      src: imgCoragem,
      tag: "Força no Maião",
      title: "Determinação em Campo",
    },
  ];

  // Handle keyboard events for Lightbox
  useEffect(() => {
    if (activeIdx === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIdx(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIdx]);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === null ? null : (prev - 1 + images.length) % images.length));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === null ? null : (prev + 1) % images.length));
  };

  return (
    <section
      id="galeria"
      className="relative px-6 py-28 border-t border-black/5 overflow-hidden"
    >
      {/* Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--secondary)] to-[var(--background)]" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[60vh] w-[60vh] rounded-full bg-[radial-gradient(circle_at_center,oklch(0.40_0.17_25/0.05),transparent_70%)]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="reveal mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/15 bg-[var(--primary)]/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--primary)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
              Galeria do Atleta
            </div>
            <h2 className="mt-4 text-4xl font-extrabold text-[var(--ink)] sm:text-5xl">
              Destaques do <span className="text-gradient-gold">Reinaldo</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-[var(--ink-soft)]">
            Confira a trajetória do embaixador e sua parceria com a{" "}
            <img
              src={ademiconLogo}
              alt="Ademicon"
              className="inline h-4 align-middle opacity-80"
            />.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="reveal grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((item, i) => (
            <div
              key={i}
              onClick={() => setActiveIdx(i)}
              className="group relative cursor-pointer overflow-hidden rounded-[24px] border border-black/8 bg-white p-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Image Container with 3:4 Aspect Ratio */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-[18px]">
                <img
                  src={item.src}
                  alt={item.tag}
                  className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/25 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                  <span className="rounded-full bg-white/95 p-3 text-[var(--primary)] shadow-lg backdrop-blur-sm transform scale-90 group-hover:scale-100 transition-all duration-300">
                    <Maximize2 className="h-5 w-5" />
                  </span>
                </div>
              </div>

              {/* Title & Tag Info below image */}
              <div className="mt-3.5 px-2 pb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--primary)]">
                  {item.tag}
                </span>
                <h3 className="text-base font-semibold text-[var(--ink)] mt-0.5">
                  {item.title}
                </h3>
              </div>

              {/* Accent top-right star for highlighted cards */}
              {item.accent && (
                <div className="absolute right-4 top-4 z-20 flex items-center gap-1 rounded-full bg-[var(--primary)] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white shadow-md">
                  ★ {item.tag.includes("Contrato") ? "Contrato" : "Destaque"}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeIdx !== null && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 backdrop-blur-md animate-fade-in">
          {/* Close Button */}
          <button
            onClick={() => setActiveIdx(null)}
            className="absolute right-6 top-6 z-[110] rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-all"
            aria-label="Fechar"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-6 z-[110] rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-all hidden md:block"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-6 z-[110] rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-all hidden md:block"
            aria-label="Próximo"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          {/* Main Content Area */}
          <div className="relative flex max-h-[80vh] max-w-[90vw] flex-col items-center justify-center gap-4">
            <img
              src={images[activeIdx].src}
              alt={images[activeIdx].tag}
              className="max-h-[75vh] max-w-[85vw] object-contain rounded-xl shadow-2xl transition-all duration-300"
            />
            
            {/* Caption Info */}
            <div className="text-center text-white">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--gold)]">
                {images[activeIdx].tag}
              </span>
              <h4 className="text-lg font-bold mt-1">
                {images[activeIdx].title}
              </h4>
            </div>
          </div>

          {/* Mobile navigation controls */}
          <div className="absolute bottom-6 flex gap-2 md:hidden">
            <button
              onClick={handlePrev}
              className="rounded-full bg-white/10 px-4 py-2 text-sm text-white"
            >
              Anterior
            </button>
            <button
              onClick={handleNext}
              className="rounded-full bg-white/10 px-4 py-2 text-sm text-white"
            >
              Próximo
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
