import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function BlogsCard(props) {
	const navigate = useNavigate();

	const url = "http://localhost:5005";

	const handleDelete = async(id) => {
		props.setShouldRefresh(true);
		const response = await axios.delete(`${url}/blogs/delete-by-id/${id}`);
		props.setShouldRefresh(false);
	}


	
  return (
	<>
		
	  <section>	
		<div div className="blog-link-wrapper">
		  <div className="blog-single"> 
		  <img src="images/pet-photo-shoot.jpeg" alt="blog"/>
		  {/* <div className="blog-single-img">
                         {props.blog.image !== null ?
                         <img 
                        style={{ width: "300px", height: "300px" }}
                        src={props.blog.image} alt="pet"/> 
                        : 
                        <img style={{ width: "300px", height: "300px" }} src="images/pet-photo-shoot.jpeg" alt="blog"/>}
                      </div>  */}
			<div className="blog-info">
				<h3>{props.blog.title}</h3>
				<p>{props.blog.text}</p>
				<p>author: {props.blog.author}</p>
				<p>Categories: {props.blog.category}</p>
				<button onClick={() => handleDelete(props.blog.id)}>Delete Blog</button>
				<button onClick={() => navigate(`/edit-blog/${props.blog.id}`)}>
				Edit
			</button>
			</div>	
		  </div>		
		</div>
	  </section>
	</>  
	);
}

export default BlogsCard;

