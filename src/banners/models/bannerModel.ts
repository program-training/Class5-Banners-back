import { Schema, model } from "mongoose";
import { BannerI } from "../../interfaces/interfaces";

const bannerSchema = new Schema<BannerI>(
  {
    productID: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    imageURL: { type: String, required: true },
    note: { type: String },
    productURL: { type: String, require: true },
    authorID: { type: String, required: true },
    authorUsername: { type: String },
    views: { type: Number, required: true, default: 0 },
    viewTimes: [{ type: Date }],
  },
  { timestamps: true, versionKey: "" }
);

export const Banner = model("banner", bannerSchema);
