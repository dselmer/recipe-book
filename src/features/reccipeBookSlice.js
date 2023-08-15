import { createSlice } from '@reduxjs/toolkit'

export const recipeBookSlice = createSlice({
  name: 'recipe',
  initialState: {
    value: 0
  },
  reducers: {
    
  }
})

export const { increment, decrement, incrementByAmount } = recipeBookSlice.actions

export default recipeBookSlice.reducer