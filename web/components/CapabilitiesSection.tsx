"use client";

import React from "react";

const CAPABILITIES = [
  {
    number: "01",
    title: "Processos",
    description:
      "Mapeamos fluxos, regras e gargalos para tornar a operação mais clara, mensurável e escalável.",
  },
  {
    number: "02",
    title: "Dados",
    description:
      "Estruturamos dados para transformar informações dispersas em uma base confiável para decisões.",
  },
  {
    number: "03",
    title: "Sistemas",
    description:
      "Conectamos ferramentas, ERPs, CRMs, planilhas e APIs para reduzir silos e retrabalho.",
  },
  {
    number: "04",
    title: "Automação",
    description:
      "Automatizamos tarefas repetitivas, repasses, alertas e fluxos operacionais.",
  },
  {
    number: "05",
    title: "Inteligência Artificial",
    description:
      "Aplicamos IA para interpretar informações, apoiar decisões e acelerar análises com contexto.",
  },
  {
    number: "06",
    title: "Evolução",
    description:
      "Criamos indicadores para acompanhar resultados, ajustar processos e melhorar continuamente.",
  },
];

export const CapabilitiesSection = () => {
  return (
    <section
      id="services"
      className="
        relative
        scroll-mt-[78px]
        overflow-hidden
        border-t border-[#7B4636]/10
        bg-[#f4efe7]
        pt-10
        pb-24
        text-[#191714]
      "
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#7B4636_1px,transparent_1px),linear-gradient(to_bottom,#7B4636_1px,transparent_1px)] bg-[size:96px_96px] opacity-[0.018]"
      />

      <div className="relative mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="max-w-[760px]">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#7B4636]">
            Capacidades
          </p>

          <h2 className="mt-4 text-[30px] font-normal leading-[0.98] tracking-[-0.055em] sm:text-[36px] md:text-[40px] xl:text-[42px]">
            Construímos as camadas
            <br />
            que tornam uma operação
            <br />
            inteligente.
          </h2>

          <p className="mt-5 max-w-[580px] text-[15px] leading-[1.7] text-[#5f574f]">
            Unimos processos, dados, sistemas, automação e inteligência
            artificial para criar operações mais integradas, eficientes e
            preparadas para evoluir.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {CAPABILITIES.map((capability) => (
            <div
              key={capability.number}
              className="
                rounded-[22px]
                border border-[#7B4636]/10
                bg-[#efe8de]/60
                px-6
                py-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#23404A]/20
                hover:bg-[#f1ebe2]
              "
            >
              <p className="text-[10px] uppercase tracking-[0.20em] text-[#7B4636]">
                {capability.number}
              </p>

              <h3 className="mt-4 text-[21px] font-normal leading-[1.15] tracking-[-0.04em] text-[#191714]">
                {capability.title}
              </h3>

              <p className="mt-3 max-w-[320px] text-[14px] leading-[1.65] text-[#5f574f]">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
