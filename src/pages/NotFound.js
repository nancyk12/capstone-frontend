import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
        <h1>404</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <p>Go to the <Link to="/">Homepage</Link>.</p>
    
    </div>


  )
}