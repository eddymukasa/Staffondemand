import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './ReviewBooking.css';
import progressbar2 from '../Assets/Images/ProgressBar2.png';
import child from '../Assets/Images/child.jpg';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import PaypalButton from '../Payments/PaypalButton';
import AdvancedBookings from '../Staff/AdvancedBookings';
const CLIENT = {
    sandbox: 'AQMDiUw566l_ZsRDDhvGG3qVaYQzcIbcFTC3U7LVmIP-0KYjjmWVYmLb1gyBX9TMRZQFYVCSEAmkukDQ',
    production: 'xxxXXX',
  };
  
// const ENV = process.env.NODE_ENV === 'production'
//     ? 'production'
//     : 'sandbox';
const ENV = 'sandbox';


    
class AdvancedReviewBooking extends Component{


    constructor(props) {
        super(props);
        
      }
    render(){

       let showAdvancedBookings = this.props.advancedBooking
       console.log(this.props.advancedBooking);
        const onSuccess = (payment) =>{
        <Redirect to="/Staff/Confirmation"/>;
        }
    //   console.log('Successful payment!', payment);

    const onError = (error) =>
      console.log('Erroneous payment OR failed to load script!', error);

    const onCancel = (data) =>
      console.log('Cancelled payment!', data);

        return(
            <div>

            <img  class="img-fluid" src={progressbar2} alt="progress bar cap"/>

<div>
  <div class="container ">
  <div class="row">
    <div class="col-sm-8">
    <div class="card-header">
    <h5>REVIEW BOOKING</h5>
  </div>
  <div id="review1">
    <img  class="img-thumbnail reviewImg" src={child} alt="progress bar cap"/>
    <p><b>Name :</b>  John Doe</p>
    <p><b>Location :</b> Location</p>
    <p><b>Cost of Booking :</b> £30</p> </div>
     <AdvancedBookings/>   
    <div id="backBtnReview">
    <Link to="/Staff/Booking"><button type="button" class="btn btn-primary btn-lg">BACK</button></Link>
    </div>
    </div>
    <div class="col-sm-4">
    <div class="card-header">
    <h5>ORDER SUMMARY</h5>
    <div class="widget">
                        
                        <div class="summary-block">
                            <div class="summary-content">
                                <div class="summary-head"><h5 class="summary-title">Cost per booking</h5></div>
                                <div class="summary-price">
                                    <p class="summary-text">£30</p>
                                </div>
                            </div>
                        </div>
                        <div class="summary-block">
                            <div class="summary-content">
                               <div class="summary-head"> <h5 class="summary-title">Number of bookings </h5></div>
                                <div class="summary-price">
                                    <p class="summary-text">6</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="summary-block">
                            <div class="summary-content">
                               <div class="summary-head"> <h5 class="summary-title">Total</h5></div>
                                <div class="summary-price">
                                    <p class="summary-text">£180 </p>                                </div>
                            </div>
                        </div>
                    </div>
                    <PaypalButton client={CLIENT}
          env={ENV}
          commit={true}
          currency={'GBP'}
          total={180}
          onSuccess={onSuccess}
          onError={onError}
          onCancel={onCancel}
        />
                    {/* <button type="button" class="btn btn-success btn-lg btn-block">PLACE BOOKING</button> */}
  </div>
            </div>
</div>
</div>
</div>
</div>
        );}
}

export default AdvancedReviewBooking;