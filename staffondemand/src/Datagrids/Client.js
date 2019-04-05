import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { signup } from '../Actions.js'
import history from '../History';
import axios from 'axios';
import { connect } from 'react-redux';

class Client extends Component {

    constructor(props) {
        super(props)
        this.state = {
            clients: ['']


        };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/client/all').then(res => {
            this.setState({ clients: res.data });
            console.log(this.state.clients);
        });

    }
    render() {
        const { clients } = this.state;
        console.log({ clients });
        let clientsItems = clients.map((u) =>
            <tr>
                <td>{u.providerName}</td>
                <td>{u.uid}</td>
                <td>{u.phone}</td>
                <td>{u.region}</td>
                <td>{u.area}</td>
                <td>{u.createdby}</td>
                <td><button type="button" class="btn btn-success btn-sm">Edit</button></td>
                <td><button type="button" class="btn btn-success btn-sm">Delete</button></td>
            </tr>

        );
        return (

            <div >
                <h4>Clients</h4>
                <table class="table table-striped">
                    <thead>
                        <tr>


                            <th scope="col">Provider</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Region</th>
                            <th scope="col">Area</th>
                            <th scope="col">Created By</th>


                        </tr>
                    </thead>
                    <tbody>
                        {clientsItems}

                    </tbody>
                </table>


            </div>
        );
    }
}

export default Client;