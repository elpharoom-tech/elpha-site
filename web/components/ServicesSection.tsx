"use client";

import React from "react";

const SERVICES = [
  {
    number: "01",
    title: "Engenharia de Dados",
    description:
      "Estruturamos, organizamos e integramos dados provenientes de ERPs, CRMs, APIs, planilhas e sistemas internos para criar uma base confiável para decisões e automações.",
  },
  {
    number: "02",
    title: "Business Intelligence",
    description:
      "Transformamos dados em dashboards, indicadores e análises que ajudam líderes a entender a operação e tomar decisões com mais clareza.",
  },
  {
    number: "03",
    title: "Inteligência Artificial",
    description:
      "Desenvolvemos soluções de IA capazes de apoiar decisões, automatizar análises, prever cenários e aumentar a produtividade da operação.",
  },
  {
    number: "04",
    title: "Automação de Processos",
    description:
      "Eliminamos tarefas repetitivas por meio de workflows, agentes inteligentes e automações que reduzem erros, tempo operacional e retrabalho.",
  },
  {
    number: "05",
    title: "Integração de Sistemas",
    description:
      "Conectamos sistemas, APIs e plataformas para eliminar silos de informação e permitir que toda a operação funcione de forma integrada.",
  },
  {
    number: "06",
    title: "Engenharia de Operações",
    description:
      "Projetamos operações inteligentes combinando dados, IA, automação e processos para que diferentes áreas da empresa trabalhem como um único sistema.",
  },
];

export const ServicesSection = () => {
  return (
    <section
      id="services"
      className="bg-[#f4efe7] px-6 pt-0 pb-20 text-[#191714] md:px-10 md:pt-2 md:pb-24"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="max-w-[780px]">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#7B4636]">
            Capacidades
          </p>

          <h2
            className="
              mt-5
              text-[32px]
              font-normal
              leading-[1]
              tracking-[-0.055em]
              sm:text-[40px]
              md:text-[48px]
            "
          >
            Construímos os componentes
            <br />
            que sustentam operações
            <br />
            inteligentes.
          </h2>

          <p
            className="
              mt-8
              max-w-[680px]
              text-[17px]
              leading-[1.8]
              text-[#5f574f]
            "
          >
            Cada empresa possui desafios diferentes, mas operações inteligentes
            normalmente são construídas combinando engenharia de dados,
            inteligência artificial, automação, integrações e arquitetura de
            processos.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.number}
              className="
                rounded-[24px]
                border border-[#7B4636]/10
                bg-[#efe8de]/60
                p-7
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#7B4636]/20
              "
            >
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#7B4636]">
                {service.number}
              </p>

              <h3
                className="
                  mt-5
                  text-[24px]
                  font-normal
                  tracking-[-0.04em]
                  text-[#191714]
                "
              >
                {service.title}
              </h3>

              <p
                className="
                  mt-5
                  text-[15px]
                  leading-[1.8]
                  text-[#5f574f]
                "
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
