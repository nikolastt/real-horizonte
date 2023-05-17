import EmailNewContract from "@/emails/templates/EmailNewContract";
import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const { email, name } = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.PASS_USER,
    },
  });

  const emailHtml = render(<EmailNewContract name={name} />);

  const options = {
    from: "Cross Module <nikolasbitencourtt@gmail.com>",
    to: email,
    subject: "Novo Contrato Disponível",
    html: emailHtml,
    text: "Novo Contrato Disponível",
  };

  try {
    await transporter
      .sendMail(options)
      .then(() => console.log("Email enviado"))
      .catch((err) => console.log("Falha ao enviar o email", err));

    return NextResponse.json({ status: "Success" });
  } catch (e) {
    return NextResponse.error();
  }
}
