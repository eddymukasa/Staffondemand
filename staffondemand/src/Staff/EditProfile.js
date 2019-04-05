import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './EditProfile.css';
import validateInputClient from './../Validations/ClientSignup.js'
import validateInputStaff from './../Validations/StaffSignup.js'
import history from './../History';
import axios from 'axios';
import TextFieldGroup from './../Common/TextFieldGroup.js'
import TextFieldGroupReadOnly from './../Common/TextFieldGroupReadOnly.js'
import BookingsStaff from '../Datagrids/BookingsStaff';
import checkMark from '../Assets/Images/checkMarkCheckout.png';

class EditProfile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            firstnames: '',
            lastnames: '',
            emails: '',
            phones: '',
            preferredregion1: [''],
            preferredregion2: [''],
            preferredregion3: [''],
            region1: '',
            region2: '',
            region3: '',
            passwords: '',
            confirmpasswords: '',
            securityquestions: '',
            answers: '',
            preferredarea1: [''],
            preferredarea2: [''],
            preferredarea3: [''],
            area1: '',
            area2: '',
            area3: '',
            isLoading: false,
            regions: [""],
            area: [""]
        };

        this.onChange = this.onChange.bind(this);
        this.onQuestionsChange = this.onQuestionsChange.bind(this);
        this.onSubmitStaff = this.onSubmitStaff.bind(this);
        this.onRegion1Change = this.onRegion1Change.bind(this);
        this.onRegion2Change = this.onRegion2Change.bind(this);
        this.onRegion3Change = this.onRegion3Change.bind(this);
        this.onArea1Change = this.onArea1Change.bind(this);
        this.onArea2Change = this.onArea2Change.bind(this);
        this.onArea3Change = this.onArea3Change.bind(this);
    }

    componentDidMount() {
        const _this = this;
        axios.get('http://localhost:8080/ofsted/regions').then(res => {
            this.setState({ preferredregion1: res.data });
            console.log(this.state.preferredregion1);
        });

        axios.get('http://localhost:8080/ofsted/urns').then(res => {
            this.setState({ urn: res.data });
            console.log(this.state.regions);
        });


    }

    isValidStaff() {
        const { errors, isValid } = validateInputStaff(this.state);

        if (!isValid) {
            this.setState({ errors });
        }

        return isValid;
    }

    onChange = (e) => {
        console.log(e.target.name + e.target.value);

        this.setState({ [e.target.name]: e.target.value });
    }


    onRegion1Change(e) {
        this.setState({ region1: e.target.value });
        let x = e.target.value
        axios.get('http://localhost:8080/ofsted/area/' + x).then(res => {

            this.setState({ preferredarea1: res.data });

        });
    }

    onRegion2Change(e) {
        this.setState({ region2: e.target.value });
        let x = e.target.value
        axios.get('http://localhost:8080/ofsted/area/' + x).then(res => {

            this.setState({ preferredarea2: res.data });

        });
    }

    onRegion3Change(e) {
        this.setState({ region3: e.target.value });
        let x = e.target.value
        axios.get('http://localhost:8080/ofsted/area/' + x).then(res => {

            this.setState({ preferredarea3: res.data });

        });
    }

    onArea1Change(e) {
        console.log(e.target.value);
        this.setState({ area1: e.target.value });
        console.log(this.state.area1);

    }

    onArea2Change(e) {
        console.log(e.target.value);
        this.setState({ area2: e.target.value });
        console.log(this.state.area2);

    }

    onArea3Change(e) {
        console.log(e.target.value);
        this.setState({ area3: e.target.value });
        console.log(this.state.area3);
    }



    onQuestionsChange(e) {
        this.setState({ securityquestions: e.target.value });

    }




    onSubmitStaff = (e) => {
        console.log("here2");
        e.preventDefault();
        //if (this.isValidStaff()) {
        this.setState({ errors: {}, isLoading: true });


        axios.post('http://localhost:8080/users/Editstaff/', { firstnames: this.state.firstnames, lastnames: this.state.lastnames, emails: this.state.emails, phones: this.state.phones, passwords: this.state.passwords, confirmpasswords: this.state.confirmpasswords, securityquestions: this.state.securityquestions, answers: this.state.answers, region1: this.state.region1, region2: this.state.region2, region3: this.state.region3, area1: this.state.area1, area2: this.state.area2, area3: this.state.area3 }).then(res => {

            history.push('/')

        }, err => {
            console.log("error", err);
        });
        //}

    }
    render() {
        const { firstnames, lastnames, emails, phones, preferredregion1, preferredregion2, preferredregion3, passwords, confirmpasswords, securityquestions, answers, preferredarea1, preferredarea2, preferredarea3, isLoading, regions, areas } = this.state;



        let optionRegionsItems = preferredregion1.map((a) =>
            <option >{a}</option>
        );

        let optionAreaItems = preferredarea1.map((b) =>
            <option >{b}</option>
        );

        let optionAreaItems2 = preferredarea2.map((c) =>
            <option >{c}</option>
        );

        let optionAreaItems3 = preferredarea3.map((d) =>
            <option >{d}</option>
        );
        return (
            <div class="container">
                <div class="row m-y-2">

                    <div class="col-lg-4 text-lg-center">
                        <h2>Dashboard</h2>

                    </div>
                    <div class="col-lg-8">
                        <div class="alert alert-info alert-dismissable"> <a class="panel-close close" data-dismiss="alert">×</a>
                            This is an <strong>.alert</strong>. Use this to show important messages to the user.
                    </div>
                    </div>
                    <div class="col-lg-4 pull-lg-8 text-xs-center">
                        <img src="//placehold.it/150" class="m-x-auto img-fluid img-circle" alt="avatar" />
                        <h6 class="m-t-2">Upload a different photo</h6>
                        <label class="custom-file">
                            <input type="file" id="file" class="custom-file-input"></input>
                            <span class="custom-file-control">Choose file</span>
                        </label>
                        <button type="button" class="btn btn-danger btn-lg">Delete Account</button>


                    </div>
                    <div class="col-lg-8 push-lg-4 personal-info">
                        <label><b>PERSONAL INFORMATION</b></label>
                        <div class="row register-form">
                            <div class="col-md-6">


                                <div class="form-group">
                                    <TextFieldGroup
                                        field="emails"
                                        label="Your Email"
                                        value={emails}
                                        //error={errors.username}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div class="form-group">
                                    <TextFieldGroup
                                        field="phones"
                                        label="Phone"
                                        value={phones}
                                        //error={errors.username}
                                        onChange={this.onChange}
                                    />
                                </div>

                                <div class="form-group">
                                    <select class="form-control" onChange={this.onQuestionsChange}>
                                        <option class="hidden" selected disabled>Please select your Sequrity Question</option>
                                        <option>What is your Birthdate?</option>
                                        <option>What is Your old Phone Number</option>
                                        <option>What is your Pet Name?</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <select class="form-control" onChange={this.onRegion1Change}>
                                        {optionRegionsItems}
                                    </select>

                                </div>
                                <div class="form-group">
                                    <select class="form-control" onChange={this.onRegion2Change}>
                                        {optionRegionsItems}
                                    </select>

                                </div>
                                <div class="form-group">
                                    <select class="form-control" onChange={this.onRegion3Change}>
                                        {optionRegionsItems}
                                    </select>

                                </div>

                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <TextFieldGroup
                                        field="passwords"
                                        label="Password"
                                        value={passwords}
                                        //error={errors.username}
                                        onChange={this.onChange}
                                        type="password"
                                    />
                                </div>
                                <div class="form-group">
                                    <TextFieldGroup
                                        field="confirmpasswords"
                                        label="Confirm Password"
                                        value={confirmpasswords}
                                        //error={errors.username}
                                        onChange={this.onChange}
                                        type="password"
                                    />
                                </div>


                                <div class="form-group">
                                    <TextFieldGroup
                                        field="answers"
                                        label="Answer"
                                        value={answers}
                                        //error={errors.username}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div class="form-group">

                                    <select class="form-control" onChange={this.onArea1Change}>
                                        {optionAreaItems}
                                    </select>
                                </div>
                                <div class="form-group">
                                    <select class="form-control" onChange={this.onArea2Change}>
                                        {optionAreaItems2}
                                    </select>
                                </div>
                                <div class="form-group">
                                    <select class="form-control" onChange={this.onArea3Change}>
                                        {optionAreaItems3}
                                    </select>
                                </div>



                            </div>

                        </div>




                        <button className="btnUpdate" disabled={isLoading} onClick={this.onSubmitStaff}> Update </button>

                    </div>
                </div>

                <div class="container">
  <div class="row">
    
  
                <div class="col-md-3">
                    <div class="card text-center">


                        <div class="card-header">
                            <h4>AVAILABITY</h4>
                        </div>
                        <div class="card-body">
                            <h6 class="card-header mb-2 text-muted">Select date - This week</h6>

                            <div class="container">
  <div class="row">
    <div class="col">
      1 of 2
    </div>
    <div class="col">
      2 of 2
    </div>
    <div class="col">
      3 of 3
    </div>
  </div>
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col">
      2 of 3
    </div>
    
  </div>
  <button type="button" class="btn btn-success  btn-block" onClick ={this.onThisWeekUpdateClick}>Update</button>
</div>
                            <input class="checkbox" type="checkbox" value=""></input><label>Monday</label>
                            <input class="checkbox" type="checkbox" value=""></input><label>Tuesday</label>
                            <input class="checkbox" type="checkbox" value=""></input><label>Wednesday</label>
                            <input class="checkbox" type="checkbox" value=""></input><label>Thursday</label>
                            <input class="checkbox" type="checkbox" value=""></input><label>Friday</label>
                            <img class="tickCheckout" src={checkMark} alt="Card image cap"/><label class="CheckoutDays">WENESDAY</label>  

                            <h6 class="card-header mb-2 text-muted">Select date - Next week</h6>
                            <input class="checkbox" type="checkbox" value=""></input><label>Monday</label>
                            <input class="checkbox" type="checkbox" value=""></input><label>Tuesday</label>
                            <input class="checkbox" type="checkbox" value=""></input><label>Wednesday</label>
                            <input class="checkbox" type="checkbox" value=""></input><label>Thursday</label>
                            <input class="checkbox" type="checkbox" value=""></input><label>Friday</label>

                        </div>

                        <div class="card-footer text-muted">
                            2 days ago
  </div>

                    </div>

                </div>
                <div class="col-md-9"><BookingsStaff/></div>
                </div>
                {/* <BookingsStaff/> */}
            </div>
            </div>
        );
    }

}

export default EditProfile;