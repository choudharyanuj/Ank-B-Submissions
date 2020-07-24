import React, { Component } from 'react'
import Pageinformation from '../Data.js'

export default class Home_thirdsection extends Component {
    render() {
        return (
            <div class="row justify-content-around mt-5">
                {
                    Pageinformation.map((e) => {
                        return(
                            <div class="card" style={{width: "26rem"}}>
                                <img src={e.img} class="card-img-top" alt="..."></img>
                                <div class="card-body">
                                    <h4>{e.title}</h4>
                                    <p class="card-text">{e.para}</p>
                                    <button class="btn btn-lg btn-primary" style={{width:"320px"}}>{e.button}</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
