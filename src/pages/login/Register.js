import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { registerUser, resetStatus } from '../../redux/usersSlice'
import { CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { registrationValidator } from '../../lib/validator';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function Register() {

  const users = useSelector( state => state.users)
  const status = useSelector( state => state.users.status)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  React.useEffect(() => {
    if (status === 'fulfilled') {
      dispatch(resetStatus())
      navigate("/login", {replace: true})
    }
  })
  const [showPassword, setShowPassword] = useState(false);
  const [pwdMatch, setPwdMatch] = useState({
    error: false,
    message: ''
  })
  
  const [isValid, setIsValid] = useState({
    firstname: {error: false, message: ''},
    lastname: {error: false, message: ''},
    email: {error: false, message: ''},
    password: {error: false, message: ''},
  })



  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    let userObj = {
      firstname: data.get('firstName'),
      lastname: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
    };

    let isErrors = false;
    
    if (userObj.password !== data.get('password2')) {
      isErrors = true
      setPwdMatch({
        error: true,
        message: "Passwords do not Match"
      })
    } else {
      setPwdMatch({
          error: false,
          message: ''
        })
   
    }

    const validatorObj = registrationValidator(userObj)

  
    
    // iterates through the validatorObj and checks if there any errors are true
    for (const key in validatorObj) {
      if(validatorObj[key].error) {
        isErrors = true
      }
    }
    
    isErrors ? setIsValid(validatorObj)
    : 
    (userObj.password === data.get('password2')) && dispatch(registerUser(userObj))


  };


  return (
    <div className="login-container">
      <div className="login-form-container">
        <h1 className="login-form-heading">Register</h1>
        <form onSubmit={handleSubmit} noValidate>
          <input
            autoComplete="given-name"
            type="text"
            required
            id="firstName"
            label="First Name"
            name="firstName"
            placeholder="First Name"
            autoFocus
            error={isValid.firstname.error}
            helperText={isValid.firstname.message}
            className="login-input-field"
          />
          <input
            type="text"
            required
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="family-name"
            placeholder="Last Name"
            autoFocus
            error={isValid.lastname.error}
            helperText={isValid.lastname.message}
            className="login-input-field"
          />
          <input
            type="text"
            required
            id="email"
            label="Email Address"
            name="email"
            placeholder="Email Address"
            autoComplete="email"
            error={isValid.email.error}
            helperText={isValid.email.message}
            className="login-input-field"
          />
          <div className="login-password-input-container">
            <input
              type={showPassword ? 'text' : 'password'}
              required
              id="password"
              name="password"
              label="Password"
              placeholder="Password"
              autoComplete="new-password"
              error={isValid.password.error}
              helperText={isValid.password.message}
              className="login-input-field"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="login-password-toggle-button"
            >
              {showPassword ? <VisibilityOff />  : <Visibility />}
            </button>
          </div>
          <input
              type='password'
              required
              id="password2"
              name="password2"
              label="Confirm Password"
              placeholder="Confirm Password"
              autoComplete="new-password"
              error={pwdMatch.error}
              helperText={pwdMatch.message}
              className="login-input-field"
            />
          
        
          <button
            type="login-submit"
            className={`login-submit-button ${status === 'pending' ? 'loading' : ''}`}
          >
            {status === 'pending' ? (
              <CircularProgress size={24} className="login-loading-spinner" />
            ) : (
              'Register'
            )}
          </button>
        </form>
        <div className="login-links">
          <Link to="/login" className="login-link">
            Already have an account? Login Here!
          </Link>
        </div>
      </div>
    </div>
  );
}
