import React, { Component } from 'react'
import './App.css'
import MobileOprating from './component/MobileOprating'
import MobileManufactur from './component/MobileManufactur'
import Part_Three from './component/Part_Three'
import FunctionalComponent from './component/FunctionalComponent'

export default class App extends Component {
  render() {
    return (
      <div>
        <MobileOprating/>
        <MobileManufactur/>
        <Part_Three/>
        <FunctionalComponent/>
      </div>
    )
  }
}

