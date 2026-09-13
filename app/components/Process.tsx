import styles from "./Process.module.css";

const steps = [
  {
    title: "Descubra a coleção",
    text: "Percorra cada residência em 3D e conheça sua origem antes de entrar em contato.",
  },
  {
    title: "Consulte a disponibilidade",
    text: "Veja em tempo real as datas livres da casa escolhida, sem intermediários.",
  },
  {
    title: "Reserve com segurança",
    text: "Confirme e pague sua estadia diretamente pelo site, com um interlocutor dedicado à sua reserva.",
  },
];

export function Process() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <p className={`${styles.kicker} kicker`} data-reveal>
            <span className="rule" /> Como funciona
          </p>
          <h2 className={`${styles.title} display`} data-reveal>
            Da descoberta à chave, em três movimentos
          </h2>
        </div>
        <div className={styles.steps}>
          {steps.map((s, i) => (
            <div key={s.title} className={styles.step} data-reveal>
              <span className={styles.index}>{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepText}>{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
