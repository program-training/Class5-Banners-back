import axios from "axios";

const URL = process.env.ERP_BASE_URL + "/api/shop_inventory?searchText=";
const getAllProducts = async () => {
  try {
    const products = await axios.get(URL);
    return products.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default getAllProducts;
