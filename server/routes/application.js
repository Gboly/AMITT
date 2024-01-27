import { Router } from "express";
import {
  createApplication,
  getApplication,
} from "../controllers/application.js";

const router = Router();

router.route("/").post(createApplication);
router.get("/:id", getApplication);

export default router;
