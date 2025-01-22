import { Router } from "express";
import {
    createClanPoint,
  deleteClanPoint,
  getClanPoints,
  getClanPointByClanId,
  updateClanPoint,
} from "../controllers/clanPoints.controller.js";
import { verifyToken } from "../middleware/verifyUser.js";
const clanPointsRouter = Router();

clanPointsRouter.post("/create", createClanPoint);
clanPointsRouter.get("/all", getClanPoints);
clanPointsRouter.get("/by-id/:clanId", getClanPointByClanId);
clanPointsRouter.put("/update/:id", updateClanPoint);
clanPointsRouter.delete("/delete/:id", deleteClanPoint);

export default clanPointsRouter;
