import Link from "next/link";
import styles from "./PropertySidebar.module.css";
import type { Property } from "../lib/properties";

const facts = (property: Property) => {
  const rows: { label: string; value: string }[] = [
    { label: "Ano", value: property.year },
    { label: "Área", value: property.area },
    { label: "Localização", value: property.location },
    { label: "Estado", value: property.status },
  ];
  if (property.price) rows.push({ label: "Preço", value: property.price });
  if (property.tipologia) rows.push({ label: "Tipologia", value: property.tipologia });
  if (property.quartos) rows.push({ label: "Quartos", value: property.quartos });
  return rows;
};

export function PropertySidebar({
  breadcrumb,
  property,
  activeTab,
}: {
  breadcrumb: string;
  property?: Property;
  activeTab?: "fotos" | "sobre";
}) {
  return (
    <aside className={styles.sidebar}>
      <Link href="/" className={styles.logo}>
        Rinasco
      </Link>

      <p className={styles.breadcrumb}>{breadcrumb}</p>

      {property ? (
        <>
          <h1 className={`${styles.name} display`}>// {property.name}</h1>
          <p className={styles.subMeta}>
            {property.year} · {property.category}
          </p>

          <nav className={styles.tabs}>
            <Link
              href={`/propriedades/${property.slug}`}
              data-active={activeTab === "fotos"}
            >
              Fotos
            </Link>
            <Link
              href={`/propriedades/${property.slug}/sobre`}
              data-active={activeTab === "sobre"}
            >
              Sobre
            </Link>
          </nav>

          <dl className={styles.facts}>
            {facts(property).map((row) => (
              <div key={row.label} className={styles.factRow}>
                <dt>{row.label}</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
          </dl>
        </>
      ) : (
        <Link href="/" className={styles.menuLink}>
          Menu
        </Link>
      )}
    </aside>
  );
}
