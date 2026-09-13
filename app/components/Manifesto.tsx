import styles from "./Manifesto.module.css";

export function Manifesto() {
  return (
    <section className={styles.section} id="metodo">
      <div className="container">
        <div className={styles.grid}>
          <p className={`${styles.quote} display`} data-reveal>
            Não vendemos estadias. Preservamos origens.
          </p>
          <p className={styles.body} data-reveal>
            Cada residência da coleção é escolhida por seu caráter, não por
            sua disponibilidade. Antes de qualquer contato, você percorre o
            imóvel em um ambiente 3D fiel às suas proporções e à sua luz —
            porque decidir à distância não deveria significar decidir no
            escuro. O que muda daqui para frente é o padrão que você passa a
            esperar de uma locação de temporada.
          </p>
        </div>
      </div>
    </section>
  );
}
