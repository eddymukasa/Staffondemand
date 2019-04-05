import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './SignUp.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from '../SignUp/Login';
import { signup } from './../Actions.js'
import TextFieldGroup from './../Common/TextFieldGroup.js'
import TextFieldGroupReadOnly from './../Common/TextFieldGroupReadOnly.js'
import validateInputClient from './../Validations/ClientSignup.js'
import validateInputStaff from './../Validations/StaffSignup.js'
import history from './../History';
import axios from 'axios';
import { connect } from 'react-redux';

class SignUp extends Component {

    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            password: '',
            confirmpassword: '',
            securityquestion: '',
            answer: '',
            email: '',
            phone: '',
            urn: [''],
            urnClient:'',
            providername: '',
            address: '',
            location: '',
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
            area: [""], 
            errors:{},
            isLoading:false
        };

        this.onChange = this.onChange.bind(this);
        this.onQuestionChange = this.onQuestionChange.bind(this);
        this.onQuestionsChange = this.onQuestionsChange.bind(this);
        this.onUrnChange = this.onUrnChange.bind(this);
        this.onSubmitClient = this.onSubmitClient.bind(this);
        this.onSubmitStaff = this.onSubmitStaff.bind(this);
        this.onRegion1Change = this.onRegion1Change.bind(this);
        this.onRegion2Change = this.onRegion2Change.bind(this);
        this.onRegion3Change = this.onRegion3Change.bind(this);
        this.onArea1Change = this.onArea1Change.bind(this);
        this.onArea2Change = this.onArea2Change.bind(this);
        this.onArea3Change = this.onArea3Change.bind(this);



    }

    componentDidMount() {
        axios.get('http://localhost:8080/ofsted/regions').then(res => {
            res.data.unshift("Select Region");
            this.setState({ preferredregion1: res.data });
            console.log(this.state.preferredregion1);
        });

        axios.get('http://localhost:8080/ofsted/urns').then(res => {
            res.data.unshift("Select URN");
            this.setState({ urn: res.data });
            console.log(this.state.regions);
        });

        
    }

    isValidClient() {
        const { errors, isValid } = validateInputClient(this.state);

        if (!isValid) {
            this.setState({ errors });
        }

        return isValid;
    }
    isValidStaff() {
        const { errors, isValid } = validateInputStaff(this.state);

        if (!isValid) {
            this.setState({ errors });
            console.log(errors)
        }

        return isValid;
    }

    onChange = (e) => {
        console.log(e.target.name + e.target.value );

        this.setState({ [e.target.name]: e.target.value });
    }

    onUrnChange(e) {
        this.setState({ urnClient: e.target.value });
      
        if(e.target.value==="Select URN"){

            this.setState({ providername: "Provider Name" });
            this.setState({ address: "Address" });
            this.setState({ location: "Location" });
        }else{
            let x = e.target.value
            axios.get('http://localhost:8080/ofsted/urns/' + x).then(res => {

            this.setState({ providername: res.data.providerName });
            this.setState({ address: res.data.postcode });
            this.setState({ location: res.data.localAuthority });
            console.log(this.state.regions);
        });
        }
        
    }

    onRegion1Change(e) {
        this.setState({ region1: e.target.value });

        if(e.target.value === "Select Region"){
            this.setState({ preferredarea1: [''] });
        }else{
           
            let x = e.target.value
        axios.get('http://localhost:8080/ofsted/area/' + x).then(res => {
            res.data.unshift("Select Area (Optional)");
            this.setState({ preferredarea1: res.data });

        });
        }
        
    }

    onRegion2Change(e) {
        this.setState({ region2: e.target.value });
        if(e.target.value === "Select Region"){
            this.setState({ preferredarea1: [''] });
        }else{
            let x = e.target.value
            axios.get('http://localhost:8080/ofsted/area/' + x).then(res => {
                res.data.unshift("Select Area (Optional)");
                this.setState({ preferredarea2: res.data });
    
            });
        }
        
    }

    onRegion3Change(e) {
        this.setState({ region3: e.target.value });
        if(e.target.value){
            this.setState({ preferredarea1: [''] });
        }else{
            let x = e.target.value
        axios.get('http://localhost:8080/ofsted/area/' + x).then(res => {
            res.data.unshift("Select Area (Optional)");
            this.setState({ preferredarea3: res.data });

        });
        }
        
    }

    onArea1Change(e) {
        
        this.setState({ area1: e.target.value });
    

    }

    onArea2Change(e) {
     
        this.setState({ area2: e.target.value });
      

    }

    onArea3Change(e) {
     
        this.setState({ area3: e.target.value });
       
    }

    onQuestionChange(e) {
        this.setState({ securityquestion: e.target.value });
        
        
    }

    onQuestionsChange(e) {
        console.log(e.target.value);

        this.setState({ securityquestions: e.target.value });
       
    }


    onSubmitClient = (e) => {
        e.preventDefault();
        console.log("here");
        
        
        if (this.isValidClient()) {
            this.setState({ errors: {}, isLoading: true });
           
            axios.post('http://localhost:8080/users/signupclient/',{email:this.state.email,password:this.state.password,firstname:this.state.firstname,lastname:this.state.lastname,confirmpassword:this.state.confirmpassword,securityquestion:this.state.securityquestion,answer:this.state.answer,phone:this.state.phone,urn:this.state.urnClient,providername:this.state.providername,postcode:this.state.postcode, region:this.state.region}).then(res => {

            history.push('/')

        },err=>{
            console.log("error", err);
        });
        }

    }

    onSubmitStaff = (e) => {
        console.log("here2");
        e.preventDefault();
if (this.isValidStaff()) {
            this.setState({ errors: {}, isLoading: true });

           
            axios.post('http://localhost:8080/users/signupstaff/',{firstnames:this.state.firstnames,lastnames:this.state.lastnames,emails:this.state.emails,phones:this.state.phones,passwords:this.state.passwords,confirmpasswords:this.state.confirmpasswords,securityquestions:this.state.securityquestions,answers:this.state.answers,region1:this.state.region1,region2:this.state.region2,region3:this.state.region3,area1:this.state.area1,area2:this.state.area2,area3:this.state.area3}).then(res => {

            history.push('/')

        },err=>{
            console.log("error", err);
        });
        }

    }
    render() {


        const { firstname, lastname, password, confirmpassword, securityquestion, answer, email, phone, urn, providername, address, location, firstnames, lastnames, emails, phones, preferredregion1, preferredregion2, preferredregion3, passwords, confirmpasswords, securityquestions, answers, preferredarea1, preferredarea2, preferredarea3, isLoading, regions, areas,area1,region1, errors } = this.state;

        let optionUrnItems = urn.map((u) =>
            <option >{u}</option>
        );

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


            <div class="container register">
                <div class="row">

                    <div class="col-md-3 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                        <h3>Welcome</h3>

                        <Link to="/Login/"> <input type="submit" name="" value="Login" /><br /></Link>
                        <Route path="/Login/" component={Login} />
                    </div>
                    <div class="col-md-9 register-right">
                        <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Client</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Staff</a>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 class="register-heading">Sign Up as a Client</h3>
                                <div class="row register-form">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <TextFieldGroup
                                                field="firstname"
                                                label="First Name"
                                                value={firstname}
                                                error={errors.firstname}
                                                onChange={this.onChange}
                                            />
                                        </div>
                                        <div class="form-group">
                                            <TextFieldGroup
                                                field="lastname"
                                                label="Last Name"
                                                value={lastname}
                                                error={errors.lastname}
                                                onChange={this.onChange}
                                            />
                                        </div>
                                        <div class="form-group">
                                            <TextFieldGroup
                                                field="password"
                                                label="Password"
                                                value={password}
                                                error={errors.password}
                                                onChange={this.onChange}
                                                type="password"
                                            />
                                        </div>
                                        <div class="form-group">
                                            <TextFieldGroup
                                                field="confirmpassword"
                                                label=" Confirm Password"
                                                value={confirmpassword}
                                                error={errors.confirmpassword}
                                                onChange={this.onChange}
                                                type="password"
                                            />
                                        </div>
                                        <div class="form-group">
                                            <select class="form-control" onChange={this.onQuestionChange}>
                                                <option class="hidden" selected disabled>Security Question</option>
                                                <option class="hidden"  >What is the name of your favorite pet?</option>
                                                <option class="hidden"  >What was your childhood nickname?</option>
                                                <option class="hidden"  >In what town was your first job?</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <TextFieldGroup
                                                field="answer"
                                                label="Enter your answer"
                                                value={answer}
                                                error={errors.answer}
                                                onChange={this.onChange}
                                            />
                                        </div>

                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <TextFieldGroup
                                                field="email"
                                                label="Your Email"
                                                value={email}
                                                error={errors.email}
                                                onChange={this.onChange}
                                            />
                                        </div>
                                        <div class="form-group">
                                            <TextFieldGroup
                                                field="phone"
                                                label="Your Phone"
                                                value={phone}
                                                error={errors.phone}
                                                onChange={this.onChange}
                                            />
                                            {/* <input type="text" minlength="10" maxlength="10" name="txtEmpPhone" class="form-control" placeholder="Your Phone *" value="" /> */}
                                        </div>
                                        <div class="form-group">

                                            <select class="form-control" onChange={this.onUrnChange}>
                                                {optionUrnItems}
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <TextFieldGroupReadOnly
                                                field="providername"
                                                label="Provider Name"
                                                value={providername}
                                                onChange={this.onChange}
                                            />
                                        </div>
                                        <div class="form-group">
                                            <TextFieldGroupReadOnly
                                                field="address"
                                                label="Address "
                                                value={address}
                                                onChange={this.onChange}
                                            />
                                        </div>
                                        <div class="form-group">
                                            <TextFieldGroupReadOnly
                                                field="location"
                                                label="Location"
                                                value={location}
                                                onChange={this.onChange}
                                            />
                                        </div>
                                        <button className="btnRegister" disabled={isLoading} onClick={this.onSubmitClient}> Register </button>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <h3 class="register-heading">Sign up as Staff</h3>
                                <div class="row register-form">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <TextFieldGroup
                                                field="firstnames"
                                                label="First Name"
                                                value={firstnames}
                                                error={errors.firstnames}
                                                onChange={this.onChange}
                                            />
                                        </div>
                                        <div class="form-group">
                                            <TextFieldGroup
                                                field="lastnames"
                                                label="Last Name"
                                                value={lastnames}
                                                error={errors.lastnames}
                                                onChange={this.onChange}
                                            />
                                        </div>
                                        <div class="form-group">
                                            <TextFieldGroup
                                                field="emails"
                                                label="Your Email"
                                                value={emails}
                                                error={errors.emails}
                                                onChange={this.onChange}
                                            />
                                        </div>
                                        <div class="form-group">
                                        <TextFieldGroup
                                                field="phones"
                                                label="Phone"
                                                value={phones}
                                                error={errors.phones}
                                                onChange={this.onChange}
                                            />
                                        </div>
                                        <div class="form-group">
                                            <select class="form-control" onChange={this.onRegion1Change}>
                                                {optionRegionsItems}
                                            </select>
                                            <span className="help-block">{errors.region1}</span>
                                        </div>
                                        <div class="form-group">
                                            <select class="form-control"  onChange={this.onRegion2Change}>
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
                                                error={errors.passwords}
                                                onChange={this.onChange}
                                                type="password"
                                            />
                                        </div>
                                        <div class="form-group">
                                        <TextFieldGroup
                                                field="confirmpasswords"
                                                label="Confirm Password"
                                                value={confirmpasswords}
                                                error={errors.confirmpasswords}
                                                onChange={this.onChange}
                                                type="password"
                                            />
                                        </div>

                                        <div class="form-group">
                                            <select class="form-control"  onChange={this.onQuestionsChange}>
                                                <option class="hidden" selected disabled>Please select your Sequrity Question</option>
                                                <option>What is your Birthdate?</option>
                                                <option>What is Your old Phone Number</option>
                                                <option>What is your Pet Name?</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                        <TextFieldGroup
                                                field="answers"
                                                label="Answer"
                                                value={answers}
                                                error={errors.answers}
                                                onChange={this.onChange}
                                            />
                                        </div>
                                        <div class="form-group">

                                            <select class="form-control"  onChange={this.onArea1Change}>
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


                                        <button className="btnRegister" disabled={isLoading} onClick={this.onSubmitStaff}> Register </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>



        );
    }
}

export default connect(null, { signup })(SignUp);