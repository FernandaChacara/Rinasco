import styles from "./Manifesto.module.css";

export function Manifesto() {
  return (
    <section className={styles.section} id="metodo">
      <div className="container">
        <div className={styles.grid}>
          <h2 className={`${styles.quote} display`} data-reveal>
            O que você vê é o que você encontra.
          </h2>
          <p className={styles.body} data-reveal>
            Cada casa é fotografada como ela realmente é — sem edição que
            prometa mais do que existe. Você vê os cômodos, a luz, os
            detalhes, e fala diretamente com quem cuida do imóvel, sem
            agência no meio. O que muda daqui para frente é o padrão que
            você passa a esperar de uma locação de temporada.
          </p>
        </div>
      </div>
    </section>
  );
}
