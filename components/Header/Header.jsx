"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
    setDropdownOpen(false);
  };

  const services = [
    { name: "Couverture", href: "/couverture" },
    { name: "Zinguerie", href: "/zinguerie" },
    { name: "Nettoyage", href: "/nettoyage" },
    { name: "Réparations", href: "/reparations" },
    { name: "Fuites", href: "/fuites" },
    { name: "Charpente", href: "/charpente" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center shrink-0 transition-transform hover:scale-105" onClick={closeMenu}>
          <Image 
            src="/logo1.png"
            alt="Logo Couverture Catalane"
            width={80}
            height={80}
            className="object-contain"
            priority
          />
        </Link>

        {/* HAMBURGER (MOBILE) */}
        <button 
          className="md:hidden p-2 text-slate-700 hover:text-brand-orange transition-colors" 
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* NAVIGATION DESKTOP (AÉRÉE ET SANS SOUCI DE PLACE) */}
        <nav className="hidden md:flex items-center space-x-5 lg:space-x-7 font-bold tracking-wide text-sm">
          <Link href="/" className="text-slate-700 hover:text-brand-orange transition-colors py-2">Accueil</Link>
          
          {/* DROPDOWN SERVICES AU SURVOL */}
          <div 
            className="relative py-2 group"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 text-slate-700 group-hover:text-brand-orange transition-colors cursor-pointer">
              Nos Services
              <ChevronDown size={16} className="transition-transform duration-200 group-hover:rotate-180" />
            </button>

            {/* LE MENU DÉROULANT DESKTOP */}
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full w-56 bg-white border border-slate-100 rounded-xl shadow-xl py-3 z-50 grid grid-cols-1"
                >
                  {services.map((service, i) => (
                    <Link
                      key={i}
                      href={service.href}
                      onClick={closeMenu}
                      className="px-4 py-2.5 text-slate-700 hover:bg-slate-50 hover:text-brand-orange transition-colors text-sm font-semibold"
                    >
                      {service.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/a-propos" className="text-slate-700 hover:text-brand-orange transition-colors py-2">À propos</Link>
          
          {/* BOUTON CTA DEVIS */}
          <Link 
            href="/contact" 
            className="text-white bg-brand-orange hover:bg-brand-orange-hover px-5 py-2.5 lg:px-6 lg:py-3 rounded-full text-xs lg:text-sm font-extrabold shadow-md shadow-orange-500/10 transition-all transform hover:-translate-y-0.5 shrink-0"
          >
            Contact / Devis
          </Link>
        </nav>
      </div>

      {/* MENU MOBILE (Reste inchangé et complet, parfait pour le pouce) */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-[113px] left-0 w-full bg-white border-b border-slate-200 shadow-xl flex flex-col p-6 space-y-4 font-bold z-50 max-h-[calc(100vh-120px)] overflow-y-auto"
          >
            <Link href="/" onClick={closeMenu} className="text-slate-800 hover:text-brand-orange pb-2 border-b border-slate-100">Accueil</Link>
            {services.map((service, i) => (
              <Link key={i} href={service.href} onClick={closeMenu} className="text-slate-600 hover:text-brand-orange pb-2 border-b border-slate-50 pl-4 text-sm font-semibold">
                {service.name}
              </Link>
            ))}
            <Link href="/a-propos" onClick={closeMenu} className="text-slate-800 hover:text-brand-orange pb-2 border-b border-slate-100">À propos</Link>
            <Link href="/contact" onClick={closeMenu} className="text-center w-full bg-brand-orange text-white py-3 rounded-full font-extrabold shadow-lg shadow-orange-500/20">Contact / Devis</Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}