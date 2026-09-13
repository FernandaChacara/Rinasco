"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./PropertyGallery.module.css";
import type { PropertyPhoto } from "../lib/properties";

export function PropertyGallery({ photos }: { photos: PropertyPhoto[] }) {
  const [index, setIndex] = useState(0);

  const go = (direction: 1 | -1) => {
    setIndex((current) => (current + direction + photos.length) % photos.length);
  };

  return (
    <div className={styles.gallery}>
      <div className={styles.stage}>
        {photos.map((photo, i) => (
          <Image
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(max-width: 900px) 100vw, 62vw"
            priority={i === 0}
            className={styles.stageImage}
            style={{ opacity: index === i ? 1 : 0 }}
          />
        ))}

        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowPrev}`}
          onClick={() => go(-1)}
          aria-label="Foto anterior"
        >
          ←
        </button>
        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowNext}`}
          onClick={() => go(1)}
          aria-label="Próxima foto"
        >
          →
        </button>

        <span className={styles.counter}>
          {String(index + 1).padStart(2, "0")}/{String(photos.length).padStart(2, "0")}
        </span>
      </div>

      <div className={styles.thumbs}>
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            className={styles.thumb}
            data-active={index === i}
            onClick={() => setIndex(i)}
            aria-label={`Ver foto ${i + 1}`}
          >
            <Image src={photo.src} alt={photo.alt} fill sizes="80px" />
          </button>
        ))}
      </div>
    </div>
  );
}
