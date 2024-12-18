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
    filteredDrinks: [],
    loading: false,
    error: null,
    categories: '',
    uniqCategories: [],
    syropMenus: {},
  },
  reducers: {
    selectCategories: (state, action) => {
      state.categories = action.payload
      state.filteredDrinks = state.drinks.filter(
        (drink) => drink.categories === state.categories
      )
    },
    syrupMenu: (state, action) => {
      const { id, isOpen } = action.payload
      state.syropMenus[id] = isOpen
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDrinks.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchDrinks.fulfilled, (state, action) => {
        state.loading = false
        state.drinks = action.payload
        state.uniqCategories = [
          ...new Set(action.payload.map((drink) => drink.categories)),
        ]
        if (state.categories) {
          state.filteredDrinks = action.payload.filter(
            (drink) => drink.categories === state.categories
          )
        } else {
          state.filteredDrinks = action.payload
        }
      })
      .addCase(fetchDrinks.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export const selectDrinks = (state) => state.drinks.filteredDrinks
export const selectLoading = (state) => state.drinks.loading
export const selectError = (state) => state.drinks.error
export const setUniqCategories = (state) => state.drinks.uniqCategories
export const selectSyrop = (state) => state.drinks.syropMenus

export const { selectCategories, syrupMenu } = drinksSlice.actions
export default drinksSlice.reducer
