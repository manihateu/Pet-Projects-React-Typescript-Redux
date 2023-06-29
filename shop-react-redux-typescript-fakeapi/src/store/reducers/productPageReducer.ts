import { fetchPageProduct } from '@/src/store/actions/ProductPageAction';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  title: '',
  description: '',
  price: 0,
  image: '',
};

const productPageSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct(state, action) {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPageProduct.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { setProduct } = productPageSlice.actions;
export default productPageSlice.reducer;
