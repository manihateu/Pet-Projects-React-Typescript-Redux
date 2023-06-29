import { createAction, PayloadAction } from '@reduxjs/toolkit';
import { CartProduct } from '../reducers/cartReducer';

export const addProductToCart = createAction<CartProduct>('cart/addProductToCart');
export const removeProductFromCart = createAction<string>('cart/removeProductFromCart');
