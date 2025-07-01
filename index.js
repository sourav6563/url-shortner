import express from "express";
import urlRoute from "./routes/route.js";
import { connectDB } from "./connect.js";
import { URL } from "./models/models.js";

connectDB(
  "mongodb+srv://souravmahato6563:Babu7364@cluster0.mmyhc.mongodb.net/url_shortner?retryWrites=true&w=majority&appName=Cluster0"
);

const app = express();
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`hey bro your server is started on port ${PORT}`);
});
app.use(express.json());
app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: Date.now(),
      },
    }
  );
});

app.use("/url", urlRoute);
