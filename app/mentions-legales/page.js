import React from "react";
import { Shield, Building2, User, Globe, Copyright, Cookie, Eye } from "lucide-react";

export default function MentionsLegales() {
  return (
    <main className="w-full max-w-4xl mx-auto px-6 sm:px-8 py-16 md:py-24 space-y-16">
      
      {/* EN-TÊTE MENTIONS LÉGALES */}
      <div className="border-b border-slate-200 pb-10 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wide">
          <Shield size={14} /> Informations Légales
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Mentions Légales
        </h1>
        <p className="text-sm text-slate-500 font-medium">
          Conformément aux dispositions de l'Article 6 de la Loi n° 2004-575 du 21 Juin 2004 pour la Confiance dans l'Économie Numérique (LCEN).
        </p>
      </div>

      {/* GRILLE DES BLOCS D'INFORMATIONS */}
      <div className="space-y-10">
        
        {/* 1. ÉDITEUR DU SITE */}
        <section className="group bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm shadow-slate-100/50 hover:shadow-md hover:border-slate-200/60 transition-all space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-slate-50 text-slate-400 group-hover:bg-orange-50 group-hover:text-brand-orange flex items-center justify-center transition-colors shrink-0">
              <Building2 size={20} />
            </div>
            <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">Éditeur du site</h2>
          </div>
          <div className="text-slate-600 leading-relaxed font-medium pl-0 sm:pl-12 text-base space-y-1">
            <p><span className="text-slate-400 font-semibold">Nom de l’entreprise :</span> Couverture Catalane</p>
            <p><span className="text-slate-400 font-semibold">Statut juridique :</span> Entreprise Individuelle (EI)</p>
            <p><span className="text-slate-400 font-semibold">Adresse :</span> 88 chemin des charrettes, 66380 Pia</p>
            <p><span className="text-slate-400 font-semibold">Téléphone :</span> 06 62 12 56 11</p>
            <p>
              <span className="text-slate-400 font-semibold">Email :</span>{" "}
              <a href="mailto:contact@couverture-catalane.fr" className="text-brand-orange hover:underline">contact@couverture-catalane.fr</a>
            </p>
            <p><span className="text-slate-400 font-semibold">SIRET :</span> 834 799 751 00013</p>
          </div>
        </section>

        {/* 2. DIRECTEUR DE LA PUBLICATION */}
        <section className="group bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm shadow-slate-100/50 hover:shadow-md hover:border-slate-200/60 transition-all space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-slate-50 text-slate-400 group-hover:bg-orange-50 group-hover:text-brand-orange flex items-center justify-center transition-colors shrink-0">
              <User size={20} />
            </div>
            <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">Directeur de la publication</h2>
          </div>
          <p className="text-slate-600 leading-relaxed font-medium pl-0 sm:pl-12 text-base">
            <span className="text-slate-900 font-bold">Roblès Gregory</span> –{" "}
            <a href="mailto:contact@couverture-catalane.fr" className="text-brand-orange hover:underline">contact@couverture-catalane.fr</a>
          </p>
        </section>

        {/* 3. HÉBERGEMENT */}
        <section className="group bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm shadow-slate-100/50 hover:shadow-md hover:border-slate-200/60 transition-all space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-slate-50 text-slate-400 group-hover:bg-orange-50 group-hover:text-brand-orange flex items-center justify-center transition-colors shrink-0">
              <Globe size={20} />
            </div>
            <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">Hébergement</h2>
          </div>
          <div className="text-slate-600 leading-relaxed font-medium pl-0 sm:pl-12 text-base space-y-1">
            <p><span className="text-slate-400 font-semibold">Nom de l’hébergeur :</span> Vercel Inc.</p>
            <p><span className="text-slate-400 font-semibold">Adresse :</span> 340 S Lemon Ave, Suite 413, Walnut, CA 91789, USA</p>
            <p><span className="text-slate-400 font-semibold">Téléphone :</span> +1 123 456 7890</p>
          </div>
        </section>

        {/* 4. PROPRIÉTÉ INTELLECTUELLE */}
        <section className="group bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm shadow-slate-100/50 hover:shadow-md hover:border-slate-200/60 transition-all space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-slate-50 text-slate-400 group-hover:bg-orange-50 group-hover:text-brand-orange flex items-center justify-center transition-colors shrink-0">
              <Copyright size={20} />
            </div>
            <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">Propriété intellectuelle</h2>
          </div>
          <p className="text-slate-600 leading-relaxed font-medium pl-0 sm:pl-12 text-base">
            L’ensemble des contenus présents sur ce site (textes, images, vidéos, logo, design…) est la propriété exclusive de <span className="text-slate-900 font-bold">Couverture Catalane</span>. Toute reproduction, même partielle, est strictement interdite sans autorisation préalable écrite.
          </p>
        </section>

        {/* 5. PROTECTION DES DONNÉES */}
        <section className="group bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm shadow-slate-100/50 hover:shadow-md hover:border-slate-200/60 transition-all space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-slate-50 text-slate-400 group-hover:bg-orange-50 group-hover:text-brand-orange flex items-center justify-center transition-colors shrink-0">
              <Eye size={20} />
            </div>
            <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">Protection des données</h2>
          </div>
          <p className="text-slate-600 leading-relaxed font-medium pl-0 sm:pl-12 text-base">
            Les informations recueillies via le formulaire de contact sont utilisées uniquement pour répondre à vos demandes de devis et travaux. Conformément au RGPD, vous pouvez demander la modification ou la suppression de vos données à tout moment à :{" "}
            <a href="mailto:contact@couverture-catalane.fr" className="text-brand-orange font-bold hover:underline">contact@couverture-catalane.fr</a>.
          </p>
        </section>

        {/* 6. COOKIES */}
        <section className="group bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm shadow-slate-100/50 hover:shadow-md hover:border-slate-200/60 transition-all space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-slate-50 text-slate-400 group-hover:bg-orange-50 group-hover:text-brand-orange flex items-center justify-center transition-colors shrink-0">
              <Cookie size={20} />
            </div>
            <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">Cookies</h2>
          </div>
          <p className="text-slate-600 leading-relaxed font-medium pl-0 sm:pl-12 text-base">
            Ce site utilise des cookies techniques uniquement dans le but d’améliorer l’expérience utilisateur et analyser anonymement le trafic. Vous avez la liberté de les désactiver au sein des paramètres de votre navigateur internet.
          </p>
        </section>

      </div>

    </main>
  );
}