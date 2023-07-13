import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../redux/productSlice';
import Axios from '../../lib/Axios';
// import products from './products.json';
//import './ShopB.css';

function Shop() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await Axios.get('/products/all-products');
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  
  const handleSearch = () => {
    // Perform search based on searchQuery
    // You can customize this logic to suit your needs
    console.log('Searching for:', searchQuery);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  
  
  return (
    <div className="shop-container">
    <h1 className=".shop-container h1">The Pet Supply Store</h1>
    <div className="shop-search-bar" >
      <input 
        type="text" 
        placeholder="Search products"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
       <button className="search-button" onClick={handleSearch}>
         Search
       </button>
       {/* <button 
         className="search-button" 
         onClick={handleResetClick}
       > 
                Reset
       </button> */}
     </div>

      
      {/* <div className="search-bar">
        <input
          type="text"
          placeholder="Search products"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button> */}
      {/* </div> */}
      <div className="products-container">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product._id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <Link to={`/product/${product._id}`} className="product-link">
              View Details
            </Link>
            <button className="add-to-cart-button" onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div className="cart-container">
        <h2 className="cart-title">Cart</h2>
        <ul className="cart-items">
          {cartItems.map((item) => (
            <li key={item._id} className="cart-item">
              {item.name} - Quantity: {item.quantity}
            </li>
          ))}
        </ul>
        <p className="total-items">Total Items: {totalQuantity}</p>
        <p className="total-amount">Total: ${totalAmount.toFixed(2)}</p>
        <Link to="/cart" className="cart-link">Go to Cart</Link>
      </div>
    </div>
  );
}

export default Shop;

    /* websites for the pet product photos
  1.  https://www.walmart.com/ip/TCBOYING-Breakaway-Cat-Collar-with-Bell-Mixed-Colors-Reflective-Cat-Collars-Ideal-Size-Pet-Collars-for-Cats-or-Small-Dogs/2638140495
  2. https://www.chewy.com/chais-choice-premium-outdoor/dp/135771?utm_source=google-product&utm_medium=cpc&utm_campaign=20027453190&utm_content=Chai%27s%20Choice&utm_term=&gclid=Cj0KCQjwj_ajBhCqARIsAA37s0zJ3ZjpSxDTcqe2f4nvTpZxURuf5VxQxlk3dwaR7u3gttO2Y_U7f90aAlAtEALw_wcB
  3.https://www.chewy.com/prevue-pet-products-soho-wave-top/dp/359359?utm_source=google-product&utm_medium=cpc&utm_campaign=12685893491&utm_content=Prevue%20Pet%20Products&utm_term=&gclid=Cj0KCQjwj_ajBhCqARIsAA37s0wcLlIx-TT4MFPvcg1WG1cVodJFMp6oXMgFGiYoAiq5YxWK9O5mcmQaAvGAEALw_wcB
  4.https://www.chewy.com/koller-products-smart-tank-fish/dp/314387?utm_source=google-product&utm_medium=cpc&utm_campaign=12700039114&utm_content=Koller%20Products&utm_term=&gclid=Cj0KCQjwj_ajBhCqARIsAA37s0x1wFJxI5bTslGEkfiMz2woqBstfB3NY9MFnReck8vex6oA63bzfrsaAsDjEALw_wcB
  5.https://www.petsmart.com/small-pet/litter-and-bedding/litter-and-bedding/carefresh-special-edition-small-pet-bedding---tutti-frutti-5278506.html?gclsrc=aw.ds&gclid=Cj0KCQjwj_ajBhCqARIsAA37s0y3gBXrQA_eokVDKZp5Jl1pfTEUDcJSXPt3-dB8O11iNKKPQJ8hykIaAvD4EALw_wcB
  6. https://www.chewy.com/zoo-med-repti-deep-dome-lamp/dp/190107?utm_source=google-product&utm_medium=cpc&utm_campaign=18806583589&utm_content=Zoo%20Med&utm_term=&gclid=Cj0KCQjwj_ajBhCqARIsAA37s0zu8K3v8jx9F1rZPiWIcE3rGH6RdWfAxGrho3zeR-lwzrYVjlVJzaQaAqnIEALw_wcB
  */
