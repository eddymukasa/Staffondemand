import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';


class Profilecard extends Component{

    render(){

        return(
          <div className = 'Profilecard'>
            <div class="card">
    <img class="card-img-top" src="/Assets/images/child.jpg" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>
        );
    }
}

export default Profilecard;