import CardComponent from "./CardComponent";

function RecipeList() {
    return (
      <>
        <div className="RecipeList-container">
          <div className=" RecipeList-flex-container">
            <h1>
         Recipe List
            </h1>
            <div className="flex-parent-card">
         <CardComponent/>
         <CardComponent/>
    
        </div>
         
          </div>
        </div>
      </>
    );
  }
  
  export default RecipeList;
  