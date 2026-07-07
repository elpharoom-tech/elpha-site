"use client";

import React from "react";

const INTELLIGENT_OPERATION = [
  "Processos bem definidos",
  "Sistemas conectados",
  "Dados que geram informação",
  "Trabalho repetitivo automatizado",
  "IA aplicada onde realmente importa",
  "Evolução baseada em indicadores",
];

const BEFORE = [
  {
    label: "Dados",
    text: "Espalhados em planilhas, sistemas e pessoas.",
  },
  {
    label: "Processos",
    text: "Manuais, lentos e dependentes de improviso.",
  },
  {
    label: "Decisões",
    text: "Baseadas em percepção, não em informação confiável.",
  },
  {
    label: "IA",
    text: "Aplicada sem contexto, gerando pouco impacto real.",
  },
];

const AFTER = [
  {
    label: "Processos",
    text: "Claros, integrados e mensuráveis.",
  },
  {
    label: "Sistemas",
    text: "Conectados, trabalhando como um único fluxo.",
  },
  {
    label: "Dados",
    text: "Organizados para apoiar decisões e automações.",
  },
  {
    label: "IA",
    text: "Aplicada com contexto, objetivo e impacto operacional.",
  },
];

export const OperationSection: React.FC = () => {
  return (
    <section
      id="operation"
      className="relative scroll-mt-[78px] overflow-hidden border-b border-[#7B4636]/10 bg-[#f4efe7] pt-10 pb-20 text-[#191714]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#7B4636_1px,transparent_1px),linear-gradient(to_bottom,#7B4636_1px,transparent_1px)] bg-[size:96px_96px] opacity-[0.018]"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#7B4636]">
              Operação Inteligente
            </p>

            <h2 className="mt-5 max-w-[540px] text-[32px] font-normal leading-[0.95] tracking-[-0.055em] md:text-[38px] xl:text-[40px]">
              Toda empresa possui
              <br />
              uma operação.
              <br />
              Poucas possuem uma
              <br />
              operação inteligente.
            </h2>

            <p className="mt-6 max-w-[560px] text-[15px] leading-[1.75] text-[#5f574f]">
              Uma operação inteligente conecta processos, sistemas, dados,
              automação e inteligência artificial para transformar informações
              em decisões, execução e melhoria contínua.
            </p>

            <div className="mt-8 grid gap-2.5">
              {INTELLIGENT_OPERATION.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-full border border-[#7B4636]/10 bg-[#efe8de]/60 px-4 py-2.5 transition-all duration-300 hover:border-[#23404A]/20 hover:bg-[#f1ebe2]"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#23404A] text-[11px] text-[#f4efe7]">
                    ✓
                  </span>

                  <p className="text-[14px] text-[#5f574f]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative grid gap-6 lg:grid-cols-[0.95fr_auto_1.05fr] lg:items-center">
            <div className="h-fit rounded-[28px] border border-[#7B4636]/10 bg-[#efe8de]/70 p-6">
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#7B4636]">
                Antes
              </p>

              <h3 className="mt-5 text-[22px] font-normal tracking-[-0.04em]">
                Operação fragmentada
              </h3>

              <div className="mt-6 space-y-5">
                {BEFORE.map((item) => (
                  <div key={item.label}>
                    <p className="text-[13px] font-semibold text-[#191714]">
                      {item.label}
                    </p>

                    <p className="mt-1 text-[14px] leading-[1.65] text-[#5f574f]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden items-center justify-center lg:flex">
              <span className="text-[34px] text-[#7B4636]/30">→</span>
            </div>

            <div className="rounded-[30px] bg-[#23404A] p-7 text-[#f4efe7] shadow-xl shadow-[#23404A]/15">
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#f4efe7]/60">
                Depois
              </p>

              <h3 className="mt-5 text-[24px] font-normal tracking-[-0.04em]">
                Operação integrada
              </h3>

              <div className="mt-6 space-y-5">
                {AFTER.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f4efe7]/12 text-[11px]">
                      ✓
                    </span>

                    <div>
                      <p className="text-[13px] font-semibold text-[#f4efe7]">
                        {item.label}
                      </p>

                      <p className="mt-1 text-[14px] leading-[1.65] text-[#f4efe7]/82">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
