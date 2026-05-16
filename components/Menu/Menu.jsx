import React from 'react';
import Carousel from '@/components/Carousel/Carousel';
import { Phone, Calendar } from 'lucide-react';

export default function Menu({ title, description, slides, phoneNumber, bookingLink }) {
  return (
    // my-24 pour créer un grand espace d'air entre chaque section de service
    <section className="w-full max-w-5xl mx-auto my-24 px-6 sm:px-12 py-12 bg-white rounded-3xl shadow-2xl shadow-slate-200/60 border border-slate-100">
      
      <div className="text-center md:text-left max-w-3xl mb-10 space-y-4">
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          {title}
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
        {bookingLink && (
          <a 
            href={bookingLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 bg-[orangered] hover:bg-[#ff3c00] text-white font-extrabold rounded-full shadow-lg shadow-orange-500/20 transition-colors"
          >
            <Calendar size={18} />
            Réserver en ligne
          </a>
        )}
        
        {phoneNumber && (
          <a 
            href={`tel:${phoneNumber}`} 
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-extrabold rounded-full transition-colors border border-slate-200"
          >
            <Phone size={18} />
            Appeler l'artisan
          </a>
        )}
      </div>

      <div className="w-full overflow-hidden rounded-2xl shadow-lg">
        <Carousel items={slides} />
      </div>

    </section>
  );
}