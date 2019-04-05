
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './MainMenu.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from './../Actions.js'
import history from './../History';

class MainMenu extends Component{

  logout(e) {
    e.preventDefault();
    this.props.logout();
    history.push('/')
  }

    render(){

      const isAuthenticated  = this.props.auth
      const role = this.props.role
      console.log(role);
      return(

        <div class="navbar-wagon">
  
  <a href="/" class="navbar-wagon-brand">
    {/* <img src="images/logo.png" alt="logo"></img> */}
    <h1 className="Logo">STAFF ON DEMAND</h1>

  </a>

  <div class="navbar-wagon-right hidden-xs hidden-sm">

         {(isAuthenticated&&role=='[Client]' )&&
<Link to="/Staff/"><a href="" class="navbar-wagon-item navbar-wagon-link">Staff</a></Link>
           }
        
        <Link to="/AboutUs/"><a href="" class="navbar-wagon-item navbar-wagon-link">About us</a></Link>
        <Link to="/ContactUs/"><a href="" class="navbar-wagon-item navbar-wagon-link">Contact us</a></Link>

        <div class="navbar-wagon-item">
      <div class="dropdown">
      {(isAuthenticated&&role=='[Client]' )&&<div class = "editprofile">
<Link to="/Client/Profile">  <img src="https://kitt.lewagon.com/placeholder/users/ssaunier" class="avatar dropdown-toggle" id="navbar-wagon-img" data-toggle="dropdown"></img>
</Link></div>
           }
           {(isAuthenticated&&role=='[Staff]' )&&
<Link to="/Staff/Profile"> <img src="https://kitt.lewagon.com/placeholder/users/ssaunier" class="avatar dropdown-toggle" id="navbar-wagon-img" data-toggle="dropdown"></img></Link>
           }
      {/* <img src="https://kitt.lewagon.com/placeholder/users/ssaunier" class="avatar dropdown-toggle" id="navbar-wagon-img" data-toggle="dropdown"></img> */}
        
      </div>
    </div>
        {(isAuthenticated&&role=='[Client]' )&&<div class = "editprofile">
<Link to="/Client/EditProfile"> <button  type="button" class="btn btn-secondary btn-sm " >Edit Profile</button>
</Link></div>
           }
           {(isAuthenticated&&role=='[Staff]' )&&
<Link to="/Staff/EditProfile"><button id="editprofile" type="button" class="btn btn-secondary btn-sm " >Edit Profile</button></Link>
           }
    

     {!isAuthenticated &&
                   <Link to="/Login/"> <button type="button" class="btn btn-success btn-sm">Log In</button></Link>

           }
           
           {isAuthenticated &&
                 <div class = "logout"> <button type="button" class="btn btn-success btn-sm" onClick={this.logout.bind(this)}>Log Out</button></div>

           }
      
   
  </div>
  
</div>
       
      );
    }
  }

  

MainMenu.propTypes = {
  auth: PropTypes.object.isRequired,
  logout:PropTypes.func.isRequired

}

function mapStateToProps(state) {
  return {
    auth: state.isAuthenticated,
    role: state.user.role
  };
}

  export default connect(mapStateToProps, { logout })(MainMenu);