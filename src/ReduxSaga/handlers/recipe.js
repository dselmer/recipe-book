import {call,put} from 'redux-saga/effects'
import { requestRecipe } from '../request/recipe'
import {addRecipe} from '../../reducers/reccipeBookSlice'

export function* handleGetRecipes(action){
try {
    const response = yield call(requestRecipe)
    const {data} = response;
    console.log(data)
    // yield put(addRecipe({mainIngredient:data.mainIngredient,id:data.id,nameOfDish:data.nameOfDish,isFavorit:data.isFavorit,src:data.src}))
    yield put(addRecipe({...data}))
} catch (error) {
    console.log(error)
    
}
}