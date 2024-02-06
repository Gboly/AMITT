import dotenv from "dotenv";
import NewsletterSubs from "../models/newsletterSubs.js";
import transport, { hbOptions } from "../config/nodemailer.config.js";
import hbs from "nodemailer-express-handlebars";
dotenv.config();

export const subscribe = async (req, res) => {
  const { name, email } = req.body;

  try {
    const canSave = Object.values({ ...req.body }).every((value) => value);
    if (!canSave) throw "Incomplete details";

    const isSubscribed = await NewsletterSubs.findOne({ email });
    if (isSubscribed) {
      return res.status(200).json({ message: "You are already subscribed." });
    }

    const subscriber = new NewsletterSubs({ ...req.body });
    await subscriber.save();

    const mailOptions = {
      from: process.env.GMAIL,
      to: email,
      template: "newsletter",
      subject: "You want to keep in touch",
      context: {
        name,
        unsubscribeLink: `http://localhost:5173/unsubscribe?id=${subscriber?._id}`,
      },
    };
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

export const unsubscribe = async (req, res) => {
  const { id } = req.body;

  try {
    const isDeleted = await NewsletterSubs.findOneAndDelete({ _id: id });

    if (!isDeleted) throw "Invalid subscriber Id";

    res.status(200).json(req.body);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ error: "An error was encountered. Try again" });
  }
};
