import { Autocomplete } from "@mui/material";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import { PiSelectionBackground } from "react-icons/pi";
function SearchBar() {
  return (
    <>
    <div className="searchbar-flex-container">
      <div className=" search-bar-container">
        <h1>Search Recipes With Recipe <span>Book</span> ...</h1>
        <TextField
          id="standard-basic"
          label="Search Recipes"
          variant="filled"
          sx={{ width: "100%", Autocomplete:'disabled' ,Backgroundcolor: ' #f5f5f5' }} 
        />
       
      </div>
    </div>
    
   
    


    </>
  );
}

export default SearchBar;
