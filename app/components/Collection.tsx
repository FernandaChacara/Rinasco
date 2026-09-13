import Image from "next/image";
import styles from "./Collection.module.css";

const photos = [
  { src: "/property-01/bedroom.jpg", alt: "Quarto principal, paredes em verde-água e cama em ferro forjado" },
  { src: "/property-01/patio.jpg", alt: "Pátio externo com jardim de cítricos" },
  { src: "/property-01/balcony.jpg", alt: "Varanda com vista para os telhados de telha da vizinhança" },
  { src: "/property-01/bathroom-shower.jpg", alt: "Banheiro com box e ladrilho verde" },
  { src: "/property-01/bathroom-powder.jpg", alt: "Lavabo com papel de parede dourado" },
];

export function Collection() {
  return (
    <section className={styles.section} id="colecao">
      <div className="container">
        <div className={styles.header}>
          <p className={`${styles.kicker} kicker`} data-reveal>
            <span className="rule rule--light" /> Disponível agora
          </p>
          <h2 className={`${styles.title} display`} data-reveal>
            Uma casa, hoje disponível em Portugal
          </h2>
        </div>

        <div className={styles.property} data-reveal>
          <div className={styles.gallery}>
            {photos.map((photo, i) => (
              <div key={photo.src} className={styles.photo} data-index={i}>
                <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 720px) 100vw, 50vw" />
              </div>
            ))}
          </div>
          <div className={styles.info}>
            <h3 className={`${styles.name} display`}>Casa de temporada</h3>
            <p className={styles.desc}>
              Um quarto com parede em verde-água e cama de ferro forjado, dois
              banheiros — um em ladrilho verde, outro com um lavabo em papel
              de parede dourado — varanda com vista para os telhados de telha
              da vizinhança, e um pátio externo com jardim de cítricos.
            </p>
            <div className={styles.facts}>
              <span>Portugal</span>
              <span>Quartos a confirmar</span>
              <span>Sob consulta</span>
            </div>
            <a className={styles.link} href="#contato">
              Solicitar disponibilidade →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
