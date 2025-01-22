import { Schema } from "mongoose";

const projectIssueModel = new Schema(
  {
    projectId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref:'project'
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    tech_stack: {
      type: Array,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

export default projectIssueModel;
