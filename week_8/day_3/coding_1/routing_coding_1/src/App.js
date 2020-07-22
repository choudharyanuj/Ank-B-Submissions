import React from 'react';
import {Route} from 'react-router-dom';
import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'
import Heading from './Component/Heading'



export default class App extends React.Component {
    render(){
        return (
            <React.Fragment>
                    <Heading/>
                    <Route path = "/Home" exact component = {Home} />
                    <Route path = "/about" component = {About} />
                    <Route path = "/contact" component = {Contact} />
            </React.Fragment>
        );
    }
} 