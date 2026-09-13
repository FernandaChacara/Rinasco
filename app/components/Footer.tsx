import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <span className={styles.mark}>Rinasco</span>
        <span className={styles.epigraph}>Origem única, sempre.</span>
        <span className={styles.meta}>
          © {new Date().getFullYear()} Rinasco
        </span>
      </div>
    </footer>
  );
}
