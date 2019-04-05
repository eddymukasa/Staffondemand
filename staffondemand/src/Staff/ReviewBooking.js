import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './ReviewBooking.css';
import progressbar2 from '../Assets/Images/ProgressBar2.png';
import child from '../Assets/Images/child.jpg';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import PaypalButton from '../Payments/PaypalButton';
import AdvancedBookings from '../Staff/AdvancedBookings';
import { connect } from 'react-redux';
import history from './../History';
import axios from 'axios';
const CLIENT = {
    sandbox: 'AQMDiUw566l_ZsRDDhvGG3qVaYQzcIbcFTC3U7LVmIP-0KYjjmWVYmLb1gyBX9TMRZQFYVCSEAmkukDQ',
    production: 'xxxXXX',
  };
  
// const ENV = process.env.NODE_ENV === 'production'
//     ? 'production'
//     : 'sandbox';
const ENV = 'sandbox';


    
class ReviewBooking extends Component{


    constructor(props) {
        super(props);
        this.state = {
          costperday: '',
          activitypackcost : ''
          
         
  
      };
        
      }

      componentDidMount() {
        
        axios.get('http://localhost:8080/rates/currentrates').then(res => {
          console.log(res.data.rate);
            this.setState({ costperday: res.data.rate });
            this.setState({activitypackcost:res.data.activitypack})
        });
    
    }
    render(){

      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1; //January is 0!
      var yyyy = today.getFullYear();

      if (dd < 10) {
        dd = '0' + dd;
      }

      if (mm < 10) {
        mm = '0' + mm;
      }

      today = mm + '/' + dd + '/' + yyyy;

      const costperday = this.state.costperday
      
      const {staffname, starttime, endtime, activitypack} = this.props
      let activitypackcost = 0
      if(activitypack){
       activitypackcost = this.state.activitypackcost

      }
       let showAdvancedBookings = this.props.advancedBooking
       console.log(this.props.advancedBooking);
        const onSuccess = (payment) =>{
            console.log(this.props.staffemail);
            axios.post('http://localhost:8080/booking/staff/',{staff:this.props.staffemail,bookedby:this.props.user.sub}).then(res => {

                history.push('/Staff/Confirmation')
    
            },err=>{
                console.log("error", err);
            });
       // <Redirect to="/Staff/Confirmation"/>;
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
    <p><b>Name :</b>  {staffname}</p>
    
    <p><b>Date of Booking :</b> {today}</p>
    <p><b>Start Time:</b> {starttime} <b>End Time:</b> {endtime}</p>
     </div>
    <div >
    <Link to="/Staff/Booking"><button type="button" class="btn btn-primary btn-lg">BACK</button></Link>
    </div>
    </div>
    <div class="col-sm-4">
    <div class="card-header">
    <h5>ORDER SUMMARY</h5>
    <div class="widget">
                        
                        <div class="summary-block">
                            <div class="summary-content">
                                <div class="summary-head"><h5 class="summary-title">Cost per hour</h5></div>
                                <div class="summary-price">
                                    <p class="summary-text">£{costperday}</p>
                                </div>
                            </div>
                        </div>
                        <div class="summary-block">
                            <div class="summary-content">
                               <div class="summary-head"> <h5 class="summary-title">Activity pack </h5></div>
                                <div class="summary-price">
                                    <p class="summary-text">£{activitypackcost}</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="summary-block">
                            <div class="summary-content">
                               <div class="summary-head"> <h5 class="summary-title">Total cost of your booking</h5></div>
                                <div class="summary-price">
                                    <p class="summary-text">£30 </p>                                </div>
                            </div>
                        </div>
                    </div>
                    <PaypalButton client={CLIENT}
          env={ENV}
          commit={true}
          currency={'GBP'}
          total={30}
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
function mapStateToProps(state) {
    return {
    user: state.user,
    staffname: state.namestaff,
    staffemail:state.staffemail,
    starttime: state.starttime,
    endtime: state.endtime,
    activitypack:state.activitypack

    };
  }
export default connect(mapStateToProps)(ReviewBooking);