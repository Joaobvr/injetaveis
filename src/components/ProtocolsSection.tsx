import { Check } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const protocols = [
  "Acelerador Metabólico",
  "Boost Capilar",
  "Ganho de Massa Muscular",
  "Detox Hepático",
  "Desinflamação Sistêmica",
  "Revitalização Energética",
  "Imunidade Avançada",
  "Qualidade do Sono",
];

const ProtocolsSection = () => (
  <section id="protocolos" className="py-24 px-6 md:px-12">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-14">
        <p className="eyebrow mb-5">Objetivos que podem ser maximizados</p>
        <h2 className="section-heading text-[clamp(1.8rem,3.5vw,2.8rem)]">
          O que os protocolos{" "}
          <em className="italic text-primary">injetáveis podem oferecer</em>
        </h2>
      </div>

      <TooltipProvider delayDuration={200}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {protocols.map((name) => {
            const isAcelerador = name === "Acelerador Metabólico";
            const isBoostCapilar = name === "Boost Capilar";
            const isGanhoMassa = name === "Ganho de Massa Muscular";
            const isDetox = name === "Detox Hepático";
            const isDesinflamacao = name === "Desinflamação Sistêmica";
            const isRevitalizacao = name === "Revitalização Energética";
            const isImunidade = name === "Imunidade Avançada";
            const isSono = name === "Qualidade do Sono";

            const tooltipContent = isAcelerador
              ? "Protocolos ajustados à necessidade do seu organismo para otimizar a metabolização de carboidratos e gorduras"
              : isBoostCapilar
              ? "Combinação de suplementos que atuam na prevenção e tratamento de queda capilar no emagrecimento"
              : isGanhoMassa
              ? "Protocolos que contribuem com a disponibilidade de aminoácidos e estimulam processos anabólicos no tecido muscular"
              : isDetox
              ? "Suplementação com cofatores enzimáticos e antioxidantes que contribuem com a neutralização de toxinas e saúde do fígado"
              : isDesinflamacao
              ? "Protocolos estruturados para reduzir inflamação crônica, neutralizar radicais livres e reduzir degradação celular"
              : isRevitalizacao
              ? "Otimizar atividade mitocondrial e metabólica que contribuem com disposição e bem-estar"
              : isImunidade
              ? "Protocolo de suplementação que otimiza a atividade do sistema imune"
              : isSono
              ? "Protocolos personalizados que contribuem com um sono reparador"
              : null;

            const card = (
              <div
                key={name}
                className="flex items-center gap-3 bg-cream-dark rounded-xl px-5 py-4 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-[0.9rem] text-foreground font-light">
                  {name}
                </span>
              </div>
            );

            if (tooltipContent) {
              return (
                <Tooltip key={name}>
                  <TooltipTrigger asChild>{card}</TooltipTrigger>
                  <TooltipContent
                    side="top"
                    className="max-w-xs text-center bg-popover text-popover-foreground"
                  >
                    <p>{tooltipContent}</p>
                  </TooltipContent>
                </Tooltip>
              );
            }

            return card;
          })}
        </div>
      </TooltipProvider>

      <p className="text-center text-muted-foreground text-[0.82rem] mt-10">
        Cada tratamento é definido após avaliação médica individual.
      </p>
    </div>
  </section>
);

export default ProtocolsSection;
