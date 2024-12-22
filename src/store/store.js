import { configureStore } from '@reduxjs/toolkit'

import drinksReducer from './drinksSlice'

export const store = configureStore({
  reducer: {
    drinks: drinksReducer,
  },
})
