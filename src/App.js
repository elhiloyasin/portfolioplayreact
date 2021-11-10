import "./Navbar.css";
import './reset.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe'
import Projects from "./components/Projects";


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
        <Route exact path='/aboutme' element={<AboutMe />} />
        <Route exact path='/projects' element={<Projects />} />

      </Routes>

    </Router>
  );
}

export default App;
