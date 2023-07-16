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

import { useEffect, useState } from "react";
import { Client } from "@petfinder/petfinder-js";

//components
import Error from "./components/Error";
//import AboutUsDiv from './components/AboutUsDiv';

//pages
import Home from "./pages/Home";
import Payment from "./pages/Payment";
import Page from "./pages/Page";

//checkout
import Checkout from "./pages/shop/checkout/Checkout";
import AddressForm from './pages/shop/checkout/AddressForm';
import Review from "./pages/shop/checkout/Review";
import PaymentForm from "./pages/shop/checkout/PaymentForm";


//courses
import Courses, { coursesLoader } from "./pages/courses/Courses";
import CourseDetails, { courseDetailsLoader } from "./pages/courses/CourseDetails";
import CourseError from "./pages/courses/CourseError";

//Shop
import Shop from './pages/shop/Shop';
import ProductInfo from './pages/shop/ProductInfo';
import ShoppingCart from './pages/shop/ShoppingCart';

//blogs
// import Blogs from "./pages/blogs/Blogs";
// import BlogForm from "./pages/blogs/BlogForm";
//import EditBlog from "./pages/blogs/EditBlog";

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


function App() {
  // const [blogs, setBlogs] = useState([]);
	// const [shouldRefresh, setShouldRefresh] = useState(false);

	// const url = "http://localhost:5005";
	// //useEffect first argument, takes in an anonymous callback function. second argument, dependency array
	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		// fetch('url', { method: "POST"})
	// 		//axios will parse the response from our backend back to us so we don't need response.json()
	// 		const response = await axios.get(`${url}/blogs/all-blogs`);
	// 		if (response.data.success) {
	// 			setBlogs(response.data.blogs);
	// 		}
	// 	};
	// 	fetchData();
	// }, [shouldRefresh]);


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path= "/" element={<RootLayout />}>
        <Route index element={<Home />}/>
        <Route path="payment" element={<Payment />}/>

        {/* <Route 
              path="blog" 
              element={<Blogs
              blogsProps={blogs}
							setShouldRefreshProps={setShouldRefresh}
						/>
					}
				  /> */}

          {/* <Route path="/home" element={<PrivatePage />}>*/}
            {/* <Route
              path="blog-form"
              element={
                <BlogForm
                  setBlogsProps={setBlogs}
                  setShouldRefreshProps={setShouldRefresh}
                />
              }
            /> */}
            {/* <Route
              path="edit-blog/:id"
              element={
                <EditBlog
                  blogsProps={blogs}
                  setShouldRefreshProps={setShouldRefresh}
                />
              }
            /> */}
          
        {/*</Route>   */}
        <Route path="/pets" element={<Pets />}/>
        <Route path="/pets/:id" element={<PetDetail />}/>
        <Route path="/favorites" element={<Favorites />}/>

        <Route path="/shop" element={<Shop />}/>
        <Route path="/product/:id" element={<ProductInfo />}/>
        <Route path="/cart" element={<ShoppingCart />}/>

        <Route path="courses" element={<CourseLayout />} errorElement={<CourseError />}>
          <Route 
            index 
            element={<Courses />}
            loader={coursesLoader}
          />
          <Route
            path=":id"
            element={<CourseDetails />}
            loader={courseDetailsLoader}
          />
          <Route
            path="address-form"
            element={<AddressForm />}
          />
          <Route
            path="checkout"
            element={<Checkout />}
          />
          <Route
            path="review"
            element={<Review />}
          />
          <Route
            path="payment"
            element={<PaymentForm />}
          />

        </Route>
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


        <Route path="*" element={<NotFound />}/>
      </Route>
  ))

  return (
   
    <RouterProvider router={router} />
 
  );
}

export default App;
