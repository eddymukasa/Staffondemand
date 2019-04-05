import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link } from 'react-router-dom';
import $ from 'jquery';
import { login } from './../Actions.js'
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './SignUp.css';
import TextFieldGroup from './../Common/TextFieldGroup.js'
import validateInput from './../Validations/Login.js'
import history from './../History';

class Login extends Component {


    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            role: '',
            errors: {},
            isLoading: false
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmitClient = this.onSubmitClient.bind(this);
        this.onSubmitStaff = this.onSubmitStaff.bind(this);
    }

    isValid() {
        const { errors, isValid } = validateInput(this.state);

        if (!isValid) {
            this.setState({ errors });
        }

        return isValid;
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmitClient = (e) => {
        e.preventDefault();
        if (this.isValid()) {
            this.setState({ role: "client", errors: {}, isLoading: true });
            this.props.login(this.state).then(
                (res) => history.push('/'),

                (err) => console.log("error", err)//this.setState({ errors: err.response.data.errors, isLoading: false })
            );
        }

    }

    onSubmitStaff = (e) => {
        e.preventDefault();
        if (this.isValid()) {
            this.setState({ role: "staff", errors: {}, isLoading: true });
            this.props.login(this.state).then(
                (res) => history.push('/'),

                (err) => console.log("error", err)//this.setState({ errors: err.response.data.errors, isLoading: false })
            );
        }

    }


    render() {

        const { errors, email, password, role, isLoading } = this.state;

        return (

            <div class="container register">
                <div class="row">
                    <div class="col-md-3 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                        <h3>Welcome</h3>

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
                                <h3 class="register-heading">Login as a Client</h3>
                                <div class="row register-form">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            {/* { errors.form && <div className="alert alert-danger">{errors.form}</div> } */}
                                            <TextFieldGroup
                                                field="email"
                                                label="Email"
                                                value={email}
                                                //error={errors.username}
                                                onChange={this.onChange}
                                            />                                       </div>
                                        <div class="form-group">
                                            <TextFieldGroup
                                                field="password"
                                                label="Password"
                                                value={password}
                                                //error={errors.password}
                                                onChange={this.onChange}
                                                type="password"
                                            />                   </div>
                                        <div class="form-group">
                                            <a href="#" class="ForgetPwd">Forget Password?</a>
                                        </div>
                                        <button className="btnLogin" disabled={isLoading} onClick={this.onSubmitClient}> Login </button>

                                    </div>
                                </div>

                            </div>
                            <div class="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <h3 class="register-heading">Login as Staff</h3>
                                <div class="row register-form">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            {/* { errors.form && <div className="alert alert-danger">{errors.form}</div> } */}
                                            <TextFieldGroup
                                                field="email"
                                                label="Email"
                                                value={email}
                                                //error={errors.username}
                                                onChange={this.onChange}
                                            />                                        </div>
                                        <div class="form-group">
                                            <TextFieldGroup
                                                field="password"
                                                label="Password"
                                                value={password}
                                                //error={errors.password}
                                                onChange={this.onChange}
                                                type="password"
                                            />                                        </div>

                                        <div class="form-group">
                                            <Link to=""> <a class="ForgetPwd">Forget Password?</a></Link>
                                        </div>
                                        <button className="btnLogin" disabled={isLoading} onClick={this.onSubmitStaff}> Login </button>



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


// Login.propTypes = {
//     onLoginClick: PropTypes.func.isRequired,
//     errorMessage: PropTypes.string
//   }

export default connect(null, { login })(Login);

//export default connect(null, {loginUser})(Login);