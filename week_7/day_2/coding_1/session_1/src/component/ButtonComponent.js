import React, { Component } from 'react'

export default class ButtonComponent extends Component {
    constructor(props){
        super(props)
        this.state={
          first_name:'',
          first_color:'',
          second_name:'',
          second_color:'',
          third_name:'',
          third_color:'',
          fourth_name:'',
          fourth_color:'',
          fifth_name:'',
          fifth_color:'',
          sixth_name:'',
          sixth_color:'',
          seventh_name:'',
          seventh_color:'',
          eighth_name:'',
          eighth_color:'',
        }
      }

      handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }

    render() {
        return (
            <div>
              <h1>Enter button name & color</h1>
                <div class="grid">
                  <p>Button Name</p>
                  <p>Button color</p>
                    <input name="first_name" placeholder="Enter 1st button name" onChange={this.handleChange}></input>
                    <input name="first_color" placeholder="Enter 1st button color" onChange={this.handleChange}></input>
                    <input name="second_name" placeholder="Enter second button name" onChange={this.handleChange}></input>
                    <input name="second_color" placeholder="Enter second button color" onChange={this.handleChange}></input>
                    <input name="third_name" placeholder="Enter third button name" onChange={this.handleChange}></input>
                    <input name="third_color" placeholder="Enter third button color" onChange={this.handleChange}></input>
                    <input name="fourth_name" placeholder="Enter fourth button name" onChange={this.handleChange}></input>
                    <input name="fourth_color" placeholder="Enter fourth button color" onChange={this.handleChange}></input>
                    <input name="fifth_name" placeholder="Enter fifth button name" onChange={this.handleChange}></input>
                    <input name="fifth_color" placeholder="Enter fifth button color" onChange={this.handleChange}></input>
                    <input name="sixth_name" placeholder="Enter sixth button name" onChange={this.handleChange}></input>
                    <input name="sixth_color" placeholder="Enter sixth button color" onChange={this.handleChange}></input>
                    <input name="seventh_name" placeholder="Enter seventh button name" onChange={this.handleChange}></input>
                    <input name="seventh_color" placeholder="Enter seventh button color" onChange={this.handleChange}></input>
                    <input name="eighth_name" placeholder="Enter eighth button name" onChange={this.handleChange}></input>
                    <input name="eighth_color" placeholder="Enter eighth button color" onChange={this.handleChange}></input>
                </div>
                <div class="grid_button">
                    <button style={{backgroundColor: this.state.first_color}}>{this.state.first_name}</button>
                    <button style={{backgroundColor: this.state.second_color}}>{this.state.second_name}</button>
                    <button style={{backgroundColor: this.state.third_color}}>{this.state.third_name}</button>
                    <button style={{backgroundColor: this.state.fourth_color}}>{this.state.fourth_name}</button>
                    <button style={{backgroundColor: this.state.fifth_color}}>{this.state.fifth_name}</button>
                    <button style={{backgroundColor: this.state.sixth_color}}>{this.state.sixth_name}</button>
                    <button style={{backgroundColor: this.state.seventh_color}}>{this.state.seventh_name}</button>
                    <button style={{backgroundColor: this.state.eighth_color}}>{this.state.eighth_name}</button>
                </div>
            </div>
        )
    }
}
