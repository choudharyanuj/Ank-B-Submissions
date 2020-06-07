import React, { Component } from 'react'


export default class SecondComponent extends Component {
    
    render() {
        return (
            <div>
                <p>{this.props.age}</p>
                <p>{this.props.proffecion}</p>
                <p>{this.props.hobbie}</p>
            </div>
        )
    }
}
