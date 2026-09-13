"use client";

import { useEffect, useLayoutEffect, useState } from "react";

export function ScrollFx({ totalLots }: { totalLots: number }) {
  const [current, setCurrent] = useState(1);
  const [scrolled, setScrolled] = useState(false);

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

    const lotTargets = Array.from(document.querySelectorAll("[data-lot]"));
    const lotObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const lot = Number(entry.target.getAttribute("data-lot"));
            if (!Number.isNaN(lot)) setCurrent(lot);
          }
        }
      },
      { threshold: 0.5 }
    );
    lotTargets.forEach((el) => lotObserver.observe(el));

    const nav = document.querySelector("[data-nav]");
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    if (nav) nav.classList.toggle("is-scrolled", window.scrollY > 24);

    return () => {
      revealObserver.disconnect();
      lotObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const nav = document.querySelector("[data-nav]");
    if (nav) nav.classList.toggle("is-scrolled", scrolled);
  }, [scrolled]);

  return (
    <div className="lot-progress" aria-hidden="true">
      <span className="lot-progress__current">{String(current).padStart(2, "0")}</span>
      <span className="lot-progress__track">
        <span
          className="lot-progress__fill"
          style={{ height: `${(current / totalLots) * 100}%` }}
        />
      </span>
      <span className="lot-progress__total">{String(totalLots).padStart(2, "0")}</span>
    </div>
  );
}
