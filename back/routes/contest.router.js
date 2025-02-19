import { Router } from "express";
import {
  createMatch,
  getAllMatches,
  getMatchById,
  updateMatch,
  deleteMatch,
} from "../controllers/match.controller.js";
// import { verifyToken } from "../middleware/verifyUser.js";
const contestRouter = Router();

contestRouter.post("/create", createMatch);
contestRouter.get("/all", getAllMatches);
contestRouter.get("/by-id/:id", getMatchById);
contestRouter.put("/update/:id", updateMatch);
contestRouter.delete("/delete/:id", deleteMatch);

export default contestRouter;
