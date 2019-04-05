import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './Profiles.css';
import Profilecard from './Profilecard';
import axios from 'axios';
import AvailabilityFilter from './AvailabilityFilter';
class Profiles extends Component{

  constructor(props) {
    super(props)
    this.state = {
      staffprofiles: ['']
    };

    
}
    
  componentDidMount() {
    const _this = this;
    axios.get('http://localhost:8080/staff/all/').then(res => {
        this.setState({ staffprofiles: res.data });
        console.log(this.state.staffprofiles);
    });

  
}

    render(){
      const staff = this.state.staffprofiles;
      let image = "//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120"
      let name = "John Doe"
      let location = ""
      let bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur adipiscing elitconsectetur adipiscing elit, consectetur adipiscing elit"
      let IsAdvancedBooking = false
console.log(staff)
       let profilesList =  staff.map(element => (

        <Profilecard imageUrl={image} name={element.firstname + " "+ element.lastname} email={element.uid} bio={bio} type={IsAdvancedBooking}/>
         
       ))
      return(

<div>
  <div class="container profiles">
  <div class="row">
<div class="col-sm-3">
<AvailabilityFilter/>

    </div>
  
   
     <div class="col-sm-9">
    <div class="container ">
 
 <div class="row">
 <div class="col-sm-12 heading">
     <label>Showing x - y of z</label>
     </div>
   </div>
   <div class="row">
   <div class="wrapper">
{profilesList}

   </div>
     
    
 </div>
   {/* <div class="row">
   
   <div class="col-sm">
     <Profilecard imageUrl={image} name={name}location={location} bio={bio} type={IsAdvancedBooking}/>
     </div>
     <div class="col-sm">
     <Profilecard imageUrl={image} name={name}location={location} bio={bio} type={IsAdvancedBooking}/>
     </div>
     <div class="col-sm">
     <Profilecard imageUrl={image} name={name}location={location} bio={bio} type={IsAdvancedBooking}/>
     </div>
   </div> */}
 
   {/* <div class="row">
   
   <div class="col-sm">
     <Profilecard imageUrl={image} name={name}location={location} bio={bio} type={IsAdvancedBooking}/>
     </div>
     <div class="col-sm">
     <Profilecard imageUrl={image} name={name}location={location} bio={bio} type={IsAdvancedBooking}/>
     </div>
     <div class="col-sm">
     <Profilecard imageUrl={image} name={name}location={location} bio={bio} type={IsAdvancedBooking}/>
     </div>
   </div> */}
 
   {/* <div class="row">
   
   <div class="col-sm">
     <Profilecard imageUrl={image} name={name}location={location} bio={bio} type={IsAdvancedBooking}/>
     </div>
     <div class="col-sm">
     <Profilecard imageUrl={image} name={name}location={location} bio={bio} type={IsAdvancedBooking}/>
     </div>
     <div class="col-sm">
     <Profilecard imageUrl={image} name={name}location={location} bio={bio} type={IsAdvancedBooking}/>
     </div>
   </div> */}
 
   <nav aria-label="Page navigation example">
   <ul class="pagination justify-content-center">
     <li class="page-item">
       <a class="page-link" href="#" aria-label="Previous">
         <span aria-hidden="true">&laquo;</span>
         <span class="sr-only">Previous</span>
       </a>
     </li>
     <li class="page-item"><a class="page-link" href="#">1</a></li>
     <li class="page-item"><a class="page-link" href="#">2</a></li>
     <li class="page-item"><a class="page-link" href="#">3</a></li>
     <li class="page-item">
       <a class="page-link" href="#" aria-label="Next">
         <span aria-hidden="true">&raquo;</span>
         <span class="sr-only">Next</span>
       </a>
     </li>
   </ul>
 </nav>
 </div>

    </div> 
  </div>
  

  </div>

</div>


        );
    }
}

export default Profiles;