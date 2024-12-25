import { Schema } from "mongoose";

const warlogModel = new Schema(
  {
    clanId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Clan",
    },
    warDate: { type: Date, required: true },
    opponentClan: { type: String, required: true },
    result: { type: String, enum: ["Win", "Lose", "Draw"], required: true },
    stars: { type: Number, required: true }, // Example war performance metric
    destructionPercentage: { type: Number }, // Another clan's destruction percentage
    clanDestructionPercentage: { type: Number }, // Your clan's destruction percentage
  },
  { timestamps: true }
);

export default warlogModel;
