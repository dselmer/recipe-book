import { createSlice } from '@reduxjs/toolkit'

export const recipeBookSlice = createSlice({
  name:"recipeBook",
  initialState: {
    recpieList :[
      {
        mainIngredient: 'jalapeno',
        id:null,
        nameOfDish:'jalapeno poppers',
        isFavorite: false,
        img:'../../public/assests/air-fryer-jalapeno-poppers-3-1200x800-1-1024x683.jpg'

      },
      {
        mainIngredient: 'Pork',
        id:null,
        nameOfDish:'Pork Belly',
        isFavorite: false,
        img:'../../public/assests/Pork _Belly_ramen.jpeg'

      },
      {
        mainIngredient: 'chicken',
        id:null,
        nameOfDish:'Jerk Chicken',
        isFavorite: false,
        img:'../../public/assests/jerk_chicken.jpeg'
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