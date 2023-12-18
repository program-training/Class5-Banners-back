export const typeBanner = `
  type Banner {
    productID: ID
    title: String
    description: String
    category: String
    imageURL: String
    note: String
    productURL: String
    authorID: ID
    _id: ID
    createdAt: String
  },
  type Product {
    id: String
  title: String
  salePrice: Int
  quantity: Int
  description: String
  category: String
  discountPercentage: Int
  imageUrl: String
  imageAlt: String
  },
  input inputBanner {
    productID: ID
    title: String
    description: String
    category: String
    imageURL: String
    note: String
    productURL: String
    authorID: ID
  },
  input editBannerInput{
    productID: ID
    title: String
    description: String
    category: String
    imageURL: String
    note: String
    productURL: String
    authorID: ID
    _id: ID
    createdAt: String
  }
  
  `;

export const typeBannerQueries = `
    getAllBannersService: [Banner] 
    getBannerByProdIDService(productID: ID): [Banner]
    getBannerByBannerIDService(bannerId: ID): Banner
    getBannerByUserService(authorID: ID): [Banner]
    getProductForBanners:[Product]
`;
export const typeBannerMutation = `
  addBannerService(banner: inputBanner): Banner
  updateBannerService( bannerId: ID, properties:editBannerInput ): Banner 
  deleteBannerService( bannerId: ID): Banner 
`;
