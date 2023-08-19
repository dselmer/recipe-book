import SearchBar from "./components/SearchBar";
import NavBar from "./components/NavBar";
import RecipeList from "./components/RecipeList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {addRecipe} from './reducers/reccipeBookSlice'
import "./App.css";

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
dispatch(addRecipe)
  },[dispatch])
  return (
    <div>
      <NavBar/>
      <SearchBar />
      <RecipeList/>
    </div>
  );
}

export default App;
