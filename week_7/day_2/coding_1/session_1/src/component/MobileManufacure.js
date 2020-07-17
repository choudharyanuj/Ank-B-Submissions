import React, { Component } from 'react'

export default class MobileManufacure extends Component {
    constructor(props){
        super(props)
        this.state = {
            m_1:"SamSung",
            m_2:"Apple",
            m_3:"HTC",
            m_4:"xiaomi",
        }
    }
    render() {
        return (
            <div>
                <h1>Mobile Operating System</h1>
                <ul>
                    <li>{this.state.m_1}</li>
                    <li>{this.state.m_2}</li>
                    <li>{this.state.m_3}</li>
                    <li>{this.state.m_4}</li>
                </ul>
            </div>
        )
    }
}
