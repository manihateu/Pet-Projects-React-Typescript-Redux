import { fetchProductsById } from '@/src/api/getProductById';
import { Product } from '../reducers/productReducer';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPageProduct = createAsyncThunk<Product, string>(
  'products/fetchProduct',
  fetchProductsById
);
