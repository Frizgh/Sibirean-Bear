// store/drinksSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchDrinks = createAsyncThunk('drinks/fetchDrinks', async () => {
  const response = await fetch(
    'https://67457811512ddbd807f822d1.mockapi.io/coffe/api/v1/Drinks'
  )
  if (!response.ok) {
    throw new Error('Failed to fetch drinks')
  }
  return response.json()
})

const drinksSlice = createSlice({
  name: 'drinks',
  initialState: {
    drinks: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDrinks.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchDrinks.fulfilled, (state, action) => {
        state.loading = false
        state.drinks = action.payload
        console.log(state.drinks)
      })
      .addCase(fetchDrinks.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export const selectDrinks = (state) => state.drinks.drinks
export const selectLoading = (state) => state.drinks.loading
export const selectError = (state) => state.drinks.error

export default drinksSlice.reducer
