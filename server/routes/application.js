import { Router } from "express";
import {
  createApplication,
  getApplication,
  // submitApplication,
} from "../controllers/application.js";
import multer from "multer";

const router = Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });
const fileUploads = upload.fields([
  { name: "resume", maxCount: 1 },
  { name: "coverLetter", maxCount: 1 },
]);

router.post("/", fileUploads, createApplication);
// router.post("/submit", submitApplication);
router.get("/:id", getApplication);

export default router;
