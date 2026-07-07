"use client";

import React from "react";

const PRINCIPLES = [
  {
    number: "01",
    title: "Honestidade antes da venda",
    description:
      "Antes de iniciar qualquer projeto, avaliamos se realmente conseguimos gerar valor. Se não fizer sentido, diremos isso.",
  },
  {
    number: "02",
    title: "Prazos realistas",
    description:
      "Os cronogramas são definidos considerando complexidade técnica, riscos e dependências reais.",
  },
  {
    number: "03",
    title: "Transparência no processo",
    description:
      "Compartilhamos evolução, dificuldades, mudanças de escopo e decisões técnicas durante a execução.",
  },
  {
    number: "04",
    title: "Engenharia acima da ferramenta",
    description:
      "Escolhemos a solução adequada para cada problema: dados, BI, IA, integrações ou automações.",
  },
  {
    number: "05",
    title: "Entrega com contexto",
    description:
      "Entregamos documentação, arquitetura e conhecimento para que sua equipe compreenda a solução.",
  },
];

export const WorkPrinciplesSection = () => {
  return (
    <section
      id="principles"
      className="bg-[#f4efe7] px-6 pt-6 pb-16 text-[#191714] md:px-10 md:pt-8 md:pb-20"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-12 lg:grid-cols-[420px_1fr] lg:items-start">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#7B4636]">
              Nossa forma de trabalhar
            </p>

            <h2 className="mt-5 text-[34px] font-normal leading-[1] tracking-[-0.055em] md:text-[40px]">
              Construímos
              <br />
              relações antes
              <br />
              de projetos.
            </h2>

            <p className="mt-6 max-w-[390px] text-[15px] leading-[1.7] text-[#5f574f]">
              Buscamos construir soluções que façam sentido para o negócio,
              sejam sustentáveis e evoluam junto com a empresa.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[30px] border border-[#7B4636]/10 bg-[#efe8de]/70">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#7B4636_1px,transparent_1px),linear-gradient(to_bottom,#7B4636_1px,transparent_1px)] bg-[size:88px_88px] opacity-[0.016]"
            />

            <div className="relative max-h-[620px] overflow-y-auto p-5 pr-4 md:p-6 md:pr-5">
              <div className="space-y-4">
                {PRINCIPLES.map((item) => (
                  <div
                    key={item.number}
                    className="rounded-[24px] border border-[#7B4636]/10 bg-[#f4efe7]/70 px-6 py-5"
                  >
                    <div className="flex gap-5">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#7B4636]/15 text-[11px] text-[#7B4636]">
                        {item.number}
                      </span>

                      <div>
                        <h3 className="text-[20px] font-normal tracking-[-0.035em]">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-[14px] leading-[1.65] text-[#5f574f]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="rounded-[24px] bg-[#23404A] px-7 py-6 text-[#f4efe7]">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[#f4efe7]/65">
                    Nosso compromisso
                  </p>

                  <h3 className="mt-3 text-[22px] font-normal tracking-[-0.03em]">
                    Clareza, responsabilidade e previsibilidade.
                  </h3>

                  <p className="mt-4 text-[14px] leading-[1.7] text-[#f4efe7]/85">
                    Preferimos perder um projeto a vender uma solução
                    inadequada. Trabalhamos com comunicação transparente, prazos
                    realistas e decisões técnicas fundamentadas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
