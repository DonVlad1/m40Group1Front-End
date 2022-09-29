import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../css/login.css';
import { login } from '../utils';
import ProfileIcon from '../assets/account-circle.png'

const Login = ({setter, setToken, setLoggedIn, setter2, setAdmin, setter3, darkMode, setBio, setDarkMode}) => {
  const navigate = useNavigate()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  const submitHandler = async (event) => {
    event.preventDefault()
    let token = await login(username, password, setter, setLoggedIn, setter2, setAdmin, navigate, setter3, setBio, setDarkMode)
    setToken(token)
  }

  return (
    <div id="logInContainer" className={darkMode === true? "dark":"light"}>

      <img src={ProfileIcon} alt="profile icon" className="profileIcon"/>

      <h1>SIGN IN</h1>

      <form onSubmit = {submitHandler} id="loginForm">
        
        <input onChange={(event) => setUsername(event.target.value)} placeholder="Username" className="loginInput"/>

        <input type="password" onChange={(event) => setPassword(event.target.value)} placeholder="Password" className="loginInput"/>

        <button type="submit">SIGN IN</button>

      </form>
      
      <h2>Not a member? <Link to="/signup" id="accountCreateLink">Create Account</Link></h2>
    </div>
  )
}

export default Login