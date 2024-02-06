import dotenv from "dotenv";
import transport, { hbOptions } from "../config/nodemailer.config.js";
import hbs from "nodemailer-express-handlebars";
dotenv.config();

export const sendCustomMessage = async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  const lines = message.split("\n");
  const mailOptions = {
    from: process.env.GMAIL,
    to: process.env.GMAIL,
    template: "customMessage",
    subject: "New message from website",
    context: {
      firstName,
      lastName,
      email,
      phone,
      message: lines.reduce((accum, line, index) => {
        index === 0 ? (accum = line) : (accum = `${accum}<br>${line}`);
        return accum;
      }, ""),
    },
  };

  try {
    if (!firstName || !email || !message) throw "Incomplete details";
    transport.use("compile", hbs(hbOptions));
    await transport.sendMail(mailOptions);

    res.status(200).json(req.body);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ error: "An error was encountered. Try again" });
  }
};
