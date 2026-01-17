import axios from "axios";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 10000,
  headers: {
    "Content-Type": "aplication/json",
  },
});

export const getProduk = () => api.get<Product[]>("/products");
export const getProdukById = (id: string | number) => api.get<Product>(`/products/${id}`);
