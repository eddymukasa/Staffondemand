import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './Feedback.css';
import StarRatingComponent from 'react-star-rating-component';
import axios from 'axios';
import { connect } from 'react-redux';
class Feedback extends Component{

    constructor(props) {
        super(props)
        this.state = {
            feedback: [''],

            rating:0
           

        };


    }

    componentDidMount() {

        const user = this.props.user

        axios.get('http://localhost:8080/staff/'+user).then(res => {
            
            this.setState({ feedback: res.data });
            console.log(this.state.feedback);
        });

               
    }

    render(){

        const isAuthenticated  = this.props.auth
      const role = this.props.role
      console.log(role);
      return(
        <div class="review">
        <div class="row">
                                        <div class="col-md-6">
                                            <p>Rahul Roy</p>
                                        </div>
                                       
                                    </div>
        <div class="row text-success">
                                        <div class="col-md-12">
                                            <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
                                        </div>
                                    </div>
        <div class="row pt-2">
                                        <div class="col-md-12">
                                            <h6>Lorem ipsum dolor sit amety</h6>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        </div>
                                    </div>
       
       </div>
      );
    }
  }

  function mapStateToProps(state) {
    return {
      auth: state.isAuthenticated,
      user: state.user.sub
    };
  }
  export default connect(mapStateToProps) (Feedback);