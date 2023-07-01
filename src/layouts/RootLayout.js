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
                <li className="logo-container">
                   <img src="images/paw-logo-tan.png" alt="Logo" className="logo" />ADOPT-A-PET 
                </li>
              
                 <li><NavLink to="/">Home</NavLink></li>
                 <li><NavLink to="/courses">Classes</NavLink></li>
                 <li><NavLink to="/blogs">Blogs</NavLink></li>
                 <li><NavLink to="/pets">Pets to Adopt</NavLink></li>
                 <li><NavLink to="/store">Store</NavLink></li>
                 <li><NavLink to="/contact">Contact</NavLink></li>
                 <li><NavLink to="/login">Login</NavLink></li>
              </ul>  
            </nav>
          </header>
          <br/>
            <Breadcrumbs/>
            <br/>
          <main>
                <Outlet />
          </main>
          <br/>
          <div>
            
             <Footer/>
           
          </div>
        </div>
        
      </> 
    )
}