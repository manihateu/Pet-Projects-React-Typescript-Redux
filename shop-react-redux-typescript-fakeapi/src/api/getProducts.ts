import { Product } from "../store/reducers/productReducer";
export const fetchProductsByApi = async (): Promise<Product[]> => {
  const url = 'https://fakestoreapi.com/products';
  const response = await fetch(url);
  const data = await response.json();
  return data as Product[];
};
