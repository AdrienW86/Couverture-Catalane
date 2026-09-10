import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialisation de Resend avec ta clé API secrète
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    // 1. Validation de sécurité côté serveur
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { message: "Tous les champs requis ne sont pas remplis." },
        { status: 400 }
      );
    }

    // 2. Envoi de l'email via l'API Resend
    const { data, error } = await resend.emails.send({
      from: "Couverture Catalane <info@couverture-catalane.fr>", // 💡 Remplace par "contact@couverture-catalane.fr" une fois ton domaine validé sur Resend
      to: "contact@couverture-catalane.fr",        // Ton adresse Zoho où tu veux recevoir les leads
      replyTo: email,                              // Te permet de répondre directement au client en un clic
      subject: `🏗️ Nouvelle demande de chantier : ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; padding: 24px; border-radius: 12px;">
          <h2 style="color: orangered; margin-bottom: 20px; font-weight: 900;">🔥 Nouveau Devis / Contact - Couverture Catalane</h2>
          
          <div style="background-color: #f8fafc; padding: 16px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 4px 0;"><strong>Nom du client :</strong> ${name}</p>
            <p style="margin: 4px 0;"><strong>Téléphone :</strong> <a href="tel:${phone}" style="color: #0f172a; font-weight: bold;">${phone}</a></p>
            <p style="margin: 4px 0;"><strong>Email :</strong> <a href="mailto:${email}" style="color: #0f172a;">${email}</a></p>
          </div>

          <h3 style="color: #0f172a; margin-top: 0;">Détails de la demande :</h3>
          <p style="color: #334155; line-height: 1.6; white-space: pre-wrap; background-color: #fff; border-left: 4px solid orangered; padding-left: 12px;">${message}</p>
          
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
          <p style="font-size: 11px; color: #94a3b8; text-align: center;">Ce message a été envoyé instantanément via l'API Resend.</p>
        </div>
      `,
    });

    if (error) {
      console.error("Erreur technique Resend :", error);
      return NextResponse.json({ message: error.message }, { status: 400 });
    }

    return NextResponse.json({ message: "Email envoyé avec succès !", id: data.id }, { status: 200 });

  } catch (error) {
    console.error("Erreur Serveur API :", error);
    return NextResponse.json(
      { message: "Erreur réseau, veuillez réessayer plus tard." },
      { status: 500 }
    );
  }
}