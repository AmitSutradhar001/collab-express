import { Router } from "express";
import {
  createContest,
  getAllContests,
  getContestById,
  updateContest,
  deleteContest,
  getContestsByAdminId,
  getContestsByClanId,
  cancleContest,
} from "../controllers/contest.controller.js";
// import { verifyToken } from "../middleware/verifyUser.js";
const contestRouter = Router();

contestRouter.post("/create", createContest);
contestRouter.get("/all", getAllContests);
contestRouter.get("/by-id/:id", getContestById);
contestRouter.put("/update/:id", updateContest);
contestRouter.put("/cancle/:id", cancleContest);
contestRouter.delete("/delete/:id", deleteContest);
contestRouter.get("/by-clanId/:clanId", getContestsByClanId);
contestRouter.get("/by-adminId/:adminId", getContestsByAdminId);

export default contestRouter;
