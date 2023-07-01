import { useLoaderData, useParams } from "react-router-dom";

export default function CourseDetails() {
    const { id } = useParams();
    const course = useLoaderData();
    
    return (
        <div className="course-details">
            <h2>Class Details for { course.title }</h2>
            <p>Instructor: { course.instructor }</p>
            <p>Day and Time: { course.location }</p>
            <div className="details">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, suscipit?</p>
            </div>
        </div>
    )
}
// loader function
export const courseDetailsLoader = async ({ params }) => {
    const { id } = params;

    const res = await fetch(`http://localhost:4001/courses/${id}`);

    if(!res.ok){
        throw Error("Could not fetch the data for that resource");  
    }
    return res.json();

}