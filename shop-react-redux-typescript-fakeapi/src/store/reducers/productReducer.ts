import { fetchProducts } from '@/src/store/actions';
import { createSlice } from '@reduxjs/toolkit';

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
}

export interface ProductsState {
  loading: boolean;
  error: string | null;
  products: Product[];
}

const initialState: ProductsState = {
  loading: false,
  error: null,
  products: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = null;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'An error occurred.';
    });
  },
});

export default productsSlice.reducer;
