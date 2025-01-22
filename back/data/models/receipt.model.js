import { Schema } from "mongoose";

const receiptModel = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    pointSpend: {
      type: Number,
      required: true,
    },
    itemPerchesed: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

export default receiptModel;
