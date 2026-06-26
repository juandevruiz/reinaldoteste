import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Benefits from "@/components/Benefits";
import Modalities from "@/components/Modalities";
import AthleteSection from "@/components/AthleteSection";
import Gallery from "@/components/Gallery";
import AboutUnit from "@/components/AboutUnit";
import LeadForm from "@/components/LeadForm";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Reinaldo da Silva × Ademicon | Consórcio Inteligente Sem Juros" },
      { name: "description", content: "Planeje suas conquistas de imóvel, automóvel e serviços com o consórcio Ademicon e a chancela do embaixador Reinaldo da Silva. Simule parcelas sem juros." },
      { property: "og:title", content: "Reinaldo da Silva × Ademicon | Consórcio Inteligente Sem Juros" },
      { property: "og:description", content: "Realize conquistas patrimoniais de imóvel, veículos ou frotas comerciais com o consórcio Ademicon e Reinaldo da Silva. Simule sem juros bancários." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Reinaldo da Silva × Ademicon Consórcios",
        description: "Consórcio Ademicon com a confiança de Reinaldo da Silva.",
        areaServed: "BR",
      }),
    }],
  }),
  component: LandingPage,
});

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal, .reveal-group");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
          }
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function LandingPage() {
  useReveal();

  return (
    <main className="relative overflow-x-clip bg-background text-foreground selection:bg-[var(--gold)] selection:text-[var(--background)]">
      <Nav />
      <Hero />
      <TrustBar />
      <Benefits />
      <Modalities />
      <AthleteSection />
      <Gallery />
      <AboutUnit />
      <CTA />
      <LeadForm />
      <FAQ />
      <Footer />
    </main>
  );
}
