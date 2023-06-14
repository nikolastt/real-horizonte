import EmailNewContract from "@/emails/templates/EmailNewContract";
import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import { NextResponse } from "next/server";
import EmailSignContract from "@/emails/templates/EmailSignContract";

export async function POST(req: Request, res: Response) {
  const { email, name } = await req.json();

  console.log(email, name);

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.PASS_USER,
    },
  });

  const emailHtml = render(<EmailSignContract name={name} />);

  const options = {
    from: "Real Horizonte <nikolasbitencourtt@gmail.com>",
    to: email,
    subject: "Contrato assinado com sucesso",
    html: emailHtml,
    text: "Contrato assinado com sucesso",
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
