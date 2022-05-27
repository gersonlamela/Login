import { Router } from "express";
import AuthController from "./Controllers/AuthController.js";
import verifyToken from "./middleware/auth.js";

const routes = Router();

routes
  .post("/login", AuthController.login)
  .post("/register", AuthController.register)
  .post("/welcome", verifyToken, AuthController.welcome);

export default routes;
