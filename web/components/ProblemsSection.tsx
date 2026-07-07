"use client";

import React from "react";

const PROBLEMS = [
  {
    title: "Processos lentos",
    description:
      "Atividades dependem de muitas pessoas, aprovações e tarefas manuais, reduzindo a velocidade da operação.",
  },
  {
    title: "Retrabalho",
    description:
      "As mesmas informações são registradas diversas vezes em planilhas, sistemas e documentos diferentes.",
  },
  {
    title: "Sistemas desconectados",
    description:
      "CRM, ERP, financeiro, atendimento e outras ferramentas não compartilham informações de forma integrada.",
  },
  {
    title: "Pouca visibilidade",
    description:
      "Gestores têm dificuldade para entender o que está acontecendo e onde estão os principais gargalos.",
  },
  {
    title: "Decisões sem dados",
    description:
      "Informações estão espalhadas ou chegam tarde demais para apoiar decisões importantes.",
  },
  {
    title: "IA sem resultado",
    description:
      "Sem processos estruturados e dados organizados, iniciativas de Inteligência Artificial geram pouco valor.",
  },
];

export const ProblemsSection: React.FC = () => {
  return (
    <section
      id="problems"
      className="relative overflow-hidden bg-[#efe8de] py-24"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-3xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#7B4636]">
            Problemas que resolvemos
          </p>

          <h2 className="mt-6 text-[34px] font-normal leading-[1] tracking-[-0.055em] text-[#191714] md:text-[48px]">
            Empresas não deixam de crescer
            <br />
            por falta de tecnologia.
          </h2>

          <p className="mt-8 text-[17px] leading-[1.8] text-[#5f574f]">
            Na maioria das vezes, o problema está na operação. Processos
            desconectados, dados espalhados, decisões lentas e retrabalho
            impedem que a empresa cresça com eficiência.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map((problem) => (
            <div
              key={problem.title}
              className="rounded-[28px] border border-[#7B4636]/10 bg-[#f4efe7] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-[22px] font-normal tracking-[-0.04em] text-[#191714]">
                {problem.title}
              </h3>

              <p className="mt-4 text-[15px] leading-[1.8] text-[#6d655d]">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-[32px] bg-[#23404A] px-10 py-12 text-[#f4efe7]">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#f4efe7]/60">
            Nossa abordagem
          </p>

          <h3 className="mt-5 text-[32px] font-normal leading-[1.1] tracking-[-0.045em]">
            Não implementamos tecnologia
            <br />
            por implementar.
          </h3>

          <p className="mt-6 max-w-3xl text-[17px] leading-[1.85] text-[#f4efe7]/80">
            Primeiro entendemos como sua empresa opera. Depois organizamos
            processos, conectamos sistemas, estruturamos dados e aplicamos
            automação e Inteligência Artificial onde elas realmente geram
            impacto.
          </p>
        </div>
      </div>
    </section>
  );
};
