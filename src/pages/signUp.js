import React, { useState } from "react"
import '../css/signUp.css';
import { signup } from '../utils';

const Signup = ({setter, setLoggedIn, setToken, setter2}) => {

  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [password, setPassword] = useState()


  const submitHandler = async (event) => {
    event.preventDefault()
    let token = await signup(username, email, password, phone, setter, setLoggedIn, setter2)
    setToken(token)
  }

  return (
    <div id="signUpContainer">

      <form onSubmit = {submitHandler} id="signUpForm">
        <h1>Sign Up</h1>
        <input onChange={(event) => setUsername(event.target.value)} placeholder="Username:"/>

        <input onChange={(event) => setEmail(event.target.value)} placeholder="Contact Email:"/>

        <input onChange={(event) => setPhone(event.target.value)} placeholder="Phone Number:"/>

        <input onChange={(event) => setPassword(event.target.value)} placeholder="Password:"/>

        <button type="submit">Create Account</button>
    
      </form> 

    </div>
  )
}

export default Signup