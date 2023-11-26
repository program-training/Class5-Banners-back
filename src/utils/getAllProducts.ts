import axios from "axios";

const URL = "https://erp-server-v2.onrender.com/api/shop_inventory?searchText=";
const getAllProducts = async () => {
  try {
    const products = await axios.get(URL);
    return products.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default getAllProducts;
