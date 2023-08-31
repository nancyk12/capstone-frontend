
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewBlog } from '../../redux/blogSlice';
import { useNavigate } from "react-router-dom";
import { CloudinaryContext, Image, Transformation } from 'cloudinary-react';
import UploadWidget from '../../components/UploadWidget';
import ImageUpload from '../../components/ImageUpload';
import "./Blogs.css";



const BlogForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');
  const [blogImage, setBlogImage] = useState('');

  const handleBlogImageUpload = (e) => {
    const file = e.target.files[0];

    TransformFileData(file);
  }
  
  const TransformFileData = (file) => {
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setBlogImage(reader.result);
      };
    } else {
      setBlogImage("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewBlog({ title, text, author, image: blogImage }));
    setTitle('');
    setText('');
    setAuthor('');
    setBlogImage('');
  };

  return (
    <div>
      <h2>Create New Blog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input className="login-input-field"
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="text">Text</label>
          <textarea className='login-texterea-field'
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input className="login-input-field"
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="image">Image</label>
          {/* <ImageUpload/> */}
          {/* <Image/>
          <UploadWidget/> */}
          <input
            type="file"
            id ="image"
            accept="image/"
            value={blogImage}
            onChange={handleBlogImageUpload}
            required
          />
          <ImageUpload onImageUpload={setBlogImage} />
        </div>
        <button className="cta-button" type="submit">Submit</button>
        <div className="image-preview">
        {blogImage ? (
          <>
            <img src={blogImage} alt="error!" />
          </>
        ) : (
          <p>Blog image upload preview will appear here!</p>
        )}
        </div>
      </form>
    </div>
  );
};

export default BlogForm;

// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { createBlog } from './blogsSlice';

// const BlogForm = () => {
//   const [formData, setFormData] = useState({
//     title: '',
//     author: '',
//     text: '',
//   });

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(createBlog(formData));
//     navigate('/');
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   return (
//     <div>
//       <h1>Create a New Blog</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="title">Title:</label>
//           <input
//             type="text"
//             id="title"
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="author">Author:</label>
//           <input
//             type="text"
//             id="author"
//             name="author"
//             value={formData.author}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="text">Text:</label>
//           <textarea
//             id="text"
//             name="text"
//             value={formData.text}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit">Create Blog</button>
//       </form>
//     </div>
//   );
// };

// export default BlogForm;