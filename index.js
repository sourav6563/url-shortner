import express from "express";
import { connectDB } from "./connect.js";
import { URL } from "./models/models.js";
import path from "path";
import dotenv from "dotenv";
import urlRoute from "./routes/route.js";
import staticRoute from "./routes/staticRoute.js";
import userRoute from "./routes/userRoute.js";

dotenv.config();

connectDB(process.env.MONGODB_URI);

const app = express();
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`hey bro your server is started on port ${PORT}`);
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use("/url", urlRoute);


app.use("/", staticRoute);

// app.get("/test", async (req, res) => {
//   const allUrls = await URL.find({});
//   return res.render("home", {
//     urls: allUrls,
//   });
// });
