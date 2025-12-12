import React from 'react'
import SectionBanner from '@/components/SectionBanner/SectionBanner'
import Menu from '@/components/Menu/Menu'

export const metadata = {
  title: "Hydrofuge de toiture à Perpignan | Nettoyage & Protection Durable",
  description:
    "Traitement hydrofuge de toiture à Perpignan : nettoyage complet, protection longue durée, prévention des infiltrations et de la mousse. Intervention professionnelle dans tout le 66.",
};


export default function page() {

  const slides = [
    { image: '/nettoyage.png', alt: 'Nettoyage de toiture' },
    { image: '/nettoyage2.png', alt: 'démoussage de toiture' },
    { image: '/nettoyage3.png', alt: 'toiture nettoyée' },
  ];

  const description = `
  Couverture Catalane est spécialisée dans le démoussage et le nettoyage de toiture 
  à Perpignan et dans tout le département des Pyrénées-Orientales (66). Grâce à notre 
  expertise de couvreur local, nous intervenons rapidement pour redonner à votre toit 
  sa solidité et son apparence d’origine tout en prolongeant sa durée de vie.

  Nos équipes professionnelles utilisent des techniques adaptées à chaque type de toiture : 
  tuiles, ardoises, fibrociment ou toits terrasses. Nous éliminons efficacement mousses, 
  lichens, saletés, résidus végétaux et dépôts incrustés, même dans les zones difficiles 
  d’accès. Chaque nettoyage est réalisé dans le respect total des matériaux, sans 
  haute pression excessive qui pourrait endommager votre couverture.

  Faire appel à Couverture Catalane pour le démoussage ou le nettoyage de toiture, c’est 
  choisir une entreprise locale expérimentée, reconnue dans le 66 pour son sérieux, 
  son professionnalisme et la qualité de ses interventions. Nous vous garantissons un 
  toit propre, sain et durable, avec une intervention sécurisée et conforme aux normes 
  du bâtiment.

  Pour entretenir votre toiture à Perpignan, Canet, Saint-Estève, Cabestany, Argelès ou 
  partout dans les Pyrénées-Orientales, Couverture Catalane est votre spécialiste de 
  confiance.
`;


  return (
    <>
      <SectionBanner
        title="Nettoyage et démoussage de votre toiture"
        subtitle="Traitement hydrofuge pour rendre sa splendeur à votre toiture"
        backgroundImage="/nettoyage2.png"
      />
      <Menu
        title="Nettoyage et Démoussage"
        description={description}
        slides={slides}
        phoneNumber="0628286967"
        bookingLink="/contact"
      />
    </>
  )
}

