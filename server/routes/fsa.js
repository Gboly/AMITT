import { Router } from "express";
import { joinFsa } from "../controllers/fsa.js";

const router = Router();

router.post("/", joinFsa);

export default router;
