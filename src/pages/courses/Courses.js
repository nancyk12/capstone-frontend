import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
// import { useSelector, useDispatch } from 'react-redux';
// import { addToEnroll } from '../../redux/courseSlice';
import Axios from '../../lib/Axios';
//import courses from "./courses.json"

export default function Courses() {
  // const dispatch = useDispatch();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await Axios.get('/courses/all-courses');
        setCourses(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="courses-layout-container">
      <h2>Classes</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit?</p>

       {/* <div className="courses" key={courses._id}> */}
   
        {courses.map((courses) => (
          <div className="courses" key={courses._id}>
         <Link to={`/course-details/:${courses._id}`}>
          <h3>{courses.title}</h3></Link>
          <p><b>Instructor:</b> {courses.instructor}</p>
          <p><b>Location:</b> {courses.location}</p>
          <p><b>Time:</b> {courses.time}</p>
          <p><b>Description:</b> {courses.description}</p>

         
         </div>
        ))}
    </div>
    // </div>
  )
}

// // data loader
// export const coursesLoader = async () => {
//   const res = await fetch('/courses/all-courses')
//   //const res = await fetch('courses')

//   if(!res.ok){
//     throw Error("Could not fetch the data for that resource");
//   }
//   return res.json()
// }

// // put in terminal to get course data: json-server -p 4002 -w ./data/db1.json

// import { Link, useLoaderData } from "react-router-dom"

// export default function courses() {
//   const careers = useLoaderData()

//   return (
//     <div className="courses">
//       {careers.map(career => (
//         <Link to={career.id.toString()} key={career.id}>
//           <p>{career.title}</p>
//           <p>Based in {career.location}</p>
//         </Link>
//       ))}
//     </div>
//   )
// }

// // data loader
// export const coursesLoader = async () => {
//   const res = await fetch('http://localhost:8023/careers')

//   if(!res.ok){
//     throw Error("Could not fetch the data for that resource");
//   }
//   return res.json()
// }


//npx json-server --watch data/db1.json --port 8023
//http://localhost:8023/careers