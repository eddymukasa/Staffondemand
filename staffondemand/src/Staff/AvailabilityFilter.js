import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import './AvailabilityFilter.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class AvailabilityFilter extends Component{

    render(){

        return(

            <div id="accordion">


  <div class="card">
    <div class="card-header">
      <a class="card-link" data-toggle="collapse" href="#collapseOne">
        <h6>Availability - This Week</h6>
      </a>
    </div>
    <div id="collapseOne" class="collapse" data-parent="#accordion">
      <div class="card-body">
        
        <input type="checkbox" value=""></input><label>Monday</label><br></br>
        <input type="checkbox" value=""></input><label>Tuesday</label><br></br>
        <input type="checkbox" value=""></input><label>Wednesday</label><br></br>
        <input type="checkbox" value=""></input><label>Thursday</label><br></br>
        <input type="checkbox" value=""></input><label>Friday</label><br></br>
     

        
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header">
      <a class="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
      Availability - Next Week
      </a>
    </div>
    <div id="collapseTwo" class="collapse" data-parent="#accordion">
      <div class="card-body">
      <input type="checkbox" value=""></input><label>Monday</label><br></br>
        <input type="checkbox" value=""></input><label>Tuesday</label><br></br>
        <input type="checkbox" value=""></input><label>Wednesday</label><br></br>
        <input type="checkbox" value=""></input><label>Thursday</label><br></br>
        <input type="checkbox" value=""></input><label>Friday</label><br></br>
        

      </div>
    </div>
  </div>
  
  <Link to="/Staff/AdvancedReviewBooking"> <button type="button" class="btn btn-primary btn-lg btn-block">Apply Filter</button></Link>
</div>

        );
    }
}

export default AvailabilityFilter;