import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromCart,
  removeAllFromCart,
  incrementQuantity,
  decrementQuantity,
} from '../../redux/productSlice';
import './ShoppingCartB.css';
import { Link } from 'react-router-dom';
//import ShoppingCartIcon from '../components/ShoppingCartIcon';

function ShoppingCart() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleRemoveAllFromCart = () => {
    dispatch(removeAllFromCart());
  };

  const handleIncrementQuantity = (productId) => {
    dispatch(incrementQuantity(productId));
  };

  const handleDecrementQuantity = (productId) => {
    dispatch(decrementQuantity(productId));
  };

  // Calculate total quantity of items
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Calculate total amount
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );


  return (
    <div className="shopping-cart-container">
      <h2 className="shopping-cart-title">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <div className="cart-empty">
        <p>Your cart is currently empty.</p>
        <div className="start-shpping">
        <Link to="/shop">
          <span>⬅︎ Start Shopping</span>
        </Link>
        </div>
      </div>
      ) : (
      

        <div className="cart-items-container">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <Link to={`/product/${item._id}`} className="cart-item-name">
                  {item.name}
                </Link>
                <p className="cart-item-price">${item.price.toFixed(2)}</p>
                <div className="cart-item-quantity">
                  <button
                    className="quantity-button"
                    onClick={() => handleDecrementQuantity(item._id)}
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button
                    className="quantity-button"
                    onClick={() => handleIncrementQuantity(item._id)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="remove-from-cart-button"
                  onClick={() => handleRemoveFromCart(item._id)}
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          ))}
        <div className="cart-summary"> 
          <div className="total-items">
              <span className="total-items">Total Items: {totalQuantity}</span>
              <button className="cart-clear-all-button" onClick={handleRemoveAllFromCart}>Clear All</button>
          </div>
          <div className="cart-checkout">
            
            <div className="subtotal">
              
          
              <span>Subtotal</span>
              <p className="amount"> ${totalAmount.toFixed(2)}</p>
            </div>
            <p>Taxes and shipping calculated at checkout</p>
            <Link to="/address-form" className="checkout-link">
               <button >Check out</button>
            </Link>   
              <br/>
            <Link to="/shop">
              <span>⬅︎ Continue Shopping</span>
            </Link>
            <br/>
        </div>
        </div>
      </div>
      )}
    </div>
  );
}

export default ShoppingCart;