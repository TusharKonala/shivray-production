import { NextResponse } from "next/server";
import { Resend } from "resend";
import ContactFormEmail from "@/emails/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, company, project } = await request.json();

    if (!name || !email || !project) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "tusharkonala284@gmail.com",
      replyTo: email,
      subject: "New Contact Form Submission",
      react: ContactFormEmail({ name, email, company, project }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}

