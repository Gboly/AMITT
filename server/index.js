import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";
import cors from "cors";
import runDb from "./config/db.config.js";
import applicationRoute from "./routes/application.js";
import contactRoute from "./routes/contact.js";
import newsletterSubsRoute from "./routes/newsletterSubs.js";

dotenv.config();
const app = express();

//cors
const allowedOrigins = [
  "https://amitt-consulting.vercel.app",
  "http://localhost:5173",
];
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) >= 0) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET,POST,PUT,PATCH,DELETE,HEAD",
  credentials: true,
};

//Middlewares
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(morgan("combined"));

//Database connection
runDb();

//routing
app.use("/application", applicationRoute);
app.use("/message", contactRoute);
app.use("/newsletter", newsletterSubsRoute);

app.listen(process.env.PORT, (e) =>
  console.log(e || `Successfully connected to server ${process.env.PORT}`)
);
