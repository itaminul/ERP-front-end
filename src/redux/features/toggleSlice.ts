import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'

// Define a type for the slice state
interface CounterState {
  value: boolean
}

// Define the initial state using that type
const initialState: CounterState = {
  value: false,
} as CounterState

export const toggleSlice = createSlice({
  name: 'toggle',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    show: (state) => {
      state.value = false
    },
    close: (state) => {
      state.value = true
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<any>) => {
      state.value = action.payload
    },
  },
})

export const { show, close, incrementByAmount } = toggleSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default toggleSlice.reducer