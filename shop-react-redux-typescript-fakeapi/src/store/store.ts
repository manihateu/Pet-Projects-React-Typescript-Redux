import { applyMiddleware, createStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './reducers/rootReducer';
import thunkMiddleware from 'redux-thunk';

const store = () => createStore(rootReducer, applyMiddleware(thunkMiddleware));

export const wrapper = createWrapper(store);

export default store;
