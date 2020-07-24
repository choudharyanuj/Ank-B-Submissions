import React, { Component } from 'react'
import Style from './Headline.module.css'
import {Link} from 'react-router-dom';
export default class Headline extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light border-bottom pb-2" style={{backgroundColor:"#fff"}}>
                    <a class="navbar-brand font-weight-bold text-muted ml-5 pl-5 mt-2" href="#"> P R O P E R</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse offset-md-3 mt-2" id="navbarTogglerDemo02">
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li class="nav-item active">
                                <div className={Style.dropdown}>
                                    <Link className={Style.dropbtn}>Power</Link>
                                    <div className={Style.dropdown_content}>
                                        <Link to="/Watch_Dock" class="nav-link pl-4">Watch Dock</Link>
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item active">
                                <div className={Style.dropdown}>
                                    <Link className={Style.dropbtn}>iPad</Link>
                                    <div className={Style.dropdown_content}>
                                        <Link to="/Connect iPadCase:All iPad Model" class="nav-link pl-4">Connect iPadCase:All iPad Model</Link>
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item active">
                                <div className={Style.dropdown}>
                                    <Link className={Style.dropbtn}>iPhone</Link>
                                    <div className={Style.dropdown_content}>
                                        <Link to="./iPhone Xr Lather Case" class="nav-link pl-4">iPhone Xr Lather Case</Link>
                                        <Link to="./iPhone Xs Lather Case" class="nav-link pl-4">iPhone Xs Lather Case</Link>
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item active">
                                <div className={Style.dropdown}>
                                    <Link className={Style.dropbtn}>Business</Link>
                                    <div className={Style.dropdown_content}>
                                        <Link to="./All Solution" class="nav-link pl-4">All Solution</Link>
                                        
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item active">
                                <div className={Style.dropdown}>
                                    <Link className={Style.dropbtn}>Universal Tablet Solution</Link>
                                    <div className={Style.dropdown_content}>
                                        <Link to="./Watch Dock" class="nav-link pl-4">Universal Stand</Link>
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item active">
                                <Link to="./Contact" class="nav-link pl-4">...</Link>
                            </li>
                            <li class="nav-item active">
                                <Link to="./Contact" class="nav-link pl-4">InD</Link>
                            </li>
                            <li class="nav-item active">
                                <Link to="./Contact" class="nav-link pl-4">Cart</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
