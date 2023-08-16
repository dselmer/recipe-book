import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import '../App.css'

function CardComponent() {
  return (
    <>
      <div className="card-parent-container">
        <div className="recipe-label">
          <h3>roast</h3>
        </div>
        <Card sx={{ maxWidth: 345  }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button  size="small">Share</Button>
            <Button className="btn-2" sx={{ maxWidth: 345 ,  backgroundColor:'#00bfff' ,color:"azure" }}  size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
}

export default CardComponent;
