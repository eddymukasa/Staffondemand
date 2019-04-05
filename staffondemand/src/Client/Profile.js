import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './Profile.css';
import Feedback from './Feedback.js';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import BookingsAdmin from '../Datagrids/BookingsClient';

import Client from '../Datagrids/Client';
import StarRatingComponent from 'react-star-rating-component';




class Profile extends Component{

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            rating:1
           

        };

        




    }
    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
      }
    render(){
        const { rating } = this.state;
      return(

<div class="container emp-profile">
            <form method="post">
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt=""/>
                            {/* <div class="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                            </div> */}
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head">
                                    <h5>
                                        Kshiti Ghelani
                                    </h5>
                                              
                        </div>
                    </div>
                    
                </div>
                <div class="row">
                    <div class="col-md-4">
                        
                    </div>
                    <div id="bio"class="col-md-8">
                    <div class="card-header">
    <h6>BIO</h6>
  </div>
  <br></br>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  
                    </div>
                </div>
                <BookingsAdmin/>
                <Client/>
              
                <Feedback/>
                
            </form>  
            
        </div>
      );
    }
  }
  
  export default Profile;