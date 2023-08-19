import { takeLatest } from 'redux-saga/effects'
import {handleGetRecipes } from './handlers/recipe'
import {addRecipe} from '../reducers/reccipeBookSlice'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
export function* watcherSaga(action) {
 yield takeLatest(addRecipe.type,handleGetRecipes)
}


