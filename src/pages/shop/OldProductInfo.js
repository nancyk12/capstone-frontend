// import React from 'react';
// import { useState, useContext } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { addToCart } from '../../redux/productSlice';
// import products from './products.json';
// import ShoppingCart from './ShoppingCart';

// const ProductInfo = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch;
//   const product = products.find((product) => product.id === parseInt(id));
//   const [cart, setCart] = useState([]);

//   const handleAddToCart = (product) => {
//     dispatch(addToCart(product));
//   };

//   // const addToCart = () => {
//   //   setCart([...cart, product]);
//   // };

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <div>
//       <h2>{product.name}</h2>
//       <img src={product.image} alt={product.name} />
//       <p>${product.price.toFixed(2)}</p>
//       <p>{product.description}</p>
//       <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
//       <Link to="/cart">Go to Cart</Link>
//       <ShoppingCart />
//     </div>
//   );
// };

// export default ProductInfo;





// export default function ProductInfo (){
   
  
//   const { id } = useParams();
//   // Find the product based on the id parameter
//   const product = products.find((product) => product.id === parseInt(id));
//   // Shopping cart state
//   if (!product) {
//     // Handle the case when the product is not found
//     return <p>Product not found</p>;
//   }
  
//   return (
//     <div>
//       <h2>{product.name}</h2>
//       <img src={product.image} alt={product.name} />
//       <p>Price: ${product.price.toFixed(2)}</p>
//       <p>Description: {product.description}</p>
//       <ShoppingCart />
      
//     </div>
//   );
// } ;

//export default ProductInfo;

// const ProductInfo = (props) => {
//     const productId = props.match.params.id;
//     const product = products.find((product) => product.id === productId);
  
//     return (
//       <div className="product-info">
//         <h1>{product.name}</h1>
//         <img src={product.image} alt={product.name} />
//         <p>{product.description}</p>
//         <p>Price: ${product.price.toFixed(2)}</p>
//         <button>Add to Cart</button>
//       </div>
//     );
//   };
  
//   export default ProductInfo;



// import React from 'react';
// import products from './products.json';


// const ProductInfo = ({ match }) => {
//   const { productId } = match.params;
//   const product = products.find((product) => product.id === parseInt(productId));

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <div className="product-info">
//       <h1>{product.name}</h1>
//       <img src={product.image} alt={product.name} />
//       <p>{product.description}</p>
//       <p>Price: ${product.price.toFixed(2)}</p>
//     </div>
//   );
// };

// export default ProductInfo;