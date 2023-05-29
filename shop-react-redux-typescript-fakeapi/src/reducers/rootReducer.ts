
import { combineReducers } from 'redux';
import sidebarReducer, { SidebarState } from './sidebarReducer';
import productReducer, { ProductsState }from './productReducer';
import cartReducer, { CartState } from './cartReducer';

export interface RootState {
  sidebar: SidebarState,
  products: ProductsState,
  cart: CartState
}

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  products: productReducer,
  cart: cartReducer
});

export default rootReducer;
