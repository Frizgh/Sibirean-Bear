import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counterDrinks',
  initialState: {},
  reducers: {
    increment: (state, action) => {
      const { id } = action.payload
      if (!state[id]) {
        state[id] = { counter: 0 }
      }
      state[id].counter += 1
    },
    decrement: (state, action) => {
      const { id } = action.payload
      if (!state[id]) {
        state[id] = { counter: 0 }
      }
      if (state[id].counter > 0) {
        state[id].counter -= 1
      }
    },
    setPrice: (state, action) => {
      const { id, price } = action.payload
      if (!state[id]) {
        state[id] = { counter: 0 }
      }
      state[id].price = price
    },
  },
})

export const { increment, decrement, setPrice } = counterSlice.actions
export default counterSlice.reducer
