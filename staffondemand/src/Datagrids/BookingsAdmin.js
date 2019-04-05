import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { signup } from '../Actions.js'
import history from '../History';
import axios from 'axios';
import { connect } from 'react-redux';

class BookingsAdmin extends Component{

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
        <td>{u.bookedby}</td>
        <td>{u.dateofbooking}</td>
        <td>{u.feedback}</td>
        <td>{u.reason}</td>
        <td>{u.status}</td>
        <td>{u.staff}</td>
        <td><button type="button" class="btn btn-success btn-sm">Edit</button></td>
        <td><button type="button" class="btn btn-success btn-sm">Delete</button></td>
      </tr>
            
        );
        return(
  
  <div >
      <h4>Bookings</h4>
            <table class="table table-striped">
            <thead>
    <tr>
     
      <th scope="col">Staff</th>
      <th scope="col">Booked By</th>
      <th scope="col">Date Booked</th>
      <th scope="col">Status</th>
      <th scope="col">Comment</th>
      <th scope="col">Feedback</th>
      <th scope="col">Action</th>
      
    </tr>
  </thead>
  <tbody>
  {bookingsItems}
    
  </tbody>
</table>  
<div class="card text-center">
  <div class="card-header">
  <h4>Bookings</h4>
  </div>
  <div class="card-body">
    
  <table >
            <thead>
    <tr>
     
      <th scope="col">Staff</th>
      <th scope="col">Booked By</th>
      <th scope="col">Date Booked</th>
      <th scope="col">Status</th>
      <th scope="col">Comment</th>
      <th scope="col">Feedback</th>
      <th scope="col">Action</th>
      
    </tr>
  </thead>
  <tbody>
  {bookingsItems}
    
  </tbody>
</table> 
  </div>
  <div class="card-footer text-muted">
    2 days ago
  </div>
</div>
          </div>
        );
      }
}

export default BookingsAdmin;