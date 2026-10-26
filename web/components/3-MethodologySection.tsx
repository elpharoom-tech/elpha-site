"use client";

const STEPS = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Entendemos o negócio, os sistemas e os principais gargalos da operação.",
  },
  {
    number: "02",
    title: "Arquitetura",
    description:
      "Definimos como dados, sistemas e processos devem trabalhar em conjunto.",
  },
  {
    number: "03",
    title: "Construção",
    description:
      "Desenvolvemos soluções, integrações, análises e automações sob medida.",
  },
  {
    number: "04",
    title: "Implantação",
    description:
      "Validamos a solução com a equipe e apoiamos sua adoção na rotina.",
  },
  {
    number: "05",
    title: "Evolução",
    description:
      "Acompanhamos os resultados e aprimoramos a solução continuamente.",
  },
];

const FLOW = [
  "Diagnóstico",
  "Arquitetura",
  "Construção",
  "Implantação",
  "Evolução",
];

export const MethodologySection = () => {
  return (
    <section
      id="how-it-works"
      aria-labelledby="methodology-title"
      className="scroll-mt-24 bg-[#f4efe7] px-5 pt-0 pb-12 text-[#191714] sm:px-8 sm:pb-16 md:px-10 md:pb-20"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="relative overflow-hidden rounded-[26px] border border-[#7B4636]/10 bg-[#efe8de] sm:rounded-[30px]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#7B4636_1px,transparent_1px),linear-gradient(to_bottom,#7B4636_1px,transparent_1px)] bg-[size:88px_88px] opacity-[0.018]"
          />

          <div className="relative grid min-w-0 lg:grid-cols-[340px_minmax(0,1fr)] xl:grid-cols-[380px_minmax(0,1fr)]">
            {/* Introdução */}
            <div className="min-w-0 border-b border-[#7B4636]/10 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-9 xl:p-10">
              <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#7B4636]">
                Como trabalhamos
              </p>

              <h2
                id="methodology-title"
                className="mt-5 max-w-[340px] text-[32px] font-normal leading-[1.02] tracking-[-0.055em] sm:text-[38px] xl:text-[43px]"
              >
                Da complexidade à clareza operacional.
              </h2>

              <p className="mt-5 max-w-[320px] text-[14px] leading-[1.75] text-[#5f574f] sm:text-[15px]">
                Combinamos visão de negócio e execução técnica para transformar
                desafios em soluções práticas, integradas e preparadas para
                evoluir.
              </p>

              {/* Fluxo visual */}
              <div className="mt-7 rounded-[20px] border border-[#7B4636]/10 bg-[#f4efe7]/55 p-4 sm:mt-9 sm:p-5">
                <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#7B4636]">
                  Nosso processo
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2">
                  {FLOW.map((item, index) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="rounded-lg border border-[#7B4636]/10 bg-[#f4efe7] px-2.5 py-2 text-[11px] font-medium text-[#191714]">
                        {item}
                      </span>

                      {index < FLOW.length - 1 && (
                        <span
                          aria-hidden="true"
                          className="text-[12px] text-[#7B4636]/50"
                        >
                          →
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Etapas */}
            <div className="min-w-0 p-4 sm:p-6 lg:p-8 xl:p-9">
              <div className="space-y-2.5">
                {STEPS.map((step) => (
                  <article
                    key={step.number}
                    className="group rounded-[18px] border border-[#7B4636]/10 bg-[#f4efe7]/65 px-4 py-4 transition-colors duration-200 hover:bg-[#f4efe7] sm:px-5"
                  >
                    <div className="flex min-w-0 items-start gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#7B4636]/20 text-[10px] font-medium tabular-nums text-[#7B4636] transition-colors duration-200 group-hover:border-[#7B4636]/50">
                        {step.number}
                      </span>

                      <div className="min-w-0 flex-1">
                        <h3 className="text-[16px] font-medium tracking-[-0.025em] text-[#191714] sm:text-[17px]">
                          {step.title}
                        </h3>

                        <p className="mt-1.5 max-w-[520px] text-[13px] leading-[1.65] text-[#5f574f] sm:text-[14px]">
                          {step.description}
                        </p>
                      </div>

                      <span
                        aria-hidden="true"
                        className="mt-1 text-[15px] text-[#7B4636]/35 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-[#7B4636]"
                      >
                        ↗
                      </span>
                    </div>
                  </article>
                ))}
              </div>

              {/* Fechamento */}
              <div className="mt-3.5 rounded-[18px] bg-[#23404A] px-5 py-5 text-[#f4efe7] sm:px-6 sm:py-6">
                <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#f4efe7]/65">
                  O objetivo
                </p>

                <h3 className="mt-2.5 text-[21px] font-normal leading-[1.15] tracking-[-0.035em] sm:text-[23px]">
                  Tecnologia que acompanha o negócio.
                </h3>

                <p className="mt-2 max-w-[540px] text-[13px] leading-[1.7] text-[#f4efe7]/80">
                  Soluções conectadas à realidade da empresa, com foco em
                  eficiência, decisões melhores e evolução sustentável.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
