import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchSingleBlog, selectBlogById, getBlogsStatus, getBlogsError } from '../../redux/blogSlice';
import TimeAgo from './TimeAgo';
import BlogReactionButtons from './BlogReactionButtons';
import './Blogs.css'

const SingleBlogPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleBlog(id));
  }, [dispatch, id]);

const singleBlog = useSelector((state) => selectBlogById(state, id));
const status = useSelector(getBlogsStatus);
const error = useSelector(getBlogsError);

  if (status === 'loading') {
  return <div className="section" >Loading...</div>;
  }

  if (error) {
  return <div className="section">Error: {error}</div>;
  }

  if (!singleBlog) {
  return  <div className="section">
            <h2>Post not found! Work on your code, Nancy!</h2>
          </div>
  }


  return (
    <div className="blog-single">
    <div className="artlicle">
      <h1>{singleBlog.title}</h1>
      
      <div >
                {singleBlog.image !== null ?
                <img
                  // style={{ width: "300px", height: "300px" }}
                  src={singleBlog.image} alt="blog"/> 
                  : 
                  <img 
                  // style={{ width: "300px", height: "300px" }} 
                  src="images/pet-photo-shoot.jpeg" alt="pet"/>}
               </div> 


      <p>{singleBlog.text}</p>
      <p className="postCredit">
         {/* <Link to={`/edit/${SingleBlog._id}`}>Edit Post</Link> */}
         Author: {singleBlog.author}
        <TimeAgo timestamp={singleBlog.createAt}/>
      </p>
      {/* <Link to={`/edit/${singleBlog.id}`}>Edit Blog</Link> Add link to Edit Blog page */}
      
      <Link to={`/user-blog-list`}>Back to more Pet Adoption Success Stories</Link>

      <BlogReactionButtons blog={singleBlog}/>
    </div>
   </div> 
  );
};

export default SingleBlogPage;