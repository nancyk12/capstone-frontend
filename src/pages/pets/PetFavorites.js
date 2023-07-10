// PetFavorites.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function PetFavorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get("http://localhost:5005/favorites");
        setFavorites(response.data.favorites);
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };

    fetchFavorites();
  }, []);

  const removeFromFavorites = async (animalId) => {
    try {
      await axios.delete(`http://localhost:5005/favorites/${animalId}`);
      setFavorites((prevFavorites) =>
        prevFavorites.filter((favorite) => favorite.id !== animalId)
      );
    } catch (error) {
      console.error("Error removing from favorites:", error);
    }
  };

  return (
    <div>
      <h1>My Favorites</h1>

      {favorites.length > 0 ? (
        <div className="pet-list-container">
          <div className="pet-list">
            {favorites.map((favorite) => (
              <div key={favorite.id} className="pet-tile">
                <Link to={`/pets/${favorite.id}`}>
                  <div className="pet-tile-img">
                    {favorite.primary_photo_cropped ? (
                      <img
                        style={{ width: "300px", height: "300px" }}
                        src={favorite.primary_photo_cropped.full}
                        alt="pet"
                      />
                    ) : (
                      <img
                        style={{ width: "300px", height: "300px" }}
                        src="images/pet-photo-shoot.jpeg"
                        alt="pet"
                      />
                    )}
                  </div>

                  <div className="pet-info">
                    <h3>{favorite.name.substring(0, 25)}</h3>
                    <span>
                      {favorite.age} • {favorite.gender} •{" "}
                      {favorite.breeds.primary.substring(0, 25)}
                    </span>
                    <br />
                    <span>
                      {favorite.contact.address.city},{" "}
                      {favorite.contact.address.state}
                    </span>
                    <br />
                    <br />
                    <i className={`pet-type ${favorite.type} selected`}>
                      {favorite.type}
                    </i>
                  </div>
                </Link>

                <button onClick={() => removeFromFavorites(favorite.id)}>
                  Remove from Favorites
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>No favorites found.</p>
      )}

      <Link to="/pets">Back to Pets</Link>
    </div>
  );
}

export default PetFavorites;