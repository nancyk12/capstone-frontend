import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromCart,
  removeAllFromCart,
  incrementQuantity,
  decrementQuantity,
} from '../../redux/shopItemSlice';
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
    <div className="cart-container">
      <h2>Shopping Cart</h2>
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
      <div>  
        <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
        <div className="cart-items">
          {cartItems &&
           cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
             <div className="cart-product">
             <img src={item.image} alt={item.name}/>
              <div>
              <Link to={`/product/${item._id}`}><h3>{item.name}</h3></Link>
                <p>{item.description}</p>
                <button onClick={() => handleRemoveFromCart(item._id)}>
                  Remove from Cart
                </button>
              </div>
            </div>
            <div className="cart-product-price">${item.price.toFixed(2)}</div>
             <div className="cart-product-quantity">
                <button onClick={() => handleDecrementQuantity(item._id)}>
                  -
                </button>
                <div className="count">{item.quantity}</div>
                    <button onClick={() => handleIncrementQuantity(item._id)}>+</button>
            </div>
            <div className="cart-product-total-price">
                    ${item.price * item.quantity}
                  </div>
            </div>
          ))}
        </div>  

        <div className="cart-summary"> 
          <div className="total-items">
              <span className="total-items">Total Items: {totalQuantity} </span>
              <button className="cart-clear-all-button" onClick={handleRemoveAllFromCart}>Clear All</button>
          </div>
          <div className="cart-checkout">
            
            <div className="subtotal">
              
          
              <span>Subtotal</span>
              <p className="amount"> ${totalAmount.toFixed(2)}</p>
            </div>
            <p>Taxes and shipping calculated at checkout</p>
            <Link to="/checkout" className="checkout-link">
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