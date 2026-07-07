"use client";

import { useEffect } from "react";

const HEADER_OFFSET = 96;

function smoothScrollToId(id: string) {
  const element = document.getElementById(id);
  if (!element) return;

  const y = element.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top: y, behavior: "smooth" });
  history.replaceState(null, "", `#${id}`);
}

export default function SmoothScroll() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a");
      if (!(anchor instanceof HTMLAnchorElement)) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      if (
        href.startsWith("http") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:")
      ) {
        return;
      }

      const hashIndex = href.indexOf("#");
      if (hashIndex === -1) return;

      const id = href.substring(hashIndex + 1);
      if (!id) return;

      if (window.location.pathname === "/" || href.startsWith("#")) {
        event.preventDefault();
        smoothScrollToId(id);
      }
    };

    const onLoad = () => {
      if (!window.location.hash) return;
      const id = window.location.hash.replace("#", "");
      window.scrollTo(0, 0);
      window.setTimeout(() => smoothScrollToId(id), 60);
    };

    document.addEventListener("click", onClick);
    window.addEventListener("load", onLoad);

    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  return null;
}
