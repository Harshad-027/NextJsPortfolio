import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/EmailTemplate";

const resend = new Resend("re_UDrm9X6M_6Tnwrv8rJZ9AVHTBMuceioAK");

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "harshadnikma@gmail.com",
      subject: "New Contact Form Submission",
      replyTo: email,
      react: EmailTemplate({ name, message }),
    });
    if (error) return NextResponse.json({ error }, { status: 500 });
    return NextResponse.json({ data, message: "success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}
