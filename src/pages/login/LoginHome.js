import React, {useEffect} from 'react'
//import { Box, Container, Typography, Button } from '@mui/material'
import {useSelector, useDispatch} from 'react-redux'
import {authCheck, logout} from '../../redux/authSlice'

const LoginHome = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector( state => state.auth.isAuth )
  const user = useSelector( state => state.users )



  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="login-home-container">
      <h1 className="login-home-heading">
        {isAuth ? `Hi, ${user.firstname}` : 'Please Login'}
      </h1>
      {isAuth ? (
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <>
          <a href="/login" className="login-button">
            Login
          </a>
          <a href="/register" className="register-button">
            Register
          </a>
        </>
      )}
    </div>
  );
};

export default LoginHome;