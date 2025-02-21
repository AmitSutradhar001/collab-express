import { Router } from "express";
import {
  createContest,
  getAllContests,
  getContestById,
  updateContest,
  deleteContest,
  getContestsByAdminId,
  getContestsByClanId,
} from "../controllers/contest.controller.js";
// import { verifyToken } from "../middleware/verifyUser.js";
const contestRouter = Router();

contestRouter.post("/create", createContest);
contestRouter.get("/all", getAllContests);
contestRouter.get("/by-id/:id", getContestById);
contestRouter.put("/update/:id", updateContest);
contestRouter.delete("/delete/:id", deleteContest);
contestRouter.get("/by-clanId/:clanId", getContestsByClanId);
contestRouter.get("/by-adminId/:adminId", getContestsByAdminId);

export default contestRouter;
