import { configureStore } from '@reduxjs/toolkit'
import recipeBookReducer from '../features/reccipeBookSlice'

export default configureStore({
  reducer: {
    recipeBook: recipeBookReducer
  }
})