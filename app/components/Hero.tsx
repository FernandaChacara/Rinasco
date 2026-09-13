"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";
import { properties } from "../lib/properties";

gsap.registerPlugin(ScrollTrigger);

// The homepage carousel pages between properties (not between one house's
// rooms) — each slide is a property's cover photo, name, year and category.
const photos = properties.map((property) => ({
  src: property.gallery[0].src,
  alt: property.gallery[0].alt,
  property,
}));

export function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);
  const filmstripRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  activeIndexRef.current = activeIndex;

  // Parallax + shutter handoff: unrelated to the paging gesture below, so it
  // stays in its own effect with an empty dep array.
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
      // to hand off so the filmstrip fades in exactly as it's uncovered.
      const playIntro = () => {
        if (!filmstripRef.current) return;
        gsap.from(filmstripRef.current.children, {
          opacity: 0,
          y: 12,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.05,
        });
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

  // Browsing the photos is a drag (mouse or touch) or the arrow keys on the
  // stage — the same mechanic as the reference site's carousel. The page's
  // own scroll is never intercepted; dragging is purely horizontal.
  useEffect(() => {
    const stage = imageWrapRef.current;
    if (!stage) return;

    const go = (direction: 1 | -1) => {
      const next = activeIndexRef.current + direction;
      if (next < 0 || next > photos.length - 1) return;
      setActiveIndex(next);
    };

    let dragging = false;
    let startX = 0;

    const onPointerDown = (e: PointerEvent) => {
      dragging = true;
      startX = e.clientX;
      stage.setPointerCapture(e.pointerId);
    };
    const onPointerUp = (e: PointerEvent) => {
      if (!dragging) return;
      dragging = false;
      const dx = e.clientX - startX;
      if (Math.abs(dx) < 40) return;
      go(dx < 0 ? 1 : -1);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };

    stage.addEventListener("pointerdown", onPointerDown);
    stage.addEventListener("pointerup", onPointerUp);
    stage.addEventListener("keydown", onKeyDown);
    return () => {
      stage.removeEventListener("pointerdown", onPointerDown);
      stage.removeEventListener("pointerup", onPointerUp);
      stage.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const active = photos[activeIndex].property;

  return (
    <section className={styles.hero} ref={rootRef}>
      <div
        className={styles.stage}
        ref={imageWrapRef}
        tabIndex={0}
        role="group"
        aria-label="Propriedades, arraste ou use as setas para navegar"
      >
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

      <Link href={`/propriedades/${active.slug}`} className={styles.featured}>
        <span className={`${styles.featuredName} display`}>{active.name}</span>
        <span className={styles.featuredMeta}>
          {active.year} · {active.category}
        </span>
      </Link>

      <div className={styles.filmstrip}>
        <div className={`container ${styles.filmstripInner}`} ref={filmstripRef}>
          {photos.map((photo, i) => (
            <button
              key={photo.property.slug}
              type="button"
              className={styles.filmItem}
              data-active={activeIndex === i}
              onClick={() => setActiveIndex(i)}
            >
              <span className={styles.filmTitle}>{photo.property.name}</span>
              <span className={styles.filmMeta}>
                {photo.property.year} · {photo.property.category}
              </span>
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
    </section>
  );
}
