"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, AlertCircle, CheckCircle2, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const { name, email, phone, message } = formData;
    if (!name || !email || !phone || !message) return "Tous les champs sont requis.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Adresse email invalide.";
    const phoneRegex = /^[0-9+\s-]{7,15}$/;
    if (!phoneRegex.test(phone)) return "Numéro de téléphone invalide.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const validationError = validate();
    if (validationError) return setError(validationError);

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setLoading(false);

      if (res.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setError(data.message || "Erreur lors de l'envoi du message.");
      }
    } catch (err) {
      setLoading(false);
      setError("Erreur réseau, veuillez réessayer plus tard.");
    }
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-6 sm:px-8 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
        
        {/* COLONNE GAUCHE (2/5) : INFOS DE CONTACT DIRECTES */}
        <div className="lg:col-span-2 space-y-8 lg:pr-4">
          <div className="space-y-4">
            <span className="text-xs font-black tracking-widest text-brand-orange uppercase bg-orange-50 px-4 py-1.5 rounded-full">
              Devis Gratuit
            </span>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">
              Contactez-nous
            </h1>
            <p className="text-slate-500 font-medium leading-relaxed">
              Demandez votre devis gratuit ou posez-nous vos questions. Notre équipe se fera un plaisir de vous répondre dans les plus brefs délais pour étudier votre projet de toiture.
            </p>
          </div>

          {/* COORDONNÉES VISUELLES */}
          <div className="space-y-4 pt-4">
            <a href="tel:+33662125611" className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all group">
              <div className="w-10 h-10 rounded-lg bg-orange-50 text-brand-orange flex items-center justify-center shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Téléphone direct</p>
                <p className="text-base font-bold text-slate-800">06 62 12 56 11</p>
              </div>
            </a>

            <a href="mailto:contact@couverture-catalane.fr" className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all group">
              <div className="w-10 h-10 rounded-lg bg-orange-50 text-brand-orange flex items-center justify-center shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                <Mail size={18} />
              </div>
              <div className="min-w-0 truncate">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email secrétariat</p>
                <p className="text-base font-bold text-slate-800 truncate">contact@couverture-catalane.fr</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-slate-50 text-slate-400 flex items-center justify-center shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Zone d'intervention</p>
                <p className="text-base font-bold text-slate-800">Perpignan & l'ensemble du 66</p>
              </div>
            </div>
          </div>
        </div>

        {/* COLONNE DROITE (3/5) : LE FORMULAIRE DE CONVERSION */}
        <div className="lg:col-span-3 bg-white p-6 sm:p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/60">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* GRILLE NOM / EMAIL SUR PC */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 tracking-wide uppercase">Nom et prénom</label>
                <input
                  type="text"
                  name="name"
                  placeholder="M. ou Mme..."
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-800 placeholder-slate-400 transition-all focus:bg-white focus:border-brand-orange focus:outline-none focus:ring-4 focus:ring-orange-500/10 text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 tracking-wide uppercase">Téléphone</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="06 00 00 00 00"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-800 placeholder-slate-400 transition-all focus:bg-white focus:border-brand-orange focus:outline-none focus:ring-4 focus:ring-orange-500/10 text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 tracking-wide uppercase">Adresse email</label>
              <input
                type="email"
                name="email"
                placeholder="votre@email.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-800 placeholder-slate-400 transition-all focus:bg-white focus:border-brand-orange focus:outline-none focus:ring-4 focus:ring-orange-500/10 text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 tracking-wide uppercase">Votre demande</label>
              <textarea
                name="message"
                placeholder="Décrivez votre projet (Rénovation de toiture, recherche de fuite, nettoyage, zinguerie...)"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-800 placeholder-slate-400 transition-all focus:bg-white focus:border-brand-orange focus:outline-none focus:ring-4 focus:ring-orange-500/10 text-sm resize-none"
              />
            </div>

            {/* GESTION D'ERREUR */}
            {error && (
              <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm font-semibold">
                <AlertCircle size={16} className="shrink-0" />
                <p>{error}</p>
              </div>
            )}

            {/* GESTION DE SUCCÈS */}
            {success && (
              <div className="flex items-start gap-3 p-4 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-800 text-sm font-semibold">
                <CheckCircle2 size={20} className="text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-emerald-900">Message envoyé avec succès !</p>
                  <p className="text-emerald-700/90 font-medium text-xs mt-0.5">Notre équipe étudie votre demande et vous recontactera rapidement.</p>
                </div>
              </div>
            )}

            {/* BOUTON D'ENVOI */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-4 bg-brand-orange hover:bg-brand-orange-hover disabled:bg-slate-200 text-white font-black text-sm rounded-xl shadow-lg shadow-orange-500/10 transition-all transform enabled:hover:-translate-y-0.5 cursor-pointer disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Envoi du dossier en cours...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Envoyer ma demande de devis
                </>
              )}
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}