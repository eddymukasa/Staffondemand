import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import checkMark from '../Assets/Images/checkMarkCheckout.png';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';

class AdvancedBookings extends Component{

    constructor(props) {
        super(props);
        
      }
    render(){

        // if (!this.props.advancedBooking) {
        //     return null;
        //   }

        return(
            <div>
            <div class="card-header">
    <h6>BOOKINGS THIS WEEK</h6>
    </div>
    <div class = "CheckoutDaysDiv">
    <img class="tickCheckout" src={checkMark} alt="Card image cap"/><label class="CheckoutDays">MONDAY</label> 
   <img class="tickCheckout" src={checkMark} alt="Card image cap"/><label class="CheckoutDays">WENESDAY</label>  
    <img class="tickCheckout" src={checkMark} alt="Card image cap"/><label class="CheckoutDays">FRIDAY</label>  
</div>
  
  <div class="card-header">
  <h6>BOOKINGS NEXT WEEK</h6>
  </div>
  <div class = "CheckoutDaysDiv">
  <img class="tickCheckout" src={checkMark} alt="Card image cap"/>MONDAY 
    <img class="tickCheckout" src={checkMark} alt="Card image cap"/>WENESDAY 
    <img class="tickCheckout" src={checkMark} alt="Card image cap"/>FRIDAY 
    </div>
</div>
        );
    }
}

export default AdvancedBookings;