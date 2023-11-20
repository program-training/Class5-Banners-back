import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: process.env.GMAIL_USERNAME,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export default function test() {
    transporter.verify().then(console.log).catch(console.error);
    transporter.sendMail({
        from: '"Ad Banner Service" <adbannerservice@gmail.com>', // sender address
        to: "moshedoytsh@gmail.com", // list of receivers
        subject: "Email Verification", // Subject line
        text: "There is a new article. It's about sending emails, check it out!", // plain text body
        html: "<b>There is a new article. It's about sending emails, check it out!</b>", // html body
      }).then(info => {
        console.log({info});
      }).catch(console.error);
}