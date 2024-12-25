import { Router } from "express";
import {
  updateProject,
  deleteProject,
  getProjects,
  getTheProject,
  createProject,
  getProjectByUserId,
} from "../controllers/project.controller.js";
import { verifyToken } from "../middleware/verifyUser.js";
const projectRouter = Router();

projectRouter.put("/update-project/:id", verifyToken, updateProject);
projectRouter.post("/create-project", verifyToken, createProject);
projectRouter.delete("/delete-project/:id", verifyToken, deleteProject);
projectRouter.get("/get-all-projects", verifyToken, getProjects);
projectRouter.get("/get-project/:id", verifyToken, getTheProject);
projectRouter.get(
  "/get-all-projects-by-userid/:userId",
  verifyToken,
  getProjectByUserId
);

export default projectRouter;
