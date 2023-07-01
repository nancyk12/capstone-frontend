
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Client } from "@petfinder/petfinder-js";
import axios from "axios";

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [favoritePets, setFavoritePets] = useState([]);
  const location = useLocation();
  const url = "http://localhost:5005";

  useEffect(() => {
    // Parse the query parameter from the location object
    const params = new URLSearchParams(location.search);
    const animalId = params.get("animalId");

    if (animalId) {
      // Add the new favorite to the existing list
      setFavorites((prevFavorites) => [...prevFavorites, animalId]);
    }
  }, [location.search]);

  useEffect(() => {
    // Fetch information about the favorite pets
    const client = new Client({
      apiKey: process.env.REACT_APP_API_KEY,
      secret: process.env.REACT_APP_SECRET_KEY,
    });

    const fetchFavoritePets = async () => {
      const favoritePetData = await Promise.all(
        favorites.map((animalId) => client.animal.show(animalId))
      );

      setFavoritePets(favoritePetData.map((resp) => resp.data.animal));
    };

    fetchFavoritePets();
  }, [favorites]);

  const handleDelete = (animalId) => {
    // Remove the favorite pet from the list
    setFavorites((prevFavorites) => prevFavorites.filter((id) => id !== animalId));
    setFavoritePets((prevFavoritePets) => prevFavoritePets.filter((pet) => pet.id !== animalId));
  }

  return (
    <div>
      <h1 className="favorites-h1">Favorites</h1>
      {favoritePets.length > 0 ? (
        <div className="blog-list">
          {favoritePets.map((pet) => (
            <div key={pet.id}>
              <section>	
		<div div className="favorites-single-layout-container">
		  <div className="favorites-single"> 
		 
		   <div className="favorites-single-img">
                         {pet.image !== null ?
                         <img 
                        style={{ width: "300px", radius:"5px",}}
                        src={pet.primary_photo_cropped?.full} alt={pet.name}/> 
                        : 
                        <img style={{ width: "300px", height: "300px" }} src="images/pet-photo-shoot.jpeg" alt="blog"/>}
                      </div>  
			<div className="blog-info">
				<h3>{pet.name}</h3>
				<p><b>Age: </b>{pet.age}</p>
				<p><b>Breeds: </b>{pet.breeds.primary}</p>
				<p><b>Gender: </b>{pet.gender}</p>
        <p>
           <b>Location: </b>{pet.contact.address.city}, {pet.contact.address.state}
        </p>
				<button onClick={() => handleDelete(pet.id)}>Delete</button>
        <Link to={`/pets/${pet.id}`}>
                  <button>View Details</button>
        </Link>
			</div>	
		  </div>		
		</div>
	  </section>
              
            </div>
          ))}
        </div>
      ) : (
        <p>No favorites selected.</p>
      )}
    </div>
  );
}

export default Favorites;

// import React from "react";
// import { Link, useParams } from "react-router-dom"
// import {useEffect} from "react";
// import { Client } from "@petfinder/petfinder-js";

// //import React, { useContext } from "react";
// //import { ShopContext } from "../../assess/shop-assess";
// export const favorites = (props) => {
//   const { id, name, type, breeds, image } = props.data;
//   const { favoritesItems, addToFavorites, removeFromFavorites, updateCartItemCount } =
//     useContext(ShopContext);
//   return (
//     <div className="cartInventory">
//       <img src={productImage} />
//       <div className="item-description">
//         <p>
//           <b>{productName}</b>
//         </p>
//         <p> Price: ${price}</p>
//         <div className="countHandler">
//           <button onClick={() => removeFromCart(id)}> - </button>
//           <input
//             value={cartItems[id]}
//             onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
//           />
//           <button onClick={() => addToCart(id)}> + </button>
//         </div>
//       </div>
//     </div>
//   );
// };