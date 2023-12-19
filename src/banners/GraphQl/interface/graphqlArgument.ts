import { BannerI, NewBannerI } from "../../../interfaces/interfaces";

export interface Args {
  authorID: string;
  user_id: string;
  bannerId: string;
  productID: string;
  banner: BannerI;
  properties: Partial<NewBannerI>;
}
