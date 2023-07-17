import { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, authCheck } from "../redux/authSlice";
import CustomShoppingCartIcon from "../components/CustomShoppingCartIcon";
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from "../components/Footer"


export default function Layout() {
  const cartItems = useSelector((state) => state.cart);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  const isAuth = useSelector((state) => state.auth.isAuth);
  const user = useSelector((state) => state.users);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authCheck())
  }, [isAuth]) 

  const handleLogout = () => {
    dispatch(logout());
  };


    return (
      <> 
        <div className="site-wrapper">
          <header>
            <nav>
              <ul>
                <li className="logo-container"><NavLink to="/">
                   <img src="images/paw-logo-tan.png" alt="Logo" className="logo" />ADOPT-A-PET 
                   </NavLink></li>
              
                 <li><NavLink to="/">Home</NavLink></li>
                 <li><NavLink to="/courses-layout">Classes</NavLink></li>
                 <li><NavLink to="/blogs">Blogs</NavLink></li>
                 <li><NavLink to="/pets">Pets to Adopt</NavLink></li>
                 <li><NavLink to="/shop" className='nav-cart-icon-container'>
                  Store
                  <CustomShoppingCartIcon className='nav-cart-icon'/>
                  {totalItems > 0 && (
                    <span className="nav-cart-item-count">{totalItems}</span>
                  )}
                  </NavLink></li>
                 <li><NavLink to="/contact">Contact</NavLink></li>
                 <li>
        {isAuth ? (
          <>
            <span>Hi, {user.firstname} </span>
            <NavLink to="/" onClick={handleLogout}>
              Sign-Out
            </NavLink>
          </>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </li>
              </ul>  
            </nav>
          </header>
          <br/>
            <Breadcrumbs/>
            <br/>
          <div className="content-container">
             <main>
                <Outlet />
             </main>
          </div>
          <br/>
          <div className="footer-container">
              <Footer/>
          </div>
        </div>
        
      </> 
    )
}