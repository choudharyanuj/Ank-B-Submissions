import React, { Component } from 'react'
import FirstSection from './FirstSection'
import Crousal from './Crousal'
import ThirdSection from './ThirdSection'
import Registration from './Registration'
import Student from './Student'
import Bottom_section from './Bottom_section'


export default class App extends Component {
  render() {
    return (
      <div>
        <FirstSection/>
        <Crousal/>
        <ThirdSection/>
        <Registration/>
        <Student/>
        <Bottom_section/>
      </div>
    )
  }
}
