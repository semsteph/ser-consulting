import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // 🔍 vérification simple
    if (!name || !email || !message) {
      return Response.json(
        { error: "Tous les champs sont requis" },
        { status: 400 }
      );
    }

    // ✉️ envoi email
    await resend.emails.send({
      from: "SER Consulting <onboarding@resend.dev>",
      to: "stephanesemassou1@gmail.com", //  MET TON EMAIL ICI
      subject: "Nouveau message du site",
      html: `
        <h2>Nouveau message reçu</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong><br/> ${message}</p>
      `,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error("Erreur API:", error);
    return Response.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}