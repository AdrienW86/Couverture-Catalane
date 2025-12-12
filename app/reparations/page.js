import React from 'react'
import SectionBanner from '@/components/SectionBanner/SectionBanner'
import Menu from '@/components/Menu/Menu'

export const metadata = {
  title: "Réparation de toiture à Perpignan | Intervention rapide & durable",
  description:
    "Couvreur professionnel à Perpignan : réparation de tuiles cassées, fuites, infiltrations, zinguerie et charpente. Intervention rapide et fiable dans tout le 66.",
};

export default function page() {

  const slides = [
    { image: '/reparations2.png', alt: 'Réparation de toiture' },
    { image: '/reparations.png', alt: 'Couvreur professionnel' },
    { image: '/reparations3.png', alt: 'Matériel moderne' },
  ];

  const description = `
  Couverture Catalane intervient pour la réparation de toutes vos toitures à Perpignan 
  et dans les Pyrénées-Orientales. Notre équipe de couvreurs expérimentés intervient 
  rapidement pour réparer les tuiles cassées, les fuites, les infiltrations ou les zones 
  endommagées de votre toiture.

  Nous utilisons des techniques adaptées et des matériaux de qualité pour assurer une 
  réparation durable et sécurisée. Chaque intervention est réalisée dans le respect des 
  normes du bâtiment et adaptée à la configuration de votre maison ou bâtiment : tuiles, 
  ardoises, toits plats, charpente ou zinguerie.

  Faire appel à Couverture Catalane pour la réparation de votre toiture, c’est choisir 
  une entreprise professionnelle et réactive à Perpignan. Nous garantissons un toit fiable, 
  étanche et durable, protégé contre les intempéries et les dommages futurs.
  `;

  return (
    <>
      <SectionBanner
        title="Réparation de toiture à Perpignan"
        subtitle="Intervention rapide pour fuites, tuiles cassées et zones endommagées"
        backgroundImage="/reparations.png"
      />
      <Menu
        title="Réparation de toiture"
        description={description}
        slides={slides}
        phoneNumber="0628286967"
        bookingLink="/contact"
      />
    </>
  )
}
