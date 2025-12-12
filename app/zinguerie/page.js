import React from 'react'
import SectionBanner from '@/components/SectionBanner/SectionBanner'
import Menu from '@/components/Menu/Menu'

export const metadata = {
  title: "Pose de gouttières & zinguerie à Perpignan | Installation et réparation",
  description:
    "Pose, réparation et remplacement de gouttières à Perpignan : zinguerie, étanchéité, évacuation des eaux pluviales. Interventions rapides et professionnelles dans tout le 66.",
};

export default function page() {

  const slides = [
    { image: '/zinguerie2.png', alt: 'Pose de gouttières' },
    { image: '/zinguerie.png', alt: 'Travaux de zinguerie' },
    { image: '/zinguerie3.png', alt: 'Réparation de gouttières' },
  ];

  const description = `
  Couverture Catalane réalise la pose, la réparation et le remplacement de gouttières 
  et d’éléments de zinguerie à Perpignan et dans l’ensemble des Pyrénées-Orientales (66).
  Un système d’évacuation des eaux pluviales bien installé est essentiel pour protéger 
  votre toiture, vos murs et vos fondations contre l’humidité et les infiltrations.

  Nous intervenons sur tous types de matériaux : gouttières en zinc, aluminium, PVC 
  ou cuivre, avec une installation soignée et durable. Nos couvreurs zingueurs assurent 
  également la pose de descentes d’eau, chéneaux, abergements, bandes de rive et toutes 
  les finitions métalliques nécessaires pour garantir une toiture parfaitement étanche.

  Grâce à notre expertise locale, nous adaptons chaque intervention à la configuration 
  de votre maison ou bâtiment, en tenant compte des normes d’évacuation, de la météo 
  et des spécificités architecturales du secteur de Perpignan.

  Faire appel à Couverture Catalane pour vos travaux de zinguerie, c’est bénéficier d’un 
  service professionnel, rapide et de qualité, pour une toiture protégée durablement 
  contre les intempéries.
  `;

  return (
    <>
      <SectionBanner
        title="Pose de gouttières & travaux de zinguerie à Perpignan"
        subtitle="Installation, réparation et entretien des systèmes d’évacuation"
        backgroundImage="/zinguerie.png"
      />
      <Menu
        title="Pose de gouttières et Zinguerie"
        description={description}
        slides={slides}
        phoneNumber="0628286967"
        bookingLink="/contact"
      />
    </>
  )
}
