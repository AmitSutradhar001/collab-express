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
    isAdmin: {
      type: Boolean,
      required: true,
    },
    clanId: {
      type: Schema.Types.ObjectId,
      ref: "Clan",
      default:null
      
    },
  },
  { timestamps: true }
);

export default userModel;
