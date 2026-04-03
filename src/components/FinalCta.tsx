import { Button } from "@/components/ui/button";

const FinalCta = () => (
  <section id="consulta" className="bg-deep py-28 px-[6vw] text-center relative overflow-hidden">
    {/* Decorative circles */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full border border-primary/12 pointer-events-none" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] rounded-full border border-primary/8 pointer-events-none" />

    <div className="relative z-10">
      <p className="eyebrow mb-6">Pronto para começar?</p>
      <h2 className="font-serif text-[clamp(2.2rem,4vw,3.8rem)] font-light text-cream leading-tight mb-5">
        Seu protocolo <em className="italic text-gold-light">personalizado</em><br />
        começa aqui
      </h2>
      <p className="text-[0.85rem] text-cream/50 mb-14 tracking-wide">
        Agende sua consulta e descubra o tratamento ideal para o seu corpo.
      </p>
      <Button variant="gold" size="lg" className="px-14 py-6 h-auto text-[0.75rem] tracking-[0.24em]" asChild>
        <a href="https://wa.me/5562996093076" target="_blank" rel="noopener noreferrer">Agendar consulta</a>
      </Button>
    </div>
  </section>
);

export default FinalCta;
