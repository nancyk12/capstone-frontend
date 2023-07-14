import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Checkbox from "@mui/material/Checkbox";

function HeartIconClick() {
   return (
      <div style = {{
          padding: "10px"
      }}>
        
         {/* showing different icons according to whether the checkbox is checked.   */}
         <FormControlLabel
            control = {
               <Checkbox
                  icon = {<FavoriteBorderIcon />}
                  checkedIcon = {<FavoriteIcon style = {{
                     color: "red",
                  }}
                  />}
               />
            }
            label = "Add to Favorites"
         />
      </div>
   );
};

export default HeartIconClick;