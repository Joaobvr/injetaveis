import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Decorative radial */}
      <div className="absolute -top-[10%] -right-[8%] w-[55vw] h-[55vw] rounded-full bg-[radial-gradient(circle,hsl(var(--gold-light)/0.12)_0%,transparent_70%)] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center px-[6vw] pt-32 pb-20 min-h-screen">
        {/* Left */}
        <div className="lg:pr-[8vw] animate-fade-up lg:border-r border-primary/15">
          <p className="eyebrow flex items-center gap-3.5 mb-7">
            <span className="w-9 h-px bg-primary" />
            Protocolos Injetáveis
          </p>
          <h1 className="section-heading text-[clamp(2.8rem,5vw,4.6rem)] mb-7">
            Promova o <em className="italic text-primary">equilíbrio</em> do seu<br />
            organismo e a <em className="italic text-primary">alta performance</em><br />
            metabólica com precisão e segurança
          </h1>
          <p className="text-[0.9rem] font-light text-muted-foreground max-w-[420px] mb-12 tracking-wide leading-[1.85]">
            Protocolos personalizados de suplementação oral e injetável,
            com indicação médica e acompanhamento especializado —
            para resultados reais com segurança absoluta.
          </p>
          <Button variant="gold" size="lg" className="px-10 py-5 h-auto" asChild>
            <a href="https://wa.me/5562996093076" target="_blank" rel="noopener noreferrer">
              Agendar minha consulta
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>

        {/* Right */}
        <div className="flex flex-col items-start lg:pl-[6vw] mt-16 lg:mt-0 animate-fade-up-delay">
          <blockquote className="font-serif text-[0.85rem] italic text-muted-foreground border-l-2 border-primary pl-5 mb-9 leading-[1.9]">
            "Tratamentos estratégicos,<br />
            seguros e individualizados,<br />
            sob indicação médica."
            <strong className="font-sans text-[0.72rem] not-italic tracking-[0.12em] text-primary block mt-3">
              — Dra. Isabella Tovar
            </strong>
          </blockquote>

          <div className="flex gap-12">
            {[
              { number: "+8", label: "Protocolos ativos" },
              { number: "100%", label: "Indicação médica" },
              { number: "∞", label: "Personalização" },
            ].map((stat) => (
              <div key={stat.label} className="text-left">
                <div className="font-serif text-[2.8rem] font-light text-foreground leading-none">
                  {stat.number}
                </div>
                <div className="text-[0.68rem] tracking-[0.16em] uppercase text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
