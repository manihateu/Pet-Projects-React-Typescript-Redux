// rootReducer.ts

import { combineReducers } from 'redux';
import sidebarReducer, { SidebarState } from './sidebarReducer';
import productReducer from './productReducer';

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
}

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  products: productReducer,
});

export default rootReducer;
