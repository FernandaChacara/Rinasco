"use client";

import { useState } from "react";
import styles from "./Cta.module.css";

export function Cta() {
  const [sent, setSent] = useState(false);

  return (
    <section className={styles.section} id="contato">
      <div className="container">
        <h2 className={`${styles.title} display`} data-reveal>
          Fale direto com quem cuida da casa.
        </h2>
        <p className={styles.sub} data-reveal>
          Deixe seus dados e um interlocutor da Rinasco entra em contato para
          conduzir sua reserva.
        </p>

        {sent ? (
          <p className={styles.note} data-reveal>
            Recebemos sua solicitação. Em breve alguém da Rinasco entrará em
            contato.
          </p>
        ) : (
          <form
            className={styles.form}
            data-reveal
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className={styles.field}>
              <label htmlFor="name">Nome</label>
              <input id="name" name="name" type="text" required />
            </div>
            <div className={styles.field}>
              <label htmlFor="email">E-mail</label>
              <input id="email" name="email" type="email" required />
            </div>
            <div className={styles.field}>
              <label htmlFor="message">Casa de interesse e datas</label>
              <textarea id="message" name="message" rows={3} />
            </div>
            <button className={styles.submit} type="submit">
              Solicitar acesso privado
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
