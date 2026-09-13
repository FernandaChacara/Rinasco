import { Elevation } from "./Elevation";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} data-lot={1}>
      <Elevation variant="estate" className={styles.mark} />
      <div className="container">
        <div className={styles.grid}>
          <div>
            <p className={`${styles.kicker} kicker`} data-reveal>
              <span className="rule" /> Coleção privada — Lote nº 001
            </p>
            <h1 className={`${styles.headline} display`} data-reveal>
              Cada casa carrega uma origem que não se repete.
            </h1>
            <p className={styles.sub} data-reveal>
              A Rinasco cataloga residências de caráter raro e as apresenta em
              um ambiente imersivo em 3D — para quem já sabe reconhecer o que
              é, de fato, insubstituível.
            </p>
            <div className={styles.meta} data-reveal>
              <span>Localização reservada</span>
              <span>6 ambientes</span>
              <span>Vista permanente</span>
              <span>Origem 1978</span>
            </div>
            <div className={styles.actions} data-reveal>
              <a className={styles.primary} href="#contato">
                Solicitar acesso privado
              </a>
              <a className={styles.secondary} href="#metodo">
                Ver o método
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
