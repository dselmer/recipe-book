import TextField from "@mui/material/TextField";
function SearchBar() {
  return (
    <div className="searchbar-flex-container">
      <div className=" search-bar-container">
        <h1>Search Recipes With Recipe <span>Book</span> ...</h1>
        <TextField
          id="standard-basic"
          label="Search Recipes"
          variant="outlined"
          sx={{ width: "100%" }}
        />
      </div>
    </div>
  );
}

export default SearchBar;
