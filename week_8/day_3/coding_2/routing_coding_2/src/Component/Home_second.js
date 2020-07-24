import React, { Component } from 'react'
import Style from './Headline.module.css'

export default class Home_second extends Component {
    render() {
        return (
            <div>
                <div style={{backgroundImage: 'url(/190718_AirPods_Charger_01_1600x.jpg)', height:"600px"}} class="img-fluid">
                    <div className={Style.main_div}>
                        <h4>Wirless Charger For AirPods</h4>
                        <span>Key your Airpods Always within arms reach, always charged</span><br></br>
                        <button class="btn btn-lg btn-primary mt-3">Pre-order Now</button>
                    </div>
                </div>
            </div>
        )
    }
}
