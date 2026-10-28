"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  ["capabilities", "Soluções"],
  ["how-it-works", "Metodologia"],
] as const;

const WHATSAPP_URL =
  "https://wa.me/5511976377919?text=Ol%C3%A1%21%20Gostaria%20de%20conversar%20sobre%20uma%20solu%C3%A7%C3%A3o%20da%20Elpha%20Room%20para%20minha%20empresa.";

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

export const HeaderSection = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#191714]/[0.07] bg-[#f4efe7]/95 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex h-[72px] items-center justify-between gap-4 lg:gap-6">
          {/* Marca */}
          <a
            href="/"
            aria-label="Elpha Room — início"
            onClick={closeMenu}
            className="group flex shrink-0 items-center"
          >
            <span className="flex flex-col leading-none">
              <span className="text-[15px] font-medium uppercase tracking-[0.28em] text-[#191714]">
                ELPHA
              </span>

              <span className="mt-1.5 flex items-center gap-2">
                <span className="h-px w-5 bg-[#7B4636] transition-all duration-300 group-hover:w-7" />
                <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-[#7B4636]">
                  ROOM
                </span>
              </span>
            </span>
          </a>

          {/* Navegação desktop */}
          <nav
            aria-label="Navegação principal"
            className="hidden min-w-0 flex-1 items-center justify-center gap-1 lg:flex xl:gap-2"
          >
            {NAV_ITEMS.map(([id, label]) => (
              <a
                key={id}
                href={`/#${id}`}
                className="whitespace-nowrap rounded-full px-3 py-2 text-[12px] font-medium text-[#5f574f] transition-colors duration-200 hover:bg-[#7B4636]/[0.06] hover:text-[#7B4636] xl:px-3.5"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* CTA desktop */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", "header_desktop_cta")}
            className="hidden shrink-0 items-center gap-2 rounded-full bg-[#23404A] px-4 py-3 text-[12px] font-medium text-[#f4efe7] transition-all duration-200 hover:-translate-y-px hover:bg-[#191714] md:inline-flex"
          >
            Vamos conversar
            <span aria-hidden="true" className="text-sm">
              ↗
            </span>
          </a>

          {/* Botão mobile */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="rounded-full border border-[#191714]/10 p-2.5 transition-colors hover:bg-[#7B4636]/[0.06] lg:hidden"
          >
            <span aria-hidden="true" className="flex flex-col gap-[5px]">
              <span
                className={`block h-px w-5 bg-[#191714] transition-transform duration-200 ${
                  open ? "translate-y-[3px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px w-5 bg-[#191714] transition-transform duration-200 ${
                  open ? "-translate-y-[3px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        {/* Navegação mobile */}
        {open && (
          <nav
            id="mobile-navigation"
            aria-label="Navegação mobile"
            className="border-t border-[#191714]/[0.07] pb-5 pt-3 lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map(([id, label]) => (
                <a
                  key={id}
                  href={`/#${id}`}
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-3 text-sm text-[#514b44] transition-colors hover:bg-[#7B4636]/[0.06] hover:text-[#7B4636]"
                >
                  {label}
                </a>
              ))}

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackEvent("whatsapp_click", "header_mobile_cta");
                  closeMenu();
                }}
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-[#23404A] px-5 py-3.5 text-sm font-medium text-[#f4efe7] transition-colors hover:bg-[#191714]"
              >
                Vamos conversar
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
