"use client";

const WHATSAPP_URL =
  "https://wa.me/5511976377919?text=Ol%C3%A1!%20Gostaria%20de%20conversar%20sobre%20uma%20solu%C3%A7%C3%A3o%20da%20Elpha%20Room%20para%20minha%20empresa.";

const trackEvent = (eventName: string, label: string) => {
  if (
    typeof window !== "undefined" &&
    typeof (
      window as Window & {
        gtag?: (...args: unknown[]) => void;
      }
    ).gtag === "function"
  ) {
    (
      window as Window & {
        gtag?: (...args: unknown[]) => void;
      }
    ).gtag?.("event", eventName, {
      event_category: "lead",
      event_label: label,
    });
  }
};

const DELIVERABLES = [
  {
    number: "01",
    title: "Entender",
    description:
      "Dados, indicadores e análises para enxergar melhor o negócio.",
  },
  {
    number: "02",
    title: "Antecipar",
    description:
      "Modelos analíticos para identificar padrões e apoiar decisões.",
  },
  {
    number: "03",
    title: "Conectar",
    description: "Sistemas integrados e fluxos de dados confiáveis.",
  },
  {
    number: "04",
    title: "Simplificar",
    description:
      "Automação e software para reduzir tarefas manuais e retrabalho.",
  },
];

export const HeroSection = () => {
  return (
    <section
      id="operation"
      className="relative overflow-hidden bg-[#f4efe7] pb-14 pt-28 text-[#191714] sm:pt-32 md:pb-20 md:pt-32"
    >
      {/* Textura discreta de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#7B4636_1px,transparent_1px),linear-gradient(to_bottom,#7B4636_1px,transparent_1px)] bg-[size:96px_96px] opacity-[0.022]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-24 h-[420px] w-[420px] rounded-full border border-[#23404A]/10"
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Conteúdo principal */}
          <div>
            <p className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#7B4636] sm:text-[11px]">
              <span className="h-px w-7 bg-[#7B4636]" />
              Engenharia de Operações Inteligentes
            </p>

            <h1 className="max-w-[650px] text-[38px] font-normal leading-[1.06] tracking-[-0.055em] sm:text-5xl md:text-[54px] xl:text-[62px]">
              Dados e tecnologia
              <br className="hidden sm:block" /> para resolver
              <br className="hidden sm:block" /> problemas reais
              <br className="hidden sm:block" /> de negócio.
            </h1>

            <p className="mt-6 max-w-[510px] text-[15px] leading-[1.85] text-[#5f574f] sm:text-base md:mt-7">
              Unimos engenharia de dados, analytics, software e automação para
              simplificar operações, melhorar decisões e transformar desafios de
              negócio em soluções concretas.
            </p>

            {/* Chamadas para ação */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("cta_click", "hero_whatsapp")}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#23404A] px-7 py-3.5 text-[13px] font-semibold text-[#f4efe7] transition-all duration-300 hover:-translate-y-px hover:bg-[#191714]"
              >
                Vamos conversar
                <span aria-hidden="true">↗</span>
              </a>

              <a
                href="#capabilities"
                onClick={() => trackEvent("cta_click", "hero_services")}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#7B4636]/20 px-6 py-3.5 text-[13px] font-medium text-[#514b44] transition-colors duration-300 hover:border-[#7B4636]/40 hover:bg-[#ede7dd]"
              >
                Explorar soluções
                <span aria-hidden="true" className="ml-2">
                  ↓
                </span>
              </a>
            </div>

            <p className="mt-4 text-[12px] text-[#81766b]">
              Conte-nos seu desafio. Vamos explorar as possibilidades.
            </p>
          </div>

          {/* Painel visual */}
          <div className="relative mx-auto w-full max-w-[540px] lg:ml-auto">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[30px] border border-[#7B4636]/10"
            />

            <div className="relative overflow-hidden rounded-[26px] border border-[#7B4636]/10 bg-[#efe8de]/80 p-5 sm:p-7">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#7B4636_1px,transparent_1px),linear-gradient(to_bottom,#7B4636_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.025]"
              />

              <div className="relative">
                <div className="flex items-start justify-between gap-4 border-b border-[#7B4636]/10 pb-5">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7B4636]">
                      Do desafio à solução
                    </p>

                    <h2 className="mt-2 text-xl font-normal tracking-[-0.04em] sm:text-2xl">
                      Inteligência em prática.
                    </h2>
                  </div>

                  <span className="shrink-0 rounded-full border border-[#23404A]/15 bg-[#23404A]/5 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#23404A]">
                    ELPHA ROOM
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-5">
                  {DELIVERABLES.map((item) => (
                    <article
                      key={item.number}
                      className="rounded-[18px] border border-[#7B4636]/10 bg-[#f4efe7]/90 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#7B4636]/25 sm:p-5"
                    >
                      <span className="text-[10px] font-medium tracking-[0.14em] text-[#7B4636]">
                        {item.number}
                      </span>

                      <h3 className="mt-4 text-[17px] font-medium tracking-[-0.035em] sm:text-lg">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-[12px] leading-[1.7] text-[#6d655d]">
                        {item.description}
                      </p>
                    </article>
                  ))}
                </div>

                <div className="mt-4 rounded-[18px] bg-[#23404A] p-5 text-[#f4efe7] sm:p-6">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#f4efe7]/65">
                    Uma abordagem integrada
                  </p>

                  <p className="mt-2 text-[16px] leading-[1.55] tracking-[-0.025em] sm:text-lg">
                    Dados, sistemas e processos trabalhando em conjunto para
                    gerar valor ao negócio.
                  </p>
                </div>
              </div>
            </div>

            <p className="relative mt-5 text-center text-[10px] uppercase tracking-[0.16em] text-[#8d8175]">
              Estratégia <span className="mx-1.5">·</span>
              Engenharia <span className="mx-1.5">·</span>
              Implementação
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
