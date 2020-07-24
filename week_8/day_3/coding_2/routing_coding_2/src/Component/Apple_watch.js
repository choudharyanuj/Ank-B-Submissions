import React, { Component } from 'react'


export default class Apple_watch extends Component {
    render() {
        return (
            <div class="row">
                <div class="col-xl-8 col-lg-8 col-md-6 col-sm-12">
                    <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-s5-lifestyle-202006?wid=1820&hei=2332&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1589999192000" class="img-fluid"></img>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                   <h2>Appple Watch Dock</h2>
                   <h4>$69.52</h4>
                   <button class="btn btn-lg btn-primary">Buy Now</button>
                   <p>Description</p>
                   <p class="pt-3">The Proper Apple Watch Dock is a simple and elegant companion for your Apple Watch, designed with premium materials. Charge at your bedside or dock at your desk.</p>
                   <p class="pt-3">Simply take the charging cable that came with your Apple Watch and feed it through the Watch Dock — Once the charging cable is in place, plug it in and you're ready to charge!</p>
                   <p class="pt-3">We realised that we had a hook for our keys, a shelf for our wallet, and a stand for our phone, but nowhere to safely and securely rest and charge our Apple Watch. So we designed one.</p>
                </div>
            </div>
        )
    }
}
