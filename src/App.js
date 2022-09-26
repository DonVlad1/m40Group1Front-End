import './css/App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import PostCreate from "./pages/postCreate"
import Home from "./pages/home"
import Profile from './pages/profile';
import Login from "./pages/login"
import Signup from "./pages/signUp"


function App(props) {
  const [token, setToken] = useState("")
  const [loggedIn, setLoggedIn] = useState(true)
  const [user, setUser] = useState()
  const [email, setEmail] = useState()
    
  return (
    <BrowserRouter>
      <div className="App flexbox">
        <Navbar />
        <Routes>
            <Route path='/' element = {<Home />} />
            <Route path='/postCreate' element = {<PostCreate />} />
            <Route path='/profile' element = {<Profile loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user} email={email} />} />
            <Route path='login' element = {<Login setToken={setToken} setter={setUser} setLoggedIn={setLoggedIn} setter2={setEmail} />} />
            <Route path='signup' element = {<Signup setToken={setToken} setter={setUser} setLoggedIn={setLoggedIn} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;