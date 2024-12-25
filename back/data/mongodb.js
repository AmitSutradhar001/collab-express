import { connect, model } from "mongoose";
import "dotenv/config";
import userModel from "./models/user.model.js";
import projectModel from "./models/project.model.js";
import projectIssueModel from "./models/projectIssue.model.js";
import appliedModel from "./models/applied.model.js";
import clanModel from "./models/clan.model.js";
import warlogModel from "./models/warlog.model.js";

const MONGODB_URL = process.env.MONGODB_URL;
try {
  connect(MONGODB_URL).then(() => console.log("DataBase Connected!"));
} catch (error) {
  console.log(error.massage);
}
export const User = model("User", userModel);
export const Project = model("Project", projectModel);
export const ProjectIssue = model("ProjectIssue", projectIssueModel);
export const Applied = model("appliedIssue", appliedModel);
export const Clan = model("clan", clanModel);
export const WarLog = model("warlog", warlogModel);
