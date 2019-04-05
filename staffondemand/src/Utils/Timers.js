import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setstarttime, setactivitypack, setendtime } from './../Actions.js'
import './Timers.css';
import axios from 'axios';


class Timers extends Component{

  constructor(props) {
    super(props)
    this.state = {
        activityPackPrice: '',
        starttime: '',
        endtime: '',
        activityPack: false
       

    };
    this.onStartTimeChange = this.onStartTimeChange.bind(this);
    this.onEndTimeChange = this.onEndTimeChange.bind(this);
    this.onActivityPackChange = this.onActivityPackChange.bind(this);
}





  componentDidMount() {
    axios.get('http://localhost:8080/rates/currentrates').then(res => {
        this.setState({ activityPackPrice: res.data.activitypack });
        
    });

}

onStartTimeChange(e) {
  console.log("this.state.starttime"+ e.target.value);
  this.setState({ starttime: e.target.value });
  this.props.setstarttime(e.target.value)
  console.log(this.state.starttime);
  
}

onEndTimeChange(e) {
  
  this.setState({ endtime: e.target.value });
  this.props.setendtime(e.target.value)
  
}

onActivityPackChange(e) {

  console.log("this.state.starttime"+ e.target.checked);
  this.setState({ activityPack: e.target.checked });
  this.props.setactivitypack(e.target.checked)
  
}

    render(){
 
      const {activityPackPrice} = this.state;
        return(
            <div>

<select class="timerstart" onChange={this.onStartTimeChange}>
<option value="" selected disabled>Start time</option>
      <option>10:00</option>
      <option>10:15</option>
      <option>10:30</option>
      <option>10:45</option>
      <option>11:00</option>
      <option>11:15</option>
      <option>11:30</option>
      <option>11:45</option>
      <option>12:00</option>
      <option>12:15</option>
      <option>12:30</option>
      <option>12:45</option>
      <option>13:00</option>
      <option>13:15</option>
      <option>13:30</option>
      <option>13:45</option>
      <option>14:00</option>
      <option>14:15</option>
      <option>14:30</option>
      <option>14:45</option>
      <option>15:00</option>
      <option>15:15</option>
      <option>15:30</option>
      <option>15:45</option>
      <option>16:00</option>
      <option>16:15</option>
      <option>16:30</option>
      <option>16:45</option>
      <option>17:00</option>
      <option>17:15</option>
      <option>17:30</option>
      
    </select>

    <select class="timerend" onChange={this.onEndTimeChange}>
    <option value="" selected disabled>End time</option>
      <option>10:00</option>
      <option>10:15</option>
      <option>10:30</option>
      <option>10:45</option>
      <option>11:00</option>
      <option>11:15</option>
      <option>11:30</option>
      <option>11:45</option>
      <option>12:00</option>
      <option>12:15</option>
      <option>12:30</option>
      <option>12:45</option>
      <option>13:00</option>
      <option>13:15</option>
      <option>13:30</option>
      <option>13:45</option>
      <option>14:00</option>
      <option>14:15</option>
      <option>14:30</option>
      <option>14:45</option>
      <option>15:00</option>
      <option>15:15</option>
      <option>15:30</option>
      <option>15:45</option>
      <option>16:00</option>
      <option>16:15</option>
      <option>16:30</option>
      <option>16:45</option>
      <option>17:00</option>
      <option>17:15</option>
      <option>17:30</option>
      
    </select>
    <br></br>
    <div>
    <input type="checkbox" class="form-check-input" id="exampleCheck1" onChange={this.onActivityPackChange}></input>
    <label class="form-check-label" for="exampleCheck1">Activity Pack (Price: £{activityPackPrice})</label>
    </div>
            </div>

        );}
}




export default connect(null, { setstarttime,setendtime,setactivitypack })(Timers);