import React from "react"
import '../css/login.css';
import Navbar from '../components/TopNavbar'

function Login() {
    return (
      <>
        <Navbar />

        <div>
          <form>
            <label>Username</label>
            <input></input>
          </form>

        </div>        
      </>

    )
}

export default Login