// activeMenuSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ActiveMenuState {
  activeMenuItem: string | null;
}

const initialState: ActiveMenuState = {
  activeMenuItem: null,
};

const activeMenuSlice = createSlice({
  name: 'activeMenu',
  initialState,
  reducers: {
    setActiveMenuItem: (state, action: PayloadAction<string | null>) => {
      state.activeMenuItem = action.payload;
    },
  },
});

export const { setActiveMenuItem } = activeMenuSlice.actions;
export default activeMenuSlice.reducer;
