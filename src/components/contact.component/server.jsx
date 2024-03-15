const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  host: "smtp.mail.com",
  port: 587, // Outgoing server port for mail.com
  secure: false, // Outgoing server does not require SSL
  auth: {
    user: "smcpeek@mail.com", // Your mail.com email address
    pass: "Mgti18il!", // Your mail.com email password
  },
  tls: {
    rejectUnauthorized: false, // Allow self-signed certificates if needed
  },
});

// Endpoint to handle form submission
app.post("/send-email", (req, res) => {
  const { name, email, phone, message } = req.body;

  // Email content
  const mailOptions = {
    from: email,
    to: "shawnmcpeek@gmail.com", // your email address
    subject: "New Contact Form Submission",
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error: Unable to send email");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
