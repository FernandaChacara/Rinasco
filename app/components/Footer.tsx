import Link from "next/link";
import styles from "./Footer.module.css";

const columns = [
  {
    heading: "Índice",
    links: [
      { href: "/propriedades", label: "Casas" },
      { href: "#contato", label: "Sobre" },
      { href: "#contato", label: "Processo" },
      { href: "#contato", label: "Contacto" },
    ],
  },
  {
    heading: "Sede",
    links: [{ href: "#contato", label: "Portugal" }, { href: "#contato", label: "Apenas com marcação" }],
  },
  {
    heading: "Contacto",
    links: [
      { href: "mailto:contato@welcomehomeproperties.com", label: "contato@welcomehomeproperties.com" },
      { href: "tel:+351000000000", label: "+351 000 000 000" },
      { href: "#", label: "Instagram" },
    ],
  },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className={`${styles.kicker} kicker`}>Começar</p>
        <a href="#contato" className={`${styles.headline} display`}>
          Conte-nos sobre a sua casa →
        </a>

        <div className={styles.columns}>
          {columns.map((column) => (
            <div key={column.heading} className={styles.column}>
              <p className={styles.columnHeading}>{column.heading}</p>
              <ul className={styles.columnLinks}>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} Welcome Home Properties</span>
          <span>Imobiliária de Luxo</span>
          <span>Portugal</span>
        </div>
      </div>
    </footer>
  );
}
