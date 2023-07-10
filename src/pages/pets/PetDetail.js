// PetDetail.js

import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Client } from '@petfinder/petfinder-js';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToFavorites } from '../../redux/favoritesSlice';

function PetDetail({ pet }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [animal, setAnimal] = useState(null);

  useEffect(() => {
    const client = new Client({
      apiKey: process.env.REACT_APP_API_KEY,
      secret: process.env.REACT_APP_SECRET_KEY,
    });

    const fetchAnimalData = async () => {
      const response = await client.animal.show(id);
      setAnimal(response.data.animal);
    };

    fetchAnimalData();
  }, [id]);

  const handleSaveToFavorites = () => {
    dispatch(addToFavorites(animal));
  };

  const handleAdopt = () => {
    window.open(animal.url, '_blank');
  };

  return (
    <>
      <div>
        {animal ? (
          <div>
            <div>
              {animal.primary_photo_cropped !== null ? (
                <img
                  style={{ width: '600px' }}
                  src={animal.primary_photo_cropped.full}
                  alt=""
                />
              ) : (
                <img
                  style={{ width: '300px' }}
                  src="images/pet-photo-shoot.jpeg"
                  alt=""
                />
              )}
            </div>

            <i className={`pet-breeds ${animal.type} selected`}>
              {animal.type}
            </i>
            <h2>
              <b>{animal.name}</b>
            </h2>

           <ul className="list-group">
              <li className="list-group-item">
                <b>Age: </b>
                {animal.age}
              </li>
              <li className="list-group-item">
                <b>Gender: </b>
                {animal.gender}
              </li>
              <li className="list-group-item">
                <b>Primary Breed: </b>
                {animal.breeds.primary}
              </li>
              <li className="list-group-item">
                <b>Location: </b>
                {animal.contact.address.city}, {animal.contact.address.state}
              </li>
            </ul>

            <h4>
              <b>{animal.name}'s Description</b>
            </h4>
            <p>{animal.description}</p>

            <h4>
              <b>{animal.name}'s Attributes</b>
            </h4>
            <ul className="list-group">
              <li className="list-group-item">
                <b>Declawed: </b>
                {animal.attributes.declawed ? 'Yes' : 'No'}
              </li>
              <li className="list-group-item">
                <b>House Trained: </b>
                {animal.attributes.house_trained ? 'Yes' : 'No'}
              </li>
              <li className="list-group-item">
                <b>Shots Current: </b>
                {animal.attributes.shots_current ? 'Yes' : 'No'}
              </li>
              <li className="list-group-item">
                <b>Spayed/Neutered: </b>
                {animal.attributes.spayed_neutered ? 'Yes' : 'No'}
              </li>
              <li className="list-group-item">
                <b>Special Needs: </b>
                {animal.attributes.special_needs ? 'Yes' : 'No'}
              </li>
            </ul>

            <div>
              <button onClick={handleAdopt}>Adopt {animal.name}</button>
            </div>

            <div>
              <button onClick={handleSaveToFavorites}>
                Add {animal.name} to favorites
              </button>
            </div>
          </div>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
      <div>
      
 
    <div className="pet-detail-container">
      {/* Component content */}
    </div>

       <Link to="/favorites">Go to Favorites</Link>
  


        <Link to="/pets">Back to Filtered Pets</Link>
      </div>
    </>
  );
}

export default PetDetail;





/**_----2nd Semester's PetDetail.js Code------------------------------------------------------------------------------------------------------------------ */
// import React from "react";
// import { Link, useParams } from "react-router-dom"
// import {useEffect} from "react";
// import { Client } from "@petfinder/petfinder-js";
// //import Favorites from "./Favorites"; // Import the Favorites component
// import axios from "axios";
// import AddToFavoritesButton from "./AddToFavoritesButton";

// function PetDetail({ pet }) {
//     const params = useParams()
//     const [animal, setAnimal] = React.useState(null)

//     useEffect(() => {
//         const client = new Client({
// 			apiKey: process.env.REACT_APP_API_KEY,
// 			secret: process.env.REACT_APP_SECRET_KEY,
// 		});
//         client.animal.show(params.id).then((resp) => {
//           setAnimal(resp.data.animal)
//        }); //setAnimal(data.animals))
//     }, [params.id]);

//     const addToFavorites = () => {
//       axios
//         .post('http://localhost:5005/favorites', {
//           animal: animal,
//         })
//         .then((response) => {
//           console.log('Pet added to favorites:', response.data);
//         })
//         .catch((error) => {
//           console.error('Error adding pet to favorites:', error);
//         });
//     };

//     return (
//       <>
       
//         <div className="pet-detail-container">
       
           
//            {/* <Link
//                to={`..${search}`}
//                relative="path"
//                className="back-button"
//            >&larr; <span>Back to {type} pets</span></Link> */}
//           <br/>
//          {animal ? (
//                <div className="pet-detail">
//                     <div /*className="pet-tile img"*/>
//                         {animal.primary_photo_cropped !== null ?
//                         <img
//                        style={{ width: "600px" }}
//                        src={animal.primary_photo_cropped.full} alt=""/> 
//                        : 
//                        <img style={{ width: "300px" }} src="images/pet-photo-shoot.jpeg" alt=""/>}
//                      </div> 
//                    <i className={`pet-breeds ${animal.type} selected`}>{animal.type}</i>
//                    <h2><b>{animal.name}</b></h2>

//                    <ul class="list-group">
//                       <li className="list-group-item"><b>Age: </b>{animal.age}</li>
//                       <li className="list-group-item"><b>Gender: </b>{animal.gender}</li>
//                       <li className="list-group-item"><b>Primary Breed: </b>{animal.breeds.primary}</li>
//                       <li className="list-group-item"><b>Location: </b>{animal.contact.address.city}, {animal.contact.address.state}</li>
//                     </ul>  

//                    <h4><b>{animal.name}'s Description</b></h4>  
//                    <p>{animal.description}</p>

//                    <h4><b>{animal.name}'s Attributes</b></h4>  
//                     <ul class="list-group">
//                       <li className="list-group-item"><b>Declawed: </b>{animal.attributes.declawed ? 'Yes' : 'No'}</li>
//                       <li className="list-group-item"><b>House Trained: </b>{animal.attributes.house_trained ? 'Yes' : 'No'}</li>
//                       <li className="list-group-item"><b>Shots Current: </b>{animal.attributes.shots_current ? 'Yes' : 'No'}</li>
//                       <li className="list-group-item"><b>Spayed/Neutered: </b>{animal.attributes.spayed_neutered ? 'Yes' : 'No'}</li>
//                       <li className="list-group-item"><b>Special Needs: </b>{animal.attributes.special_needs ? 'Yes' : 'No'}</li>
//                     </ul>  
                    
//                    <div>
//                      <a href={animal.url}>
//                       <button className="link-button">Adopt {animal.name}</button>
//                      </a>
//                     </div> 
//                    <br/>
                   
//                    <Link to={`/favorites?animalId=${animal.id}`}>
//                      <button className="link-button" onClick={addToFavorites}>Add {animal.name} to favorites</button>
//                    </Link>     
//                </div>
//            ) : (<h2>Loading...</h2>
//            )}
//        </div> 
      
//       </>
//  );
// }

// export default PetDetail;

/**_----1st Semester's Pet.js Code------------------------------------------------------------------------------------------------------------------ */

{/* <div class="card mb-3 shadow p-3 mb-5 mb-5">
   <div class="row g-0">
     <div class="col-md-4">
      <img  class="img-fluid rounded-start" id="image" src="${image}" alt="Animal Photo">
     </div>
      <div class="col-md-8">
        <div class="card-body">
        <h4 class="card-title fw-bold">${animal.name},  (${animal.age})</h4>
        <p class="text-secondary">${animal.breeds.primary}, (${animal.gender})</p>
        <p>${animal.contact.address.address1 ? `${animal.contact.address.address1}, `
        :``
      } ${animal.contact.address.city}, ${animal.contact.address.state} ${animal.contact.address.postcode}</p>
        <ul class="list-group">
        ${animal.contact.phone ?` <li class="list-group-item">Phone: ${animal.contact.phone}</li>` : `` }
       ${animal.contact.email ?`<li class="list-group-item">Email: ${animal.contact.email}</li>` : ``}
        <li class="list-group-item">Shelter ID: ${animal.organization_id}</li>
      </ul>
    </div>
     
     </div>
    </div> */}
    
    {/* <div class="accordion" id="chapters">
    <div class="accordion-item">
      <h2 class="accordion-header" id="heading-1">
      <button style="background-color:#aa6820 color: white" class="accordion-button btn btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-1" aria-expanded="false" aria-controls="chapter-1">Learn more about ${animal.name}.</button></h2>

        <div id="chapter-1" class="accordion-collapse collapse" aria-labelledby="heading-1" data-bs-parent="#chapters">
          <div class="accordion-body">
          <h4>${animal.name}'s Description</h4>    
          ${animal.description ?`<p>${animal.description}</p>` : `<p>${animal.name} is available for adoption.</p>`}

          <h4>${animal.name}'s Attributes</h4>  
            <ul class="list-group">
            <li class="list-group-item">Declawed: ${animal.attributes.declawed ? 'Yes' : 'No'}</li>
            <li class="list-group-item">House trained: ${animal.attributes.house_trained ? 'Yes' : 'No'}</li>
            <li class="list-group-item">Shots Current: ${animal.attributes.shots_current ? 'Yes' : 'No'}</li>
            <li class="list-group-item">Spayed/Neutered: ${animal.attributes.spayed_neutered ? 'Yes' : 'No'}</li>
            <li class="list-group-item">Special Needs: ${animal.attributes.special_needs ? 'Yes' : 'No'}</li>
            </ul>
            <a href="${animal.url}" target="_blank" rel="nopener noreferrer"><img src="assets/Adopt-Me-Button.png" id="adopt-me"></a>
          </div>
        </div>
      </div>  
    </div>  */}
    
  {/* </div> */}
