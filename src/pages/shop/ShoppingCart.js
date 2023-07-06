import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import './ShoppingCart.css';

const ShoppingCart = () => {
  const { cart, removeFromCart, incrementItem, decrementItem } = useContext(CartContext);

  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };
  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };
  
  const handleIncrementItem = (productId) => {
    incrementItem(productId);
  }

  const handleDecrementItem = (productId) => {
    decrementItem(productId);
  }

  return (
    <div className="shopping-cart-container">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : ( 
      <>  
      <div className="shopping-cart-items-container">  
        {cart.map((product) => (
          <div className="shopping-cart-items-card" key={product.id}>
            <img src={product.image} alt={product.name} className="shopping-cart-item-image" />
            <div className="shopping-cart-item-details">
              <Link to={`/product/${product.id}`}>
                 <h3 className="shopping-cart-item-name">{product.name }</h3></Link>
                <p className="shopping-cart-item-price"> ${product.price.toFixed(2)}</p>
                
                <div className="shopping-cart-quantity">
                  <button onClick={() => handleDecrementItem(product)}>-</button>
                  <span>{product.quantity}</span>
                  <button onClick={() => handleIncrementItem(product)}>+</button>
                </div>

                <button onClick={() => handleRemoveFromCart(product.id)}>Remove</button>

                <div className="shopping-cart-item-quantity">
                    <button
                      className="quantity-button"
                      onClick={() => decrementItem(product)}
                    >
                      -
                    </button>
                    <span className="quantity">{product.quantity}</span>
                    <button
                      className="quantity-button"
                      onClick={() => incrementItem(product)}
                    >
                      +
                    </button>
                  </div>
            </div>
          </div>
        ))}
      </div>
      <p className="total-quantity">
      Total Quantity: {getTotalQuantity()}
    </p>
  </>
      )}
      <Link to="/store">Continue Shopping</Link>
    </div>
  );
};

export default ShoppingCart;



