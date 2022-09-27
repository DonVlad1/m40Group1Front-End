import './css/App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import PostCreate from "./pages/postCreate"
import Home from "./pages/home"
import Profile from './pages/profile';
import Login from "./pages/login"
import Signup from "./pages/signUp"
import Browse from "./pages/browse"
import ListUser from './pages/ListUser';

function App(props) {
  const [token, setToken] = useState("")
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState()
  const [email, setEmail] = useState()
  const [admin, setAdmin] = useState(false)   
  const [phone, setPhone ] = useState() 

  return (
    <BrowserRouter>
      <div className="App flexbox">
        <Navbar admin={admin} loggedIn={loggedIn}/>
        <Routes>
            <Route path='/' element = {<Home />} />
            <Route path='/postCreate' element = {<PostCreate />} />
            <Route path='/profile' element = {<Profile loggedIn={loggedIn} token={token} setLoggedIn={setLoggedIn} setUser={setUser} user={user} setEmail={setEmail} email={email} setAdmin={setAdmin} setPhone={setPhone} phone={phone}/>} />
            <Route path='login' element = {<Login setToken={setToken} setter={setUser} setLoggedIn={setLoggedIn} setter2={setEmail} setAdmin={setAdmin} setter3={setPhone} />} />
            <Route path='signup' element = {<Signup setToken={setToken} setter={setUser} setLoggedIn={setLoggedIn} setter2={setEmail} />} />
            <Route path='/browse' element = {<Browse />} />
            <Route path='/users' element = {<ListUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;