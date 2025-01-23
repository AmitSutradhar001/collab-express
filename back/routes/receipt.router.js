import { Router } from "express";
import {
  createReceipt,
  getAllReceipt,
  getReceiptById,
  updateReceipt,
  deleteReceipt,
} from "../controllers/receipt.controller.js";
import { verifyToken } from "../middleware/verifyUser.js";
const receiptRouter = Router();

receiptRouter.post("/create", createReceipt);
receiptRouter.get("/all", getAllReceipt);
receiptRouter.get("/by-id/:id", getReceiptById);
receiptRouter.put("/update/:id", updateReceipt);
receiptRouter.delete("/delete/:id", deleteReceipt);

export default receiptRouter;
