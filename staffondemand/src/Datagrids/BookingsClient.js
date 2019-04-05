import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { signup } from '../Actions.js'
import history from '../History';
import axios from 'axios';
import { connect } from 'react-redux';

class BookingsClient extends Component{

    constructor(props) {
        super(props)
        this.state = {
            bookings: ['']
           

        };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/bookings/all').then(res => {
            this.setState({ bookings: res.data });
            console.log(this.state.bookings);
        });
  
    }
    render(){
        const {bookings} = this.state;
        console.log({bookings});
        let bookingsItems = bookings.map((u) =>
        <tr>
        <td>{u.staff}</td>
        <td>{u.dateofbooking}</td>
        <td>{u.starttime}</td>
        <td>{u.endtime}</td>
        <td><button type="button" class="btn btn-success btn-sm" data-toggle="modal" data-target="#exampleModalLong">
  Feedback
</button></td>
      </tr>
            
        );
        return(
  
  <div >  
<br></br>
<div class="card text-center">
  <div class="card-header">
  <h4>Upcoming Bookings</h4>
  </div>
  
    
  <table >
            <thead>
    <tr>
     
    <th scope="col">Staff</th>
      <th scope="col">Date Booked</th>
      <th scope="col">Start Time</th>
      <th scope="col">End Time</th>
      <th scope="col">Review</th>
      
    </tr>
  </thead>
  <tbody>
  {bookingsItems}
    
  </tbody>
</table> 
  
  <div class="card-footer text-muted">
    2 days ago
  </div>
</div>
<br></br>
<div class="card text-center">
  <div class="card-header">
  <h4>Completed Bookings</h4>
  </div>
  <table >
            <thead>
    <tr>
     
    <th scope="col">Staff</th>
      <th scope="col">Date Booked</th>
      <th scope="col">Start Time</th>
      <th scope="col">End Time</th>
      <th scope="col">Review</th>
      
    </tr>
  </thead>
  <tbody>
  {bookingsItems}
    
  </tbody>
</table> 
  
  <div class="card-footer text-muted">
    2 days ago
  </div>
</div>
              
          </div>
        );
      }
}

export default BookingsClient;