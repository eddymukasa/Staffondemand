import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './Profiles.css';
import Profilecard from './Profilecard';
class Profiles extends Component{

    
    render(){

        return(
            <div className = 'Row'>
            <div className = 'Column'>
                <Profilecard/>
                <Profilecard/>
                <Profilecard/>
            </div>
            <div className = 'Column'>
                <Profilecard/>
                <Profilecard/>
                <Profilecard/>
            </div>
            <div className = 'Column'>
                <Profilecard/>
                <Profilecard/>
                <Profilecard/>
            </div>
</div>
        );
    }
}

export default Profiles;