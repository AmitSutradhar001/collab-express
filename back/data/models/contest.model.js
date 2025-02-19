import mongoose, { Schema } from "mongoose";
// Define the Match schema
const contestSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    isLive: {
      type: Boolean,
      required: true,
      default: false,
    },
    date: { type: Date, required: true },
    message: { type: String, default: "" },
    noOfIssues: { type: Number },
    note: { type: String, default: "" },
    contestPrice: { type: Array, required: true },
    participents: { type: Array, default: [] },
    rules: { type: String, default: "" },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields automatically
  }
);

export default contestSchema;
