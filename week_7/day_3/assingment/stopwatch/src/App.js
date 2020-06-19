import React, { Component } from 'react'
import './App.css'
import Stopwatch from './component/Stopwatch'
import Timmer from './component/Timmer'


export default class App extends Component {
  
  render() {
    return (
      <div className="main">
        <Stopwatch/>
        <Timmer/>
      </div>
    )
  }
}