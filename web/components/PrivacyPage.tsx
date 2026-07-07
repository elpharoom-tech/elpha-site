"use client";

import React from "react";

export default function PrivacyPage() {
  return (
    <main className="bg-[#f4efe7] text-[#191714] min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-20">
        {/* BACK */}
        <a
          href="/"
          className="text-[12px] tracking-[0.2em] uppercase text-[#7a7166] hover:text-[#191714] transition"
        >
          ← Voltar
        </a>

        {/* HEADER */}
        <header className="mt-12">
          <p className="text-[12px] tracking-[0.28em] uppercase text-[#7a7166]">
            Privacidade
          </p>

          <h1 className="mt-6 text-[36px] md:text-[48px] font-semibold leading-[1.05] tracking-[-0.04em]">
            Política de Privacidade
          </h1>

          <p className="mt-4 text-[14px] text-[#7a7166]">
            Atualizado em {new Date().getFullYear()}
          </p>
        </header>

        {/* CONTENT */}
        <div className="mt-12 space-y-12 text-[16px] leading-relaxed text-[#5f574f]">
          <section>
            <p>
              A <span className="text-[#191714] font-medium">Elpha Room</span>{" "}
              trata dados com responsabilidade, clareza e respeito.
            </p>
          </section>

          <section>
            <h2 className="text-[#191714] font-medium text-lg">
              1. Coleta de dados
            </h2>

            <p className="mt-4">
              Coletamos apenas as informações necessárias para entender sua
              operação e prestar nossos serviços.
            </p>

            <ul className="mt-4 space-y-2">
              <li>Nome e contato fornecidos por você</li>
              <li>Informações compartilhadas em conversas</li>
              <li>Dados operacionais quando necessários ao projeto</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[#191714] font-medium text-lg">
              2. Uso das informações
            </h2>

            <p className="mt-4">Utilizamos dados exclusivamente para:</p>

            <ul className="mt-4 space-y-2">
              <li>Responder seu contato</li>
              <li>Entender sua operação</li>
              <li>Propor e executar soluções</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[#191714] font-medium text-lg">
              3. Compartilhamento
            </h2>

            <p className="mt-4">
              Não vendemos ou compartilhamos dados com terceiros.
            </p>
          </section>

          <section>
            <h2 className="text-[#191714] font-medium text-lg">4. Segurança</h2>

            <p className="mt-4">
              Adotamos práticas técnicas e organizacionais para proteger as
              informações sob nossa responsabilidade.
            </p>
          </section>

          <section>
            <h2 className="text-[#191714] font-medium text-lg">
              5. Seus direitos
            </h2>

            <p className="mt-4">
              Você pode solicitar acesso, correção ou exclusão dos seus dados a
              qualquer momento.
            </p>

            <div className="mt-4">
              <a
                href="mailto:contato@elpharoom.com"
                className="underline text-[#191714] hover:text-black"
              >
                contato@elpharoom.com
              </a>
            </div>
          </section>

          <section>
            <p className="text-[14px] text-[#7a7166]">
              Ao entrar em contato com a Elpha, você concorda com esta política.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
