const protocols = [
  { id: "01", title: "Acelerador Metabólico", desc: "Estimulação do metabolismo celular para potencializar o processo de emagrecimento, com maior queima calórica e equilíbrio hormonal." },
  { id: "02", title: "Boost Capilar", desc: "Protocolo de proteção e fortalecimento capilar para combater a queda de cabelo, com nutrientes biodisponíveis de absorção rápida." },
  { id: "03", title: "Ganho de Massa Muscular", desc: "Suporte nutricional injetável para maximizar a síntese proteica, a recuperação muscular e a composição corporal saudável." },
  { id: "04", title: "Detox Hepático", desc: "Suporte ao fígado com micronutrientes e antioxidantes que auxiliam na depuração hepática, favorecendo equilíbrio metabólico e disposição." },
  { id: "05", title: "Desinflamação Sistêmica", desc: "Redução da inflamação crônica de baixo grau, que compromete energia, peso e qualidade de vida." },
  { id: "06", title: "Revitalização Energética", desc: "Reposição de vitaminas e minerais essenciais para restaurar vitalidade, disposição e clareza mental no dia a dia." },
  { id: "07", title: "Imunidade Avançada", desc: "Fortalecimento do sistema imunológico com antioxidantes e nutrientes de alta biodisponibilidade." },
  { id: "08", title: "Skin Glow", desc: "Protocolo de rejuvenescimento e luminosidade da pele com vitaminas, aminoácidos e ativos antioxidantes." },
];

const ProtocolsSection = () => (
  <section id="protocolos" className="bg-charcoal py-24 px-[6vw] relative overflow-hidden">
    {/* Decorative */}
    <div className="absolute -bottom-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,hsl(var(--gold)/0.08)_0%,transparent_70%)] pointer-events-none" />

    <div className="text-center mb-16 relative z-10">
      <p className="eyebrow mb-5">Objetivos que podem ser maximizados</p>
      <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-light text-cream leading-tight">
        O que os protocolos<br />
        <em className="italic text-gold-light">injetáveis podem oferecer</em>
      </h2>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-primary/15 relative z-10">
      {protocols.map((p) => (
        <div
          key={p.id}
          className="bg-charcoal p-10 relative overflow-hidden group transition-colors duration-300 hover:bg-[rgba(255,255,255,0.03)]"
        >
          {/* Bottom gold line on hover */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />
          <span className="font-serif text-[0.75rem] text-primary tracking-[0.2em] mb-3 block">
            {p.id}
          </span>
          <h3 className="font-serif text-[1.35rem] font-normal text-cream mb-3 leading-snug">
            {p.title}
          </h3>
          <p className="text-[0.82rem] text-cream/55 leading-[1.75]">{p.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ProtocolsSection;
