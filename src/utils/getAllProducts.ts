import axios from "axios";

const getAllProducts = async () => {
  const URL = process.env.ERP_BASE_URL || "";
  try {
    const products = await axios.get(URL);
    return products.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default getAllProducts;
