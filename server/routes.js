import { Router } from "express";
import AuthController from "./Controllers/AuthController.js";
import UserController from "./Controllers/UserController.js";
import validateToken from "./middleware/auth.js";
const routes = Router();

routes
  .post("/login", AuthController.login)
  .post("/register", AuthController.register)
  .get("/welcome", validateToken, AuthController.welcome)
  .get("/me", validateToken, UserController.me)
  .all("*", validateToken);

export default routes;
