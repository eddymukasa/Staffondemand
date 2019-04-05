import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './EditProfile.css';
import TextFieldGroup from './../Common/TextFieldGroup.js'
import TextFieldGroupReadOnly from './../Common/TextFieldGroupReadOnly.js'
import validateInputClient from './../Validations/ClientSignup.js'
import validateInputStaff from './../Validations/StaffSignup.js'
import history from './../History';
import axios from 'axios';
import BookingsClient from '../Datagrids/BookingsClient';

class EditProfile extends Component {

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
            isLoading: false,
            regions: [""],

        };

        this.onChange = this.onChange.bind(this);
        this.onQuestionChange = this.onQuestionChange.bind(this);
        this.onUrnChange = this.onUrnChange.bind(this);
        this.onSubmitClient = this.onSubmitClient.bind(this);




    }

    componentDidMount() {

        axios.get('http://localhost:8080/ofsted/urns').then(res => {
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
   

    onChange = (e) => {
        console.log(e.target.name + e.target.value );

        this.setState({ [e.target.name]: e.target.value });
    }

    onUrnChange(e) {
        this.setState({ urnClient: e.target.value });
        let x = e.target.value
        axios.get('http://localhost:8080/ofsted/urns/' + x).then(res => {

            this.setState({ providername: res.data.providerName });
            this.setState({ address: res.data.postcode });
            this.setState({ location: res.data.localAuthority });
            console.log(this.state.regions);
        });
    }

    onQuestionChange(e) {
        this.setState({ securityquestion: e.target.value });
        
        
    }

    onSubmitClient = (e) => {
        e.preventDefault();
        console.log("here");
        
        
        //if (this.isValidClient()) {
            this.setState({ errors: {}, isLoading: true });
           
            axios.post('http://localhost:8080/users/signupclient/',{email:this.state.email,password:this.state.password,firstname:this.state.firstname,lastname:this.state.lastname,confirmpassword:this.state.confirmpassword,securityquestion:this.state.securityquestion,answer:this.state.answer,phone:this.state.phone,urn:this.state.urnClient,providername:this.state.providername,postcode:this.state.postcode, region:this.state.region}).then(res => {

            history.push('/')

        },err=>{
            console.log("error", err);
        });
        //}

    }
    render() {

        const { firstname, lastname, password, confirmpassword, securityquestion, answer, email, phone, urn, providername, address, location, isLoading } = this.state;

        let optionUrnItems = urn.map((u) =>
            <option >{u}</option>
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
                                                field="password"
                                                label="Password"
                                                value={password}
                                                //error={errors.username}
                                                onChange={this.onChange}
                                                type="password"
                                            />
                                        </div>
                                        <div class="form-group">
                                            <TextFieldGroup
                                                field="confirmpassword"
                                                label=" Confirm Password"
                                                value={confirmpassword}
                                                //error={errors.username}
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
                                        

                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <TextFieldGroup
                                                field="email"
                                                label="Your Email"
                                                value={email}
                                                //error={errors.username}
                                                onChange={this.onChange}
                                            />
                                        </div>
                                        <div class="form-group">
                                            <TextFieldGroup
                                                field="phone"
                                                label="Your Phone"
                                                value={phone}
                                                //error={errors.username}
                                                onChange={this.onChange}
                                            />
                                            {/* <input type="text" minlength="10" maxlength="10" name="txtEmpPhone" class="form-control" placeholder="Your Phone *" value="" /> */}
                                        </div>

                                        <div class="form-group">
                                            <TextFieldGroup
                                                field="answer"
                                                label="Enter your answer"
                                                value={answer}
                                                //error={errors.username}
                                                onChange={this.onChange}
                                            />
                                        </div>
                                        
                                    </div>
                                </div>
                     
                                                            <button className="btnUpdate" disabled={isLoading} onClick={this.onSubmitClient}> Update </button>

                    
                </div>
                
            </div>
            <BookingsClient/>
        </div>
                
                );
        }
        
        }
        
export default EditProfile;