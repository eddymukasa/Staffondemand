
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './HomeImg.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class HomeImg extends Component{

  constructor(props) {
    super(props);
    

    // This binding is necessary to make `this` work in the callback
    this.signupBtnClicked = this.signupBtnClicked.bind(this);
  }

  signupBtnClicked() {
   
  }
    render(){

      const isAuthenticated  = this.props.auth
  return(
    <div class = "HomeImg">
    <div class="Home">
    <div class = "HomeContainer">
       <h1>Lorem ipsum dolor sit amet ipsum dolor sit amet</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
     
      {!isAuthenticated &&
     <div>
     <Link to="/SignUp/"><button onClick={this.signupBtnClicked}id="signupBtn" type="button" class="btn btn-primary btn-lg">Sign Up, it's free</button></Link>
      <p>Already a Member?<Link to="/Login/"> Log In </Link></p>
</div>
           }
     
    </div>
     </div>
    </div>
  );
  
    }
  }

  HomeImg.propTypes = {
    auth: PropTypes.object.isRequired,
    
  
  }
  function mapStateToProps(state) {
    return {
      auth: state.isAuthenticated
    };
  }

  export default connect(mapStateToProps) (HomeImg);