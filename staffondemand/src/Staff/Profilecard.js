import 'bootstrap/dist/css/bootstrap.min.css';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import React, { Component } from 'react';
import './Profilecard.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { setstaff } from './../Actions.js'
import { connect } from 'react-redux';
import Timers from './../Utils/Timers.js'

const profileImageStyle = {
  width: '120px',
  height: '120px',
  border: '2px solid #f38181',
  
  
};

const profileCardStyle = { 
  backgroundColor: 'white',
  float: 'left',
  position: 'relative',
};

class Profilecard extends Component{

    constructor(props) {
        super(props);
        

        this.onBookClick = this.onBookClick.bind(this);
        this.onAdvancedBookClick = this.onAdvancedBookClick.bind(this);
      }
  
      onBookClick(){
          console.log(this.props.name)
        this.props.setstaff(this.props.name, this.props.email);
      }

      onAdvancedBookClick(){
        this.props.setstaff(this.props.name);
      }

    render(){
        
        let button
        button =   <Link to="/Staff/Review"><div class="bookBtn"><button type="button" class="btn btn-success btn-lg btn-block" onClick ={this.onBookClick}>Book Now</button></div></Link> 

        if (this.props.type) {
          button =   <Link to="/Staff/Booking"><div class="bookBtn"><button type="button" class="btn btn-success btn-lg btn-block " onClick ={this.onAdvancedBookClick}>Advanced Booking</button></div></Link> 
          }
        return(


<div class="container profile" style={ profileCardStyle}>

<div class="row">
      <div class="profile-header-container">   
      <div class="profile-header-img">
      <Link to="/Staff/Profile"><img  class="rounded-circle" style={ profileImageStyle} src= {this.props.imageUrl} /></Link>
              
              {/* <div class="rank-label-container">
                    
                  <span class="label label-default rank-label">50 puntos</span>
              </div> */}
              <div class="title">
             {this.props.name}
              </div>
              
              <div> {this.props.bio}</div>
              <div>
                <Timers/>


              </div>
              {button}
          </div>
      </div> 
</div>
</div>
        );
    }
}

export default connect(null, { setstaff })(Profilecard);