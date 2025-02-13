import { Schema } from "mongoose";

const warlogModel = new Schema(
  {
    clanId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "clan",
    },
    isLive: { type: Boolean, default:false },
    warDate: { type: Date, required: true },
    opponentClan: { type: String, required: true },
    result: { type: String, enum: ["Win", "Lose", "Draw"] },
    stars: { type: Number }, // Example war performance metric
    destructionPercentage: { type: Number }, // Another clan's destruction percentage
    clanDestructionPercentage: { type: Number }, // Your clan's destruction percentage
  },
  { timestamps: true }
);

export default warlogModel;
