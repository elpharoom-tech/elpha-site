"use client";

import React, { useState } from "react";

const NAV_ITEMS: Array<[string, string, "section" | "page"]> = [
  ["operation", "Operação inteligente", "section"],
  ["services", "Capacidades", "section"],
  ["applications", "Onde atuamos", "section"],
  ["principles", "Nossa forma de trabalhar", "section"],
  ["how-it-works", "Metodologia", "section"],
  ["manifest", "Manifesto", "section"],
];

const WHATSAPP_URL =
  "https://wa.me/5511976377919?text=Olá!%20Gostaria%20de%20solicitar%20um%20diagnóstico%20inicial%20para%20entender%20como%20a%20Elpha%20Room%20pode%20ajudar%20minha%20empresa%20a%20construir%20uma%20operação%20mais%20inteligente%20com%20dados%2C%20IA%20e%20automação.";

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

export const HeaderSection = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  const handleMobileWhatsAppClick = () => {
    trackEvent("whatsapp_click", "header_mobile_cta");
    closeMenu();
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#7B4636]/8 bg-[#f4efe7]/92 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex h-[78px] items-center justify-between gap-6">
          <a
            href="/"
            aria-label="Elpha Room"
            className="group flex shrink-0 items-center"
          >
            <div className="flex flex-col leading-none">
              <span className="text-[15px] font-semibold uppercase tracking-[0.32em] text-[#191714]">
                ELPHA
              </span>

              <div className="mt-1 flex items-center gap-2">
                <span className="h-px w-5 bg-[#7B4636]/40 transition-all duration-300 group-hover:w-7 group-hover:bg-[#23404A]/60" />
                <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#7B4636] transition-colors duration-300 group-hover:text-[#23404A]">
                  ROOM
                </span>
              </div>
            </div>
          </a>

          <nav className="hidden min-w-0 items-center justify-center gap-2 lg:flex">
            {NAV_ITEMS.map(([id, label, type]) => {
              const href = type === "page" ? `/${id}` : `/#${id}`;

              return (
                <a
                  key={id}
                  href={href}
                  className="whitespace-nowrap px-2 py-2 text-[12px] font-medium tracking-[0.01em] text-[#514b44] transition-all duration-300 hover:text-[#7B4636]"
                >
                  {label}
                </a>
              );
            })}
          </nav>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", "header_desktop_cta")}
            className="hidden shrink-0 items-center justify-center rounded-full bg-[#23404A] px-6 py-3 text-[13px] font-semibold text-[#f4efe7] shadow-sm shadow-[#23404A]/15 transition-all duration-300 hover:-translate-y-[1px] hover:bg-[#191714] hover:shadow-lg hover:shadow-[#191714]/15 md:inline-flex"
          >
            Solicitar diagnóstico
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="rounded-full border border-[#7B4636]/20 bg-[#efe6db]/70 px-3 py-2 transition-all duration-300 hover:border-[#23404A]/30 lg:hidden"
          >
            <div className="space-y-1.5">
              <span className="block h-px w-5 bg-[#7B4636]" />
              <span className="block h-px w-5 bg-[#23404A]" />
            </div>
          </button>
        </div>

        {open && (
          <div className="border-t border-[#7B4636]/10 pb-6 pt-4 lg:hidden">
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map(([id, label, type]) => {
                const href = type === "page" ? `/${id}` : `/#${id}`;

                return (
                  <a
                    key={id}
                    href={href}
                    onClick={closeMenu}
                    className="rounded-2xl px-3 py-3 text-[14px] font-medium text-[#514b44] transition-all duration-300 hover:bg-[#7B4636]/10 hover:text-[#7B4636]"
                  >
                    {label}
                  </a>
                );
              })}

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleMobileWhatsAppClick}
                className="mt-4 inline-flex justify-center rounded-full bg-[#23404A] px-5 py-3.5 text-[13px] font-semibold text-[#f4efe7] shadow-sm shadow-[#23404A]/15 transition-all duration-300 hover:bg-[#191714]"
              >
                Solicitar diagnóstico
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
