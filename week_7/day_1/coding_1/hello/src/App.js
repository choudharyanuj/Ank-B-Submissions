import React, { Component } from 'react'
import './App.css'
import FirstSection from './Component/1_section'
import NavBar from './Component/Nav'
import Footers from './Component/footer'


export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <FirstSection/>
        <Footers/>
      </div>  
    )
  }
}
