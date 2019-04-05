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
            upcomingbookings: [''],
            completebookings:['']
           

        };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/bookings/all').then(res => {
            this.setState({ upcomingbookings: res.data });
            console.log(this.state.bookings);
        });
  
    }
    render(){
        const {upcomingbookings,completebookings } = this.state;
        
        let upcomingbookingsItems = upcomingbookings.map((u) =>
        <tr>
        <td>{u.bookedby}</td>
        <td>{u.dateofbooking}</td>
        <td>{u.starttime}</td>
        <td>{u.endtime}</td>
        <td>{u.contact}</td>
        <td>{u.location}</td>
        <td><button type="button" class="btn btn-success btn-sm">Complete</button></td>
      </tr>
           ); 
        let completebookingsItems = completebookings.map((u) =>
        <tr>
        <td>{u.bookedby}</td>
        <td>{u.dateofbooking}</td>
        <td>{u.starttime}</td>
        <td>{u.endtime}</td>
        
        
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
     
    <th scope="col">Booked By</th>
      <th scope="col">Date Booked</th>
      <th scope="col">Start Time</th>
      <th scope="col">End Time</th>
      <th scope="col">Contact</th>
      <th scope="col">Location</th>
      
    </tr>
  </thead>
  <tbody>
  {upcomingbookingsItems}
    
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
     
    <th scope="col">Booked By</th>
      <th scope="col">Date Booked</th>
      <th scope="col">Start Time</th>
      <th scope="col">End Time</th>
      
      
    </tr>
  </thead>
  <tbody>
  {completebookingsItems}
    
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

export default BookingsAdmin;