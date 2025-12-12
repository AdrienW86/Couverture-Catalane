import React from 'react'
import SectionBanner from '@/components/SectionBanner/SectionBanner'
import Menu from '@/components/Menu/Menu'

export const metadata = {
  title: "Travaux de charpente à Perpignan | Construction & Rénovation",
  description:
    "Charpentier professionnel à Perpignan : construction, rénovation, renforcement et réparation de charpente. Intervention soignée dans tout le 66 pour assurer la solidité et la durabilité de votre toiture.",
};

export default function page() {

  const slides = [
    { image: '/charpente.png', alt: 'charpente' },
    { image: '/charpente2.png', alt: 'travaux de charpente' },
    { image: '/charpente3.png', alt: 'charpente' },
  ];

  const description = `
  Couverture Catalane réalise tous vos travaux de charpente à Perpignan et dans les 
  Pyrénées-Orientales (66). Spécialisés dans la construction, la rénovation et le renforcement 
  de charpentes traditionnelles et industrielles, nous intervenons avec précision et 
  savoir-faire pour assurer la solidité et la durabilité de votre toiture.

  Nos charpentiers qualifiés maîtrisent parfaitement les structures en bois : création de 
  charpente, remplacement de poutres, réparation après sinistre, traitement du bois contre 
  les insectes xylophages et l'humidité, ainsi que l’optimisation de la charpente avant 
  travaux de couverture ou d’isolation. Chaque intervention est réalisée selon les normes 
  du bâtiment et adaptée à la configuration de votre maison.

  Faire appel à Couverture Catalane pour vos travaux de charpente, c’est choisir une 
  entreprise locale reconnue pour son sérieux, son professionnalisme et la qualité de ses 
  ouvrages en bois. Notre expertise garantit une structure solide, durable et sécurisée, 
  capable de résister aux conditions climatiques du 66.

  Pour vos projets de charpente à Perpignan, Canet, Saint-Estève, Cabestany, Argelès ou 
  partout dans les Pyrénées-Orientales, Couverture Catalane est votre spécialiste de 
  confiance.
`;


  return (
    <>
      <SectionBanner
        title="Réalisation de charpente de maison à Perpignan"
        subtitle="Des constructions solides et durables"
        backgroundImage="/charpente3.png"
      />
      <Menu
        title="Travaux de charpente"
        description={description}
        slides={slides}
        phoneNumber="0628286967"
        bookingLink="/contact"
      />
    </>
  )
}
