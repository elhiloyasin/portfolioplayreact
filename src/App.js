import "./Navbar.css";
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe'
import Projects from "./components/Projects";
import Contact from './components/Contact'

function App() {
  return (
    
    <Router>
      <Navbar
        aboutme='ABOUT ME'
        projects='PROJECTS'
        contact='CONTACT'
      />
 
      <Routes>
        <Route exact path='/aboutme' element={<AboutMe />} />
        <Route exact path='/projects' element={<Projects />} />
        <Route exact path='/contact' element={<Contact />} />

      </Routes>

    </Router>
    
  );
}

export default App;
