import { Router } from "express";
const routes = new Router();
import UserController from './app/UserController';
 

routes.get("./users", UserController.store);

  
  return res.json(users);
});

export default routes;
