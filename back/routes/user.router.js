import { Router } from "express";
import {
  updateUser,
  deleteUser,
  getUsers,
  getTheUser,
} from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/verifyUser.js";
const userRouter = Router();

userRouter.put("/update-user", verifyToken, updateUser);
userRouter.delete("/delete-user", verifyToken, deleteUser);
userRouter.get("/get-all-users", verifyToken, getUsers);
userRouter.get("/get-user-by-userid/:userId", getTheUser);

export default userRouter;
