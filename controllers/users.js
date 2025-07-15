import { User } from "../models/users.js";

const handleUserSignUp = async (req, res) => {
  const { name, email, password } = req.body;
  User.create({ name, email, password });
  return res.render("home");
};

export { handleUserSignUp };

