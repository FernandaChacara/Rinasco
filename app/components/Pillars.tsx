import styles from "./Pillars.module.css";

const pillars = [
  {
    roman: "I",
    label: "Curadoria",
    text: "Cada residência é aceita na coleção por seu caráter e sua origem — nunca por volume ou disponibilidade de agenda.",
  },
  {
    roman: "II",
    label: "Ambiente 3D",
    text: "Um passeio imersivo e fiel às proporções reais da casa, disponível antes de qualquer contato ser feito.",
  },
  {
    roman: "III",
    label: "Atendimento privado",
    text: "Um único interlocutor acompanha sua reserva do início ao fim — nunca uma fila de suporte.",
  },
];

export function Pillars() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <p className={`${styles.kicker} kicker`} data-reveal>
            <span className="rule" /> O padrão Rinasco
          </p>
          <h2 className={`${styles.title} display`} data-reveal>
            Três compromissos, sempre visíveis
          </h2>
        </div>
        <div className={styles.grid}>
          {pillars.map((p) => (
            <div key={p.roman} className={styles.item} data-reveal>
              <span className={styles.roman}>{p.roman}</span>
              <p className={`${styles.label} kicker`}>{p.label}</p>
              <p className={styles.text}>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
