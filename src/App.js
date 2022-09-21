import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
      <div className="App">
          <img src='./images/carlogo.png' alt=''/>
          <h1>All about the drive</h1>
          <h2>Find the car that is right for your journey</h2>
          <div className='btn'>
          <button>Browse</button>
          </div>
          <div className='icon'>
          <Router>
           <Navbar />
          </Router>
          </div>
      </div>
  );
}

export default App;
