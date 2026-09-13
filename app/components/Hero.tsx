"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";
import styles from "./Hero.module.css";

gsap.registerPlugin(ScrollTrigger, SplitText);

export function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      const split = headlineRef.current
        ? new SplitText(headlineRef.current, { type: "lines", mask: "lines" })
        : null;

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      if (split) {
        tl.from(split.lines, { yPercent: 110, duration: 1, stagger: 0.1 });
      }
      tl.from(
        [`.${styles.kicker}`, `.${styles.sub}`, `.${styles.meta}`, `.${styles.actions}`],
        { opacity: 0, y: 16, duration: 0.7, ease: "power3.out", stagger: 0.09 },
        split ? "-=0.55" : 0
      );

      if (imageWrapRef.current) {
        gsap.to(imageWrapRef.current, {
          yPercent: 14,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.hero} ref={rootRef}>
      <div className={styles.stage} ref={imageWrapRef}>
        <Image
          src="/property-01/patio.jpg"
          alt="Pátio externo da casa, com jardim de cítricos e área de estar"
          fill
          sizes="100vw"
          priority
        />
      </div>
      <div className={`container ${styles.content}`}>
        <p className={`${styles.kicker} kicker`}>
          <span className="rule" /> Temporada em Portugal
        </p>
        <h1 className={`${styles.headline} display`} ref={headlineRef}>
          A casa, exatamente como ela é.
        </h1>
        <p className={styles.sub}>
          Fotos reais, sem intermediários, para você decidir com clareza
          antes de reservar — sem surpresa na chegada.
        </p>
        <div className={styles.meta}>
          <span>Portugal</span>
          <span>Reserva direta</span>
          <span>Sem intermediários</span>
        </div>
        <div className={styles.actions}>
          <a className={styles.primary} href="#colecao">
            Ver a casa disponível
          </a>
          <a className={styles.secondary} href="#metodo">
            Como funciona
          </a>
        </div>
      </div>
    </section>
  );
}
