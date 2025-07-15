import express from "express";
import {
  handleGenerateNewShortUrl,
  handleRedirectUrl,
  handleGetAnalytics,
} from "../controllers/controllers.js";

const router = express.Router();


router.post("/", handleGenerateNewShortUrl);
router.get("/:shortId", handleRedirectUrl);
router.get("/analytics/:shortId", handleGetAnalytics);

export default router;
