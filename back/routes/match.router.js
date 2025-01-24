import { Router } from "express";
import {
  createMatch,
  getAllMatches,
  getMatchById,
  updateMatch,
  deleteMatch,
} from "../controllers/match.controller.js";
// import { verifyToken } from "../middleware/verifyUser.js";
const matchRouter = Router();

matchRouter.post("/create", createMatch);
matchRouter.get("/all", getAllMatches);
matchRouter.get("/by-id/:id", getMatchById);
matchRouter.put("/update/:id", updateMatch);
matchRouter.delete("/delete/:id", deleteMatch);

export default matchRouter;
