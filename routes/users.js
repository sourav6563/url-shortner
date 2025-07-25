import express from "express";
const router = express.Router();
import { handleUserSignUp, handleUserLogin } from "../controllers/users.js";

router.post("/", handleUserSignUp);

router.post("/login", handleUserLogin);

export default router;
