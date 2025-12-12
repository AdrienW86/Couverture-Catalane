import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './services.module.css';

const servicesData = [
  {
    title: "Couverture",
    image: "/couverture.png",
    link: "/couverture"
  },
  {
    title: "Zinguerie",
    image: "/zinguerie.png",
    link: "/zinguerie"
  },
  {
    title: "Nettoyage",
    image: "/nettoyage.png",
    link: "/nettoyage"
  },
  {
    title: "Réparations",
    image: "/reparations.png",
    link: "/reparations"
  },
  {
    title: "Fuites",
    image: "/fuites.png",
    link: "/fuites"
  },
  {
    title: "Charpente",
    image: "/charpente3.png",
    link: "/charpente"
  },
];

export default function Services() {
  return (
    <>
      <h2 id="services" className={styles.h2}>Nos Services</h2>
      <section className={styles.services}>
        {servicesData.map((service, index) => (
          <Link key={index} href={service.link} className={styles.card}>
            <h3 className={styles.h3}>{service.title}</h3>
            <Image
              src={service.image}
              alt={service.title}
              fill
              className={styles.backgroundImage}
              priority
            />
            <div className={styles.overlay}></div>
          </Link>
        ))}
      </section>
    </>
  );
}
