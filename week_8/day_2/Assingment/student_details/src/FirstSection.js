import React, { Component } from 'react'

export default class FirstSection extends Component {
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
                            <li class="nav-item">
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Registration</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">StuDentData</a>
                            </li>
                        </ul>
                        <button class="mr-5 btn btn-outline-success disable">Registration</button>
                    </div>
                </nav>
            </div>
        )
    }
}