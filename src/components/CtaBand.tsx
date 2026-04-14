import { Button } from "@/components/ui/button";

const CtaBand = () => (
  <section className="bg-primary/10 py-16 px-6 md:px-12">
    <div className="max-w-3xl mx-auto text-center">
      <p className="font-serif text-[clamp(1.4rem,2.5vw,2rem)] font-light text-foreground leading-snug mb-8">
        Seu protocolo <em className="italic text-primary">personalizado</em> começa
        com uma consulta médica
      </p>
      <Button variant="sage" size="lg" className="px-12 py-5 h-auto" asChild>
        <a href="https://wa.me/5562996093076" target="_blank" rel="noopener noreferrer">Agendar agora</a>
      </Button>
    </div>
  </section>
);

export default CtaBand;
