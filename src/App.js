import "./Navbar.css";
import './reset.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <Navbar 
      logo="YASSIN ELHILO"
      aboutme='ABOUT ME'
      projects='PROJECTS'
      contact='CONTACT'
      />
        <Routes>
          
        </Routes>
      
    </Router>
  );
}

export default App;
