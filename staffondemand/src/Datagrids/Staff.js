import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { signup } from '../Actions.js'
import history from '../History';
import axios from 'axios';
import { connect } from 'react-redux';

class Staff extends Component{

    constructor(props) {
        super(props)
        this.state = {
            staff: ['']
           

        };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/staff/all').then(res => {
            this.setState({ staff: res.data });
            console.log(this.state.staff);
        });
  
    }
    render(){
        const {staff} = this.state;
        console.log({staff});
        let staffItems = staff.map((u) =>
        <tr>
        <td>{u.firstname}</td>
        <td>{u.lastname}</td>
        <td>{u.phone}</td>
        <td>{u.bio}</td>
        <td>{u.region1}</td>
        <td>{u.region2}</td>
        <td>{u.region3}</td>
        <td>{u.area1}</td>
        <td>{u.area2}</td>
        <td>{u.area3}</td>
        <td>{u.createdby}</td>
        <td><button type="button" class="btn btn-success btn-sm">Edit</button></td>
        <td><button type="button" class="btn btn-success btn-sm">Delete</button></td>
      </tr>
            
        );
        return(
  
  <div >
      <h4>Staff</h4>
            <table class="table table-striped">
            <thead>
    <tr>
     
     
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Bio</th>
      <th scope="col">Region 1</th>
      <th scope="col">Region 2</th>
      <th scope="col">Region 3</th>
      <th scope="col">Area 1</th>
      <th scope="col">Area 2</th>
      <th scope="col">Area 3</th>
     
     
      
    </tr>
  </thead>
  <tbody>
  {staffItems}
    
  </tbody>
</table>  
              
          </div>
        );
      }
}

export default Staff;