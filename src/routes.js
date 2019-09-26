import { Router } from "express";
import User from "./app/models/User";
const routes = new Router();

routes.get("./", async (req, res) => {
  const user = await User.create({
    name: "Odiar Carvalho",
    email: "osc@gmail.com",
    password_hash: "12334566",
  });

  
  return res.json(users);
});

export default routes;
