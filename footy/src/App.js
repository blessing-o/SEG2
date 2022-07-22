import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch}  from 'react-router-dom';
import './App.css';
import NavBar from './Navbar';
import Home from './Home';
import Courses from './Courses';
import Amenities from './Amenities';
import Drills from './VideoDrills';
import J from './joinUs';
import Faqs from './Faqs';


function App() {
  return (
    <Router>
      <div className="App">
      <NavBar></NavBar>

      <div className="content">
        <h1>works now for some reason</h1>
      <Switch>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route path="/courses">
          <Courses/>
        </Route>
        <Route path="/amenities">
          <Amenities/>
        </Route>
        <Route path="/videoDrills">
          <Drills/>
        </Route>
        <Route path="/FAQS">
          <Faqs></Faqs>
        </Route>
        <Route path="/joinUs">
          <J/>
        </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
