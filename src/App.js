import './css/App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import PostCreate from "./pages/postCreate"
import Home from "./pages/home"
<<<<<<< HEAD
import Profile from './pages/profile';
=======
import Login from "./pages/login"
>>>>>>> 4dd84b1e80a4ab4c565715a2cf09ba342831cffd

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
<<<<<<< HEAD
            <Route path='/' element = {<Home />} />
            <Route path='/postCreate' element = {<PostCreate />} />
            <Route path='/profile' element = {<Profile/>} />
=======
          <Route path='/' element = {<Home />} />
          <Route path='/postCreate' element = {<PostCreate />} />
          <Route path='login' element = {<Login />} />
>>>>>>> 4dd84b1e80a4ab4c565715a2cf09ba342831cffd
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;