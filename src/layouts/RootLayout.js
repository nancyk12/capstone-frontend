import { NavLink, Outlet } from "react-router-dom";
//components
//import Header from "../components/Header"
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from "../components/Footer"


export default function Layout() {
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
                 <li><NavLink to="/payment">Payment</NavLink></li>
                 <li><NavLink to="/courses">Classes</NavLink></li>
                 <li><NavLink to="/blogs">Blogs</NavLink></li>
                 <li><NavLink to="/pets">Pets to Adopt</NavLink></li>
                 <li><NavLink to="/shop-b">Shop B</NavLink></li>
                 <li><NavLink to="/shop">Store</NavLink></li>
                 <li><NavLink to="/contact">Contact</NavLink></li>
                 <li><NavLink to="/login-home">Login</NavLink></li>
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