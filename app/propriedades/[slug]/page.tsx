import { notFound } from "next/navigation";
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

  return (
    <div className={styles.layout}>
      <PropertySidebar
        breadcrumb="Propriedades / Residencial"
        property={property}
        activeTab="fotos"
      />
      <div className={styles.right}>
        <PropertyGallery photos={property.gallery} />
      </div>
    </div>
  );
}
