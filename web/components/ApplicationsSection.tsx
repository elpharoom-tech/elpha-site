"use client";

import React from "react";

const APPLICATIONS = [
  {
    number: "01",
    title: "Comercial",
    description: "Pipeline, CRM, previsão de vendas e inteligência comercial.",
  },
  {
    number: "02",
    title: "Financeiro",
    description: "Fluxo de caixa, indicadores, previsões e apoio à decisão.",
  },
  {
    number: "03",
    title: "Operações",
    description: "Automação, integração entre equipes e redução de retrabalho.",
  },
  {
    number: "04",
    title: "Customer Success",
    description:
      "Health score, churn, onboarding, automações e retenção de clientes.",
  },
  {
    number: "05",
    title: "Pessoas",
    description: "People Analytics, indicadores e automações internas.",
  },
  {
    number: "06",
    title: "Tecnologia",
    description:
      "Engenharia de dados, IA, Machine Learning, MLOps, dashboards e plataformas inteligentes.",
  },
];

export const ApplicationsSection = () => {
  return (
    <section
      id="applications"
      className="bg-[#f4efe7] px-6 pt-4 pb-16 text-[#191714] md:px-10 md:pt-6 md:pb-20"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-10 lg:grid-cols-[420px_1fr] lg:items-start">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#7B4636]">
              Onde atuamos
            </p>

            <h2 className="mt-4 text-[30px] font-normal leading-[0.96] tracking-[-0.055em] sm:text-[36px] md:text-[40px] xl:text-[44px]">
              A mesma
              <br />
              engenharia.
              <br />
              Diferentes áreas.
            </h2>

            <p className="mt-6 max-w-[360px] text-[15px] leading-[1.7] text-[#5f574f]">
              Aplicamos dados, IA, automação e integrações para transformar
              qualquer área da empresa em uma operação mais eficiente.
            </p>

            <div className="mt-7 rounded-[24px] bg-[#23404A] px-6 py-5 text-[#f4efe7]">
              <p className="text-[10px] uppercase tracking-[0.18em] text-[#f4efe7]/70">
                Nossa abordagem
              </p>

              <h3 className="mt-3 text-[22px] font-normal leading-[1.08] tracking-[-0.04em]">
                A tecnologia muda.
                <br />A engenharia permanece.
              </h3>

              <p className="mt-4 text-[14px] leading-[1.65] text-[#f4efe7]/85">
                Conectamos dados, processos e decisões para construir operações
                inteligentes.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {APPLICATIONS.map((area) => (
              <div
                key={area.number}
                className="
                  flex min-h-[170px] flex-col
                  rounded-[24px]
                  border border-[#7B4636]/10
                  bg-[#efe8de]/55
                  px-7 py-6
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-[#7B4636]/20
                  hover:bg-[#f1ebe2]
                "
              >
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#7B4636]">
                  {area.number}
                </p>

                <h3 className="mt-4 text-[18px] font-normal tracking-[-0.035em]">
                  {area.title}
                </h3>

                <p className="mt-3 max-w-[280px] text-[14px] leading-[1.65] text-[#5f574f]">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
