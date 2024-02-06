import { Router } from "express";
import { subscribe } from "../controllers/newsletterSubs.js";

const router = Router();

router.post("/subscribe", subscribe);

export default router;
