import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './Profile.css';
import FeedBack from './Feedback.js'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import BookingsStaff from '../Datagrids/BookingsStaff';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class Profile extends Component{

    constructor(props) {
        super(props)
        this.state = {
            name: ''
           

        };

        




    }

    render(){

        const isAuthenticated  = this.props.auth
      const role = this.props.role
      console.log(role);
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
                                    <p class="proile-rating">RANKINGS : <span>8/10</span></p>
                                              
                        </div>
                    </div>
                    <div class="col-md-2">
                        {/* <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/> */}
                        <Link to="/Staff/Booking"><button type="button" class="btn btn-success btn-lg">Book</button></Link>
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
                <BookingsStaff/>
                <FeedBack/>
                {/* {(isAuthenticated&&role=='[client]' )&&<div class = "editprofile">
<Link to="/Client/EditProfile"> <button  type="button" class="btn btn-secondary btn-sm " >Edit Profile</button>
</Link></div>
           }
           {(isAuthenticated&&role=='[staff]' )&&
<Link to="/Staff/EditProfile"><button id="editprofile" type="button" class="btn btn-secondary btn-sm " >Edit Profile</button></Link>
           } */}
            </form>  
            
        </div>
      );
    }
  }

  Profile.propTypes = {
    auth: PropTypes.object.isRequired,
    
  
  }
  
  function mapStateToProps(state) {
    return {
      auth: state.isAuthenticated,
      role: state.user.role
    };
  }
  
    export default connect(mapStateToProps) (Profile);