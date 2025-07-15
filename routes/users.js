import express from "express";
const router = express.Router();
import { handleUserSignUp } from "../controllers/users.js";

router.post("/", handleUserSignUp);
export default router;
