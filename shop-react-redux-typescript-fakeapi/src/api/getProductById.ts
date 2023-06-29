import { Product } from "../store/reducers/productReducer";

export const fetchProductsById = async (id: string): Promise<Product> => {
    if (!id) {
      throw new Error('Invalid ID');
    }

    const url = `https://fakestoreapi.com/products/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    return data as Product;
}


