import SearchBar from "./components/SearchBar";
import NavBar from "./components/NavBar";
import RecipeList from "./components/RecipeList";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar/>
      <SearchBar />
      <RecipeList/>
    </div>
  );
}

export default App;
