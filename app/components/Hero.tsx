"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";
import styles from "./Hero.module.css";

gsap.registerPlugin(ScrollTrigger, SplitText);

const photos = [
  { src: "/property-01/patio.jpg", alt: "Pátio externo da casa, com jardim de cítricos e área de estar", label: "Pátio" },
  { src: "/property-01/bedroom.jpg", alt: "Quarto principal, paredes em verde-água e cama em ferro forjado", label: "Quarto" },
  { src: "/property-01/balcony.jpg", alt: "Varanda com vista para os telhados de telha da vizinhança", label: "Varanda" },
  { src: "/property-01/bathroom-shower.jpg", alt: "Banheiro com box e ladrilho verde", label: "Banheiro" },
  { src: "/property-01/bathroom-powder.jpg", alt: "Lavabo com papel de parede dourado", label: "Lavabo" },
];

export function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let removeIntroListener: (() => void) | undefined;

    const ctx = gsap.context(() => {
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

      if (prefersReducedMotion) return;

      // The Shutter intro covers the hero for its first ~1.2s; wait for it
      // to hand off so the headline reveal starts exactly as it's uncovered
      // instead of having already played underneath it.
      const playIntro = () => {
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
      };

      if (document.documentElement.classList.contains("intro-done")) {
        playIntro();
      } else {
        window.addEventListener("rinasco:introend", playIntro, { once: true });
        removeIntroListener = () =>
          window.removeEventListener("rinasco:introend", playIntro);
      }
    }, root);

    return () => {
      removeIntroListener?.();
      ctx.revert();
    };
  }, []);

  return (
    <section className={styles.hero} ref={rootRef}>
      <div className={styles.stage} ref={imageWrapRef}>
        {photos.map((photo, i) => (
          <Image
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="100vw"
            priority={i === 0}
            className={styles.stageImage}
            style={{ opacity: activeIndex === i ? 1 : 0 }}
          />
        ))}
      </div>

      <div className={styles.bottomStack}>
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

        <div className={styles.filmstrip}>
          <div className={`container ${styles.filmstripInner}`}>
            {photos.map((photo, i) => (
              <button
                key={photo.src}
                type="button"
                className={styles.filmItem}
                data-active={activeIndex === i}
                onClick={() => setActiveIndex(i)}
              >
                <span className={styles.filmTitle}>{photo.label}</span>
                <span className={styles.filmMeta}>Portugal</span>
              </button>
            ))}
          </div>
          <div className={styles.baseline}>
            <div
              className={styles.progress}
              style={{ transform: `scaleX(${(activeIndex + 1) / photos.length})` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
