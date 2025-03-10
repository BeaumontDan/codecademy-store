// Import createStore and combineReducers here.
import { createStore, combineReducers } from 'redux';
// Import the slice reducers here.
import { inventoryReducer } from '../features/inventory/inventorySlice.js';
import { cartReducer } from '../features/cart/cartSlice.js';
import { currencyFilterReducer } from '../features/currencyFilter/currencyFilterSlice.js';
import { searchTermReducer } from '../features/searchTerm/searchTermSlice';
// Create and export the store here.
const reducers = {
  inventory: inventoryReducer,
  cart: cartReducer,
  currencyFilter: currencyFilterReducer,
  searchTerm: searchTermReducer
};

const rootReducer = combineReducers(reducers);
export const store = createStore(rootReducer);