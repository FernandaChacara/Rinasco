import { HouseScene } from "./HouseScene";
import styles from "./Collection.module.css";

const lots = [
  {
    number: "002",
    lot: 2,
    variant: "glass" as const,
    name: "Casa Vidro-Sul",
    desc: "Um pavilhão de vidro e concreto aparente, aberto para uma piscina espelhada que dissolve o limite entre casa e horizonte.",
    facts: ["Litoral Norte, SP", "4 suítes", "310 m²"],
  },
  {
    number: "003",
    lot: 3,
    variant: "stone" as const,
    name: "Ancoradouro Norte",
    desc: "Pedra local e madeira escura em uma casa de pescadores reconstruída, a poucos passos de um cais privativo.",
    facts: ["Costa Verde, RJ", "5 quartos", "Cais próprio"],
  },
  {
    number: "004",
    lot: 4,
    variant: "cabin" as const,
    name: "Refúgio da Serra Alta",
    desc: "Estrutura em A-frame entre araucárias centenárias, lareira de pedra e uma varanda voltada para o vale.",
    facts: ["Serra Catarinense", "3 quartos", "Lareira original"],
  },
];

export function Collection() {
  return (
    <section className={styles.section} id="colecao">
      <div className="container">
        <div className={styles.header}>
          <p className={`${styles.kicker} kicker`} data-reveal>
            <span className="rule rule--light" /> A coleção atual
          </p>
          <h2 className={`${styles.title} display`} data-reveal>
            Três origens, hoje disponíveis
          </h2>
        </div>
        <ul className={styles.list}>
          {lots.map((item) => (
            <li key={item.number} className={styles.item} data-lot={item.lot} data-reveal>
              <span className={styles.number}>Lote nº {item.number}</span>
              <div className={styles.body}>
                <div className={styles.mark}>
                  <HouseScene variant={item.variant} />
                </div>
                <div>
                  <h3 className={`${styles.name} display`}>{item.name}</h3>
                  <p className={styles.desc}>{item.desc}</p>
                  <div className={styles.facts}>
                    {item.facts.map((fact) => (
                      <span key={fact}>{fact}</span>
                    ))}
                    <span>Sob consulta</span>
                  </div>
                  <a className={styles.link} href="#contato">
                    Ver disponibilidade →
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
