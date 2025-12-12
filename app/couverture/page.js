import React from 'react'
import SectionBanner from '@/components/SectionBanner/SectionBanner'
import Menu from '@/components/Menu/Menu'

export const metadata = {
  title: "Travaux de couverture à Perpignan | Pose, rénovation & réparation",
  description:
    "Entreprise de couverture à Perpignan : pose de toiture, rénovation, réparation de tuiles, étanchéité et entretien. Interventions professionnelles dans tout le 66.",
};

export default function page() {

  const slides = [
    { image: '/couverture.png', alt: 'Travaux de couverture' },
    { image: '/couverture2.png', alt: 'Équipe professionnelle' },
    { image: '/couverture3.png', alt: 'Matériel moderne' },
  ];

  const description = `
  Couverture Catalane vous accompagne pour tous vos travaux de couverture à Perpignan 
  et dans les Pyrénées-Orientales. Notre équipe de couvreurs professionnels intervient 
  sur tous types de toitures pour la pose, la rénovation, la réparation de tuiles cassées, 
  la réfection complète, la zinguerie et l’étanchéité.

  Nous utilisons des matériaux de qualité et des techniques modernes pour garantir un toit 
  solide, durable et parfaitement protégé contre les intempéries. Chaque intervention est 
  réalisée dans le respect des normes du bâtiment et adaptée à la configuration de votre 
  habitation : tuiles, ardoises, toitures plates, charpentes ou structures complexes.

  Faire appel à Couverture Catalane, c’est bénéficier d’un travail soigné, d’une grande 
  réactivité et d’une expertise reconnue sur tout le secteur de Perpignan. Nous vous garantissons 
  une toiture fiable, esthétique et durable, protégée pour de nombreuses années.
  `;

  return (
    <>
      <SectionBanner
        title="Travaux de couverture à Perpignan"
        subtitle="Pose, rénovation et réparation de tous types de toitures"
        backgroundImage="/couverture.png"
      />
      <Menu
        title="Travaux de couverture"
        description={description}
        slides={slides}
        phoneNumber="0628286967"
        bookingLink="/contact"
      />
    </>
  )
}

