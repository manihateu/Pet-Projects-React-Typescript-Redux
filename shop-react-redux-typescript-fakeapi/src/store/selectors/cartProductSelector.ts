import { RootState } from '@/src/store/reducers/rootReducer';

export const selectProducts = (state: RootState) => state.cart.products;
