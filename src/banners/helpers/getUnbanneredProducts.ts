import { BannerI, ShopProductInterface } from "../../interfaces/interfaces";

const getUnBanneredProducts = (
  products: ShopProductInterface[],
  banners: BannerI[]
) => {
  const bannersMap: string[] = [];
  banners.map((banner) => (bannersMap[+banner.productID] = banner.productID));
  const filtered: ShopProductInterface[] = [];
  products.map((product) => {
    if (typeof bannersMap[+product.id] !== "string") filtered.push(product);
  });
  return filtered;
};
export default getUnBanneredProducts;
