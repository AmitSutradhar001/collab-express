import { Router } from "express";
import {
  createProjectIssue,
  updateProjectIssue,
  deleteProjectIssue,
  getProjectsIssue,
  getTheProjectIssue,
  getAllTheProjectIssuesByProjectId,
} from "../controllers/projectIssue.controller.js";
import { verifyToken } from "../middleware/verifyUser.js";

export const projectIssueRouter = Router();

projectIssueRouter.post("/project-issue", verifyToken, createProjectIssue);
// Create a project issue
projectIssueRouter.put(
  "/project-issue/:projectId",
  verifyToken,
  updateProjectIssue
);
// Update a project issue by ID
projectIssueRouter.delete(
  "/project-issue/:projectId",
  verifyToken,
  deleteProjectIssue
);
// Delete a project issue by ID
projectIssueRouter.get("/project-issues", verifyToken, getProjectsIssue);
// Get all project issues
projectIssueRouter.get("/project-issue/:id", verifyToken, getTheProjectIssue);
// Get a specific project issue by ID
projectIssueRouter.get(
  "/all-project-issues-by/:projectId",
  verifyToken,
  getAllTheProjectIssuesByProjectId
);
// Get a specific project issue by ID

export default projectIssueRouter;
