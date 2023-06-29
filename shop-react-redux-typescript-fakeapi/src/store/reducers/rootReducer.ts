import productPageReducer from './productPageReducer';
import productsReducer from './productReducer';
import sidebarReducer from './sidebarReducer';
import cartReducer from './cartReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  products: productsReducer,
  cart: cartReducer,
  product: productPageReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
