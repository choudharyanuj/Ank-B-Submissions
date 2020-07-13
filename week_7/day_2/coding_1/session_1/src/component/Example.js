import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      name:'',
      age:'',
    }
  }



  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
          <form >
            <input name="name" placeholder="Enter name" onChange={this.handleChange}></input>
            <input name="age" placeholder="age" onChange={this.handleChange}></input>
            <button type="submit">Submmit</button>
          </form>
              <h1>Name: {this.state.name}</h1>
              <h2>Age: {this.state.age}</h2>
      </div>
    )
  }
}

