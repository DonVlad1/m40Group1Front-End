import './css/App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import PostCreate from "./pages/postCreate"
import Home from "./pages/home"
import Login from "./pages/login"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/postCreate' element = {<PostCreate />} />
          <Route path='login' element = {<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
