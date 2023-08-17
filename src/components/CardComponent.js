import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { AiFillHeart } from "react-icons/ai";
import BasicModal from "./BasicModal";
import "../App.css";
import { hover } from "@testing-library/user-event/dist/hover";
import {
  selectMainIngredient,
  selectRecipeList,
} from "../reducers/reccipeBookSlice";
import { useSelector } from "react-redux";


import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function CardComponent() {

  const recipeList = useSelector(selectRecipeList);
  
  return (
    <>
        {recipeList.map((recipe)=>{return(
          console.log(recipe.src),
      <div className="card-parent-container">
        <div className="recipe-label">

        <h3>{recipe.mainIngredient}</h3>
        </div>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image =  {recipe.src}
            
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {recipe.nameOfDish}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <BasicModal />
          
            <Button
              className="btn-2"
              variant="contained"
              color="primary"
              size="small"
            >
              Recipe URL
            </Button>
            <AiFillHeart className="fave-icon" />
          </CardActions>
        </Card>
      </div>
      ) })}
    </>
  );
}

export default CardComponent;
