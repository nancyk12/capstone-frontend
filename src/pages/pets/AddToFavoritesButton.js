import React, { useState } from "react";
import axios from "axios";

const AddToFavoritesButton = ({ petId }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const url = "http://localhost:5005";

  const handleAddToFavorites = async () => {
    try {
      await axios.post(`${url}/favorites/addFavorite`, { petId });
      setIsFavorite(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button className="link-button" onClick={handleAddToFavorites}>
      {isFavorite ? "Added to Favorites!" : "Add to Favorites"}
    </button>
  );
};

export default AddToFavoritesButton;