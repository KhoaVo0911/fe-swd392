import axiosClient from "../axiosClient";
import { END_POINT_API } from "../endpoint";

const ProductAPI = {
  getProductList: (page) => {
    return axiosClient.get(
      `${END_POINT_API.PRODUCTS}?page=${page}&pageSize=10&sortByDateDescending=true`
    );
  },
  getProductDetailById: (productId) =>
    axiosClient.get(`${END_POINT_API.PRODUCTS}/${productId}`),
};

export default ProductAPI;
