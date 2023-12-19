import {} from "../banners/GraphQl/resolvers/bannerResolvers";
import { getAllBannersQuery } from "../banners/dal/bannersDal";
import { Banner } from "../banners/models/bannerModel";
import { NewBannerI, ShopProductInterface } from "../interfaces/interfaces";
import getAllProducts from "./getAllProducts";

const initialMongo = async () => {
  try {
    const check = await getAllBannersQuery();
    if (check.length) return;
    const banners: NewBannerI[] = [];
    const products: ShopProductInterface[] = await getAllProducts();
    products.map((product) => {
      banners.push({
        productID: product.id,
        title: product.name,
        category: product.category,
        description: product.description,
        imageURL: product.imageUrl,
        productURL: `https://erp-server-v2.onrender.com/shop_inventory/${product.id}`,
        authorID: "1",
        authorUsername: "admin",
        note: "",
      });
    });
    banners.map((banner) => Banner.create(new Banner(banner)));
  } catch (error) {
    return Promise.reject(error);
  }
};

export default initialMongo;
