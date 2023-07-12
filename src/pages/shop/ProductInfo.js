import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../redux/productSlice';
//import products from './products.json';
import Axios from '../../lib/Axios';
import { Link } from 'react-router-dom';
import './ProductInfoB.css';


function ProductInfo() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  //const product = products.find((product) => product.id === parseInt(id));
  const[product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await Axios.get(`/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  

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
            <li key={item._id} className="cart-item">
              {item.name} - Quantity: {item.quantity}
            </li>
          ))}
        </ul>
      </div>
       <p className="total-items">Total Items: {totalQuantity}</p>
        <p className="total-amount">Total: ${totalAmount.toFixed(2)}</p>
      <Link to="/cart" className="cart-link">Go to Cart</Link>
    </div>
  );
}

export default ProductInfo;