// Pets.js
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Client } from '@petfinder/petfinder-js';
import { useSelector, useDispatch } from 'react-redux';
import { addToFavorites } from '../../redux/favoritesSlice';
import Axios from '../../lib/Axios';
import HeartIconClick from '../../components/HeartIconClick';



function Pets() {
  const dispatch = useDispatch();
  const favoritesItems = useSelector((state) => state.favorites);
  const [animals, setAnimals] = useState([]);
	const [selected, setSelected] = useState("");
	const [zipcode, setZipcode] = useState();
	const [inputField, setInputField] = useState("");

	//useEffect: first argument , takes in anonymous callback function, secont argument, dependency array 
	useEffect(() => {
		//new Client does a fetch call to the petfinder API for authorization
		const client = new Client({
			apiKey: process.env.REACT_APP_API_KEY,
			secret: process.env.REACT_APP_SECRET_KEY,
		});
		const fetchAnimalData = async () => {
			//once authorized, you can do fetch call for animal information
			const animalData = await client.animal.search({
				type: selected,
				location: zipcode,
			});
			setAnimals(animalData.data.animals);
		};
		fetchAnimalData();
	}, [zipcode, selected]);

	const handleSelectChange = (e) => {
		setSelected(e.target.value);
	};
	const handleZipCodeChange = (e) => {
		setInputField(e.target.value);
	};
	const handleSubmit = () => {
		setZipcode(inputField);
	};

  //Add to Favorites
  const handleSaveToFavorites = (animal) => {
    dispatch(addToFavorites(animal));
  
  // const handleAddToFavorites = (animal) => {
  //   dispatch(addToFavorites(animal));

    Axios.post('/favorites/add-to-favorites', { animal })
    .then((response) => {
      console.log('Animal added to favorites:', response.data);
    })
    .catch((error) => {
      console.error('Error adding animal to favorites:', error);
    });
  };

  // const totalQuantity = favoritesItems.reduce((total, item) => total + item.quantity, 0);
  

	return (
		<div className="pets-page-container">
			<h1>Pets</h1>

         <div className="form-container">
            <div className="form-group">
              <label className="form-label" htmlFor="query">Select Pet Type</label>
                <select className="form-group-input" value={selected} onChange={handleSelectChange}>
                    <option>Select Pet Type</option>
                    <option value="Dog"> Dogs</option>
                    <option value="Cat"> Cats</option>
                    <option value="Bird"> Birds</option>
                    <option value="Rabbit"> Rabbits</option>
                    <option value="Guinea_Pig"> Guinea Pigs</option>
                    <option value="Barnyard"> Others</option>
                </select>
                </div>

				<br/>
            <div className="form-group">  
                <label className="form-label" htmlFor="query">ZIP Code</label>
                <input className="form-group-input" type="text" name="query"
               
                    value={inputField}
                    placeholder="Zipcode, i.e. 90210"
                    onChange={handleZipCodeChange}
                />
            </div> 
              <div className="form.group"> 
              <label className="form-label">&#128054;</label>
                <button className="search-button" onClick={handleSubmit}>Search </button>
              </div>     
			</div>


			<div className="pet-list-container">
            <h1>Explore our adoptable pets!</h1>  
			  <div className="pet-list">
				{animals.length > 0 &&
				animals.map((animal) => {
					return (
           <div className="pet-tile">  
					  <div className="pet-tile" key={animal.id} >	

             <Link to={`/pets/${animal.id}`}>
               <div className="pet-tile-img">
                {animal.primary_photo_cropped !== null ?
                <img
                  style={{ width: "300px", height: "300px" }}
                  src={animal.primary_photo_cropped.full} alt="pet"/> 
                  : 
                  <img style={{ width: "300px", height: "300px" }} src="images/pet-photo-shoot.jpeg" alt="pet"/>}
               </div> 

               <div className="pet-info">

                {/* <h2>{animal.name.substring(0, 25)}</h2>  */}
                <h3>
                  {animal.name.substring(0, 20)} 
                  <span className={`pet-type ${ animal.type} selected`}>{animal.type}</span>
                </h3>
                <span>{animal.age}  •  {animal.gender}  •  {animal.breeds.primary.substring(0, 25)}</span>
                <br/>
                <span>{animal.contact.address.city}, {animal.contact.address.state}</span>
                {/* <br/> */}
                {/* <i className={`pet-type ${animal.type} selected`}>{animal.type}</i> */}
               </div>
               <div>
              {/* <button onClick={handleSaveToFavorites}>
                Add {animal.name.substring(0, 20)} to favorites
              </button> */}
            </div>
             </Link>
              {/* <HeartIconClick
                onClick={() => handleAddToFavorites(animal)}
              /> */}
            </div> 
          </div>
				);
			 })	}
			</div>
		</div>
      <br/>
      {/* <Link to="/favorites">Go to Favorites</Link> */}
	</div>
	)				
}
  
export default Pets;