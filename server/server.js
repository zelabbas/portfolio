// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// allow just 10.15.16.7 to access /api/send-email using cors
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl), or from 10.15.16.7
    if (!origin || origin.startsWith('http://localhost:5173') || origin.startsWith('https://10.15.16.7')) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  }
};

app.use(cors(corsOptions));


// Route to handle form submission
app.post('/api/send-email', async (req, res) => {
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
    subject: '✨ New Portfolio Contact Message',
    text: `Message from ${name} (${email}):\n\n${message}`,
    html: `
        <div style="max-width:600px;margin:0 auto;background:#ffffff;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;">
            <!-- Header Section -->
            <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:40px 30px;text-align:center;">
                <div style="display:inline-block;background:rgba(255,255,255,0.15);border-radius:50%;padding:16px;margin-bottom:16px;border:2px solid rgba(255,255,255,0.2);">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                </div>
                <h1 style="color:white;font-size:28px;font-weight:700;margin:0 0 8px 0;text-shadow:0 2px 4px rgba(0,0,0,0.3);">New Portfolio Message</h1>
                <p style="color:rgba(255,255,255,0.9);font-size:16px;margin:0;font-weight:300;">Someone wants to connect with you!</p>
            </div>

            <!-- Content Section -->
            <div style="padding:40px 30px;">
                <!-- Sender Info Cards -->
                <div style="display:flex;gap:16px;margin-bottom:32px;flex-wrap:wrap;">
                    <div style="flex:1;min-width:200px;background:linear-gradient(135deg,#f8fafc 0%,#e2e8f0 100%);border-radius:12px;padding:20px;border:1px solid #e2e8f0;position:relative;overflow:hidden;">
                        <div style="position:absolute;top:0;right:0;width:60px;height:60px;background:linear-gradient(135deg,#3b82f6 0%,#1d4ed8 100%);opacity:0.1;border-radius:0 12px 0 60px;"></div>
                        <div style="position:relative;z-index:2;">
                            <p style="color:#64748b;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:1px;margin:0 0 8px 0;">From</p>
                            <p style="color:#1e293b;font-size:18px;font-weight:600;margin:0;">${name}</p>
                        </div>
                    </div>
                    <div style="flex:1;min-width:200px;background:linear-gradient(135deg,#f0f9ff 0%,#e0f2fe 100%);border-radius:12px;padding:20px;border:1px solid #bae6fd;position:relative;overflow:hidden;">
                        <div style="position:absolute;top:0;right:0;width:60px;height:60px;background:linear-gradient(135deg,#06b6d4 0%,#0891b2 100%);opacity:0.1;border-radius:0 12px 0 60px;"></div>
                        <div style="position:relative;z-index:2;">
                            <p style="color:#0c4a6e;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:1px;margin:0 0 8px 0;">Email</p>
                            <p style="color:#0c4a6e;font-size:16px;font-weight:500;margin:0;word-break:break-all;">${email}</p>
                        </div>
                    </div>
                </div>

                <!-- Message Section -->
                <div style="background:linear-gradient(145deg,#ffffff 0%,#f8fafc 100%);border-radius:16px;padding:32px;box-shadow:0 10px 25px rgba(0,0,0,0.05),0 4px 6px rgba(0,0,0,0.02);border:1px solid #f1f5f9;position:relative;overflow:hidden;">
                    <div style="position:absolute;top:-50px;right:-50px;width:150px;height:150px;background:radial-gradient(circle,rgba(99,102,241,0.08) 0%,transparent 70%);border-radius:50%;"></div>
                    <div style="position:relative;z-index:2;">
                        <div style="display:flex;align-items:center;margin-bottom:20px;">
                            <div style="background:linear-gradient(135deg,#8b5cf6 0%,#a855f7 100%);border-radius:8px;padding:8px;margin-right:12px;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                </svg>
                            </div>
                            <h3 style="color:#1e293b;font-size:20px;font-weight:600;margin:0;">Message</h3>
                        </div>
                        <div style="background:white;border-radius:12px;padding:24px;border:2px solid #f1f5f9;line-height:1.7;">
                            <p style="color:#374151;font-size:16px;margin:0;white-space:pre-wrap;">${message}</p>
                        </div>
                    </div>
                </div>

                <!-- Call to Action -->
                <div style="text-align:center;margin-top:40px;">
                    <div style="display:inline-block;background:linear-gradient(135deg,#10b981 0%,#059669 100%);color:white;padding:14px 32px;border-radius:50px;font-weight:600;font-size:16px;text-decoration:none;box-shadow:0 8px 20px rgba(16,185,129,0.3);transition:all 0.3s ease;">
                        Reply to ${name}
                    </div>
                </div>
            </div>

            <!-- Footer -->
            <div style="background:linear-gradient(135deg,#1f2937 0%,#111827 100%);padding:32px 30px;text-align:center;">
                <div style="border-top:1px solid #374151;padding-top:24px;">
                    <p style="color:#9ca3af;font-size:14px;margin:0 0 8px 0;">This message was sent from your portfolio website</p>
                    <p style="color:#6b7280;font-size:12px;margin:0;">
                        Received on ${new Date().toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                        })}
                    </p>
                </div>
            </div>
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