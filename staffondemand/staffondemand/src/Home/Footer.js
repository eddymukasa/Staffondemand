
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './Footer.css';
import facebookImg from '../Assets/Images/facebook.png';
import twitterImg from '../Assets/Images/twitter.png';

class Footer extends Component{

    render(){
      return(
        <div class="footer">
        <div className = "Row">
          <div className = "Column">
          <a href="https://www.w3schools.com">
<img class="socials" border="0" alt="W3Schools" src={facebookImg} width="100" height="100"></img>
</a>           
<a href="https://www.w3schools.com">
<img class="socials" border="0" alt="W3Schools" src={twitterImg} width="100" height="100"></img>
</a>      


          </div>
          <div className = "Column">
          <ul>
        <li><a href="">Nurseries</a></li>
        <li><a href="">Staff</a></li>
        <li><a href="">About us</a></li>
        <li><a href="">Faq</a></li>
        <li><a href="">Contact us</a></li>
          </ul>
          </div>
          <div className = "Column">
          <ul>
        <li><a href="">Terms and conditions</a></li>
        <li><a href="">Privacy statement</a></li>
        
          </ul>
          
          </div>
          
          </div>
          <p>&copy; Staff on Demand</p>
        </div>
      );
    }
  }

  export default Footer;