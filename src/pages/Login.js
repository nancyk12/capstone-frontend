

import "../App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import { useAuth } from "../Auth/AuthContext";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	//const { login } = useAuth();

	const navigate = useNavigate();

	const handleSubmit = async () => {
		const userData = {
			email: email,
			password: password,
		};
		// const loginResult = await login(userData);
		// if (loginResult) {
            
		// 	navigate("/");
		// } else {
		// 	navigate("/register");
		// }
	};
	return (
      <div>
        <div className="login-container">
          <div className="login-form"> 
			<h1>Login Page</h1>
			<label htmlFor="email">Email:</label>
			<input
				type="text"
				name="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<br />
			<label htmlFor="password">Password:</label>
			<input
				type="text"
				name="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button onClick={handleSubmit}>Login</button>
           </div>  
        </div>
      </div>
    );
  }

  export default Login;