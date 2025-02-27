import { Schema } from "mongoose";

const userModel = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default:
        "https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
    },
    role: {
      type: String,
    },
    stack: {
      type: Array,
    },
    phNo: { type: Number },
    bio: { type: String },
    comName: { type: String },
    comLocation: { type: String },
    comPosition: { type: String },
    comStart: { type: Date },
    comEnd: { type: Date },
    comDescription: { type: String },
    instName: { type: String },
    instDegreeName: { type: String },
    instLocation: { type: String },
    instStart: { type: Date },
    instEnd: { type: Date },
    instDescription: { type: String },
    isAdmin: {
      type: Boolean,
      required: true,
    },
    clanId: {
      type: Schema.Types.ObjectId,
      ref: "clan",
      default: null,
    },
  },
  { timestamps: true }
);

export default userModel;
