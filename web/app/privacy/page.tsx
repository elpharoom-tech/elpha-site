"use client";

const LAST_UPDATED = "26 de outubro de 2026";

const SECTIONS = [
  {
    title: "1. Quem somos",
    content: (
      <p>
        A <strong className="font-medium text-[#191714]">Elpha Room</strong>{" "}
        atua com tecnologia, engenharia e inteligência de dados, desenvolvimento
        de software, consultoria estratégica e automação de processos. Esta
        política explica como informações pessoais podem ser tratadas no
        contexto do nosso site e de nossas interações comerciais.
      </p>
    ),
  },
  {
    title: "2. Quais dados podemos coletar",
    content: (
      <>
        <p>
          Os dados tratados dependem da forma como você interage conosco. Eles
          podem incluir:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-[#7B4636]">
          <li>Nome, endereço de e-mail, telefone e empresa.</li>
          <li>Informações incluídas nas mensagens e solicitações enviadas.</li>
          <li>
            Informações técnicas de navegação, como endereço IP, tipo de
            navegador e dados de acesso, quando coletadas pelo site ou por
            ferramentas utilizadas.
          </li>
          <li>
            Informações necessárias à execução de um projeto, quando aplicável e
            conforme os respectivos contratos e instruções.
          </li>
        </ul>
        <p className="mt-4">
          Buscamos limitar a coleta ao que for pertinente para cada finalidade.
          Não envie dados pessoais sensíveis ou informações confidenciais sem
          que isso seja necessário e previamente alinhado.
        </p>
      </>
    ),
  },
  {
    title: "3. Como utilizamos os dados",
    content: (
      <>
        <p>As informações podem ser utilizadas para:</p>
        <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-[#7B4636]">
          <li>Responder a contatos, dúvidas e solicitações comerciais.</li>
          <li>Compreender necessidades e avaliar possíveis projetos.</li>
          <li>Prestar serviços e cumprir obrigações contratuais.</li>
          <li>Manter a segurança, a integridade e o funcionamento do site.</li>
          <li>
            Cumprir obrigações legais e exercer direitos, quando necessário.
          </li>
        </ul>
        <p className="mt-4">
          O tratamento ocorre de acordo com a finalidade aplicável e com uma
          base legal prevista na legislação, como procedimentos preliminares a
          um contrato, cumprimento de obrigação legal, legítimo interesse ou
          consentimento, conforme o caso.
        </p>
      </>
    ),
  },
  {
    title: "4. Compartilhamento de informações",
    content: (
      <p>
        Não comercializamos dados pessoais. Quando necessário para as
        finalidades descritas nesta política, as informações poderão ser
        compartilhadas com fornecedores que apoiem a operação, como serviços de
        hospedagem, comunicação, segurança e infraestrutura tecnológica, ou
        quando houver obrigação legal. Nesses casos, o compartilhamento deve ser
        limitado ao necessário e observar as medidas de proteção aplicáveis.
      </p>
    ),
  },
  {
    title: "5. Armazenamento e segurança",
    content: (
      <p>
        Buscamos adotar medidas técnicas e organizacionais compatíveis com os
        riscos envolvidos para proteger as informações contra acessos não
        autorizados, perda, alteração ou divulgação indevida. Os dados são
        mantidos pelo período necessário às finalidades do tratamento ou para
        atender obrigações legais, regulatórias e contratuais. Nenhum sistema
        pode garantir segurança absoluta.
      </p>
    ),
  },
  {
    title: "6. Cookies e tecnologias semelhantes",
    content: (
      <p>
        O site poderá utilizar cookies ou tecnologias semelhantes para
        funcionalidades essenciais, preferências, métricas de acesso ou outras
        finalidades, caso essas ferramentas estejam implementadas. Quando
        exigido, será solicitado consentimento antes da utilização de
        tecnologias não essenciais. As opções disponíveis dependem das
        ferramentas efetivamente utilizadas no site.
      </p>
    ),
  },
  {
    title: "7. Seus direitos",
    content: (
      <>
        <p>
          Nos termos da Lei Geral de Proteção de Dados Pessoais (LGPD), você
          poderá solicitar, conforme aplicável:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-[#7B4636]">
          <li>Confirmação da existência de tratamento e acesso aos dados.</li>
          <li>
            Correção de informações incompletas, inexatas ou desatualizadas.
          </li>
          <li>
            Anonimização, bloqueio ou eliminação de dados nas hipóteses legais.
          </li>
          <li>
            Informações sobre compartilhamentos e sobre a possibilidade de não
            consentir.
          </li>
          <li>
            Revogação do consentimento, quando essa for a base do tratamento.
          </li>
        </ul>
        <p className="mt-4">
          As solicitações serão analisadas conforme a legislação aplicável.
          Alguns dados poderão precisar ser mantidos para cumprimento de
          obrigações legais ou para o exercício regular de direitos.
        </p>
      </>
    ),
  },
  {
    title: "8. Links e serviços de terceiros",
    content: (
      <p>
        O site pode direcionar você a plataformas externas, como serviços de
        mensagens ou outros sites. Esses serviços possuem suas próprias
        políticas e práticas de privacidade. Recomendamos consultá-las ao
        utilizar essas plataformas.
      </p>
    ),
  },
  {
    title: "9. Atualizações desta política",
    content: (
      <p>
        Esta política poderá ser atualizada para refletir mudanças em nossas
        atividades, nas ferramentas utilizadas ou na legislação aplicável. A
        versão vigente será publicada nesta página, acompanhada da data da
        atualização.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#f4efe7] text-[#191714]">
      <div className="mx-auto max-w-[960px] px-5 pb-16 pt-24 sm:px-8 sm:pb-20 sm:pt-28 md:px-10">
        {/* Voltar */}
        <a
          href="/"
          className="group inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[#7a7166] transition-colors hover:text-[#7B4636]"
        >
          <span
            aria-hidden="true"
            className="transition-transform group-hover:-translate-x-1"
          >
            ←
          </span>
          Voltar ao início
        </a>

        {/* Cabeçalho */}
        <header className="mt-12 max-w-[700px] sm:mt-16">
          <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#7B4636]">
            Elpha Room / Privacidade
          </p>

          <h1 className="mt-5 text-[38px] font-normal leading-[1.02] tracking-[-0.055em] sm:text-[48px] md:text-[58px]">
            Política de
            <br />
            Privacidade.
          </h1>

          <p className="mt-5 max-w-[570px] text-[14px] leading-[1.8] text-[#5f574f] sm:text-[15px]">
            Transparência sobre como tratamos informações pessoais em nossas
            interações e na utilização do site.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 border-y border-[#7B4636]/15 py-4 text-[11px] text-[#7a7166]">
            <span>Última atualização</span>
            <span className="text-[#191714]">{LAST_UPDATED}</span>
          </div>
        </header>

        {/* Conteúdo */}
        <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-[190px_minmax(0,1fr)] md:gap-14">
          <aside className="h-fit md:sticky md:top-8">
            <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#7B4636]">
              Nesta página
            </p>

            <nav aria-label="Seções da política" className="mt-4">
              <ul className="flex flex-wrap gap-x-4 gap-y-3 md:flex-col md:gap-3">
                {SECTIONS.map((section, index) => (
                  <li key={section.title}>
                    <a
                      href={`#privacy-${index + 1}`}
                      className="text-[12px] text-[#6d655d] transition-colors hover:text-[#7B4636]"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <div className="min-w-0">
            <div className="space-y-9 sm:space-y-11">
              {SECTIONS.map((section, index) => (
                <section
                  key={section.title}
                  id={`privacy-${index + 1}`}
                  className="scroll-mt-8 border-b border-[#7B4636]/10 pb-8 sm:pb-10"
                >
                  <h2 className="text-[18px] font-medium tracking-[-0.025em] sm:text-[20px]">
                    {section.title}
                  </h2>

                  <div className="mt-4 text-[14px] leading-[1.9] text-[#5f574f] sm:text-[15px]">
                    {section.content}
                  </div>
                </section>
              ))}
            </div>

            {/* Contato */}
            <div className="mt-10 rounded-[20px] border border-[#7B4636]/10 bg-[#efe8de]/60 p-5 sm:p-7">
              <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#7B4636]">
                Dúvidas sobre privacidade
              </p>

              <h2 className="mt-3 text-[21px] font-normal tracking-[-0.035em] sm:text-[24px]">
                Entre em contato.
              </h2>

              <p className="mt-3 text-[13px] leading-[1.8] text-[#5f574f]">
                Para dúvidas ou solicitações relacionadas aos seus dados
                pessoais, envie uma mensagem pelo canal abaixo.
              </p>

              <a
                href="mailto:contato@elpharoom.com.br?subject=Privacidade%20e%20dados%20pessoais"
                className="mt-4 inline-flex items-center gap-2 text-[13px] font-medium text-[#7B4636] transition-colors hover:text-[#191714]"
              >
                contato@elpharoom.com.br
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Rodapé */}
        <footer className="mt-14 flex flex-col gap-3 border-t border-[#7B4636]/15 pt-6 text-[11px] text-[#8b8175] sm:mt-20 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="/"
            className="font-medium uppercase tracking-[0.16em] transition-colors hover:text-[#191714]"
          >
            Elpha Room
          </a>

          <p>
            © {new Date().getFullYear()} Elpha Room. Todos os direitos
            reservados.
          </p>
        </footer>
      </div>
    </main>
  );
}
