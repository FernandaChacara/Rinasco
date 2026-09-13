"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import styles from "./Collection.module.css";
import { properties } from "../lib/properties";

gsap.registerPlugin(ScrollTrigger);

const property = properties[0];
const photos = property.gallery;

export function Collection() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(`.${styles.photo}`).forEach((el) => {
        const img = el.querySelector("img");
        if (!img) return;
        gsap.fromTo(
          img,
          { scale: 1.22 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.section} id="colecao" ref={rootRef}>
      <div className="container">
        <div className={styles.header}>
          <p className={`${styles.kicker} kicker`} data-reveal>
            <span className="rule rule--light" /> Disponível agora
          </p>
          <h2 className={`${styles.title} display`} data-reveal>
            Uma casa, hoje disponível em Portugal
          </h2>
        </div>

        <div className={styles.property} data-reveal>
          <div className={styles.gallery}>
            {photos.map((photo, i) => (
              <div key={photo.src} className={styles.photo} data-index={i}>
                <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 720px) 100vw, 50vw" />
              </div>
            ))}
          </div>
          <div className={styles.info}>
            <h3 className={`${styles.name} display`}>{property.name}</h3>
            <p className={styles.desc}>{property.description[0]}</p>
            <div className={styles.facts}>
              <span>{property.location}</span>
              <span>{property.tipologia}</span>
              <span>{property.price}</span>
            </div>
            <Link className={styles.link} href={`/propriedades/${property.slug}`}>
              Ver propriedade →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
