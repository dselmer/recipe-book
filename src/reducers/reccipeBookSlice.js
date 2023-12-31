import { createSlice } from "@reduxjs/toolkit";

export const recipeBookSlice = createSlice({
  name: "recipeBook",
  initialState: {
    recipeList: [
      {
        mainIngredient: "jalapeno",
        id: 1,
        nameOfDish: "jalapeno poppers",
        isFavorite: false,
        src:'./assests/resources/air-fryer-jalapeno-poppers-3-1200x800-1-1024x683.jpg',

      },
      {
        mainIngredient: "Pork",
        id: 2,
        nameOfDish: "Pork Belly",
        isFavorite: false,
        src:'./assests/resources/Pork _Belly_ramen.jpeg'

      },
      {
        mainIngredient: "chicken",
        id: 3,
        nameOfDish: "Jerk Chicken",
        isFavorite: false,
       src:'./assests/resources/jerkchicken_1.jpeg'
      }
    ]
  },
  reducers: {
    addRecipe: function(state,action){
     return {...state,recipeList:[...state.recipeList,...action.payload]}
    }
     
   }
 })
 
 export const { addRecipe} = recipeBookSlice.actions
 
 export const  selectMainIngredient = (state) =>{return state.mainIngredient};
 export const selectRecipeList= (state)=>{return state.recipeList};
 
 export default recipeBookSlice.reducer