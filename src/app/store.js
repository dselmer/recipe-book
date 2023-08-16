import { configureStore } from '@reduxjs/toolkit'
import recipeBookSliceReducer from '../features/reccipeBookSlice'

export default configureStore({
  reducer: {
    recipeBook:recipeBookSliceReducer
  }
})