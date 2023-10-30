const nodemailer = require("nodemailer");
require('dotenv').config();


exports.sendEmail = (async (email, subject, message) => {
  // Create a transporter object
  const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 465,
      auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD
      }
  });
  
  // You can now use this transporter object to send emails
  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: email,
    subject: subject,
    html: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error occurred:', error.message);
      return false;
    } else {
      console.log('Email sent successfully!', info.response);
      return true;
    }
  });
});

