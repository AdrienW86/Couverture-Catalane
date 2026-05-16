import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris', year: 'numeric' });

  return (
    // py-14 sur mobile et md:py-16 sur PC : un espacement standard, pro et élégant
    <footer className="w-full bg-brand-orange text-white py-14 md:py-16 border-t border-brand-orange-hover">
      
      {/* CONTENEUR PRINCIPAL : gap-10 pour que les colonnes soient proches mais distinctes */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-start">
        
        {/* BLOC 1 : LOGO & DESCRIPTION */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <Image 
            src="/logo2.png"
            alt="Logo Couverture Catalane"
            width={180}
            height={180}
            className="object-contain h-auto brightness-0 invert" 
          />          
          <p className="text-sm font-medium text-white/90 tracking-wide max-w-xs leading-relaxed">
            Travaux de couverture professionnels pour particuliers et entreprises.
          </p>          
        </div>

        {/* BLOC 2 : LIENS DES PRESTATIONS */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <h3 className="text-slate-950 font-black text-xs tracking-widest uppercase pb-1 border-b border-slate-950/20">
            Nos Services
          </h3>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-center md:text-left text-sm font-bold text-white">
            <li><Link href="/couverture" className="hover:text-slate-950 transition-colors block py-1">Couverture</Link></li>
            <li><Link href="/zinguerie" className="hover:text-slate-950 transition-colors block py-1">Zinguerie</Link></li>
            <li><Link href="/nettoyage" className="hover:text-slate-950 transition-colors block py-1">Nettoyage</Link></li>
            <li><Link href="/reparations" className="hover:text-slate-950 transition-colors block py-1">Réparations</Link></li>
            <li><Link href="/fuites" className="hover:text-slate-950 transition-colors block py-1">Fuites</Link></li>
            <li><Link href="/charpente" className="hover:text-slate-950 transition-colors block py-1">Charpente</Link></li>
          </ul>
        </div>

        {/* BLOC 3 : MENTIONS LÉGALES & INFOS */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <h3 className="text-slate-950 font-black text-xs tracking-widest uppercase pb-1 border-b border-slate-950/20">
            Informations
          </h3>
          <div className="flex flex-col items-center md:items-start space-y-2 text-sm font-bold text-white">
            <Link className="hover:text-slate-950 transition-colors block py-1" href="/mentions-legales">Mentions Légales</Link>
            <Link className="hover:text-slate-950 transition-colors block py-1" href="/conditions-generales">Conditions Générales</Link>
            <Link className="hover:text-slate-200 transition-colors block py-1" href="/confidentialite">Politique de Confidentialité</Link>
          </div>
        </div>

      </div>

      {/* LIGNE DE SÉPARATION APPAISÉE (my-8) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 my-8 border-t border-white/25" />

      {/* BASE DU FOOTER : CREDITS & COPYRIGHT */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-center sm:text-left">
        
        {/* DROITS RÉSERVÉS */}
        <p className="tracking-wide text-white/90">
          © {currentYear} <span className="text-slate-950 font-black">Couverture Catalane</span>. Tous droits réservés.
        </p>   

        {/* CRÉDIT CODEV HARMONIEUX */}
        <Link 
          className="group inline-flex items-center gap-1.5 text-slate-900 bg-white hover:bg-slate-950 hover:text-white transition-all px-4 py-2 rounded-full shadow-sm font-bold" 
          href="https://code-v.fr" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Réalisé par <span className="text-brand-orange font-black group-hover:text-brand-orange transition-colors">Codev</span> 
        </Link>

      </div>
    </footer>
  )
}