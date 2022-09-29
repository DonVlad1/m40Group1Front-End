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
  const [token, setToken] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState();
  const [email, setEmail] = useState();
  const [admin, setAdmin] = useState(false);  
  const [phone, setPhone ] = useState();
  const [bio, setBio ] = useState("Enter a bio");
  const [darkMode, setDarkMode] = useState(true);

  return (
    <BrowserRouter>
      <div className={darkMode === true? "App flexbox dark": "App flexbox light" }>
        <Navbar admin={admin} loggedIn={loggedIn}/>
        <Routes>
            <Route path='/' element = {<Home />} />
            <Route path='/postCreate' element = {<PostCreate loggedIn={loggedIn} darkMode={darkMode}/>} />
            <Route path='/profile' element = {<Profile loggedIn={loggedIn} token={token} setLoggedIn={setLoggedIn} setUser={setUser} user={user} setEmail={setEmail} email={email} setAdmin={setAdmin} setPhone={setPhone} phone={phone} darkMode={darkMode} setDarkMode={setDarkMode} bio={bio} setBio={setBio}/>} />
            <Route path='login' element = {<Login setToken={setToken} setter={setUser} setLoggedIn={setLoggedIn} setter2={setEmail} setAdmin={setAdmin} setter3={setPhone} darkMode={darkMode} setBio={setBio} setDarkMode={setDarkMode} />} />
            <Route path='signup' element = {<Signup setToken={setToken} setter={setUser} setLoggedIn={setLoggedIn} setter2={setEmail} darkMode={darkMode} setter3={setPhone} setDarkMode={setDarkMode} />} />
            <Route path='/browse' element = {<Browse loggedIn={loggedIn} darkMode={darkMode}/>} />
            <Route path='/users' element = {<ListUser />} darkMode={darkMode} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;