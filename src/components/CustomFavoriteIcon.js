
import React from 'react';
import { useSelector } from 'react-redux';
import FavoriteIcon from '@mui/icons-material/Favorite';


function CustomFavoriteIcon() {
  const favoriteItems = useSelector((state) => state.favorite);

  // Calculate total quantity of items in the cart
  const totalQuantity = favoriteItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="favorite-icon">
      <FavoriteIcon />
        {totalQuantity > 0 && (
        <span className="nav-cart-item-count">{totalQuantity}</span>
      )}
    </div>
  );
}

export default CustomFavoriteIcon;

// import React from 'react';
// import { useSelector } from 'react-redux';
// import "./CustomShoppingCartIcon.css";

// function CustomShoppingCartIcon() {
//   const cartItems = useSelector((state) => state.cart);

//   const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

//   return (
//     <div className="nav-cart-icon">
//      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//        <circle cx="9" cy="21" r="1" />
//        <circle cx="20" cy="21" r="1" />
//        <path d="M1 1h4l2.5 6m5.5 0l2.5-6h4" />
//        {totalItems > 0 && <text x="17" y="13" fontSize="10" textAnchor="middle" fill="white">{totalItems}</text>}
//      </svg>
//     </div>
//   );
// }

// export default CustomShoppingCartIcon;