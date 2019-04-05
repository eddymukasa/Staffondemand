import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './Confirmation.css';
import progressbar3 from '../Assets/Images/ProgressBar3.png';



class Confirmation extends Component{

    render(){
 
        return(
            <div>

                                <img  class="img-fluid" src={progressbar3} alt="progress bar cap"/>
                                <div id ="confirmation">
                                <h2>Your booking is now complete</h2><br></br>

                                <h4>Your booking reference:</h4><br></br>

                                <p>You will receive an email shortly from us</p>
                                </div>

            </div>

        );}
}


export default Confirmation;