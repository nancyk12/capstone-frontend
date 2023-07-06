import { Link, useLoaderData } from "react-router-dom"
import courses from "./courses.json"
export default function Courses() {
  const courses = useLoaderData()

  return (
    <div className="courses">
      {courses.map(course => (
        <Link to={course.id.toString()} key={course.id}>
          <p>{course.title}</p>
          <p>Based in {course.location}</p>
        </Link>
      ))}
    </div>
  )
}

// data loader
export const coursesLoader = async () => {
  const res = await fetch('http://localhost:4001/courses')
  //const res = await fetch('courses')

  if(!res.ok){
    throw Error("Could not fetch the data for that resource");
  }
  return res.json()
}

// put in terminal to get course data: json-server -p 4002 -w ./data/db1.json