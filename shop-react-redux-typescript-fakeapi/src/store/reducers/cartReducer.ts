import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface CartProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  count: number;
}

interface CartState {
  products: CartProduct[];
}

const initialState: CartState = {
  products: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<CartProduct>) => {
      const existingProduct = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.count += 1;
      } else {
        state.products.push({ ...action.payload, count: 1 });
      }
    },
    removeProductFromCart: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;
export default cartSlice.reducer;
