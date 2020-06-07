import React, { Component } from 'react'


export default class NavBar extends Component {
    render() {
        return (
            <div>
                <div class = "nav">
                    <input type="checkbox" id="nav-check"></input>
                    <div class = "nav-header">
                        <div class="nav-title">
                        Ank-B
                        </div>
                    </div>
                    <div class="nav-links">
                        <a href="//github.io/jo_geek" target="_blank">home</a>
                        <a href="http://stackoverflow.com/users/4084003/" target="_blank">About</a>
                        <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">LinkedIn</a>
                        <a href="https://codepen.io/jo_Geek/" target="_blank">twiteer</a>
                        <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">list</a>
                    </div>
                    <div class="nav-btn">
                        <label for="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                        </label>
                    </div> 
                </div>
            </div>
        )
    }
}
