import { connect, model } from "mongoose";
import "dotenv/config";
import userModel from "./models/user.model.js";
import projectModel from "./models/project.model.js";
import projectIssueModel from "./models/projectIssue.model.js";
import appliedModel from "./models/applied.model.js";
import clanModel from "./models/clan.model.js";
import warlogModel from "./models/warlog.model.js";
import clanPointsModel from "./models/clanPoints.model.js";
import receiptModel from "./models/receipt.model.js";
import contestSchema from "./models/contest.model.js";

const MONGODB_URL = process.env.MONGODB_URL;
try {
  connect(MONGODB_URL).then(() => console.log("DataBase Connected!"));
} catch (error) {
  console.log(error.massage);
}
export const User = model("user", userModel);
export const Project = model("project", projectModel);
export const ProjectIssue = model("projectIssue", projectIssueModel);
export const Applied = model("appliedIssue", appliedModel);
export const Clan = model("clan", clanModel);
export const WarLog = model("warlog", warlogModel);
export const ClanPoints = model("clan-points", clanPointsModel);
export const Receipt = model("receipt", receiptModel);
export const Contest = model("contest", contestSchema);

