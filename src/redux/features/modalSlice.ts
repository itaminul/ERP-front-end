// modalSlice.ts

import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
  isOpen: boolean;
  data: any; // You can replace 'any' with a specific type for your data
}

const initialState: ModalState = {
  isOpen: false,
  data: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<any>) => {
      state.isOpen = true;
      state.data = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.data = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
