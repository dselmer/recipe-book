import TextField from "@mui/material/TextField";
import { PiBookOpenFill } from "react-icons/pi";
function NavBar() {
  return (
    <div className="NavBar-flex-contontainer">
        <span className=" special-span  logo-span">
        <PiBookOpenFill />
      </span>
      <h2>
   
        Recipe <span className=" special-span ">Book</span>{" "}
      </h2>
      <ul>
        <li>Home</li>
        <li>Recipes</li>
        <li>Favorites</li>
      </ul>
    </div>
  );
}

export default NavBar;
