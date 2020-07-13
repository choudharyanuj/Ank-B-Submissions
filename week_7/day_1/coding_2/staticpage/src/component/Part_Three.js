import React, { Component } from 'react'

export default class Part_Three extends Component {
    render() {
        return (
            <div>
                <div class="card">
                    <div class="pro">
                        <h1>Pro</h1>
                    </div>
                    <div class="card_body">
                        <img class="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYAG9wgF3lnP8LsXQlbZUMDFVC4HTA2nof-iPJFQwYnC7G3L0W&usqp=CAU"></img>
                        <div>
                            <h4>Ricky Parker</h4>
                            <p>Newyork</p>
                            <p> User Interface designer and front-end devloper</p>
                        </div>
                        <div class="btn_div">
                            <button class="btn">Message</button>
                            <button class="btn">Following</button>
                        </div>
                    </div>
                    <div class="footer">
                        <h4>Skills</h4>
                        <div class="btn_div">
                            <button class="btn">Message</button>
                            <button class="btn">Following</button>
                            <button class="btn">Message</button>
                        </div>
                        <div class="btn_div">
                            <button class="btn">Message</button>
                            <button class="btn">Following</button>
                            <button class="btn">Message</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
