import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import HomeImg from'./HomeImg'
import Services from './Services'
import Footer from './Footer' 

class Home extends Component{
    render(){

        return(
            <div>
            <HomeImg/>
            <Services/>
            <Footer/>
            
            </div>

        );
    }
}

export default Home;