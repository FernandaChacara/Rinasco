import Link from "next/link";
import Image from "next/image";
import { PropertySidebar } from "../components/PropertySidebar";
import { properties } from "../lib/properties";
import styles from "./listing.module.css";

export const metadata = {
  title: "Propriedades — Welcome Home Properties",
  description: "A coleção de casas de temporada Welcome Home Properties em Portugal.",
};

export default function PropertiesPage() {
  return (
    <div className={styles.layout}>
      <PropertySidebar breadcrumb="Propriedades / Residencial" />

      <div className={styles.grid}>
        {properties.map((property) => (
          <Link
            key={property.slug}
            href={`/propriedades/${property.slug}`}
            className={styles.card}
          >
            <div className={styles.cover}>
              <Image
                src={property.gallery[0].src}
                alt={property.gallery[0].alt}
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
              />
            </div>
            <div className={styles.cardInfo}>
              <h2 className={`${styles.cardName} display`}>{property.name}</h2>
              <p className={styles.cardMeta}>
                {property.year} · {property.category} · {property.status}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
