import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ success: false, message: 'All fields are required' }, { status: 400 });
  }

  const emailRegex = /^[^
@]+@[^
@]+\.[^
@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ success: false, message: 'Invalid email format' }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: '7ca808001@smtp-brevo.com',
      subject: 'New Contact Form Submission',
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, message: 'An error occurred while submitting the form' }, { status: 500 });
  }
}
