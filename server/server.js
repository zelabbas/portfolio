// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route to handle form submission
app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).send('All fields are required');
    }

    // Create a transporter using SMTP (or use other services)
    const transporter = nodemailer.createTransport({
        service: 'gmail', // or other email services like SendGrid
        auth: {
            user: process.env.EMAIL,  
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    // Set email options
    const mailOptions = {
                from: email,  // sender's email
                to: process.env.EMAIL,
                subject: 'New message from portfolio contact form',
                text: `Message from ${name} (${email}):\n\n${message}`,
                html: `
                    <div style="max-width:500px;margin:20px auto;padding:24px;border-radius:16px;background:linear-gradient(135deg,#f8fafc 0%,#e0e7ef 100%);box-shadow:0 4px 24px rgba(0,0,0,0.08);font-family:sans-serif;">
                        <h2 style="color:#2563eb;margin-bottom:8px;">New Portfolio Message</h2>
                        <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0;"/>
                        <p style="font-size:16px;color:#374151;"><strong>Name:</strong> ${name}</p>
                        <p style="font-size:16px;color:#374151;"><strong>Email:</strong> ${email}</p>
                        <div style="margin:16px 0;padding:16px;background:#fff;border-radius:8px;border:1px solid #e5e7eb;">
                            <p style="font-size:16px;color:#111827;margin:0;">${message}</p>
                        </div>
                        <p style="font-size:12px;color:#6b7280;margin-top:24px;">Sent from your portfolio contact form</p>
                    </div>
                `,
    };

    // Send the email
    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        res.status(400).send('Error sending email: ' + error.message);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});