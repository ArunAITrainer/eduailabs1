'use server'

import nodemailer from 'nodemailer'

export async function sendEmail(data: { name: string; email: string; message: string }) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const mailOptions = {
    from: process.env.SMTP_FROM,
    to: 'arunsharma@eduailabs.com',
    subject: `New message from ${data.name}`,
    text: `
      Name: ${data.name}
      Email: ${data.email}
      Message: ${data.message}
    `,
  }

  await transporter.sendMail(mailOptions)
}

