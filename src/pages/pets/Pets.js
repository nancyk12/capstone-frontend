import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { Client } from "@petfinder/petfinder-js";
//import Cards from "../../components/Cards";
//import "../../App.css";


function Pets() {
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
	return (
		<div className="App">
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
					  <div key={animal.id} className="pet-tile">	

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

                        <h3>{animal.name.substring(0, 25)}</h3>  


                        <span>{animal.age}  •  {animal.gender}  •  {animal.breeds.primary.substring(0, 25)}</span>
                       <br/>
                        <span>{animal.contact.address.city}, {animal.contact.address.state}</span>
                        <br/>
                        <br/>
                        <i className={`pet-type ${animal.type} selected`}>{animal.type}</i>
                      </div>
                     <br/>
                      {/* <i className={`pet-type ${animal.type} selected`}>{animal.type}</i> */}

                       </Link>
                       
                       </div>  
                      </div>
					  
						);
					})	}
			</div>
			</div>
					 
	</div>
	)				
}
  
export default Pets;

    /*
[
    {
        "index": 0,
        "age": "baby",
        "attributes": "{spayed_neutered: true, house_trained: false, declawed: null, special_needs: false, shots_current: true}",
        "breeds": "{primary: 'Black Labrador Retriever', secondary: null, mixed: true, unknown: false}",
        "colors": "{primary: null, secondary: null, tertiary: null}",
        "contact": "{
            address: "",
            address1: PO Box 623341,
            address2: null,
            city: Oviedo,
            country: US,
            postcode: 32762,
            state: FL,
            [[Prototype]]: Object,
            email: Savealifepetres@aol.com,   
            phone: (407) 952-103,
        }",
        "[[Prototype]]": "Object",
        "description": "This pet will be available for adoption this Saturday and Sunday.\n*Pets cannot be adopted prior to Saturdays adoption event*...",
        "distance": null,
        "environment": "{children: true, dogs: true, cats: null}",
        "gender": "Male",
        "id": 62678984,
        "name": " Homer",
        "organization_animal_id": null,
        "organization_id": "FL668",
        "photos": [{…}],
        "primary_photo_cropped": "{small: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/62678984/1/?bust=1681521580&width=300', medium: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/62678984/1/?bust=1681521580&width=450', large: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/62678984/1/?bust=1681521580&width=600', full: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/62678984/1/?bust=1681521580'}",
"published_at": 
"2023-04-15T01:19:41+0000",
"size": "Large",
"species": "Dog",
"status": "adoptable",
"status_changed_at": "2023-04-15T01:19:42+0000",
"tags": [],
"type": "Dog",
"url": "https://www.petfinder.com/dog/homer-62678984/fl/oviedo/save-a-life-pet-rescue-fl668/?referrer_id=18d850a8-65b7-4e9e-a8cd-7b6ee83383fc",
"videos": [],
"_links": {
    "organization": "{href: '/v2/organizations/fl668'}",
    "self": "{href: '/v2/animals/62678984'}",
    "type": "{href: '/v2/types/dog'}",
    "[[Prototype]]": "Object",
},
"[[Prototype]]": "Object",
*/