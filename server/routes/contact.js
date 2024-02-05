import { Router } from "express";
import { sendCustomMessage } from "../controllers/contact.js";

const router = Router();

router.post("/", sendCustomMessage);

export default router;
