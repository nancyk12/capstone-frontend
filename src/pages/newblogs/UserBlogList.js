import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBlogs, selectAllBlogs } from '../../redux/blogSlice';
import TimeAgo from './TimeAgo';
import BlogReactionButtons from "./BlogReactionButtons";

import "./Blogs.css";


const BlogList = (  ) => {
const blogs = useSelector(selectAllBlogs);
const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    <div className="main-blog-container">
    
      <div className="section">
      
      </div>
      <h1>Pet Adoption Success Stories</h1>
      {/* <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
        <Link to={`/blogs/get-one-blog/${blog.id}`}>{blog.title}</Link>*/}
            {/* <Link to={`/blogs/blog-detail/${blog.id}`}></Link> */}
            {/*<h2>{blog.title}</h2>
            <p>{blog.author}</p>
            <p><em>{blog.text}</em></p>
           <TimeAgo timestamp={blog.createAt} /> 
           <BlogReactionButtons blog={blog} />
          </li>
        ))}
      </ul> */}
      
      <div className="section">
      {blogs.map((blog) => (
          <div className="article" key={blog.id}>         
            <h2>{blog.title}</h2>
            <div className="pet-tile-img">
                {blog.image !== null ?
                <img
                  style={{ width: "300px", height: "300px" }}
                  src={blog.image} alt="blog"/> 
                  : 
                  <img style={{ width: "300px", height: "300px" }} src="images/pet-photo-shoot.jpeg" alt="pet"/>}
               </div> 
            <p className="excerpt">{blog.text.substring(0, 75)}...</p>
            <div className="postCredit">
                <Link to={`/blogs/get-one-blog/${blog.id}`}>View Post</Link>
                {/* <PostAuthor userId={post.userId} /> */}
                <span>{blog.author}</span>
                <TimeAgo timestamp={blog.createAt} />
            </div>
            <BlogReactionButtons blog={blog} />
           
        </div>
        ))}
    </div>
  </div>
  );
};

export default BlogList;