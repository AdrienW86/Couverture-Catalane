import React from "react";
import Link from "next/link";
import { Phone, Mail, ShieldCheck, Clock, Award, Users } from "lucide-react";

export default function APropos() {
  return (
    <main className="w-full max-w-5xl mx-auto px-6 sm:px-8 py-16 md:py-24 space-y-20">
      
      {/* EN-TÊTE DE LA PAGE */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-black tracking-widest text-brand-orange uppercase bg-orange-50 px-4 py-1.5 rounded-full">
          Qui sommes-nous ?
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          À propos de Couverture Catalane
        </h1>
        <div className="w-16 h-1 bg-brand-orange mx-auto rounded-full mt-4" />
      </div>

      {/* SECTION 1 : HISTOIRE & MISSION (2 COLONNES SUR PC) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start pt-4">
        <div className="space-y-4 bg-white p-8 rounded-2xl shadow-xl shadow-slate-100 border border-slate-100/80">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">Notre histoire</h2>
          <p className="text-slate-600 leading-relaxed text-base font-medium">
            Couverture Catalane est née de la volonté de proposer des services de couverture professionnels, fiables et adaptés à chaque besoin. 
            Depuis nos débuts, nous accompagnons particuliers et entreprises dans la pose, la rénovation et la réparation de toitures dans les Pyrénées-Orientales.
          </p>
        </div>

        <div className="space-y-4 bg-white p-8 rounded-2xl shadow-xl shadow-slate-100 border border-slate-100/80">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">Notre mission</h2>
          <p className="text-slate-600 leading-relaxed text-base font-medium">
            Notre mission est simple : garantir des toitures solides, étanches et durables pour tous nos clients. 
            Nous nous engageons à utiliser des méthodes modernes et des matériaux de qualité, pour des interventions sûres et efficaces.
          </p>
        </div>
      </section>

      {/* SECTION 2 : NOS VALEURS (GRILLE DE CARTES) */}
      <section className="space-y-10">
        <h2 className="text-3xl font-black text-slate-900 tracking-tight text-center md:text-left">
          Nos valeurs
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* VALEUR 1 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-lg shadow-slate-100/50 flex flex-col space-y-4">
            <div className="w-12 h-12 rounded-xl bg-orange-50 text-brand-orange flex items-center justify-center shrink-0">
              <Award size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Professionnalisme</h3>
            <p className="text-sm font-medium text-slate-500 leading-relaxed">Des équipes formées, expérimentées et passionnées par leur métier.</p>
          </div>

          {/* VALEUR 2 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-lg shadow-slate-100/50 flex flex-col space-y-4">
            <div className="w-12 h-12 rounded-xl bg-orange-50 text-brand-orange flex items-center justify-center shrink-0">
              <Clock size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Fiabilité</h3>
            <p className="text-sm font-medium text-slate-500 leading-relaxed">Respect rigoureux des délais et un engagement total sur la qualité.</p>
          </div>

          {/* VALEUR 3 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-lg shadow-slate-100/50 flex flex-col space-y-4">
            <div className="w-12 h-12 rounded-xl bg-orange-50 text-brand-orange flex items-center justify-center shrink-0">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Durabilité</h3>
            <p className="text-sm font-medium text-slate-500 leading-relaxed">Matériaux premium pour des toitures pérennes face aux intempéries.</p>
          </div>

          {/* VALEUR 4 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-lg shadow-slate-100/50 flex flex-col space-y-4">
            <div className="w-12 h-12 rounded-xl bg-orange-50 text-brand-orange flex items-center justify-center shrink-0">
              <Users size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Proximité</h3>
            <p className="text-sm font-medium text-slate-500 leading-relaxed">À votre écoute pour s'adapter aux besoins spécifiques de chaque toit.</p>
          </div>

        </div>
      </section>

      {/* SECTION 3 : NOTRE ÉQUIPE */}
      <section className="bg-slate-900 text-white p-8 sm:p-12 rounded-3xl shadow-xl flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="w-16 h-16 rounded-2xl bg-brand-orange text-white flex items-center justify-center shrink-0 shadow-lg shadow-orange-500/20">
          <Users size={32} />
        </div>
        <div className="space-y-3 text-center md:text-left flex-1">
          <h2 className="text-2xl font-black tracking-tight">Notre équipe</h2>
          <p className="text-slate-300 leading-relaxed font-medium">
            Chaque membre de notre équipe est sélectionné pour son expertise et sa rigueur. 
            Formés aux bonnes pratiques de couverture et à la sécurité sur chantier, nos couvreurs assurent un service fiable et d'une qualité irréprochable.
          </p>
        </div>
      </section>

      {/* SECTION 4 : CONTACTEZ-NOUS (BLOC DE CONVERSION) */}
      <section className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl shadow-slate-200/80 border border-slate-100 text-center space-y-8">
        <div className="max-w-xl mx-auto space-y-3">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Un projet ou une question ?</h2>
          <p className="text-slate-500 font-medium leading-relaxed">
            Besoin d’un dépannage urgent ou d’un devis gratuit pour vos travaux de couverture ? Nos artisans vous répondent dans les plus brefs délais.
          </p>
        </div>

        {/* CARTES DE CONTACTS ET ACTIONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto pt-2">
          
          <a 
            href="tel:+33662125611" 
            className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-brand-orange hover:bg-brand-orange-hover text-white font-black rounded-full shadow-lg shadow-orange-500/20 transition-all transform hover:-translate-y-1"
          >
            <Phone size={20} />
            06 62 12 56 11
          </a>

          <a 
            href="mailto:contact@couverture-catalane.fr" 
            className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-black rounded-full border border-slate-200 transition-all transform hover:-translate-y-1"
          >
            <Mail size={20} />
            Nous écrire par Email
          </a>

        </div>
      </section>

    </main>
  );
}