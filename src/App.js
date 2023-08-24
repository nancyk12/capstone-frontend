import { 
  createBrowserRouter,
  Route, 
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';

import "./App.css";
import React from 'react';
import ReactDom from "react-dom/client";
import Axios from './lib/Axios';
import axios from 'axios';
import UploadWidget from './components/UploadWidget';

import { useEffect, useState } from "react";
import { Client } from "@petfinder/petfinder-js";

//components
import Error from "./components/Error";
//import AboutUsDiv from './components/AboutUsDiv';

//admin
import Dashboard from './components/admin/Dashboard';
import Products from './components/admin/Products';
import Summary from './components/admin/Summary';
import CreateProduct from './components/admin/CreateProduct';

//pages
import Home from "./pages/Home";
import Page from "./pages/Page";

//checkout
import Checkout from "./pages/shop/checkout/Checkout";
import AddressForm from './pages/shop/checkout/AddressForm';
import Review from "./pages/shop/checkout/Review";
import PaymentForm from "./pages/shop/checkout/PaymentForm";


//courses
//import Courses, {coursesLoader} from "./pages/courses/Courses";
import Courses from "./pages/courses/Courses";
import CourseDetails from "./pages/courses/CourseDetails";
import CourseError from "./pages/courses/CourseError";

//Shop
import Shop from './pages/shop/Shop';
import ProductInfo from './pages/shop/ProductInfo';
import ShoppingCart from './pages/shop/ShoppingCart';

//NewBlogs
import BlogForm from "./pages/newblogs/BlogForm";
import EditBlogForm from './pages/newblogs/EditBlogForm';
import BlogList from './pages/newblogs/BlogList';
import SingleBlogPage from './pages/newblogs/SingleBlogPage';

//pets
import Pets from "./pages/pets/Pets";
import PetDetail from "./pages/pets/PetDetail";
//import AddToFavoritesButton from "./pages/pets/AddToFavoritesButton";
import Favorites from "./pages/pets/Favorites";

//contact
import Contact from "./pages/Contact";

//login
import LoginHome from "./pages/login/LoginHome";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
//import PrivatePage from "./pages/PrivatePage";
import NotFound from './pages/NotFound';

//layouts
import RootLayout from "./layouts/RootLayout";
import CourseLayout from "./layouts/CourseLayout";
import BlogLayout from "./layouts/BlogLayout";


function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path= "/" element={<RootLayout />}>
        <Route index element={<Home />}/>


        <Route path="/pets" element={<Pets />}/>
        <Route path="/pets/:id" element={<PetDetail />}/>
        <Route path="/favorites" element={<Favorites />}/>

        <Route path="/shop" element={<Shop />}/>
        <Route path="/product/:id" element={<ProductInfo />}/>
        <Route path="/cart" element={<ShoppingCart />}/>

       <Route path="courses-layout" element={<CourseLayout />} errorElement={<CourseError />}> 
          <Route 
            index 
            // path="courses"
            element={<Courses />}
            // loader={coursesLoader}
          />
          <Route
            path="course/:id"
            element={<CourseDetails />}
            // loader={courseDetailsLoader}
          />
        </Route> 

       {/* <Route path="/new-blogs" element={<BlogLayout/>}> */}
        <Route path="blog-list" element={<BlogList/>}/>
         
          <Route path="blog-form" element={<BlogForm/>}/>
          <Route path="blogs/get-one-blog/:id" element={<SingleBlogPage/>}/>
          <Route path="edit/:blogId" element={<EditBlogForm/>}/>
       {/* </Route> */}


        <Route 
          path="login-home" 
          element={<LoginHome />}
        />
        <Route 
          path="/login" 
          element={<Login />}
        />
        <Route
          path="/register" 
          element={<Register />}
        />
        <Route path="checkout" element={<Checkout />}></Route>

        <Route path="contact" element={<Contact />}></Route>

        <Route path="admin" element={<Dashboard/>}>
          <Route path="products" element={<Products/>}>
            <Route path="create-product" element={<CreateProduct/>} />
          </Route>
          <Route path="summary" element={<Summary/>}/>
      </Route>
     

        <Route path="*" element={<NotFound />}/>
      </Route>
  ))

  return (
   
    <RouterProvider router={router} />
 
  );
}

export default App;
