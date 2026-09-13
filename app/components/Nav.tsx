"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./Nav.module.css";

const links = [
  { href: "#colecao", label: "Coleção" },
  { href: "#metodo", label: "Método" },
  { href: "#contato", label: "Solicitar acesso" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const backdropRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<HTMLAnchorElement[]>([]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    const backdrop = backdropRef.current;
    if (!backdrop) return;

    document.documentElement.classList.toggle("menu-open", open);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (open) {
        gsap.set(backdrop, { display: "flex" });
        if (prefersReducedMotion) {
          gsap.set(backdrop, { opacity: 1 });
          gsap.set(linkRefs.current, { opacity: 1, y: 0 });
          return;
        }
        gsap.fromTo(
          backdrop,
          { opacity: 0 },
          { opacity: 1, duration: 0.35, ease: "power2.out" }
        );
        gsap.fromTo(
          linkRefs.current,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: "power3.out",
            stagger: 0.07,
            delay: 0.1,
          }
        );
      } else if (prefersReducedMotion) {
        gsap.set(backdrop, { display: "none" });
      } else {
        gsap.to(backdrop, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => gsap.set(backdrop, { display: "none" }),
        });
      }
    });

    return () => ctx.revert();
  }, [open]);

  return (
    <header className={styles.nav} data-nav>
      <span className={styles.mark}>Rinasco</span>

      <button
        type="button"
        className={styles.toggle}
        aria-expanded={open}
        aria-controls="site-menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span className={styles.toggleLines} data-open={open}>
          <span className={styles.toggleLine} />
          <span className={styles.toggleLine} />
        </span>
        <span className={styles.toggleLabel}>{open ? "Fechar" : "Menu"}</span>
      </button>

      <div
        className={styles.backdrop}
        id="site-menu"
        ref={backdropRef}
        aria-hidden={!open}
      >
        <nav className={styles.overlayLinks}>
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              ref={(el) => {
                if (el) linkRefs.current[i] = el;
              }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
