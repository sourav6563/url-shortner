// const sessionIdtoUserMap = new Map();
import jwt from "jsonwebtoken";
const setUser = (id, user) => {
  sessionIdtoUserMap.set(id, user);
};

const getUser = (id) => {
  return sessionIdtoUserMap.get(id);
};
export { setUser, getUser };
