import { createSlice } from '@reduxjs/toolkit'

export const recipeBookSlice = createSlice({
  name:"recipeBook",
  initialState: {
    mainIngredient : 'steak'
  },
  reducers: {
    
  }
})

export const { increment, decrement, incrementByAmount } = recipeBookSlice.actions

export const  selectMainIngredient = (state) => state.recipeBook.mainIngredient;

export default recipeBookSlice.reducer