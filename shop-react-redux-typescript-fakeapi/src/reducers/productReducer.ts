// productsReducer.ts

export interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
  }
  
  export  interface ProductsState {
    loading: boolean;
    error: string | null;
    products: Product[];
  }
  
  const initialState: ProductsState = {
    loading: false,
    error: null,
    products: [],
  };
  
  const productsReducer = (state = initialState, action: any): ProductsState => {
    switch (action.type) {
      case 'FETCH_PRODUCTS_SUCCESS':
        return {
          ...state,
          loading: false,
          products: action.payload,
          error: null,
        };
      case 'FETCH_PRODUCTS_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case 'UPDATE_PRODUCT':
        const updatedProducts = state.products.map((product) => {
          if (product.id === action.payload.productId) {
            return {
              ...product,
              ...action.payload.updatedData,
            };
          }
          return product;
        });
        return {
          ...state,
          products: updatedProducts,
        };
      default:
        return state;
    }
  };
  
  export default productsReducer;
  