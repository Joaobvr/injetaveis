import { Button } from "@/components/ui/button";

const CtaBand = () => (
  <section className="bg-primary py-16 px-[6vw] flex flex-col md:flex-row items-center justify-between gap-10">
    <p className="font-serif text-[clamp(1.5rem,2.5vw,2.2rem)] font-light text-primary-foreground leading-snug text-center md:text-left">
      Seu protocolo <em className="italic">personalizado</em> começa<br className="hidden md:block" /> com uma consulta médica
    </p>
    <Button variant="light" size="lg" className="px-10 py-5 h-auto whitespace-nowrap" asChild>
      <a href="#consulta">Agendar agora</a>
    </Button>
  </section>
);

export default CtaBand;
