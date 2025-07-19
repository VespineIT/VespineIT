import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, phone, messageAbout, buildPlan } = req.body;

  // Validate required fields
  if (!name || !email || !messageAbout || !buildPlan) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    // Create transporter using your company's email account
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your company's Gmail
        pass: process.env.EMAIL_PASS, // Your company's app password
      },
    });

    // Email content - This sends from your company email to your company email
    // But shows the user's details and sets reply-to as user's email
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Shows user's name but sends from your email
      to: 'services@vespineit.com',
      replyTo: email, // When you click reply, it goes to user's email
      subject: `New Contact Form Submission from ${name} - ${messageAbout}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #f97316;">New Contact Form Submission</h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Message About:</strong> ${messageAbout}</p>
          </div>
          <div style="margin: 20px 0;">
            <h3>What they're planning to build:</h3>
            <div style="background-color: #fff; padding: 15px; border-left: 4px solid #f97316; border-radius: 4px;">
              ${buildPlan.replace(/\n/g, '<br>')}
            </div>
          </div>
          <div style="margin-top: 30px; padding: 15px; background-color: #e8f4fd; border-radius: 4px;">
            <p style="margin: 0; font-size: 14px; color: #666;">
              <strong>Reply to this email to respond directly to ${name} at ${email}</strong>
            </p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
}