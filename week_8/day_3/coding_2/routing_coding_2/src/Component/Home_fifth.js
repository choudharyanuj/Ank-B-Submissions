import React, { Component } from 'react'
import Style from './Headline.module.css'

export default class Home_fifth extends Component {
    render() {
        return (
            <div>
                <div class="d-flex flex-row justify-content-around mt-5">
                    <img src="https://cdn.shopify.com/s/files/1/0173/8828/files/free-shipping_400x.png?v=1532312253" className={Style.img_size}></img>
                    <img src="https://cdn.shopify.com/s/files/1/0173/8828/files/free-warranty_400x.png?v=1532312268" className={Style.img_size}></img>
                    <img src="https://cdn.shopify.com/s/files/1/0173/8828/files/authorised-apple-reseller_400x.png?v=1532312279" className={Style.img_size} ></img>
                    <img src="https://cdn.shopify.com/s/files/1/0173/8828/files/secure_400x.png?v=1532312304" className={Style.img_size}></img>
                </div>
                <div class="text-center mt-5">
                    <h4>Let us send you emails?</h4>
                    <span>Don't worry, we hate spane too. just the best stuff from us.</span><br></br>
                    <input class="mt-4" placeholder="Enter your Email Address..."></input>
                    <button class="btn  btn-primary ml-2">Subscribe</button>
                </div>
                <div class="row p-5 justify-content-around">
                    <h2 class="text-muted pt-5">THE VERGE</h2>
                    <h2 class="text-muted pt-5">HYPEBEST</h2>
                    <h2 class="text-muted pt-5">GIZMODO</h2>
                    <h2 class="text-muted pt-5">WIRED</h2>
                </div>
            </div>
        )
    }
}
