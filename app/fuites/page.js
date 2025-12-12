import React from 'react'
import SectionBanner from '@/components/SectionBanner/SectionBanner'
import Menu from '@/components/Menu/Menu'

export const metadata = {
  title: "Réparation de fuites de toiture à Perpignan | Intervention rapide",
  description:
    "Couvreur professionnel à Perpignan : réparation de fuites, infiltrations, tuiles cassées et zinguerie. Intervention rapide et fiable dans tout le 66.",
};

export default function page() {

  const slides = [
    { image: '/fuites2.png', alt: 'Réparation de fuite' },
    { image: '/fuites.png', alt: 'Couvreur expérimenté' },
    { image: '/fuites3.png', alt: 'Matériel moderne' },
  ];

  const description = `
  Couverture Catalane intervient rapidement pour la réparation de fuites de toiture à Perpignan 
  et dans tout le département des Pyrénées-Orientales (66). Nos couvreurs professionnels 
  détectent l’origine exacte de l’infiltration et réalisent des réparations durables pour 
  protéger votre habitation contre l’humidité et les dommages structurels.

  Nous intervenons sur tous types de toitures : tuiles, ardoises, toits plats ou charpentes. 
  Nous prenons également en charge la réparation des éléments de zinguerie et des gouttières 
  pour garantir une étanchéité complète et pérenne.

  Faire appel à Couverture Catalane pour réparer vos fuites, c’est choisir une entreprise 
  locale experte et réactive. Nous vous assurons un toit étanche, sécurisé et durable, 
  avec une intervention rapide pour limiter les dégâts et protéger votre maison.
  `;

  return (
    <>
      <SectionBanner
        title="Réparation de fuites de toiture à Perpignan"
        subtitle="Intervention rapide pour infiltrations et tuiles endommagées"
        backgroundImage="/fuites.png"
      />
      <Menu
        title="Réparation de fuites"
        description={description}
        slides={slides}
        phoneNumber="0628286967"
        bookingLink="/contact"
      />
    </>
  )
}
