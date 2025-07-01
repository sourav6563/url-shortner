import { nanoid } from "nanoid";
import { URL } from "../models/models.js";
const handleGenerateNewShortUrl = async (req, res) => {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "URL is required" });

  const shortId = nanoid(8);
  await URL.create({
    shortId: shortId,
    redirectUrl: body.url,
    visitHistory: [],
  });
  return res.status(201).json({
    shortId: shortId,
    redirectUrl: body.url,
    message: "Short URL created successfully",
  });
};

export { handleGenerateNewShortUrl };
