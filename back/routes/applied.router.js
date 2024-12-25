import { Router } from "express";
import {
  createApplication,
  deleteApplication,
  getApplications,
  getApplicationByIssueId,
  getApplicationByProjectId,
} from "../controllers/applied.controller.js";
import { verifyToken } from "../middleware/verifyUser.js";
const appliedRouter = Router();

appliedRouter.post("/create-application", verifyToken, createApplication);
appliedRouter.delete("/delete-application", verifyToken, deleteApplication);
appliedRouter.get("/get-all-applications", verifyToken, getApplications);
appliedRouter.get(
  "/get-application-by-issue-id/:issueId",
  getApplicationByIssueId
);
appliedRouter.get(
  "/get-application-by-project-id/:projectId",
  getApplicationByProjectId
);

export default appliedRouter;
