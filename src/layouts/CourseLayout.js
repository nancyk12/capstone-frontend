import { Outlet } from "react-router-dom"

export default function CourseLayout() {
  return (
    <div className="courses-layout">
      <h2>Classes</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit?</p>
      
      <Outlet />
    </div>
  )
}