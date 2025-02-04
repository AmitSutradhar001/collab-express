import { Schema } from "mongoose";

const receiptModel = new Schema(
  {
    clanId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "clan",
    },
    clanName: { type: String, required: true },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    userName: { type: String, required: true },
    pointSpend: {
      type: Number,
      required: true,
    },
    itemPerchesed: {
      type: String,
      default: "Mobile",
      set: (val) => (val === null ? "Mobile" : val),
    },
    date: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

export default receiptModel;
