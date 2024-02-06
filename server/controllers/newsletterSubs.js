import dotenv from "dotenv";
import NewsletterSubs from "../models/newsletterSubs.js";
import transport, { hbOptions } from "../config/nodemailer.config.js";
import hbs from "nodemailer-express-handlebars";
dotenv.config();

export const subscribe = async (req, res) => {
  const { name, email } = req.body;

  const mailOptions = {
    from: process.env.GMAIL,
    to: email,
    template: "newsletter",
    subject: "You want to keep in touch",
    context: { name },
  };

  try {
    const canSave = Object.values({ ...req.body }).every((value) => value);
    if (!canSave) throw "Incomplete details";

    const isSubscribed = await NewsletterSubs.findOne({ email });
    if (isSubscribed) {
      return res.status(200).json({ message: "You are already subscribed." });
    }

    const subscriber = new NewsletterSubs({ ...req.body });
    await subscriber.save();

    transport.use("compile", hbs(hbOptions));
    await transport.sendMail(mailOptions);

    res.status(200).json({ message: "Subscription successful." });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ error: "An error was encountered. Try again" });
  }
};
