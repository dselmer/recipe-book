import TextField from "@mui/material/TextField";
function NavBar() {
  return (
    <div className="NavBar-flex-contontainer">
      <h2>Recipe <span>Book</span> </h2>
      <ul>
        <li>Home</li>
        <li>Recipes</li>
        <li>Favorites</li>
      </ul>
    </div>
  );
}

export default NavBar;
