import React from "react";
import { ShieldCheck, Database, Eye, Clock, UserCheck, Cookie } from "lucide-react";

export default function PolitiqueConfidentialite() {
  const sections = [
    {
      title: "Collecte des informations",
      icon: <Database size={20} />,
      content: "Nous collectons uniquement les informations nécessaires pour répondre à vos demandes via nos formulaires de contact. Ces informations comprennent votre nom, email, numéro de téléphone et la description de votre projet de couverture ou toiture."
    },
    {
      title: "Utilisation des données",
      icon: <Eye size={20} />,
      content: "Vos données sont utilisées uniquement pour répondre à vos demandes, préparer un devis ou planifier une intervention. Elles ne sont jamais vendues ni partagées avec des tiers à des fins commerciales."
    },
    {
      title: "Durée de conservation",
      icon: <Clock size={20} />,
      content: "Vos informations sont conservées uniquement le temps nécessaire pour traiter votre demande et exécuter les prestations, et ne dépassent pas une durée de 3 ans."
    },
    {
      title: "Droits des utilisateurs",
      icon: <UserCheck size={20} />,
      content: (
        <>
          Conformément au RGPD, vous disposez d'un droit d'accès, de rectification ou de suppression de vos données à tout moment en nous contactant simplement par email à :{" "}
          <a 
            href="mailto:contact@couverture-catalane.fr" 
            className="text-brand-orange font-bold hover:underline transition-all"
          >
            contact@couverture-catalane.fr
          </a>.
        </>
      )
    },
    {
      title: "Cookies",
      icon: <Cookie size={20} />,
      content: "Ce site utilise des cookies uniquement pour améliorer l’expérience utilisateur et analyser le trafic de manière anonyme. Vous pouvez configurer ou désactiver les cookies à tout moment dans les options de votre navigateur."
    }
  ];

  return (
    <main className="w-full max-w-4xl mx-auto px-6 sm:px-8 py-16 md:py-24 space-y-16">
      
      {/* EN-TÊTE PROTECTION DES DONNÉES */}
      <div className="border-b border-slate-200 pb-10 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wide border border-emerald-100">
          <ShieldCheck size={14} /> Conformité RGPD
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Politique de Confidentialité
        </h1>
        <p className="text-sm text-slate-500 font-medium">
          Nous protégeons vos données privées. Découvrez comment nous traitons vos informations de contact.
        </p>
      </div>

      {/* CONTENU DES BLOCS DE CONFIDENTIALITÉ */}
      <div className="space-y-10">
        {sections.map((section, index) => (
          <section 
            key={index} 
            className="group bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm shadow-slate-100/50 hover:shadow-md hover:border-slate-200/60 transition-all space-y-4"
          >
            {/* TITRE DE LA SECTION AVEC ICONE */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-slate-50 text-slate-400 group-hover:bg-orange-50 group-hover:text-brand-orange flex items-center justify-center transition-colors shrink-0">
                {section.icon}
              </div>
              <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
                {section.title}
              </h2>
            </div>

            {/* TEXTE EXPLICATIF */}
            <div className="text-slate-600 leading-relaxed font-medium pl-0 sm:pl-12 text-base">
              {section.content}
            </div>
          </section>
        ))}
      </div>

      {/* NOTE DE SÉCURITÉ DE FIN */}
      <div className="bg-slate-950 text-slate-400 rounded-2xl p-6 text-center text-xs font-semibold max-w-2xl mx-auto shadow-xl">
        <span className="text-white font-bold">Sécurité renforcée :</span> L'ensemble des échanges sur ce site internet est chiffré via un protocole SSL sécurisé (HTTPS) pour garantir qu'aucune donnée ne puisse être interceptée.
      </div>

    </main>
  );
}