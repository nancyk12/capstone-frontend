import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from '../../redux/productSlice';
import './ShoppingCartB.css';
import { Link } from 'react-router-dom';

function ShoppingCart() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleIncrementQuantity = (productId) => {
    dispatch(incrementQuantity(productId));
  };

  const handleDecrementQuantity = (productId) => {
    dispatch(decrementQuantity(productId));
  };

  return (
    <div className="shopping-cart-container">
      <h2 className="shopping-cart-title">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty.</p>
      ) : (
        <div className="cart-items-container">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
              <Link to={`/product/${item.id}`} className="cart-item-name">
                  {item.name}
                </Link>
                <p className="cart-item-price">${item.price.toFixed(2)}</p>
                <div className="cart-item-quantity">
                  <button
                    className="quantity-button"
                    onClick={() => handleDecrementQuantity(item.id)}
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button
                    className="quantity-button"
                    onClick={() => handleIncrementQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="remove-from-cart-button"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          ))}
          <Link to="/shop" className="keep-shopping-link">
            Keep Shopping
          </Link>
        </div>
      )}

    </div>
  );
}

export default ShoppingCart;