// app/api/send-email/route.ts
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend("re_FbuwKxvW_J8yCLdCkgRoY7Ek3ooca6yG4");

export async function POST(request: Request) {
    const { to, subject, text } = await request.json();

    console.log(to, "to")

    const data = await resend.emails.send({
        from: 'contact@tdevspace.am',
        to: "tatevavalyan050@gmail.com",
        subject,
        text,
    });

    return NextResponse.json(data);
}
