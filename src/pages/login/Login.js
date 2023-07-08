import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { login, resetStatus } from '../../redux/usersSlice';
import { CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


export default function Login() {
  const users = useSelector((state) => state.users);
  const status = useSelector((state) => state.users.status);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (status === 'fulfilled') {
      dispatch(resetStatus());
      navigate('/', { replace: true });
    }
  }, [status]);

  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = React.useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    let userObj = {
      email: data.get('email'),
      password: data.get('password'),
      isRemember: isChecked,
    };

    dispatch(login(userObj));
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <h1 className="login-form-heading">Login</h1>
        <form onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            required
            id="email"
            name="email"
            placeholder="Email Address"
            autoComplete="email"
            autoFocus
            className="login-input-field"
          />

         <div className="login-password-input-container">
            <input
              type={showPassword ? 'text' : 'password'}
              required
              id="password"
              name="password"
              placeholder="Password"
              className="login-input-field"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="login-password-toggle-button"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </button>
          </div>
          <label htmlFor="remember" className="login-checkbox-label">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              id="remember"
              name="remember"
              className="login-checkbox-input"
            />
            Remember me
          </label>
          <button
            type="submit"
            className={`login-submit-button ${status === 'pending' ? 'loading' : ''}`}
          >
            {status === 'pending' ? (
              <CircularProgress size={24} className="login-loading-spinner" />
            ) : (
              'Sign In'
            )}
          </button>
        </form>
        <div className="login-links">
          <Link href="#" className="login-link">
            Forgot password?
          </Link>
          <Link to="/register" className="login-link">
            Don't have an account? Register Here!
          </Link>
        </div>
      </div>
    </div>
  );
}