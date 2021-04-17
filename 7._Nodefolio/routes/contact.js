const router = require("express").Router();
"use strict";
const nodemailer = require("nodemailer");
const dotenv = require('dotenv');
dotenv.config();

// async..await is not allowed in global scope, must use a wrapper
async function main(body) {

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `"${body.firstName} ${body.lastName}" <${body.email}>`, // sender address
    to: process.env.EMAIL, // list of receivers
    subject: body.subject, // Subject line
    text: `${body.message} \n\nFrom: ${body.email}`, // plain text body
    //html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

}

router.post("/api/contact", (req, res) => {
    console.log(req.body);
    main(req.body).catch(console.error);
    res.redirect("/");
})

module.exports = {
    router: router
}
