import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.GMAIL,
    pass: process.env.GPASS,
  },
});

export const hbOptions = {
  viewEngine: {
    partialsDir: "../server/emailTemplates/",
    defaultLayout: false,
  },
  viewPath: "../server/emailTemplates/",
};

export default transport;
