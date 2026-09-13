"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Elevation } from "./Elevation";
import styles from "./Hero.module.css";

export function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(`.${styles.mark}`, { opacity: 0, scale: 0.96, duration: 0.9 }).from(
        [
          `.${styles.kicker}`,
          `.${styles.headline}`,
          `.${styles.sub}`,
          `.${styles.meta}`,
          `.${styles.actions}`,
        ],
        { opacity: 0, y: 16, duration: 0.7, stagger: 0.09 },
        "-=0.6"
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.hero} data-lot={1} ref={rootRef}>
      <Elevation variant="estate" className={styles.mark} />
      <div className="container">
        <div className={styles.grid}>
          <div>
            <p className={`${styles.kicker} kicker`}>
              <span className="rule" /> Coleção privada — Lote nº 001
            </p>
            <h1 className={`${styles.headline} display`}>
              Cada casa carrega uma origem que não se repete.
            </h1>
            <p className={styles.sub}>
              A Rinasco cataloga residências de caráter raro e as apresenta em
              um ambiente imersivo em 3D — para quem já sabe reconhecer o que
              é, de fato, insubstituível.
            </p>
            <div className={styles.meta}>
              <span>Localização reservada</span>
              <span>6 ambientes</span>
              <span>Vista permanente</span>
              <span>Origem 1978</span>
            </div>
            <div className={styles.actions}>
              <a className={styles.primary} href="#contato">
                Solicitar acesso privado
              </a>
              <a className={styles.secondary} href="#metodo">
                Ver o método
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
