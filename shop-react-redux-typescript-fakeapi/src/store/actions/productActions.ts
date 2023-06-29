import { fetchProductsByApi } from '@/src/api/getProducts';
import { Product } from '../reducers/productReducer';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk<Product[]>(
  'products/fetchProducts',
  fetchProductsByApi
  
);
