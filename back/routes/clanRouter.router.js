import { Router } from "express";
import {
  createClan,
  getAllClans,
  getClanById,
  updateClan,
  deleteClan,
} from "../controllers/clan.controller.js";
import { verifyToken } from "../middleware/verifyUser.js";
const clanRouter = Router();

clanRouter.post("/create", verifyToken, createClan);
clanRouter.get("/all", getAllClans);
clanRouter.get("/by-id/:id", getClanById);
clanRouter.put("/update/:id", updateClan);
clanRouter.delete("/delete/:id", deleteClan);

export default clanRouter;
