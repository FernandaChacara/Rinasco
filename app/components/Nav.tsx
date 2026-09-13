import styles from "./Nav.module.css";

export function Nav() {
  return (
    <header className={styles.nav} data-nav>
      <span className={styles.mark}>Rinasco</span>
      <nav className={styles.links}>
        <a className={styles.link} href="#colecao">
          Coleção
        </a>
        <a className={styles.link} href="#metodo">
          Método
        </a>
        <a className={styles.cta} href="#contato">
          Solicitar acesso
        </a>
      </nav>
    </header>
  );
}
