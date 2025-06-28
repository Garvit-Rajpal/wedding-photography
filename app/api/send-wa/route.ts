
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, phone, eventDate, message } = body;
  
  const token = process.env.WA_ACCESS_TOKEN;
  const phoneNumberId = process.env.WA_PHONE_NUMBER_ID;
  const recipientNumber = process.env.WA_RECIPIENT_NUMBER;
  
  if (!token || !phoneNumberId || !recipientNumber) {
    return NextResponse.json({ error: 'Missing credentials' }, { status: 500 });
  }

  try {
    const waRes = await fetch(
      `https://graph.facebook.com/v22.0/${phoneNumberId}/messages`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify({
        //   messaging_product: 'whatsapp',
        //   to: recipientNumber,
        //   type: 'text',
        //   text: {
        //     body: `📩 New Inquiry Received:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nEvent Date: ${eventDate}\nMessage: ${message}`,
        //   },
        // }),
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to: recipientNumber,
          type: "template",
          template: {
            name: "testwedding3", // ✔️ exactly as shown in dashboard
            language: {
              code: "en", // ✔️ this must match the language of the template
            },
            components: [
              {
                type: "body",
                // parameters: [
                //   { type: "text", text: formData.name },
                //   { type: "text", text: formData.email },
                //   { type: "text", text: formData.phone },
                //   { type: "text", text: formData.eventDate },
                //   { type: "text", text: formData.message },
                // ],
                parameters: [
                  { type: "text",parameter_name:"user_name", text: name },
                  { type: "text",parameter_name:"user_email", text: email },
                  { type: "text",parameter_name:"user_phone", text: phone },
                  { type: "text",parameter_name:"user_event_date", text: eventDate },
                  { type: "text",parameter_name:"user_message", text: message },
                ]
                
              },
            ],
          },
        }),
      }
    );

    const data = await waRes.json();
    if (!waRes.ok) throw new Error(data?.error?.message || 'Unknown error');
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
