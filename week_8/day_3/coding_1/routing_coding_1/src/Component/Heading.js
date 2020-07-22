import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class Heading extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand font-weight-bold text-success" href="#">StuDent.com</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li class="nav-item active">
                                <Link to="/Home" class="nav-link">Home <span class="sr-only">(current)</span></Link>
                            </li>
                            <li class="nav-item active">
                                <Link to="/about" class="nav-link">About</Link>
                            </li>
                            <li class="nav-item active">
                                <Link to="./Contact" class="nav-link">Contact</Link>
                            </li>
                        </ul>
                        <button class="mr-5 btn btn-outline-success active">Registration</button>
                    </div>
                </nav>
            </div>
        )
    }
}
