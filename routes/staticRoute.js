import express from "express";
import { URL } from "../models/models.js";
const router = express.Router();

router.get("/", async (req, res) => {
  if(!req.user){
    return res.redirect("/login")
  }
  const allUrls = await URL.find({createdBy: req.user._id});
  return res.render("home", {
    urls: allUrls,
  });
});

router.get("/signup", async (req, res) => {
  return res.render("signup");
});

router.get("/login", async (req, res) => {
  return res.render("login");
});

export default router;
