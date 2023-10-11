import { combineReducers } from '@reduxjs/toolkit';
import { itemsApi } from '../../service/itemsApi';
import { itemSupplierApi } from '../../service/inventory/itemSupplierApi';
const rootReducer = combineReducers({
  itemsApi: itemsApi.reducer,
  itemSupplierApi: itemSupplierApi.reducer,
});

export default rootReducer;
