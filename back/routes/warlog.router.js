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

warlogRouter.post("/create", createWarLog);
warlogRouter.delete("/delete/:id", deleteWarLog);
warlogRouter.get("/all-by-clan/:clanId", getWarLogsByClan);
warlogRouter.get("/by-id/:id", getWarLogById);
warlogRouter.put("/update/:id", updateWarLog);

export default warlogRouter;
