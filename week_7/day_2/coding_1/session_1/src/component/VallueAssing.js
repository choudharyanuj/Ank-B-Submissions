import React, { Component } from 'react'
import SecondComponent from './SecondComponent'



export default class VallueAssing extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:"Ankit",
            age:24,
            proffecion:"Devloper",
            hobbie:"Coding",
        }
    }

    render() {
        let arr = [1,2,4,5,6,7,8]
        return (
            <div class="vallu">
                <h1>person Detail's</h1>
                <p>{this.state.name}</p>
                <SecondComponent proffecion = {this.state.proffecion} age = {this.state.age}  hobbie = {this.state.hobbie}/>
                {
                    arr.map((number) => {
                        return(
                        <h1>{number}</h1>
                        )
                    })
                }
            </div>
        )
    }
}
