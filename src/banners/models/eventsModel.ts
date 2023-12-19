import { Schema, model } from "mongoose";

const viewsSchema = new Schema(
  {
    _id: { type: Schema.Types.ObjectId, ref: "banner" },
    clicks: {
      date: Date,
    },
  },
  { timestamps: true, versionKey: "" }
);

export const Event = model("view", viewsSchema);
