import React, { useState, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from '../../redux/productSlice';
import { Link } from 'react-router-dom';
import './ShoppingCart.css';

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart)
    const dispatch = useDispatch(); 
  
  const handleRemoveFromCart = (productId) => {
    dispatch(incrementQuantity(productId));
  };

  const handleIncrementQuantity = (productId) => {
    dispatch(incrementQuantity(productId));
  };

  const handleDecrementQuantitiy = (productId) => {
    dispatch(decrementQuantity(productId));
  };

  return (
    <div className="shopping-cart-container">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : ( 
      <>  
      <div className="shopping-cart-items-container">  
        {cartItems.map((product) => (
          <div className="shopping-cart-items-card" key={product.id}>
            <img 
              src={product.image} 
              alt={product.name} 
              className="shopping-cart-item-image" 
              />
            <div className="shopping-cart-item-details">
              {/* <Link to={`/product/${product.id}`}> */}
                <h3 className="shopping-cart-item-name">{product.name }</h3> {/*</Link>*/}
                <p className="shopping-cart-item-price"> 
                ${product.price.toFixed(2)}
                </p>
                
                <div className="shopping-cart-item-quantity">
                  <button 
                    className="quanity-button" 
                    onClick={() => handleDecrementQuantitiy(product.id)}
                    >
                      -
                    </button>
                  <span className="quantity">{product.quantity}</span>
                  <button 
                    className="quanity-button"
                    onClick={() => handleIncrementQuantity(product)}
                  >
                    +
                  </button>
                </div>
                <button 
                  className="remove-from-cart-button"
                  onClick={() => handleRemoveFromCart(product.id)}
                  >
                    Remove from Cart
                  </button>
            </div>
          </div>
        ))}
      </div>
  </>
      )}
      <Link to="/store">Continue Shopping</Link>
    </div>
  );
};

export default ShoppingCart;



