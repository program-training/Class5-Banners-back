import nodemailer from "nodemailer";

const sendEmail = async (email: string, subject: string, text: string) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: true,
      auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USERNAME,
      to: email,
      subject: subject,
      text: text,
    });

    console.log("email sent successfully");
  } catch (error) {
    console.log(error, "email not sent");
  }
};

export default sendEmail;
