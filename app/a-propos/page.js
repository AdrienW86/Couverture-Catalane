import React from "react";
import styles from "./apropos.module.css";

export default function APropos() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>À propos de Couverture Catalane</h1>

      <section className={styles.section}>
        <h2>Notre histoire</h2>
        <p>
          Couverture Catalane est née de la volonté de proposer des services de couverture professionnels, fiables et adaptés à chaque besoin. 
          Depuis nos débuts, nous accompagnons particuliers et entreprises dans la pose, la rénovation et la réparation de toitures dans les Pyrénées-Orientales.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Notre mission</h2>
        <p>
          Notre mission est simple : garantir des toitures solides, étanches et durables pour tous nos clients. 
          Nous nous engageons à utiliser des méthodes modernes et des matériaux de qualité, pour des interventions sûres et efficaces.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Nos valeurs</h2>
        <ul className={styles.list}>
          <li><strong>Professionnalisme :</strong> des équipes formées et expérimentées.</li>
          <li><strong>Fiabilité :</strong> respect des délais et engagement qualité.</li>
          <li><strong>Durabilité :</strong> matériaux et techniques garantissant des toitures pérennes.</li>
          <li><strong>Proximité :</strong> écoute et adaptation aux besoins spécifiques de chaque client.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Notre équipe</h2>
        <p>
          Chaque membre de notre équipe est sélectionné pour son expertise et sa rigueur. 
          Formés aux bonnes pratiques de couverture et sécurité chantier, nos couvreurs assurent un service de qualité et fiable.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Contactez-nous</h2>
        <p>
          Vous avez une question ou souhaitez un devis ? <br />
          Téléphone : 06 62 12 56 11 <br />
          Email : contact@couverture-catalane.fr
        </p>
      </section>
    </div>
  );
}
