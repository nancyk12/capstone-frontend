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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <span>Start Shopping</span>
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
          <button className="cart-clear-all-button" onClick={handleRemoveAllFromCart}>Clear All</button>
          <div className="cart-checkout">
            <div className="total-items">
              {/* <span>Total Items</span> */}
              {/* <p>{totalQuantity}</p> */}
              <span className="total-items">Total Items: {totalQuantity}</span>
            </div>
            <div className="subtotal">
              
              <br/>
              <span>Subtotal</span>
              <p className="amount"> ${totalAmount.toFixed(2)}</p>
            </div>
            <p>Taxes and shipping calculated at checkout</p>
            <button>Check out</button>
            <Link to="/shop">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                  <span>Continue Shopping</span>
            </Link>
            <br/>
            <Link to="/shop" className="keep-shopping-link">
               Continue Shopping
            </Link>
            <br/>
          <Link to="/address-form" className="checkout-link">Checkout</Link>
        </div>
        </div>
      </div>
      )}
    </div>
  );
}

export default ShoppingCart;