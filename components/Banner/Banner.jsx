"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, FileText } from "lucide-react";

export default function Banner() {
  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <Image
        src="/banner.png"
        alt="Entreprise de couverture à Perpignan"
        fill
        className="object-cover object-center"
        priority
      />
      {/* Overlay plus subtil pour laisser respirer l'image en arrière-plan */}
      <div className="absolute inset-0 bg-slate-950/60 z-10" />

      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 z-20 flex flex-col items-center text-center md:items-start md:text-left space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl space-y-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-[orangered] text-white shadow-md">
            Perpignan & Ses Environs
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight drop-shadow-lg">
            Travaux de couverture professionnels pour particuliers et entreprises
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-100 font-medium max-w-2xl leading-relaxed pb-4">
            Des services de couverture fiables, soignés et adaptés à tous vos besoins. Protégez votre toit avec notre expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            {/* BOUTON ORANGERED LE VOILÀ ! */}
            <a 
              href="tel:+33662125611" 
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-[orangered] hover:bg-[#ff3c00] text-white font-extrabold rounded-full shadow-xl shadow-orange-600/30 transition-all transform hover:-translate-y-1"
            >
              <Phone size={20} />
              Appeler Directement
            </a>
            
            <Link 
              href="/contact" 
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 font-extrabold rounded-full shadow-lg transition-all transform hover:-translate-y-1"
            >
              <FileText size={20} />
              Devis gratuit
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}