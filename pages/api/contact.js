// /pages/api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  const { name, email, phone, messageAbout, buildPlan } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'services@vespineit.com', // Replace with your Gmail or custom SMTP email
      pass: 'your-email-app-password', // Use App Password (not your actual password)
    },
  });

  try {
    await transporter.sendMail({
      from: email, // user's email
      to: 'services@vespineit.com', // where you want to receive the message
      subject: `New Contact Form - ${messageAbout}`,
      html: `
        <h3>Message from ${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Message About:</strong> ${messageAbout}</p>
        <p><strong>Build Plan:</strong></p>
        <p>${buildPlan}</p>
      `,
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
}
