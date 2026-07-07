"use client";

import React from "react";

const WHATSAPP_URL =
  "https://wa.me/5511976377919?text=Olá!%20Gostaria%20de%20solicitar%20um%20diagnóstico%20para%20entender%20como%20a%20Elpha%20Room%20pode%20ajudar%20minha%20empresa%20a%20construir%20uma%20operação%20mais%20inteligente.";

const trackEvent = (eventName: string, label: string) => {
  if (
    typeof window !== "undefined" &&
    typeof (window as any).gtag === "function"
  ) {
    (window as any).gtag("event", eventName, {
      event_category: "lead",
      event_label: label,
    });
  }
};

const SOURCES = ["Clientes", "Pedidos", "ERP", "CRM", "Financeiro", "Equipe"];

const OUTPUTS = ["Decisões", "Automações", "Integrações", "Escala"];

const COMPANIES = ["Santander", "Vivo", "Via", "Ambev"];

export const HeroSection = () => {
  return (
    <section className="relative flex min-h-[calc(112svh-78px)] overflow-hidden bg-[#f4efe7] pt-24 pb-20 text-[#191714] md:pt-28 md:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#7B4636_1px,transparent_1px),linear-gradient(to_bottom,#7B4636_1px,transparent_1px)] bg-[size:96px_96px] opacity-[0.022]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-120px] top-[330px] h-[340px] w-[340px] rounded-full border border-[#7B4636]/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-150px] top-[10px] h-[400px] w-[400px] rounded-full border border-[#23404A]/10"
      />

      <div className="relative mx-auto flex w-full max-w-7xl items-start px-6 md:px-10">
        <div className="grid w-full items-start gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-14">
          <div>
            <p className="mb-8 text-[11px] font-medium uppercase tracking-[0.22em] text-[#7B4636]">
              Engenharia de Operações Inteligentes
            </p>

            <h1 className="max-w-[760px] text-[34px] font-normal leading-[0.96] tracking-[-0.058em] text-[#191714] sm:text-[40px] md:text-[46px] xl:text-[52px]">
              Sua empresa já opera
              <br />
              como um sistema.
              <br />
              Nós tornamos esse
              <br />
              sistema inteligente.
            </h1>

            <p className="mt-8 max-w-[540px] text-[17px] leading-[1.75] text-[#5f574f]">
              Redesenhamos a forma como processos, dados, sistemas, automação e
              inteligência artificial trabalham juntos para tornar empresas mais
              eficientes, previsíveis e escaláveis.
            </p>

            <div className="mt-6 border-l-2 border-[#23404A]/20 pl-5">
              <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#23404A]">
                +10 anos de experiência em projetos globais
              </p>

              <p className="mt-2 text-[14px] leading-[1.7] text-[#6d655d]">
                Engenharia de Dados • IA • Machine Learning • MLOps •
                Plataformas de IA
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {COMPANIES.map((company) => (
                  <span
                    key={company}
                    className="rounded-full border border-[#7B4636]/10 bg-[#efe8de]/60 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-[#8b8175]"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("whatsapp_click", "hero_cta")}
                className="inline-flex items-center justify-center rounded-full bg-[#23404A] px-7 py-3.5 text-[13px] font-semibold text-[#f4efe7] shadow-sm shadow-[#23404A]/15 transition-all duration-300 hover:-translate-y-[1px] hover:bg-[#191714] hover:shadow-lg hover:shadow-[#191714]/15"
              >
                Solicitar diagnóstico
              </a>

              <a
                href="/#how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-[#7B4636]/20 px-6 py-3.5 text-[12px] font-medium text-[#191714] transition-all duration-300 hover:border-[#7B4636]/40 hover:bg-[#ede7dd]"
              >
                Conheça a metodologia
              </a>
            </div>

            <p className="mt-6 flex items-start gap-2 text-[13px] leading-[1.65] text-[#6d655d]">
              <span className="mt-[1px] text-[#23404A]">✓</span>
              <span>
                <strong className="block font-semibold text-[#191714]">
                  Diagnóstico inicial gratuito
                </strong>
                <span>Sem compromisso • 30 minutos</span>
              </span>
            </p>
          </div>

          <div>
            <div className="relative overflow-hidden rounded-[28px] border border-[#7B4636]/10 bg-[#efe8de]/70 p-5">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#7B4636_1px,transparent_1px),linear-gradient(to_bottom,#7B4636_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.018]"
              />

              <div className="relative">
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#7B4636]">
                  Como a operação se torna inteligente
                </p>

                <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                  {SOURCES.map((item) => (
                    <div
                      key={item}
                      className="rounded-[16px] border border-[#7B4636]/10 bg-[#f4efe7]/70 px-4 py-2.5 text-center"
                    >
                      <p className="text-[13px] font-medium text-[#191714]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="my-4 flex justify-center text-xl text-[#7B4636]/40">
                  ↓
                </div>

                <div className="rounded-[22px] bg-[#23404A] px-6 py-5 text-center text-[#f4efe7] shadow-sm shadow-[#23404A]/10">
                  <p className="text-[9px] uppercase tracking-[0.18em] text-[#f4efe7]/60">
                    Camada de Inteligência Operacional
                  </p>

                  <p className="mt-2 text-[20px] font-normal tracking-[-0.04em] sm:text-[22px]">
                    Perceber • Decidir • Executar
                  </p>

                  <p className="mt-3 text-[13px] leading-[1.65] text-[#f4efe7]/70">
                    Dados, regras, automação e IA trabalhando como um único
                    sistema.
                  </p>
                </div>

                <div className="my-4 flex justify-center text-xl text-[#7B4636]/40">
                  ↓
                </div>

                <div className="grid gap-2.5">
                  {OUTPUTS.map((item) => (
                    <div
                      key={item}
                      className="rounded-[16px] border border-[#7B4636]/10 bg-[#f4efe7]/70 px-4 py-2.5"
                    >
                      <p className="text-[13px] font-medium text-[#191714]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
