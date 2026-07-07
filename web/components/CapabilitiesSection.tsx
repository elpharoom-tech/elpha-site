"use client";

import React from "react";

const CAPABILITIES = [
  {
    number: "01",
    title: "Processos",
    description:
      "Mapeamos fluxos, regras e gargalos para tornar a operação mais clara, mensurável e escalável.",
    example:
      "Ex.: reduzimos um fluxo de aprovação de 6 etapas manuais para 2 etapas com validação automática.",
    highlight: false,
  },
  {
    number: "02",
    title: "Dados",
    description:
      "Estruturamos dados para transformar informações dispersas em uma base confiável para decisões.",
    example:
      "Ex.: unificamos pedidos, financeiro e CRM em uma única base para relatórios diários.",
    highlight: false,
  },
  {
    number: "03",
    title: "Sistemas",
    description:
      "Conectamos ferramentas, ERPs, CRMs, planilhas e APIs para reduzir silos e retrabalho.",
    example:
      "Ex.: integração entre ERP e CRM elimina o lançamento manual de pedidos em duas telas.",
    highlight: false,
  },
  {
    number: "04",
    title: "Automação",
    description:
      "Automatizamos tarefas repetitivas, repasses, alertas e fluxos operacionais.",
    example:
      "Ex.: repasse automático de leads do site para o time comercial via WhatsApp em segundos.",
    highlight: false,
  },
  {
    number: "05",
    title: "Inteligência Artificial",
    description:
      "Aplicamos IA para interpretar informações, apoiar decisões e acelerar análises com contexto.",
    example:
      "Ex.: triagem automática de tickets de suporte por urgência e tema antes de chegar ao time.",
    highlight: true,
  },
  {
    number: "06",
    title: "Evolução",
    description:
      "Criamos indicadores para acompanhar resultados, ajustar processos e melhorar continuamente.",
    example:
      "Ex.: painel semanal de indicadores operacionais substitui reuniões de status manuais.",
    highlight: false,
  },
];

export const CapabilitiesSection = () => {
  return (
    <section
      id="capabilities"
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
              className={`
                rounded-[22px]
                border
                px-6
                py-6
                transition-all
                duration-300
                hover:-translate-y-1
                ${
                  capability.highlight
                    ? "border-[#23404A]/35 bg-[#efe8de]/90 shadow-sm shadow-[#23404A]/10 hover:border-[#23404A]/50"
                    : "border-[#7B4636]/10 bg-[#efe8de]/60 hover:border-[#23404A]/20 hover:bg-[#f1ebe2]"
                }
              `}
            >
              <div className="flex items-center justify-between">
                <p className="text-[10px] uppercase tracking-[0.20em] text-[#7B4636]">
                  {capability.number}
                </p>

                {capability.highlight && (
                  <span className="rounded-full bg-[#23404A]/10 px-2.5 py-1 text-[9.5px] font-semibold uppercase tracking-[0.14em] text-[#23404A]">
                    Diferencial
                  </span>
                )}
              </div>

              <h3 className="mt-4 text-[21px] font-normal leading-[1.15] tracking-[-0.04em] text-[#191714]">
                {capability.title}
              </h3>

              <p className="mt-3 max-w-[320px] text-[14px] leading-[1.65] text-[#5f574f]">
                {capability.description}
              </p>

              <div className="mt-4 border-t border-[#7B4636]/10 pt-3">
                <p className="max-w-[320px] text-[12.5px] italic leading-[1.6] text-[#6d655d]">
                  {capability.example}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
