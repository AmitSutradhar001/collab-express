import { Schema } from "mongoose";

const clanPointsModel = new Schema(
  {
    clanName: {
      type: String,
      required: true,
      ref: "clan",
    },
    points: {
      type: Number,
      required: true,
    },
    clanId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true }
);

export default clanPointsModel;
