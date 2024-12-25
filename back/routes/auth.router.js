import { Router } from "express";
import { register, login, google } from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/google", google);

export default authRouter;
