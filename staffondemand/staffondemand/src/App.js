import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './App.css';
import childImage from './Assets/Images/child.jpg'
import Profiles from './Staff/Profiles'
import Home from './Home/Home'
import MainMenu from './Home/MainMenu'
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
        <header className="App-header">
          <Logo/>  
          <div className ="LoginInfo">
          <LogInButton/>
          &nbsp;
          <SignUpButton/>
          </div>
        </header> 
        <MainMenu/>       
        {/* <div><HomeImg/></div>
        <div className = "ServicesOffered">
          <ServicesCard/>
        </div>
        <div className = "ServicesOffered">
          <HowItWorks/>
        </div>
        <Footer/> */}

      </div>
      
    );
  }
}

export default App;
