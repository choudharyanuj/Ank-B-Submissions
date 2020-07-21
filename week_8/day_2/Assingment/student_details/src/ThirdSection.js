import React, { Component } from 'react'

export default class ThirdSection extends Component {
    constructor(props){
        super(props)
        this.state = {
            fname:localStorage.getItem("firstname"),
            lname:localStorage.getItem("lastname"),
            email:localStorage.getItem("mail"),
            address:localStorage.getItem("address"),
        }
    }

    render() {
        console.log(this.state.fname)
        return (
            <div>
                <div>
                    <h1 class="display-4 text-red text-center">Registered Student Information</h1>
                </div>
                <div>
                    <table class="table w-100">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">S.no</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <th>{this.state.fname + " " + this.state.lname}</th>
                                <th>{this.state.email}</th>
                                <th>{this.state.address}</th>
                            </tr>
                            {/* <tr>
                                <th>2</th>
                                <th>Jacob</th>
                                <th>Thornton</th>
                                <th>@fat</th>
                            </tr>
                            <tr>
                                <th>3</th>
                                <th>Larry</th>
                                <th>the Bird</th>
                                <th>@twitter</th>
                            </tr> */}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
