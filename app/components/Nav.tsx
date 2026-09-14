"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import { Logo } from "./Logo";
import styles from "./Nav.module.css";

const links = [
  { href: "/propriedades", label: "Propriedades" },
  { href: "#colecao", label: "Coleção" },
  { href: "#metodo", label: "Método" },
  { href: "#contato", label: "Solicitar acesso" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const backdropRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
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
    const panel = panelRef.current;
    if (!backdrop || !panel) return;

    document.documentElement.classList.toggle("menu-open", open);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (open) {
        gsap.set(backdrop, { display: "block" });
        if (prefersReducedMotion) {
          gsap.set(backdrop, { opacity: 1 });
          gsap.set(panel, { xPercent: 0 });
          gsap.set(linkRefs.current, { opacity: 1, y: 0 });
          return;
        }
        gsap.fromTo(backdrop, { opacity: 0 }, { opacity: 1, duration: 0.35, ease: "power2.out" });
        gsap.fromTo(panel, { xPercent: -100 }, { xPercent: 0, duration: 0.5, ease: "power4.out" });
        gsap.fromTo(
          linkRefs.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power3.out", stagger: 0.06, delay: 0.15 }
        );
      } else if (prefersReducedMotion) {
        gsap.set(backdrop, { display: "none" });
      } else {
        gsap.to(panel, { xPercent: -100, duration: 0.4, ease: "power3.in" });
        gsap.to(backdrop, {
          opacity: 0,
          duration: 0.35,
          ease: "power2.in",
          onComplete: () => gsap.set(backdrop, { display: "none" }),
        });
      }
    });

    return () => ctx.revert();
  }, [open]);

  return (
    <header className={styles.nav} data-nav>
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
      </button>

      <Link href="/" className={styles.mark} aria-label="Welcome Home Properties">
        <Logo />
      </Link>

      <a className={styles.utility} href="/propriedades" aria-label="Ver propriedades">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="1.4" />
          <path d="M15.5 15.5L20 20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </a>

      <div className={styles.backdrop} ref={backdropRef} id="site-menu" aria-hidden={!open}>
        <div className={styles.panel} ref={panelRef}>
          <div className={styles.panelHead}>
            <span className={styles.panelKicker}>Menu</span>
            <button
              type="button"
              className={styles.close}
              onClick={() => setOpen(false)}
              aria-label="Fechar menu"
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </button>
          </div>
          <nav className={styles.panelLinks}>
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
          <div className={styles.panelFoot}>
            <span>contato@welcomehomeproperties.com</span>
            <span>Portugal</span>
          </div>
        </div>
      </div>
    </header>
  );
}
