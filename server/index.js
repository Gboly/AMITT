import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";
import cors from "cors";
import runDb from "./config/db.config.js";
import applicationRoute from "./routes/application.js";

dotenv.config();
const app = express();

//cors
const corsOptions = {
  origin: "http://localhost:5173",
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

app.listen(process.env.PORT, (e) =>
  console.log(e || `Successfully connected to server ${process.env.PORT}`)
);
