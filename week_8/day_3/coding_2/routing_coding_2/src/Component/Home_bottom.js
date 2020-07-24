import React, { Component } from 'react'

export default class Home_bottom extends Component {
    render() {
        return (
            <div class="border-top mt-5">
                <div class="row justify-content-around mt-5">
                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                        <div class="d-flex flex-column text-center">
                            <h3>Shops</h3>
                            <p>iphone</p>
                            <p>iPad</p>
                            <p>Watch</p>
                            <p>Business</p>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                        <div class="d-flex flex-column text-center">
                            <h3>Suport</h3>
                            <p>About Us</p>
                            <p>Help</p>
                            <p>Shiping & Return</p>
                            <p>Proper Business</p>
                            <p>Wholesale</p>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                        <div class="d-flex flex-column text-center">
                            <h3>About studio Proper</h3>
                            <p>Studio Proper is a Melbourne based product design studio dedicated to simplifying everyday experiences with technology.</p>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                        <div class="d-flex flex-column text-center">
                            <h3>Let's us send ypur Email?</h3>
                            <p>Studio Proper is a Melbourne based product design studio dedicated to simplifying everyday experiences with technology.</p>
                            <input placeholder="Enter your Email Address..."></input>
                            <button class="btn btn-primary mt-2">Subscribe</button>
                        </div>
                    </div>
                </div>
                <span class="text-muted pt-5 mt-5 offset-md-4">© 2020 Studio Proper. Ecommerce Software by Shopify</span>
            </div>
        )
    }
}
