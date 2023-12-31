import { Autocomplete } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { PiSelectionBackground } from "react-icons/pi";
function SearchBar() {
  return (
    <>
      <div className="searchbar-flex-container">
        <div className=" search-bar-container">
          <h1>
            Search Recipes With Recipe <span className="special-span" >Book</span> ...
          </h1>
          <div className="circle-dots-flex-container">
            <div className="circle-dots"></div>
            <div className="circle-dots"></div>
            <div className="circle-dots"></div>
          </div>
          <TextField
            id="standard-basic"
            label="Search Recipes"
            variant="filled"
            sx={{ width: "100%", Autocomplete: "disabled" ,backgroundColor:'azure' }}
          />
        </div>
      </div>
    </>
  );
}

export default SearchBar;
