import React, { useState } from "react"
import '../css/login.css';
import { login } from '../utils';

const Login = ({setter}) => {

  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  const submitHandler = async (event) => {
    event.preventDefault()
    await login(username, password, setter)
  }

  return (
    <div id="logInContainer">

      <form onSubmit = {submitHandler} id="loginForm">
        <h1>SIGN IN</h1>
        <input onChange={(event) => setUsername(event.target.value)} placeholder="Username" class="loginInput"/>

        <input onChange={(event) => setPassword(event.target.value)} placeholder="Password" class="loginInput"/>

        <button type="submit">SIGN IN</button>
    
      </form> 

    </div>
  )
}

export default Login