export interface UserBaseI {
  email: string;
  username: string;
  isAdmin: boolean;
}

export interface NewUserReqI extends UserBaseI {
  password: string;
}

export interface NewUserDBI extends UserBaseI {
  password: string;
}

export interface UserI extends NewUserDBI {
  _id: string;
}

export interface NewBannerReqI {
  productID: string;
  title: string;
  description: string;
  imageURL: string;
  productURL: string;
  note: string | null;
  category: string;
}

export interface NewBannerI extends NewBannerReqI {
  authorID: string;
  authorUsername: string;
}

export interface BannerI extends NewBannerI {
  _id: string;
  views: number;
  viewTimes: string[];
}

export interface ShopProductInterface {
  id: string;
  name: string;
  salePrice: number;
  quantity: number;
  description: string;
  category: string;
  discountPercentage: number;
  imageUrl: string;
  imageAlt: string;
}
