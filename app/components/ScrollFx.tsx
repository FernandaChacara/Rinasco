"use client";

import { useEffect, useLayoutEffect } from "react";

export function ScrollFx() {
  // Arm the reveal system only once JS is actually running. Content stays
  // visible by default (see globals.css) until this class exists, so a
  // failed or slow script never hides anything.
  useLayoutEffect(() => {
    document.documentElement.classList.add("reveal-armed");
  }, []);

  useEffect(() => {
    const revealTargets = Array.from(document.querySelectorAll("[data-reveal]"));
    const revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.16 }
    );
    revealTargets.forEach((el) => revealObserver.observe(el));

    const nav = document.querySelector("[data-nav]");
    const onScroll = () => nav?.classList.toggle("is-scrolled", window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      revealObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
