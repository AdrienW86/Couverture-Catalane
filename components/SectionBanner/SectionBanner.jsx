import React from 'react';
import Image from 'next/image';

export default function Banner({ title, subtitle, backgroundImage }) {
  return (
    // Suppression des mt-[...] -> L'image monte tout en haut derrière le menu
    <div className="relative w-full h-[45vh] sm:h-[50vh] md:h-[55vh] flex items-center justify-center overflow-hidden bg-slate-900">
      
      {/* IMAGE DE FOND */}
      <Image
        src={backgroundImage}
        alt={`Bannière Couverture Catalane - ${title}`}
        fill
        className="object-cover object-center transition-transform duration-700 hover:scale-105"
        quality={85}
        priority
      />

      {/* OVERLAY SOMBRE (Légèrement renforcé en haut pour que les liens du Header restent lisibles s'ils passent par-dessus) */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-slate-950/50" />

      {/* CONTENU TEXTE - J'ai ajouté pt-16 (padding-top) pour décaler le titre vers le bas si le Header passe au-dessus */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center space-y-4 pt-16 md:pt-20">
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-md">
          {title}
        </h1>

        {subtitle && (
          <p className="text-base sm:text-lg md:text-xl font-medium text-orange-100 max-w-2xl mx-auto drop-shadow-sm">
            {subtitle}
          </p>
        )}
        
        <div className="w-12 h-1 bg-brand-orange mx-auto rounded-full shadow-sm shadow-orange-500/50" />
        
      </div>
    </div>
  );
}