import { createSlice } from '@reduxjs/toolkit'

export const recipeBookSlice = createSlice({
  name:"recipeBook",
  initialState: {
    recipeList:[
      {
        mainIngredient: 'jalapeno',
        id:null,
        nameOfDish:'jalapeno poppers',
        isFavorite: false,
        src:'../asset/resources/air-fryer-jalapeno-poppers-3-1200x800-1-1024x683.jpg',

      },
      {
        mainIngredient: 'Pork',
        id:null,
        nameOfDish:'Pork Belly',
        isFavorite: false,
        src:''

      },
      {
        mainIngredient: 'chicken',
        id:null,
        nameOfDish:'Jerk Chicken',
        isFavorite: false,
       src:'../pics/images.jpeg'
      }
    ]
  },
  reducers: {
   
    
  }
})

export const { increment, decrement, incrementByAmount } = recipeBookSlice.actions

export const  selectMainIngredient = (state) =>{return state.mainIngredient};
export const selectRecipeList= (state)=>{return state.recipeList};

export default recipeBookSlice.reducer