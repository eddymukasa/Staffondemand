import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './ConfirmBooking.css';
import progressbar1 from '../Assets/Images/ProgressBar1.png';
import child from '../Assets/Images/child.jpg';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { connect } from 'react-redux';

class ConfirmBooking extends Component{

    
    render(){
 
        return(
            <div progressbar>
                <img  class="img-fluid" src={progressbar1} alt="progress bar cap"/>
            <div class="card confirm">
  <div class="card-header">
    <h4>CONFIRM BOOKING</h4>
  </div>
  <div class="card-body confirmBody">
  <h5 class="card-title ">STAFF DETAILS</h5>
    <img  class="img-thumbnail confirmImg" src={child} alt="progress bar cap"/><br></br>
    <label><b>Name :</b> </label><label> John Doe</label><br></br>
    <label><b>Cost of Booking :</b></label><label> £30</label>   
    
    <h6 class="card-header mb-2 text-muted">Select date - This week</h6>
    <input class="checkbox" type="checkbox" value=""></input><label>Monday</label>
        <input class="checkbox"type="checkbox" value=""></input><label>Tuesday</label>
        <input class="checkbox"type="checkbox" value=""></input><label>Wednesday</label>
        <input class="checkbox"type="checkbox" value=""></input><label>Thursday</label>
        <input class="checkbox"type="checkbox" value=""></input><label>Friday</label>
        <input class="checkbox"type="checkbox" value=""></input><label>Saturday</label>
        <input class="checkbox"type="checkbox" value=""></input><label>Sunday</label>

    <h6 class="card-header mb-2 text-muted">Select date - Next week</h6>
    <input class="checkbox"type="checkbox" value=""></input><label>Monday</label>
        <input class="checkbox"type="checkbox" value=""></input><label>Tuesday</label>
        <input class="checkbox"type="checkbox" value=""></input><label>Wednesday</label>
        <input class="checkbox"type="checkbox" value=""></input><label>Thursday</label>
        <input class="checkbox"type="checkbox" value=""></input><label>Friday</label>
        <input class="checkbox"type="checkbox" value=""></input><label>Saturday</label>
        <input class="checkbox"type="checkbox" value=""></input><label>Sunday</label>
        
        <div id="confirmationBtn" >
        <Link to="/Staff/"><button id="backBtn" type="button" class="btn btn-primary btn-lg">BACK</button></Link>
        <Link to="/Staff/Review"><button id="nextBtn" type="button" class="btn btn-success btn-lg">NEXT</button></Link>
</div>
  </div>
</div>
</div>
        );
    }
}   

function mapStateToProps(state) {
    return {
      name: state.namestaff
      
    };
  }
export default connect(mapStateToProps) (ConfirmBooking);