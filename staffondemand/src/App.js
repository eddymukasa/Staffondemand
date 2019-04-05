import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import childImage from './Assets/Images/child.jpg'
import Profiles from './Staff/Profiles'
import ProfileStaff from './Staff/Profile'
import ProfileClient from './Client/Profile'
import confirmBooking from './Staff/ConfirmBooking'
import reviewBooking from './Staff/ReviewBooking'
import advancedReviewBooking from './Staff/AdvancedReviewBooking'
import confirmation from './Staff/Confirmation'
import Home from './Home/Home'
import MainMenu from './Home/MainMenu'
import Nurseries from './Home/MainMenu'
import AboutUs from './Extras/AboutUs'
import Faq from './Extras/Faq'
import ContactUs from './Extras/ContactUs'
import EditProfileStaff from './Staff/EditProfile'
import EditProfileClient from './Client/EditProfile'
import SignUp from './SignUp/SignUp'
import Login from './SignUp/Login'
import Admin from './Admin/Admin'
import Feedback from './Staff/Feedback';
import AdvancedBookings from './Staff/AdvancedBookings';
class LoginInfo extends Component{

  render(){
    return(
      <div>
      <LogInButton/>
      <SignUpButton/>
      </div>
    );
  }
}

class LogInButton extends Component{

  render(){
    return(

      <button type="button" class="btn btn-success btn-lg">Log In</button>
        
    );
  }
}

class SignUpButton extends Component{

  render(){
    return(
      
      <button type="button" class="btn btn-primary btn-lg">Sign Up</button>
        
    );
  }
}
class Logo extends Component{

  render(){
    return(
        <h1 className="Logo">STAFF ON DEMAND</h1>
    );
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <Logo/>  
          <div className ="LoginInfo">
          <LogInButton/>
          &nbsp;
          <SignUpButton/>
          </div>
        </header>  */}
        <MainMenu/>
        <div className="App">
        <Route path="/" exact component={Home} />
          <Route path="/Home/"  component={Home} />
          <Route path="/Nurseries/" component={Nurseries} />
          <Route exact path="/Staff/" component={Profiles} />
          <Route path="/Staff/Profile" component={ProfileStaff} />
          <Route path="/Client/Profile" component={ProfileClient} />
          <Route path="/Admin" component={Admin} />
          <Route path="/Staff/Booking" component={confirmBooking} />
          <Route path="/Staff/Review" component={reviewBooking}  />
          <Route path="/Staff/AdvancedReviewBooking" component={advancedReviewBooking}  />
          <Route path="/Staff/Confirmation" component={confirmation} />
          <Route path="/Staff/EditProfile" component={EditProfileStaff} />
          <Route path="/Client/EditProfile" component={EditProfileClient} />
          <Route path="/AboutUs"  component={AboutUs} />
          <Route path="/Faq/" component={Faq} />
          <Route path="/Login/" component={Login} />
          <Route path="/SignUp/" component={SignUp} />
          <Route path="/ContactUs/" component={ContactUs} /> 
          </div> 

      </div>
      
    );
  }
}


App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  quote: PropTypes.string,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  isSecretQuote: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
  
  const { quotes, auth } = state
  const { quote, authenticated } = quotes
  const { isAuthenticated, errorMessage } = auth
  
  return {
    quote,
    isSecretQuote: authenticated,
    isAuthenticated,
    errorMessage
  }
}

export default App


