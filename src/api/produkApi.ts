import axios from "axios";

export interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: Rating;
}

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export const getProduk = async (): Promise<Product[]> => {
  const response = await api.get<Product[]>("/products");
  return response.data;
};
export const getProdukById = (id: string | number) => api.get<Product>(`/products/${id}`);
