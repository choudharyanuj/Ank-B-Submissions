import React, { Component } from 'react'
import App_bar from './Component/App_bar'
import Login from './Component/Login'
import Singup from './Component/Singup'
import Home_todo from './Component/Home_todo'
import { Route } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div>
        <App_bar/>
        <Route path="/" exact component={Home_todo}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/singup" component={Singup}></Route>
      </div>
    )
  }
}
