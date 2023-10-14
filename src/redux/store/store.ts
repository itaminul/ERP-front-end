import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';
import toggleReducer from '../features/toggleSlice';
import menuReducer from '../features/menuSlice';
import modalReducer from '../features/modalSlice';
import breadcrumbReducer from '../features/breadcrumbSlice';
import { itemsApi } from '../../service/itemsApi';
import { inventorySupplierApi } from '../../service/inventory/inventorySupplierApi';
const rootReducer = combineReducers({
  breadcrumbs: breadcrumbReducer,
  counter: counterReducer,
  toggle: toggleReducer,
  menu: menuReducer,
  modal: modalReducer,
  [inventorySupplierApi.reducerPath]: inventorySupplierApi.reducer,
  [itemsApi.reducerPath]: itemsApi.reducer,
});

const middleware = (getDefaultMiddleware: () => any[]) =>
  getDefaultMiddleware().concat([
    inventorySupplierApi.middleware,
    itemsApi.middleware,
  ]);

export const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
