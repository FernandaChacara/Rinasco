import { notFound } from "next/navigation";
import Image from "next/image";
import { PropertySidebar } from "../../../components/PropertySidebar";
import { getProperty, properties } from "../../../lib/properties";
import styles from "./story.module.css";

export function generateStaticParams() {
  return properties.map((property) => ({ slug: property.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = getProperty(slug);
  return {
    title: property
      ? `${property.name} — Sobre — Welcome Home Properties`
      : "Welcome Home Properties",
  };
}

export default async function PropertyStoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = getProperty(slug);
  if (!property) notFound();

  return (
    <div className={styles.layout}>
      <PropertySidebar
        breadcrumb="Propriedades / Residencial"
        property={property}
        activeTab="sobre"
      />

      <div className={styles.story}>
        <p className={styles.timelineLabel}>Timeline</p>
        <p className={styles.timeline}>{property.timeline}</p>

        <div className={styles.text}>
          {property.description.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className={styles.photoRow}>
          {property.storyPhotos.map((photo) => (
            <div key={photo.src} className={styles.photoItem}>
              <Image src={photo.src} alt={photo.alt} fill sizes="20vw" />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.image}>
        <Image
          src={property.gallery[0].src}
          alt={property.gallery[0].alt}
          fill
          sizes="(max-width: 1100px) 100vw, 32vw"
        />
      </div>
    </div>
  );
}
