import React, { Component } from 'react'
import Home_second from './Component/Home_second'
import Home_thirdsection from './Component/Home_thirdsection'
import Home_fourth from './Component/Home_fourth'
import Home_fifth from './Component/Home_fifth'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Home_second/>
                <Home_thirdsection/>
                <Home_fourth/>
                <Home_fifth/>
            </div>
        )
    }
}
