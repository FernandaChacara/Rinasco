"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
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
      gsap.from(
        [
          `.${styles.kicker}`,
          `.${styles.headline}`,
          `.${styles.sub}`,
          `.${styles.meta}`,
          `.${styles.actions}`,
        ],
        { opacity: 0, y: 16, duration: 0.7, ease: "power3.out", stagger: 0.09 }
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.hero} ref={rootRef}>
      <div className={`container ${styles.grid}`}>
        <div>
          <p className={`${styles.kicker} kicker`}>
            <span className="rule" /> Temporada em Portugal
          </p>
          <h1 className={`${styles.headline} display`}>
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
        <div className={styles.stage}>
          <Image
            src="/property-01/patio.jpg"
            alt="Pátio externo da casa, com jardim de cítricos e área de estar"
            fill
            sizes="(max-width: 900px) 100vw, 55vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
