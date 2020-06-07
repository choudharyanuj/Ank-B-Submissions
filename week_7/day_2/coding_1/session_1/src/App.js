import React, { Component } from 'react'
import './App.css'
import MobileOperation from './component/MobileOperation'
import MobileManufacure from './component/MobileManufacure'
import ButtonComponent from './component/ButtonComponent'
import VallueAssing from './component/VallueAssing'


export default class App extends Component {
  render() {
    return (
      <div>
        <MobileOperation/>
        <MobileManufacure/>
        <ButtonComponent/>
        <VallueAssing/>
      </div>
    )
  }
}
