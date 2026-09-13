"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Shutter.module.css";

export function Shutter() {
  const panelRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<SVGSVGElement>(null);

  useLayoutEffect(() => {
    const panel = panelRef.current;
    const mark = markRef.current;
    if (!panel || !mark) return;

    const finish = () => {
      document.documentElement.classList.add("intro-done");
      window.dispatchEvent(new Event("rinasco:introend"));
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      panel.style.display = "none";
      finish();
      return;
    }

    const ctx = gsap.context(() => {
      gsap
        .timeline()
        .fromTo(
          mark,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
        )
        .to(mark, { opacity: 0, duration: 0.3, ease: "power1.in" }, "+=0.35")
        .call(finish)
        .to(panel, { yPercent: -100, duration: 0.9, ease: "power4.inOut" }, "<")
        .set(panel, { display: "none" });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={panelRef} className={styles.shutter} aria-hidden="true">
      <svg
        ref={markRef}
        className={styles.mark}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 50V27L32 12L52 27V50"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        <path
          d="M25 50V34H39V50"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
