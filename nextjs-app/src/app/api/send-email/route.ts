
import { NextResponse } from 'next/server';
const brevo = require('@getbrevo/brevo');

export async function POST(request: Request) {
  let defaultClient = brevo.ApiClient.instance;

  let apiKey = defaultClient.authentications['api-key'];
  apiKey.apiKey = process.env.BREVO_API_KEY;

  let apiInstance = new brevo.TransactionalEmailsApi();
  let sendSmtpEmail = new brevo.SendSmtpEmail();

  const { subject, htmlContent, sender, to, replyTo, headers, params } = await request.json();

  sendSmtpEmail.subject = subject;
  sendSmtpEmail.htmlContent = htmlContent;
  sendSmtpEmail.sender = sender;
  sendSmtpEmail.to = to;
  sendSmtpEmail.replyTo = replyTo;
  sendSmtpEmail.headers = headers;
  sendSmtpEmail.params = params;

  try {
    const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
