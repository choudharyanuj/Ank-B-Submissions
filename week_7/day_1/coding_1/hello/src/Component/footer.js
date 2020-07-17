import React, { Component } from 'react'

export default class Footers extends Component {
    render() {
        return (
            <div class="f_bg">
                <div class="home">
                    <p>Home</p>
                    <p>About</p>
                    <p>Linkdin</p>
                    <p>Twiteer</p>
                    <p>List</p>
                </div>

                <div class="middle">
                    <button class="bun">Email: achoudhary756@gmail.com</button>
                    <button>Contact-no:79785265</button>
                </div>

                <div class="last">
                    <p>facebook</p>
                    <p>Insta</p>
                    <p>Linkdin</p>
                    <p>Twiteer</p>
                </div>
            </div>
        )
    }
}
