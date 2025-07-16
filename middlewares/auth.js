import { getUser } from "../service/auth.js";
const restrictTologgedinUserOnly = async (req, res, next) => {
  // console.log(req);

  const userUid = req.cookies?.uid;
  if (!userUid) {
    return res.redirect("/login");
  }
  const user = await getUser(userUid);
  if (!user) {
    return res.redirect("/login");
  }
  req.user = user;
  next();
};

const checkAuth = async (req, res, next) => {
  const userUid = req.cookies?.uid;
  const user = await getUser(userUid);
  req.user = user;
  next();
};

export { restrictTologgedinUserOnly, checkAuth };
