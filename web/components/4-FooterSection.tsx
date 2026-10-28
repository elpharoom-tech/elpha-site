"use client";

const WHATSAPP_URL =
  "https://wa.me/5511976377919?text=Ol%C3%A1%21%20Gostaria%20de%20conversar%20sobre%20os%20servi%C3%A7os%20da%20Elpha%20Room.";

const FOOTER_LINKS = [
  { href: "/#capabilities", label: "Soluções" },
  { href: "/#applications", label: "Especialidades" },
  { href: "/#how-it-works", label: "Metodologia" },
];

const SPECIALTIES = [
  "BI",
  "Data Science",
  "Big Data",
  "Data Engineering",
  "Machine Learning",
];

export const FooterSection = () => {
  return (
    <footer className="mt-8 border-t border-[#7B4636]/15 bg-[#f4efe7] text-[#191714] sm:mt-12">
      <div className="mx-auto max-w-[1280px] px-5 pb-7 pt-12 sm:px-8 sm:pb-8 sm:pt-16 md:px-10 md:pt-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div className="max-w-[680px]">
            <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#7B4636]">
              Vamos conversar
            </p>

            <h2 className="mt-5 text-[36px] font-normal leading-[1.02] tracking-[-0.055em] sm:text-[44px] md:text-[52px]">
              Seus dados podem
              <br className="hidden sm:block" /> fazer mais pelo negócio.
            </h2>

            <p className="mt-5 max-w-[500px] text-[14px] leading-[1.8] text-[#5f574f] sm:text-[15px]">
              Vamos entender seu desafio e explorar como engenharia de dados,
              analytics e machine learning podem ajudar sua empresa a avançar.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#23404A] px-6 py-3.5 text-[12px] font-medium text-[#f4efe7] transition-colors duration-200 hover:bg-[#191714]"
            >
              Vamos conversar
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="grid gap-8 border-t border-[#7B4636]/10 pt-7 sm:grid-cols-2 sm:gap-6 lg:border-t-0 lg:pt-1">
            <div>
              <a
                href="/"
                aria-label="Elpha Room — início"
                className="inline-flex flex-col"
              >
                <span className="text-[15px] font-medium uppercase tracking-[0.28em]">
                  ELPHA
                </span>
                <span className="mt-1.5 flex items-center gap-2">
                  <span className="h-px w-5 bg-[#7B4636]" />
                  <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-[#7B4636]">
                    ROOM
                  </span>
                </span>
              </a>

              <p className="mt-5 max-w-[260px] text-[13px] leading-[1.8] text-[#5f574f]">
                Engenharia e inteligência de dados para resolver desafios reais
                de negócio.
              </p>

              <a
                href="mailto:contato@elpharoom.com.br"
                className="mt-4 inline-block text-[12px] text-[#7B4636] transition-colors hover:text-[#191714]"
              >
                contato@elpharoom.com.br
              </a>
            </div>

            <div>
              <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#7B4636]">
                Especialidades
              </p>

              <ul className="mt-4 space-y-2.5">
                {SPECIALTIES.map((specialty) => (
                  <li key={specialty} className="text-[13px] text-[#5f574f]">
                    {specialty}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-[#7B4636]/15 pt-6 sm:mt-16 md:flex-row md:items-center md:justify-between">
          <nav
            aria-label="Navegação do rodapé"
            className="flex flex-wrap gap-x-5 gap-y-3"
          >
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[12px] text-[#5f574f] transition-colors hover:text-[#7B4636]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <a
              href="/privacy"
              className="text-[12px] text-[#5f574f] transition-colors hover:text-[#7B4636]"
            >
              Política de Privacidade
            </a>

            <p className="text-[11px] leading-[1.7] text-[#8b8175]">
              © {new Date().getFullYear()} Elpha Room. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
