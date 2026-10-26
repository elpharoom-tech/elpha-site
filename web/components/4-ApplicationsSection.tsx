"use client";

const APPLICATIONS = [
  {
    number: "01",
    title: "BI",
    description:
      "Dashboards e relatórios para transformar dados em informação clara para a tomada de decisão.",
    detail: "Dashboards & Reporting",
  },
  {
    number: "02",
    title: "Data Science",
    description:
      "Análise exploratória e preditiva para identificar padrões, tendências e oportunidades.",
    detail: "Análise preditiva",
  },
  {
    number: "03",
    title: "Big Data",
    description:
      "Processamento e análise de grandes volumes de dados com foco em escala e desempenho.",
    detail: "Processamento em escala",
  },
  {
    number: "04",
    title: "Data Engineering",
    description:
      "Pipelines e processos de ETL para integrar, transformar e disponibilizar dados com confiabilidade.",
    detail: "Pipelines & ETL",
  },
  {
    number: "05",
    title: "Machine Learning",
    description:
      "Desenvolvimento e operação de modelos de machine learning, incluindo práticas de MLOps.",
    detail: "Modelos & MLOps",
  },
];

export const ApplicationsSection = () => {
  return (
    <section
      id="applications"
      aria-labelledby="applications-title"
      className="scroll-mt-24 bg-[#f4efe7] px-5 pt-2 pb-12 text-[#191714] sm:px-8 sm:pt-4 sm:pb-16 md:px-10 md:pb-20"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Cabeçalho */}
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 md:flex-row md:items-end md:justify-between md:gap-10">
          <div className="max-w-[580px]">
            <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#7B4636]">
              Aplicações
            </p>

            <h2
              id="applications-title"
              className="mt-4 text-[34px] font-normal leading-[1.02] tracking-[-0.055em] sm:text-[40px] md:text-[46px]"
            >
              Engenharia e inteligência de dados.
            </h2>
          </div>

          <p className="max-w-[390px] text-[13px] leading-[1.8] text-[#5f574f] sm:text-[14px]">
            Da estruturação dos dados à criação de modelos analíticos,
            desenvolvemos soluções para transformar informação em valor para o
            negócio.
          </p>
        </div>

        {/* Especialidades */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {APPLICATIONS.map((area) => (
            <article
              key={area.number}
              className="group flex min-h-[190px] flex-col rounded-[20px] border border-[#7B4636]/10 bg-[#efe8de]/45 p-5 transition-colors duration-200 hover:border-[#23404A]/25 hover:bg-[#efe8de]/80 sm:p-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-medium tracking-[0.2em] text-[#7B4636]">
                  {area.number}
                </span>

                <span
                  aria-hidden="true"
                  className="text-[16px] text-[#7B4636]/45 transition-colors duration-200 group-hover:text-[#23404A]"
                >
                  ↗
                </span>
              </div>

              <h3 className="mt-6 text-[21px] font-normal tracking-[-0.04em] sm:text-[23px]">
                {area.title}
              </h3>

              <p className="mt-2 text-[13px] leading-[1.7] text-[#5f574f]">
                {area.description}
              </p>

              <div className="mt-auto pt-5">
                <span className="inline-flex rounded-full border border-[#7B4636]/15 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.12em] text-[#7B4636]">
                  {area.detail}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Fechamento */}
        <div className="mt-8 flex flex-col gap-4 border-t border-[#7B4636]/15 pt-5 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:pt-6">
          <p className="max-w-[520px] text-[13px] leading-[1.75] text-[#5f574f]">
            Cada solução parte do contexto do negócio e das necessidades dos
            dados — da origem à análise e à operação dos modelos.
          </p>

          <a
            href="https://wa.me/5511976377919?text=Ol%C3%A1%21%20Gostaria%20de%20conversar%20sobre%20os%20servi%C3%A7os%20de%20dados%20da%20Elpha%20Room."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-3 self-start rounded-full bg-[#23404A] px-5 py-3 text-[12px] font-medium text-[#f4efe7] transition-colors duration-200 hover:bg-[#191714] sm:self-auto"
          >
            Vamos conversar
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};
