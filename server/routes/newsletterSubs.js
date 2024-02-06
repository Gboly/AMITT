import { Router } from "express";
import { subscribe, unsubscribe } from "../controllers/newsletterSubs.js";

const router = Router();

router.post("/subscribe", subscribe);
router.post("/unsubscribe", unsubscribe);

export default router;
