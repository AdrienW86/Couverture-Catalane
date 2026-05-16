import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const servicesData = [
  { title: "Couverture", image: "/couverture.png", link: "/couverture" },
  { title: "Zinguerie", image: "/zinguerie.png", link: "/zinguerie" },
  { title: "Nettoyage", image: "/nettoyage.png", link: "/nettoyage" },
  { title: "Réparations", image: "/reparations.png", link: "/reparations" },
  { title: "Fuites", image: "/fuites.png", link: "/fuites" },
  { title: "Charpente", image: "/charpente3.png", link: "/charpente" },
];

export default function Services() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-20">
      
      {/* TITRE DE LA SECTION */}
      <div className="text-center mb-16">
        <h2 
          id="services" 
          className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight inline-block relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-brand-orange after:rounded-full"
        >
          Nos Services
        </h2>
      </div>

      {/* GRILLE RESPONSIVE AÉRÉE */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {servicesData.map((service, index) => (
          <Link 
            key={index} 
            href={service.link} 
            className="group relative flex items-end justify-start h-72 sm:h-80 w-full overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-200/50"
          >
            {/* IMAGE D'ARRIÈRE-PLAN AVEC EFFET ZOOM */}
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
              className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110 select-none"
              priority={index < 3} // Optimise le chargement des 3 premières cartes au-dessus de la ligne de flottaison
            />
            
            {/* OVERLAY DÉGRADÉ POUR LA LISIBILITÉ (S'assombrit au survol) */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent z-10 transition-opacity duration-300 group-hover:from-slate-950/90" />

            {/* TEXTE / TITRE DE LA CARTE */}
            <div className="relative z-20 p-6 sm:p-8 w-full">
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide group-hover:text-brand-orange transition-colors duration-300">
                {service.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>

    </section>
  );
}