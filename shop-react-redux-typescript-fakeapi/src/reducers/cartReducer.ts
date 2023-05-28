export interface CartState {
    products: CartProduct[];
  }
  
  export interface CartProduct {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
    count: number;
  }
  
  export type CartAction =
    | { type: 'ADD_PRODUCT_TO_CART'; payload: CartProduct }
    | { type: 'REMOVE_FROM_CART'; payload: string };
  
  const initialState: CartState = {
    products: [],
  };
  
  const cartReducer = (state = initialState, action: CartAction): CartState => {
    switch (action.type) {
      case 'ADD_PRODUCT_TO_CART':
        const existingProduct = state.products.find((product) => product.id === action.payload.id);
        if (existingProduct) {
          return {
            ...state,
            products: state.products.map((product) =>
              product.id === action.payload.id ? { ...product, count: product.count + 1 } : product
            ),
          };
        } else {
          return {
            ...state,
            products: [...state.products, { ...action.payload, count: 1 }],
          };
        }
  
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          products: state.products.filter((product) => product.id !== action.payload),
        };
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  