import { User } from "../models/users.js";
import { v4 as uuidv4 } from "uuid";
import { setUser, getUser } from "../service/auth.js";

const handleUserSignUp = async (req, res) => {
  const { name, email, password } = req.body;
  User.create({ name, email, password });
  return res.redirect("/");
};

const handleUserLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  // console.log("User", user);

  if (!user) {
    return res.render("login", { error: "Invalid credentials" });
  }
  const sessionId = uuidv4();
  setUser(sessionId, user);
  res.cookie("uid", sessionId);
  return res.redirect("/");
};

export { handleUserSignUp, handleUserLogin };
