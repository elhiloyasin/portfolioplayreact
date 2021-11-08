import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/'>
            <Navbar />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
