import { Schema } from "mongoose";

const appliedModel = new Schema(
  {
    issueId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "ProjectIssue",
    },
    projectId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Project",
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default appliedModel;
