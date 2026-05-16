"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Des flèches bien plus jolies que les caractères HTML

export default function Carousel({ items }) {
  const [current, setCurrent] = useState(0);
  const length = items.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <div className="relative w-full aspect-[4/3] md:aspect-[16/9] bg-slate-900 group overflow-hidden rounded-2xl">
      
      {/* FLÈCHE GAUCHE */}
      <button 
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-slate-900/50 hover:bg-slate-900/80 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
        onClick={prevSlide}
        aria-label="Image précédente"
      >
        <ChevronLeft size={24} />
      </button>

      {/* FLÈCHE DROITE */}
      <button 
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-slate-900/50 hover:bg-slate-900/80 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
        onClick={nextSlide}
        aria-label="Image suivante"
      >
        <ChevronRight size={24} />
      </button>

      {/* LES IMAGES */}
      {items.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {index === current && (
            <Image 
              src={item.image} 
              alt={item.alt || `Réalisation Couverture Catalane - ${index}`} 
              fill
              sizes="(max-w-768px) 100vw, 80vw"
              className="object-cover object-center select-none"
              priority={index === 0} // Charge la première image immédiatement
            />
          )}
        </div>
      ))}

      {/* LES INDICATEURS (DOTS) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 bg-slate-950/40 px-3 py-1.5 rounded-full backdrop-blur-xs">
        {items.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === current 
                ? "bg-yellow-400 scale-125 w-5"  /* Devient un petit rectangle Or Catalan quand il est actif */
                : "bg-white/60 hover:bg-white"
            }`}
            onClick={() => setCurrent(index)}
            aria-label={`Aller à l'image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}