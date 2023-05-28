import axios from "axios";
import { Dispatch } from "redux";

export const toggleSidebar = () => {
    return {
      type: 'TOGGLE_SIDEBAR',
    };
  };

  export const fetchProducts = () => {
    return async (dispatch: Dispatch) => {
      try {
        // Выполните запрос к серверу для получения данных о товарах
        const response = await axios.get('https://fakestoreapi.com/products');
        const data = response.data;
  
        // Диспатч экшена для обновления состояния товаров
        dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: data });
      } catch (error) {
        dispatch({ type: 'FETCH_PRODUCTS_FAILURE', payload: error });
      }
    };
  };
  
  // Action для обновления данных о товаре
  export const updateProduct = (productId: string, updatedData: any) => {
    return { type: 'UPDATE_PRODUCT', payload: { productId, updatedData } };
  };