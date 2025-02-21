import { Schema } from "mongoose";

const clanModel = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    clanLeader: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    clanPoints:{type:Number, default:0},
    members: {
      type: Array,
      required: true,
    },
    profileImage: {
      type: String,
      default:
        "https://w7.pngwing.com/pngs/516/879/png-transparent-new-post-text-lettering-thumbnail.png",
    },
    warWins: {
      type: Number,
      default: 0,
    },
    warTies: {
      type: Number,
      default: 0,
    },
    warLosses: {
      type: Number,
      default: 0,
    },
    clanType: {
      type: String,
      required: true,
    },
    solvedIssues: {
      type: Number,
      default: 0,
    },
    requiredSolvedIssues: {
      type: Number,
      default: 0,
    },
    contests:{type:Array,default:[]}
  },
  { timestamps: true }
);

export default clanModel;
