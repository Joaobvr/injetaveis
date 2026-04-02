const IntroSection = () => (
  <section className="px-[6vw] py-20 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-20 items-start">
    <div className="eyebrow pt-2">Sobre os protocolos</div>
    <p className="font-serif text-[clamp(1.3rem,2.2vw,1.75rem)] font-light leading-[1.65] text-charcoal">
      A Dra. Isabella Tovar inclui em seus tratamentos{" "}
      <strong className="font-medium text-foreground">
        protocolos de suplementação oral e injetável
      </strong>
      , quando indicados, como estratégia complementar para ampliar resultados
      clínicos de maneira{" "}
      <strong className="font-medium text-foreground">
        segura, eficaz e completamente personalizada
      </strong>{" "}
      para cada paciente.
    </p>
  </section>
);

export default IntroSection;
