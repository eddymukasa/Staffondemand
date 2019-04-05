import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './Profile.css';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';

class Feedback extends Component{

    constructor(props) {
        super(props)
        this.state = {
           rating:1
           

        };

            }

            onStarClick(nextValue, prevValue, name) {
                this.setState({rating: nextValue});
              }

              onFeedbackClick(e) {
                this.setState({ securityquestions: e.target.value });
               
            }

    render(){
        const { rating } = this.state;

      return(
        
        <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Please provide us with a review</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
              <h4>Rating</h4>
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
        <br></br>
        <h4>Feedback</h4>
        <textarea class="form-control" rows="3" placeholder="Please enter comments on here about your experience"maxlength="400"></textarea>
             <label>400 Characters</label>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>

      );
    }
  }
  
  export default Feedback;