import { Button } from "@/components/ui/button";

const specialties = [
  "Nutrologia",
  "Protocolos Injetáveis",
  "Emagrecimento",
  "Performance",
  "Longevidade",
];

const AboutSection = () => (
  <section className="px-[6vw] py-28 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
    {/* Image placeholder */}
    <div className="relative">
      <div className="w-full aspect-[3/4] bg-warm relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-[0.7rem] tracking-[0.2em] uppercase text-muted-foreground font-sans text-center whitespace-pre">
          {"FOTO\nDRA. ISABELA"}
        </div>
      </div>
      {/* Accent frame */}
      <div className="absolute -bottom-6 -right-6 w-1/2 h-1/2 border border-primary/35 -z-10 hidden lg:block" />
      {/* Vertical tag */}
      <div className="absolute top-8 -left-7 bg-primary text-primary-foreground text-[0.65rem] tracking-[0.18em] uppercase px-4 py-2.5 hidden lg:block"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
        Especialista
      </div>
    </div>

    {/* Text */}
    <div>
      <p className="eyebrow mb-5">Conheça a especialista</p>
      <h2 className="section-heading text-[clamp(2rem,3vw,2.8rem)] mb-7">
        Dra. Isabella <em className="italic text-primary">Tovar</em>
      </h2>
      <p className="text-[0.88rem] text-muted-foreground leading-[1.9] mb-9">
        Médica que entende que o organismo deve ser cuidado de forma integral,
        sendo que o equilíbrio metabólico, hormonal e nutricional são fundamentos
        da homeostase. Atua principalmente em tratamentos de emagrecimento,
        terapia hormonal, implantes hormonais, harmonização corporal e íntima,
        tratamentos de lipedema, endometriose e saúde integral da mulher.
      </p>

      <div className="flex flex-wrap gap-2.5 mb-12">
        {specialties.map((s) => (
          <span
            key={s}
            className="text-[0.68rem] tracking-[0.14em] uppercase text-primary border border-primary/45 px-4 py-1.5"
          >
            {s}
          </span>
        ))}
      </div>

      <Button variant="darkOutline" size="lg" className="px-10 py-5 h-auto" asChild>
        <a href="#consulta">Saiba mais</a>
      </Button>
    </div>
  </section>
);

export default AboutSection;
