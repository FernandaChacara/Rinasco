import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PropertySidebar } from "../../components/PropertySidebar";
import { PropertyGallery } from "../../components/PropertyGallery";
import { getProperty, properties } from "../../lib/properties";
import styles from "./detail.module.css";

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
      ? `${property.name} — Welcome Home Properties`
      : "Welcome Home Properties",
  };
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = getProperty(slug);
  if (!property) notFound();

  const currentIndex = properties.findIndex((p) => p.slug === property.slug);
  const nextProperty = properties[(currentIndex + 1) % properties.length];

  return (
    <>
    <div className={styles.layout}>
      <PropertySidebar breadcrumb="Propriedades / Residencial" property={property} />
      <div className={styles.right}>
        <PropertyGallery photos={property.gallery} />

        <div className={styles.story}>
          <div className={styles.storyText}>
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

          <div className={styles.storyImage}>
            <Image
              src={property.gallery[0].src}
              alt={property.gallery[0].alt}
              fill
              sizes="(max-width: 1100px) 100vw, 32vw"
            />
          </div>
        </div>
      </div>
    </div>

    {/* Screen 3: fullscreen gallery, no sidebar — the same photos, full width */}
    <PropertyGallery photos={property.gallery} />

    <div className={styles.nextProject}>
      <Link href="/propriedades" className={styles.allWork}>
        ← Todas as casas
      </Link>
      <Link href={`/propriedades/${nextProperty.slug}`} className={styles.nextLink}>
        <span className={styles.nextLabel}>Próxima casa</span>
        <span className={`${styles.nextName} display`}>{nextProperty.name}</span>
      </Link>
    </div>
    </>
  );
}
