import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom"
//import { useSelector, useDispatch } from 'react-redux';
//import { addToEnroll } from '../../redux/courseSlice';
import Axios from '../../lib/Axios';
//import courses from "./courses.json"

export default function CoursesDetails() {
    const { id } = useParams();
    // const dispatch = useDispatch();
    // const enrollCourse = useSelector((state) => state.unit);
    const [course, setCourse] = useState(null);
    
  
    useEffect(() => {
      const fetchCourse = async () => {
        try {
          const response = await Axios.get(`/courses/${id}`);
          setCourse(response.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchCourse();
    }, [id]);

    // const handleAddToEnroll = (course) => {
    //   dispatch(addToEnroll(course));
    // };

    // if (!course) {
    //   return <div>Course not found</div>;
    // }
    
    return (
      <div className="courses-layout-container">
       <div className="courses-details">
         <div>
            <h2>Class Details for { course.title }</h2>
            <p>Instructor: { course.instructor }</p>
            <p>Location: { course.location }</p>
            <p>Time: { course.time }</p>
            <p>Description: { course.description }</p>
            <div className="details">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, suscipit?</p>
            </div>
            {/* <button className="add-to-cart-button" onClick={() => handleAddToEnroll(course)}>
           Add to Cart
         </button> */}
         </div>
       </div>
      </div> 
        )
        }



{/* // // loader function
// export const courseDetailsLoader = async ({ params }) => {
//     const { id } = params;

//     const res = await fetch(`http://localhost:4001/courses/${id}`);

//     if(!res.ok){
//         throw Error("Could not fetch the data for that resource");  
//     }
//     return res.json();

// } */}