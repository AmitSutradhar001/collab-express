import { Schema } from "mongoose";

const postModel = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "user",
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
    postImage: {
      type: String,
      default:
        "https://w7.pngwing.com/pngs/516/879/png-transparent-new-post-text-lettering-thumbnail.png",
    },
    category: {
      type: String,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

export default postModel;
