import React, { Component } from 'react'



export default class FirstSection extends Component {
  
  render() {
    return (
      <div class="section_1_bg">
        <div class="card_Q">
          <h1>Q.1 Who invented JavaScript?</h1>
          <input type="text" class="inputbox_button"></input>
          <h1>Q.2 Which one of these is a JavaScript package manager?</h1>
          <input type="text" class="inputbox_button"></input>
          <h1>Q.3 Which tool can you use to ensure code quality?</h1>
          <input type="text" class="inputbox_button"></input>
          <div class="button_div">
            <button class="inputbox_button">Submit</button>
          </div>
        </div>
        <div class="card_A">
          <h1>your Result</h1>
          <h1>2/3</h1>
          <p>you are 30% right</p>
          <div class="circal">
            <div class="green"></div>
            <div class="red"></div>
          </div>
        </div>
      </div>
    )
  }
}
