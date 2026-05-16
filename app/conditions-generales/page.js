import React from "react";
import { Scale, FileText, ShieldAlert, CreditCard, CalendarX, AlertTriangle } from "lucide-react";

export default function ConditionsGenerales() {
  const sections = [
    {
      id: "objet",
      title: "1. Objet",
      icon: <FileText size={20} />,
      content: "Les présentes conditions régissent les services de couverture proposés par Couverture Catalane. Toute commande implique l’acceptation pleine et entière de ces conditions."
    },
    {
      id: "services",
      title: "2. Services proposés",
      icon: <ShieldAlert size={20} />,
      content: "Nos prestations incluent la pose, rénovation, réparation de toitures, zinguerie, gouttières, charpente et traitement hydrofuge. Chaque intervention est adaptée aux besoins et à la configuration du chantier."
    },
    {
      id: "tarifs",
      title: "3. Tarifs et paiement",
      icon: <CreditCard size={20} />,
      content: "Les tarifs sont indiqués sur devis ou sur demande. Le paiement peut être effectué par virement, carte bancaire ou chèque selon l’accord. Toute prestation commencée est due dans son intégralité."
    },
    {
      id: "annulation",
      title: "4. Annulation et report",
      icon: <CalendarX size={20} />,
      content: "Toute annulation ou modification doit être signalée au moins 48h avant le début des travaux. Passé ce délai, des frais peuvent être appliqués."
    },
    {
      id: "responsabilite",
      title: "5. Responsabilité",
      icon: <AlertTriangle size={20} />,
      content: "Couverture Catalane met tout en œuvre pour garantir un service de qualité, mais ne peut être tenu responsable des dommages résultant de situations exceptionnelles, de matériaux défectueux ou d’un défaut de collaboration du client."
    },
    {
      id: "litiges",
      title: "6. Litiges",
      icon: <Scale size={20} />,
      content: "En cas de litige, la juridiction compétente est celle du siège social de Couverture Catalane."
    }
  ];

  return (
    <main className="w-full max-w-4xl mx-auto px-6 sm:px-8 py-16 md:py-24 space-y-16">
      
      {/* EN-TÊTE JURIDIQUE */}
      <div className="border-b border-slate-200 pb-10 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wide">
          <Scale size={14} /> Document Officiel
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Conditions Générales de Vente / Prestation
        </h1>
        <p className="text-sm text-slate-500 font-medium">
          En vigueur et applicables pour l'ensemble des chantiers de Couverture Catalane.
        </p>
      </div>

      {/* CONTENU DES CLAUSES JURIDIQUES */}
      <div className="space-y-12">
        {sections.map((section) => (
          <section 
            key={section.id} 
            className="group bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm shadow-slate-100/50 hover:shadow-md hover:border-slate-200/60 transition-all space-y-4"
          >
            {/* TITRE DE LA CLAUSE AVEC ICONE DISCRÈTE */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-slate-50 text-slate-400 group-hover:bg-orange-50 group-hover:text-brand-orange flex items-center justify-center transition-colors shrink-0">
                {section.icon}
              </div>
              <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
                {section.title}
              </h2>
            </div>

            {/* TEXTE DE LA CLAUSE */}
            <p className="text-slate-600 leading-relaxed font-medium pl-0 sm:pl-12 text-base">
              {section.content}
            </p>
          </section>
        ))}
      </div>

      {/* NOTE DE FIN DE PAGE */}
      <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 text-center text-xs font-semibold text-slate-500 max-w-2xl mx-auto">
        Pour toute question relative à nos conditions générales ou pour une demande d'adaptation spécifique sur votre devis, veuillez contacter directement notre secrétariat au <span className="text-brand-orange">06 62 12 56 11</span>.
      </div>

    </main>
  );
}