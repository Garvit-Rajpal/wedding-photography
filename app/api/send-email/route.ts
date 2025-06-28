
import { NextResponse } from 'next/server';
import emailjs from '@emailjs/browser';

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, phone, eventDate, message } = body;
  console.log("body", body);
  try {
    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("Missing EmailJS environment variables");
      throw new Error('Missing EmailJS environment variables');
    }

    const emailResponse = await emailjs.send(
      serviceId,
      templateId,
      {
        user_name: name,
        user_email: email,
        user_phone: phone,
        user_event_date: eventDate,
        user_message: message,
      },
      { publicKey }
    );

    return NextResponse.json({ success: true, data: emailResponse });
  } catch (error: any) {
    console.error("EmailJS Error:", error);
    return NextResponse.json({ error: error.message || 'Failed to send email' }, { status: 500 });
  }
}
