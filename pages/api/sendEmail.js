import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, subject, message } = req.body;

    try {
      // Create a transporter object
      let transporter = nodemailer.createTransport({
        service: 'gmail', // Example using Gmail, change if necessary
        auth: {
          user: process.env.EMAIL_USER, // Your email address (use environment variables)
          pass: process.env.EMAIL_PASS, // Your email password (use environment variables)
        },
      });

      // Set up email options
      let mailOptions = {
        from: process.env.EMAIL_USER,
        to: email, // Send the email to yourself or a specific address
        subject: subject,
        text: message,
      };

      // Send email
      let info = await transporter.sendMail(mailOptions);

      console.log('Email sent: ' + info.response);
      res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, message: 'Email sending failed' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Only POST requests are allowed' });
  }
}
