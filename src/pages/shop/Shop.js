import React, {  useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import products from './products.json';
import ShoppingCart from './ShoppingCart';
import { CartContext } from './CartContext';
//import { productsLoader } from './products';

export default function Shop() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  // Shopping cart state
  const [cart, setCart] = useState([]);


  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);
  };

  const handleSearchClick = () => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleResetClick = () => {
    setSearchTerm('');
    setFilteredProducts(products);
  };

    /* websites for the pet product photos
  1.  https://www.walmart.com/ip/TCBOYING-Breakaway-Cat-Collar-with-Bell-Mixed-Colors-Reflective-Cat-Collars-Ideal-Size-Pet-Collars-for-Cats-or-Small-Dogs/2638140495
  2. https://www.chewy.com/chais-choice-premium-outdoor/dp/135771?utm_source=google-product&utm_medium=cpc&utm_campaign=20027453190&utm_content=Chai%27s%20Choice&utm_term=&gclid=Cj0KCQjwj_ajBhCqARIsAA37s0zJ3ZjpSxDTcqe2f4nvTpZxURuf5VxQxlk3dwaR7u3gttO2Y_U7f90aAlAtEALw_wcB
  3.https://www.chewy.com/prevue-pet-products-soho-wave-top/dp/359359?utm_source=google-product&utm_medium=cpc&utm_campaign=12685893491&utm_content=Prevue%20Pet%20Products&utm_term=&gclid=Cj0KCQjwj_ajBhCqARIsAA37s0wcLlIx-TT4MFPvcg1WG1cVodJFMp6oXMgFGiYoAiq5YxWK9O5mcmQaAvGAEALw_wcB
  4.https://www.chewy.com/koller-products-smart-tank-fish/dp/314387?utm_source=google-product&utm_medium=cpc&utm_campaign=12700039114&utm_content=Koller%20Products&utm_term=&gclid=Cj0KCQjwj_ajBhCqARIsAA37s0x1wFJxI5bTslGEkfiMz2woqBstfB3NY9MFnReck8vex6oA63bzfrsaAsDjEALw_wcB
  5.https://www.petsmart.com/small-pet/litter-and-bedding/litter-and-bedding/carefresh-special-edition-small-pet-bedding---tutti-frutti-5278506.html?gclsrc=aw.ds&gclid=Cj0KCQjwj_ajBhCqARIsAA37s0y3gBXrQA_eokVDKZp5Jl1pfTEUDcJSXPt3-dB8O11iNKKPQJ8hykIaAvD4EALw_wcB
  6. https://www.chewy.com/zoo-med-repti-deep-dome-lamp/dp/190107?utm_source=google-product&utm_medium=cpc&utm_campaign=18806583589&utm_content=Zoo%20Med&utm_term=&gclid=Cj0KCQjwj_ajBhCqARIsAA37s0zu8K3v8jx9F1rZPiWIcE3rGH6RdWfAxGrho3zeR-lwzrYVjlVJzaQaAqnIEALw_wcB
  */

   
    // Function to add the product to the cart
  // const addToCart = (product) => {
  //   setCart([...cart, product]);
  // };

  const { addToCart } = useContext(CartContext);
    
  


  return (
   <div className='store-main-container'>
    <h1>The Pet Supply Store</h1>
    <div className="store-search-bar">
    <input type="text" placeholder="Search..." value={searchTerm} onChange={handleSearch} />
        <button className="store-search-button" onClick={handleSearchClick}>Search</button>
        <button className="store-search-reset-button" onClick={handleResetClick}>Reset</button>
      </div>

    
      <div className="store-container">
      <div className="item-card-container">
        {filteredProducts.map((product) => (
          <div className="item-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <Link to={`/product/${product.id}`}>More Info</Link>
            <button onClick={() => addToCart(product)}>Add to Cart</button> 
            
          </div>
        ))}
      </div>
    </div>
      <Link to="/cart">Go to Cart</Link>
      <br/>
      <ShoppingCart cartItems={cart} />
    </div>  
  );
};

//export default Store;