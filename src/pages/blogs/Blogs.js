import React from "react";
import BlogsCard from "./BlogsCard";
import { useEffect, useState } from "react";
import BlogForm from "./BlogForm";
import Axios from '../../lib/Axios';



function Blogs(props) {
	//console.log(props);

	  const [blogs, setBlogs] = useState([]);
	const [shouldRefresh, setShouldRefresh] = useState(false);

	//useEffect first argument, takes in an anonymous callback function. second argument, dependency array
	useEffect(() => {
		const fetchData = async () => {
			// fetch('url', { method: "POST"})
			//axios will parse the response from our backend back to us so we don't need response.json()
			const response = await Axios.get('/blogs/all-blogs');
			if (response.data.success) {
				setBlogs(response.data.blogs);
			}
		};
		fetchData();
	}, [shouldRefresh]);

	return (
	<>	
	  <section>
        <h1 className="blog-title">Pet Adoption Success Stories Blog</h1>
          <div className="blog-list">
		    <div>
			   {/* <h2>{props.name}</h2> */}
			    {props.blogsProps.map((blog) => {
				  return( 
				    <BlogsCard 
					   key={blog.id} 
					   blog={blog} 
					   setShouldRefresh={props.setShouldRefreshProps} 
				    />);
			
			})} 
			
		  </div>
	  </div>
    </section> 
	<div>
	  
	  <BlogForm/>
	</div>
   </>		
  );
}

//export default Blogs;



      