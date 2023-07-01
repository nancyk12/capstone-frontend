import React from 'react';
import products from './products.json';


const ProductInfo = (props) => {
    const productId = props.match.params.id;
    const product = products.find((product) => product.id === productId);
  
    return (
      <div className="product-info">
        <h1>{product.name}</h1>
        <img src={product.image} alt={product.name} />
        <p>{product.description}</p>
        <p>Price: ${product.price.toFixed(2)}</p>
        <button>Add to Cart</button>
      </div>
    );
  };
  
  export default ProductInfo;

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