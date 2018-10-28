
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './MainMenu.css';
import Profiles from '../Staff/Profiles'
import Home from './Home'

class MainMenu extends Component{

    render(){
      return(
        <Router>
            <div>
       <div className = "Menu">
       <ul>
      
        <li><Link to="/Nurseries/">NURSERIES</Link>
        </li>
         <li><Link to="/Staff/">STAFF</Link></li>
         <li><Link to="/About us/">ABOUT US</Link></li>
         <li><Link to="/Faq/">FAQ</Link></li>
         <li><Link to="/Contact us/">CONTACT US</Link></li>
      </ul>
  
        
          </div>
          <Route path="/" exact component={Home} />
        <Route path="/Home/"  component={Home} />
          <Route path="/Nurseries/" component={Profiles} />
          <Route path="Staff/" component={Profiles} />
          <Route path="/About us" exact component={Profiles} />
          <Route path="/Faq/" component={Profiles} />
          <Route path="/Contact us/" component={Profiles} />
          </div>
       </Router>
      );
    }
  }

  export default MainMenu;