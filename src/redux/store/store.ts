import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';
import toggleReducer from '../features/toggleSlice';
import menuReducer from '../features/menuSlice';
import modalReducer from '../features/modalSlice';
import breadcrumbReducer from '../features/breadcrumbSlice';
export const store = configureStore({
  reducer: {
    breadcrumbs: breadcrumbReducer,
    counter: counterReducer,
    toggle: toggleReducer,
    menu: menuReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
