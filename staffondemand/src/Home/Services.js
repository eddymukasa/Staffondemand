import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './Services.css';
import childImage from '../Assets/Images/child.jpg'
import checkList from '../Assets/Images/list.png';
import checkMark from '../Assets/Images/checkMark.png';

class ServicesCard extends Component{
    render(){
      return(
        <div class="card-deck">
    <div class="card home">
      <img class="rounded-circle" src={childImage} alt="Card image cap"/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      
    </div>
    <div class="card home">
      <img class="rounded-circle" src={childImage} alt="Card image cap"/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      
    </div>
    <div class="card home">
      <img class="rounded-circle" src={childImage} alt="Card image cap"/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      
    </div>
  </div>
      );
    }
  }
  
  class HowItWorks extends Component{
    render(){
      return(
        <div class="howItworks">
              <img class="rounded-circle" src={checkList} alt="Card image cap"/>

        <h2><b>HOW IT WORKS</b></h2>
        <ul>
        <li><img class="tick" src={checkMark} alt="Card image cap"/>Lorem ipsum dolor sit amet, consectetur adipiscing elit </li>
        <li><img class="tick" src={checkMark} alt="Card image cap"/>Lorem ipsum dolor sit amet, consectetur adipiscing elit   </li>
        <li><img class="tick" src={checkMark} alt="Card image cap"/>Lorem ipsum dolor sit amet, consectetur adipiscing elit </li>
        <li><img class="tick" src={checkMark} alt="Card image cap"/>Lorem ipsum dolor sit amet, consectetur adipiscing elit </li>
        
  </ul>
        </div>
      )
    }
  }

  class Services extends Component{
    render(){
      return(
        <div>
            <ServicesCard/>
            <HowItWorks/>
        </div>
      )
    }
  }

  export default Services;