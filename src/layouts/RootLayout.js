import { useEffect, useState } from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, authCheck } from "../redux/authSlice";
import CustomShoppingCartIcon from "../components/CustomShoppingCartIcon";
import MenuIcon from '@mui/icons-material/Menu';
// import Breadcrumbs from '../components/Breadcrumbs';
import Footer from "../components/Footer"
import { toast } from "react-toastify";


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

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(false); // Close the menu when a menu item is clicked
  };



    return (
      <> 
        <div className="site-wrapper">
          <header>
            <nav>
              <ul className="desktop-navbar">
                <li className="logo-container"><NavLink to="/">
                   <img src="images/Sublime-Pets.com-sand.png" alt="Logo" className="logo" /><span></span> 
                   {/* <img src="images/SublimePetsSand.png" alt="Logo" className="logo" />SUBLIME-PETS */}
                   </NavLink></li>
              
                 <li><NavLink to="/">Home</NavLink></li>
                 <li><NavLink to="/courses-layout">Classes</NavLink></li>
                 <li><NavLink to="/blog-list">Blogs</NavLink></li>
                 <li><NavLink to="/pets">Pets to Adopt</NavLink></li>
                 <li><NavLink to="/shop" className='nav-cart-icon-container'>
                  Store
                  <CustomShoppingCartIcon className='nav-cart-icon'/>
                  {totalItems > 0 && (
                    <span className="nav-cart-item-count">{totalItems}</span>
                  )}
                  </NavLink></li>
                 <li><NavLink to="/contact">Contact</NavLink></li>
                 {/* <li><NavLink to="/admin/summary">Admin</NavLink></li> */}
                 <li>
        {isAuth ? (
          <NavLink> 
        
            {user.isAdmin ? (
              <div>
                <NavLink to="/admin/summary">Dashboard</NavLink>
              </div>
            ) : null}
          <>
            <span>Hi, {user.firstname} </span>
            <NavLink to="/" onClick={handleLogout}>
              Sign-Out
            </NavLink>
          </>
          </NavLink> 
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </li>
    </ul>  


    <div className="mobile-navbar">
            <div className="mobile-navbar-header">
              <NavLink to="/" className="logo-link">
                <img src="images/Sublime-Pets.com-sand.png" alt="Logo" className="logo" />
              </NavLink>

         

            </div>
            <ul className={`mobile-nav-list ${isMobileMenuOpen ? 'open' : ''}`}>
              <li onClick={handleMenuItemClick}><NavLink to="/">Home</NavLink></li>
              <li onClick={handleMenuItemClick}><NavLink to="/courses-layout">Classes</NavLink></li>
              <li onClick={handleMenuItemClick}><NavLink to="/blog-list">Blogs</NavLink></li>
              <li onClick={handleMenuItemClick}><NavLink to="/pets">Pets to Adopt</NavLink></li>
              <li onClick={handleMenuItemClick}><NavLink to="/shop" className='nav-cart-icon-container'>
                  Store
                  <CustomShoppingCartIcon className='nav-cart-icon'/>
                  {totalItems > 0 && (
                    <span className="nav-cart-item-count">{totalItems}</span>
                  )}
                  </NavLink></li>
              <li onClick={handleMenuItemClick}><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <div className="mobile-cart-container">
    <NavLink to="/shop" className="mobile-cart-link">
      <CustomShoppingCartIcon className="mobile-cart-icon" />
      {totalItems > 0 && (
        <span className="mobile-cart-item-count">{totalItems}</span>
      )}
    </NavLink>
  </div>
        
            <div className="login-section">
            <MenuIcon className="burger-nav" onClick={handleMobileMenuToggle} />
            
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
            </div>


    
  </div>        
</nav>


          </header>
          {/* <br/>
            <Breadcrumbs/>
            <br/> */}
          <div className="content-container">
             <main>
                <Outlet />
             </main>
          </div>
          <div className="footer-container">
              <Footer/>
          </div>
        </div>
        
      </> 
    )
}
