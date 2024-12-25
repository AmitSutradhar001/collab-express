import { Router } from "express";
import {
  createWarLog,
  getWarLogsByClan,
  getWarLogById,
  updateWarLog,
  deleteWarLog,
} from "../controllers/warlog.controller.js";
import { verifyToken } from "../middleware/verifyUser.js";
const warlogRouter = Router();

warlogRouter.post("/create", verifyToken, createWarLog);
warlogRouter.delete("/delete/:id", verifyToken, deleteWarLog);
warlogRouter.get("/all-by-clan/:clanId", getWarLogsByClan);
warlogRouter.get("/by-id/:id", verifyToken, getWarLogById);
warlogRouter.put("/update/:id", verifyToken, updateWarLog);

export default warlogRouter;
