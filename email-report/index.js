const nodemailer = require("nodemailer");


async function main() {
 let transporter = nodemailer.createTransport({
 host: "smtp.gmail.com",
 port: 465,
 secure: true,
 auth: {
 user:'devlogger.robo@gmail.com', //type your username
 pass: 'Devlogger@123' // type your password
 }
 });


 let info = await transporter.sendMail({
 from: "devlogger.robo@gmail.com",
 to: "anjalipoddar.doc@gmail.com",
 subject: "REPORT ",
 text: "Hello ,This is your project report",
 html: "<b>Hello </b>"
 });
 console.log("Message sent: %s", info.messageId);
}
main().catch(console.error);
