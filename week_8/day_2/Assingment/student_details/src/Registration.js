import React, { Component } from 'react'

export default class Registration extends Component {
    constructor(props){
        super(props)
        this.state = {
            fname:"",
            lname:"",
            email:"",
            address:"",
            fname_array:[],
            lname_array:[],
            email_array:[],
            address_array:[],
        }
    }

    onChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value  
            })
    }
    submit = ()=>{
        this.state.fname_array.push(this.state.fname)
        this.state.lname_array.push(this.state.lname)
        this.state.email_array.push(this.state.email)
        this.state.address_array.push(this.state.address)
        window.localStorage.setItem('firstname', this.state.fname_array)
        window.localStorage.setItem('lastname', this.state.lname_array)
        window.localStorage.setItem('mail', this.state.email_array)
        window.localStorage.setItem('address', this.state.address_array)
    }
    render() {
        
        return (
            <div>
                <div class="accordion" id="accordionExample">
                    <div class="card">
                        <div class="card-header" id="headingOne">
                            <div class="mb-0">
                                <button class="btn btn-link btn-block text-center" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Click Here For Registration</button>
                            </div>
                        </div>
                        <div id="collapseOne" class="collapse hide" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div class="card-body">
                                <form>
                                    <div class="d-flex flex-column">
                                        <div class="row">
                                            <div class="col">
                                                <span>First Name:</span>
                                                <input type="text" class="form-control" onChange={this.onChange} name="fname" placeholder="First name"></input>
                                            </div>
                                            <div class="col">
                                                <span>Last Name:</span>
                                                <input type="text" class="form-control" onChange={this.onChange} name="lname" placeholder="Last name"></input>
                                            </div>
                                        </div>
                                        <div class="row mt-4">
                                            <div class="col">
                                                <span>Email:</span>
                                                <input type="email" onChange={this.onChange} name="email" class="form-control" placeholder="First name"></input>
                                            </div>
                                            <div class="col">
                                                <span>Address:</span>
                                                <input type="text" class="form-control" onChange={this.onChange} name="address" placeholder="Last name"></input>
                                            </div>
                                        </div>
                                    </div>
                                    <button class="btn btn-outline-danger btn-block mt-5" onClick={this.submit}>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
