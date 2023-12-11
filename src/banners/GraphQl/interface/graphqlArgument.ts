import { BannerI, NewBannerI } from "../../../interfaces/interfaces";

export interface Args {
  authorID: string;
  bannerId: string;
  productID: string;
  banner: BannerI;
  properties: Partial<NewBannerI>;
}
