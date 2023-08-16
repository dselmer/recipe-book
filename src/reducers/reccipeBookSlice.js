import { createSlice } from '@reduxjs/toolkit'

export const recipeBookSlice = createSlice({
  name:"recipeBook",
  initialState: {
    mainIngredient:'tofu',
  },
  reducers: {
    
  }
})

export const { increment, decrement, incrementByAmount } = recipeBookSlice.actions

export const  selectMainIngredient = (state) =>{return state.mainIngredient};

export default recipeBookSlice.reducer