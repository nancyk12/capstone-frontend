import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../redux/productSlice';
import products from './products.json';
import { Link } from 'react-router-dom';
import './ProductInfoB.css';


function ProductInfo() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const product = products.find((product) => product.id === parseInt(id));

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-info-container">
      <h1 className="product-info-title">Product Info</h1>
      <div className="product-details">
        <img src={product.image} alt={product.name} className="product-image" />
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <button className="add-to-cart-button" onClick={() => handleAddToCart(product)}>
          Add to Cart
        </button>
      </div>
      <div className="cart-container">
        <h2 className="cart-title">Cart</h2>
        <ul className="cart-items">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              {item.name} - Quantity: {item.quantity}
            </li>
          ))}
        </ul>
      </div>
      <p className="total-items">Total Items: {cartItems.length}</p>
      <Link to="/cart" className="cart-link">Go to Cart</Link>
    </div>
  );
}

export default ProductInfo;