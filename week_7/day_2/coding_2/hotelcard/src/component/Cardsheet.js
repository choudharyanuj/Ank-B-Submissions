import React, { Component } from 'react'

import HotelInformation from '../static/Data.js'
export default class Cardsheet extends Component {
    constructor(props){
        super(props)
        this.state={
            flag:false,
            onestar_flag: false,
            twostar_flag: false,
            threestar_flag: false,
            fourstar_flag: false,
        }
    }
    showall = ()=>{
        this.setState({
            flag:true
        })
    }
    onestar = () =>{
        this.setState({
            onestar_flag:true,
            flag:false,
            twostar_flag: false,
            threestar_flag: false,
            fourstar_flag: false,
        })
    }
    twostar = () =>{
        this.setState({
            twostar_flag:true,
            flag:false,
            onestar_flag: false,
            threestar_flag: false,
            fourstar_flag: false,
        })
    }
    threestar = () =>{
        this.setState({
            threestar_flag:true,
            flag:false,
            onestar_flag: false,
            twostar_flag: false,
            fourstar_flag: false,
            
        })
    }
    fourstar = () =>{
        this.setState({
            fourstar_flag:true,
            flag:false,
            onestar_flag: false,
            twostar_flag: false,
            threestar_flag: false,
        })
    }
    render() {
        return (
             <div class="card_bg ">
                 <div class="main_btn">
                    <button class="btn" onClick={this.showall}>All Hotel's</button>
                    <button class="btn" onClick={this.onestar}>Hotel above 1*</button>
                    <button class="btn" onClick={this.twostar}>Hotel above 2*</button>
                    <button class="btn" onClick={this.threestar}>Hotel above 3*</button>
                    <button class="btn" onClick={this.fourstar}>Hotel above 4*</button>
                 </div>
                {
                
                    <div class="sequence">
                    <>
                    {
                    HotelInformation.map((e) => {
                        if (this.state.flag == true || this.state.onestar_flag == true && e.start > 1.0 || this.state.twostar_flag == true && e.start > 2.0 || this.state.threestar_flag == true && e.start > 3.0 || this.state.fourstar_flag == true && e.start > 4.0){
                            
                            return(
                            <div class="card" id="deleting">
                                <div class="card_body">
                                    <div>
                                        <img class="img" src={e.image}></img>
                                    </div>
                                    <div>
                                        <h2>{e.title}</h2>
                                        <p>{e.address}</p>
                                        <p>{e.price}</p>
                                        <p>{e.Payment}</p>
                                    </div>
                                    <div class="text">
                                        <button class="btn">{e.start}</button>
                                        <p>{e.votes}</p>
                                        <p>{e.Reviews}</p>
                                    </div>
                                </div>
                                <hr></hr>
                                <div class="card_fotter">
                                    <h4 class="text">{e.mode}</h4>
                                </div>
                            </div>
                        )
                        }
                    })
                        
                    }
                    </>
                    </div>
                                }
            </div>
        )
    }
}
