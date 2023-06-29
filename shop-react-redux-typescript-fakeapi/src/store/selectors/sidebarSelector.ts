import { RootState } from '../reducers/rootReducer';

export const selectSideBarIsOpen = (state: RootState) => state.sidebar.isOpen;
