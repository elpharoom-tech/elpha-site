"use client";

import React from "react";

const MANIFEST_POINTS = [
  "Mais sistemas não significam mais inteligência.",
  "Mais dados não significam melhores decisões.",
  "Mais automação não significa menos complexidade.",
  "O que importa é como tudo se conecta.",
];

export const ManifestSection = () => {
  return (
    <section
      id="manifest"
      className="bg-[#f4efe7] px-6 pt-0 pb-16 text-[#191714] md:px-10 md:pb-20"
    >
      <div className="mx-auto max-w-[1280px]">
        <div
          className="
            relative overflow-hidden
            rounded-[32px]
            border border-[#7B4636]/10
            bg-[#191714]
            px-7 py-8
            text-[#f4efe7]
            md:px-12 md:py-10
          "
        >
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute inset-0
              bg-[linear-gradient(to_right,#f4efe7_1px,transparent_1px),linear-gradient(to_bottom,#f4efe7_1px,transparent_1px)]
              bg-[size:96px_96px]
              opacity-[0.03]
            "
          />

          <div className="relative max-w-[940px]">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#d7c8b7]/75">
              Manifesto
            </p>

            <h2
              className="
                mt-5
                text-[32px]
                font-normal
                leading-[0.98]
                tracking-[-0.055em]
                text-[#f4efe7]
                sm:text-[40px]
                md:text-[48px]
              "
            >
              O futuro não pertence
              <br />
              às empresas com mais ferramentas.
              <br />
              Pertence às empresas
              <br />
              que operam melhor.
            </h2>

            <div className="mt-9 grid gap-3 md:grid-cols-2">
              {MANIFEST_POINTS.map((point) => (
                <div
                  key={point}
                  className="rounded-full border border-[#d7c8b7]/15 bg-[#f4efe7]/[0.03] px-5 py-3"
                >
                  <p className="text-[14px] leading-[1.6] text-[#d7c8b7]">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 border-l border-[#d7c8b7]/25 pl-5">
              <p className="max-w-[760px] text-[20px] font-normal leading-[1.35] tracking-[-0.035em] text-[#f4efe7] md:text-[24px]">
                A vantagem competitiva não está em adotar tecnologia mais
                rápido. Está em construir uma operação capaz de transformar
                tecnologia em resultado.
              </p>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              bottom-5 right-7
              hidden
              font-mono
              text-[38px]
              tracking-[-0.08em]
              text-[#f4efe7]/[0.04]
              md:block
            "
          >
            ELPHA
          </div>
        </div>
      </div>
    </section>
  );
};
