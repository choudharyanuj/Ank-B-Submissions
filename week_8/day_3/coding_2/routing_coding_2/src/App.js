import React, { Component } from 'react'
import {Route} from 'react-router-dom';
import Headline from './Component/Headline'
import Home_bottom from './Component/Home_bottom';
import Apple_watch from './Component/Apple_watch'
import Connect from './Component/Connect'
import Home from './Home';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Headline/>
        <Route path = '/' exact component={Home}/>
        <Route path = "/Watch_Dock"  component = {Apple_watch} />
        <Route path = "/Connect iPadCase:All iPad Model"  component = {Connect} />
        <Home_bottom/>
      </React.Fragment>
    )
  }
}
