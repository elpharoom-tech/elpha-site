"use client";

const WHATSAPP_URL =
  "https://wa.me/5511976377919?text=Ol%C3%A1%21%20Gostaria%20de%20conversar%20sobre%20uma%20solu%C3%A7%C3%A3o%20para%20meu%20neg%C3%B3cio.";

const SOLUTIONS = [
  {
    number: "01",
    title: "Dados & Analytics",
    description:
      "Organizamos dados e desenvolvemos dashboards, indicadores e análises para apoiar decisões mais seguras.",
    example:
      "Consolidar informações comerciais e financeiras em uma visão única do negócio.",
  },
  {
    number: "02",
    title: "Engenharia de Dados",
    description:
      "Construímos pipelines e integrações para coletar, transformar e disponibilizar dados com confiabilidade.",
    example:
      "Unificar dados de diferentes sistemas em uma base pronta para análise.",
  },
  {
    number: "03",
    title: "Data Science & Machine Learning",
    description:
      "Aplicamos estatística e modelos preditivos para identificar padrões e responder a problemas específicos.",
    example: "Analisar tendências de demanda e estimar resultados futuros.",
  },
  {
    number: "04",
    title: "Software & Integrações",
    description:
      "Desenvolvemos soluções sob medida e conectamos sistemas, APIs e aplicações aos processos da empresa.",
    example:
      "Integrar plataformas para reduzir lançamentos duplicados e trocas manuais de informação.",
  },
  {
    number: "05",
    title: "Automação de Processos",
    description:
      "Reduzimos tarefas repetitivas com fluxos automatizados, regras de negócio e integrações entre ferramentas.",
    example: "Automatizar notificações, atualizações e etapas de aprovação.",
  },
  {
    number: "06",
    title: "Consultoria & Evolução",
    description:
      "Avaliamos desafios, priorizamos oportunidades e definimos caminhos técnicos alinhados aos objetivos do negócio.",
    example:
      "Identificar gargalos e estruturar um plano de evolução tecnológica por etapas.",
  },
];

export const SolutionsSection = () => {
  return (
    <section
      id="capabilities"
      aria-labelledby="solutions-title"
      className="relative scroll-mt-24 overflow-hidden border-t border-[#7B4636]/10 bg-[#f4efe7] pt-8 pb-16 text-[#191714] sm:pt-10 sm:pb-20 md:pt-12 md:pb-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#7B4636_1px,transparent_1px),linear-gradient(to_bottom,#7B4636_1px,transparent_1px)] bg-[size:96px_96px] opacity-[0.018]"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* Cabeçalho da seção */}
        <div className="grid gap-5 md:grid-cols-[1.1fr_0.9fr] md:items-end md:gap-12">
          <div className="max-w-[680px]">
            <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#7B4636] sm:text-[11px]">
              <span className="h-px w-7 bg-[#7B4636]" />O que fazemos
            </p>

            <h2
              id="solutions-title"
              className="mt-5 text-[34px] font-normal leading-[1.08] tracking-[-0.05em] sm:text-[40px] md:text-[46px]"
            >
              Tecnologia aplicada
              <br className="hidden sm:block" /> aos desafios do negócio.
            </h2>
          </div>

          <p className="max-w-[440px] text-[14px] leading-[1.85] text-[#5f574f] md:justify-self-end md:pb-1 md:text-[15px]">
            Da estruturação dos dados ao desenvolvimento de software, conectamos
            competências para criar soluções alinhadas à realidade e aos
            objetivos de cada operação.
          </p>
        </div>

        {/* Soluções */}
        <div className="mt-9 grid gap-3 sm:grid-cols-2 xl:grid-cols-3 xl:gap-4">
          {SOLUTIONS.map((solution) => (
            <article
              key={solution.number}
              className="group flex h-full flex-col rounded-[20px] border border-[#7B4636]/10 bg-[#efe8de]/45 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#23404A]/20 hover:bg-[#efe8de]/80 sm:p-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-medium tracking-[0.18em] text-[#7B4636]">
                  {solution.number}
                </span>

                <span
                  aria-hidden="true"
                  className="text-sm text-[#9c8d7e] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#7B4636]"
                >
                  ↗
                </span>
              </div>

              <h3 className="mt-5 text-[19px] font-medium leading-tight tracking-[-0.035em] sm:text-[21px]">
                {solution.title}
              </h3>

              <p className="mt-3 text-[13px] leading-[1.8] text-[#5f574f] sm:text-[14px]">
                {solution.description}
              </p>

              <div className="mt-6 flex-1 border-t border-[#7B4636]/10 pt-4">
                <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#7B4636]">
                  Exemplo de aplicação
                </p>

                <p className="mt-2 text-[12px] leading-[1.75] text-[#6d655d]">
                  {solution.example}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Encerramento e CTA */}
        <div className="mt-8 flex flex-col gap-5 border-t border-[#7B4636]/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[570px] text-[13px] leading-[1.8] text-[#5f574f]">
            Cada projeto começa pelo problema a resolver — não pela escolha
            antecipada de uma ferramenta ou tecnologia.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 self-start rounded-full bg-[#23404A] px-5 py-3 text-[12px] font-medium text-[#f4efe7] transition-all duration-200 hover:-translate-y-px hover:bg-[#191714] sm:self-auto"
          >
            Conversar sobre meu projeto
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};
