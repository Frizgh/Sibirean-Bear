import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './counterSlice'
import drinksReducer from './drinksSlice'

export const store = configureStore({
  reducer: {
    counterDrinks: counterReducer,
    drinks: drinksReducer,
  },
})
