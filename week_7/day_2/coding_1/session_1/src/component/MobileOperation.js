import React, { Component } from 'react'

export default class MobileOperation extends Component {
    constructor(props){
        super(props)
        this.state = {
            operation_1:"Android",
            operation_2:"BlackBarry",
            operation_3:"iphone",
            operation_4:"WindowPhone",
            
        }
    }

    render() {
        return (
            <div>
                <h1>Mobile Operating System</h1>
                <ul>
                    <li>{this.state.operation_1}</li>
                    <li>{this.state.operation_2}</li>
                    <li>{this.state.operation_3}</li>
                    <li>{this.state.operation_4}</li>
                </ul>
            </div>
        )
    }
}
