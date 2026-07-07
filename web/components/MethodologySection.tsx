"use client";

import React from "react";

const STEPS = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Entendemos a operação, os sistemas, os dados disponíveis e os gargalos.",
  },
  {
    number: "02",
    title: "Arquitetura",
    description:
      "Desenhamos como dados, sistemas, processos e decisões devem se conectar.",
  },
  {
    number: "03",
    title: "Construção",
    description:
      "Implementamos integrações, automações, dashboards, IA e fluxos operacionais.",
  },
  {
    number: "04",
    title: "Implantação",
    description: "Validamos a solução com a operação e acompanhamos a adoção.",
  },
  {
    number: "05",
    title: "Evolução",
    description:
      "Monitoramos resultados, ajustamos fluxos e evoluímos continuamente.",
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
      className="bg-[#f4efe7] px-6 pt-0 pb-16 text-[#191714] md:px-10 md:pb-20"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="relative overflow-hidden rounded-[30px] border border-[#7B4636]/10 bg-[#efe8de]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#7B4636_1px,transparent_1px),linear-gradient(to_bottom,#7B4636_1px,transparent_1px)] bg-[size:88px_88px] opacity-[0.018]"
          />

          <div className="relative grid min-w-0 lg:grid-cols-[360px_minmax(0,1fr)]">
            <div className="min-w-0 border-b border-[#7B4636]/10 p-6 lg:border-b-0 lg:border-r">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#7B4636]">
                Metodologia
              </p>

              <h2 className="mt-5 text-[30px] font-normal leading-[0.96] tracking-[-0.055em] sm:text-[36px] md:text-[40px] xl:text-[42px]">
                Da operação
                <br />
                fragmentada
                <br />
                ao sistema
                <br />
                inteligente.
              </h2>

              <p className="mt-6 max-w-[320px] text-[15px] leading-[1.65] text-[#5f574f]">
                Seguimos um processo simples: entender, projetar, construir,
                implantar e evoluir.
              </p>

              <div className="mt-7 overflow-hidden rounded-[22px] border border-[#7B4636]/10 bg-[#f4efe7]/60 p-5">
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#7B4636]">
                  Fluxo de trabalho
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {FLOW.map((item, index) => (
                    <React.Fragment key={item}>
                      <div className="rounded-xl border border-[#7B4636]/10 bg-[#f4efe7] px-3 py-2">
                        <p className="text-[12px] font-medium text-[#191714]">
                          {item}
                        </p>
                      </div>

                      {index < FLOW.length - 1 && (
                        <span className="text-[#7B4636]/35">→</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            <div className="min-w-0 p-5 md:p-6">
              <div className="space-y-2.5">
                {STEPS.map((step) => (
                  <div
                    key={step.number}
                    className="rounded-[20px] border border-[#7B4636]/10 bg-[#f4efe7]/60 px-5 py-3.5"
                  >
                    <div className="flex min-w-0 gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#7B4636]/15 text-[10px] text-[#7B4636]">
                        {step.number}
                      </span>

                      <div className="min-w-0">
                        <h3 className="text-[17px] font-normal tracking-[-0.04em] text-[#191714]">
                          {step.title}
                        </h3>

                        <p className="mt-1.5 max-w-full text-[13px] leading-[1.55] text-[#5f574f]">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 w-full overflow-hidden rounded-[20px] bg-[#23404A] px-5 py-4 text-[#f4efe7]">
                <p className="text-[9px] uppercase tracking-[0.18em] text-[#f4efe7]/65">
                  Resultado esperado
                </p>

                <h3 className="mt-2 text-[20px] font-normal leading-[1.1] tracking-[-0.03em]">
                  Uma operação que aprende continuamente.
                </h3>

                <p className="mt-2 max-w-full text-[13px] leading-[1.6] text-[#f4efe7]/85">
                  Integramos dados, apoiamos decisões e evoluímos conforme a
                  empresa cresce.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
