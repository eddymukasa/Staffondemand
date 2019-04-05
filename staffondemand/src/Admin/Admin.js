import React, { Component } from 'react';
import { connect } from 'react-redux';
import Bookings from './../Datagrids/BookingsAdmin.js'
import Clients from './../Datagrids/Client.js'
import Staff from './../Datagrids/Staff.js'

class Admin extends Component {
    render() {
        return (
            <div class="row">
            
            

  <div class="col-3">
  <div class="card-header">
    <b>DASHBOARD</b>
  </div>
    <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Bookings</a>
      <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Staff</a>
      <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Clients</a>
    </div>
  </div>
  <div class="col-9">
    <div class="tab-content" id="v-pills-tabContent">
      <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
            <Bookings/>
      </div>
      <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
      <Staff/>
      </div>
      <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
      
      <Clients/>
      </div>
    </div>
  </div>
</div>
        );
    }
}

function mapStateToProps(state) {
    return {

    };
}
export default connect(
    mapStateToProps,
)(Admin);