import AxiosConfig from "./AxiosConfig";

export const api = {
  //get all Books
  getAll: () => {
    const url = "/Books";
    return AxiosConfig.get(url);
  },
  getById: (params) => {
    console.log("🚀 ~ file: api.js ~ line 10 ~ params", params);
    const url = "/Books";

    return AxiosConfig.get(`${url}/${params.id}`);
  },
  login: (data) => {
    const url = "/Account/LoginDto";
    return AxiosConfig.post(url, data);
  },
  addTocart: (data) => {
    const url = "/Carts";
    return AxiosConfig.post(url, data);
  },
  getProductOnCart: () => {
    const url = "/Carts";
    return AxiosConfig.get(url);
  },
  deleteProductOnCart: (data) => {
    const url = "/Carts";
    return AxiosConfig.delete(url, data);
  },
};
