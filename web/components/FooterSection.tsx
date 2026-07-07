"use client";

import React from "react";

const WHATSAPP_URL =
  "https://wa.me/5511976377919?text=Olá!%20Gostaria%20de%20solicitar%20um%20diagnóstico%20para%20entender%20como%20a%20Elpha%20Room%20pode%20ajudar%20minha%20empresa%20a%20construir%20uma%20operação%20mais%20inteligente.";

export const FooterSection: React.FC = () => {
  return (
    <footer className="mt-12 border-t border-[#e7e0d5] bg-[#f4efe7] text-[#191714]">
      <div className="mx-auto max-w-7xl px-8 pb-20 pt-16">
        <div className="grid gap-14 lg:grid-cols-[1.25fr_0.75fr]">
          {/* CTA */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#7B4636]">
              Vamos conversar
            </p>

            <h2 className="mt-5 max-w-[650px] text-[34px] font-normal leading-[1] tracking-[-0.055em] md:text-[46px]">
              Pronto para construir
              <br />
              uma operação
              <br />
              mais inteligente?
            </h2>

            <p className="mt-7 max-w-[580px] text-[16px] leading-[1.85] text-[#5f574f]">
              Vamos entender como sua empresa opera hoje e identificar onde
              dados, inteligência artificial, automação e integrações podem
              gerar maior impacto.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-8
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-[#23404A]
                px-7
                py-3.5
                text-[13px]
                font-semibold
                text-[#f4efe7]
                transition-all
                duration-300
                hover:-translate-y-[1px]
                hover:bg-[#191714]
              "
            >
              Solicitar diagnóstico
            </a>
          </div>

          {/* Navegação */}
          <div className="lg:justify-self-end">
            <p className="text-[12px] uppercase tracking-[0.28em] text-[#191714]">
              ELPHA ROOM
            </p>

            <p className="mt-4 max-w-[320px] text-[14px] leading-[1.8] text-[#8b8175]">
              Engenharia de Operações Inteligentes para conectar dados,
              inteligência artificial, automação e integrações em um único
              sistema operacional para o negócio.
            </p>

            <div className="mt-8 flex flex-col gap-3 text-[15px] text-[#5f574f]">
              <a href="/#operation" className="transition hover:text-[#191714]">
                Operação Inteligente
              </a>

              <a href="/#about" className="transition hover:text-[#191714]">
                Por que existimos
              </a>

              <a href="/#services" className="transition hover:text-[#191714]">
                Capacidades
              </a>

              <a
                href="/#applications"
                className="transition hover:text-[#191714]"
              >
                Onde atuamos
              </a>

              <a
                href="/#principles"
                className="transition hover:text-[#191714]"
              >
                Nossa forma de trabalhar
              </a>

              <a
                href="/#how-it-works"
                className="transition hover:text-[#191714]"
              >
                Metodologia
              </a>

              <a href="/#manifest" className="transition hover:text-[#191714]">
                Manifesto
              </a>

              <a
                href="mailto:contato@elpharoom.com"
                className="pt-3 text-[#7B4636] transition hover:text-[#191714]"
              >
                contato@elpharoom.com
              </a>
            </div>
          </div>
        </div>

        <div
          className="
            mt-16
            flex
            flex-col
            gap-3
            border-t
            border-[#e7e0d5]
            pt-8
            text-[12px]
            text-[#a59a8d]
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <span>
            © {new Date().getFullYear()} Elpha Room. Todos os direitos
            reservados.
          </span>

          <div className="flex gap-6">
            <a href="/privacy" className="transition hover:text-[#191714]">
              Política de Privacidade
            </a>

            <a href="/terms" className="transition hover:text-[#191714]">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
