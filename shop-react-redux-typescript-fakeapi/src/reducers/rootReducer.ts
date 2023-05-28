// rootReducer.ts

import { combineReducers } from 'redux';
import sidebarReducer, { SidebarState } from './sidebarReducer';
import productReducer from './productReducer';
import cartReducer, { CartState } from './cartReducer';

interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
  }
  

interface ProductState {
    loading: boolean;
    error: string | null;
    products: Product[];
}

export interface RootState {
  sidebar: SidebarState,
  products: ProductState,
  cart: CartState
}

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  products: productReducer,
  cart: cartReducer
});

export default rootReducer;
