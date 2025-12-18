import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export const getProduk = () => api.get("/products");
export const getProdukById = (id) => api.get(`/products/${id}`);
