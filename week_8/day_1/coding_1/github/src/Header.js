import React, { Component } from 'react'
import style from './Header.module.css'
import Secondsection from './Secondsection.js'
import axios from 'axios'

export default class Header extends Component {

    constructor(props){
        super(props)
        this.state={
            user_input:"",
            output_information:[],
        }
    }

    handleChange = (e) => {
        this.setState({
        [e.target.name]: e.target.value  
        })
    }
    search = () =>{
            axios.get(`https://api.github.com/search/users?q=${this.state.user_input}`)
            .then(response => 
                this.setState({output_information: response.data.items})  
            )
            .catch(err => console.log(err));
        }

    render() {
        return (
            <div>
                <div className={style.header_main}>
                    <img src={"/download (1).jpeg"} className={style.github_img}></img>
                    <div className={style.alling}>
                        <li>
                            <p>Why GitHub?</p>
                        </li>
                        <li>
                            <p>Team</p>
                        </li>
                        <li>
                            <p>Enterprise</p>
                        </li> 
                        <li>
                            <p>Explore</p>
                        </li>
                        <li>
                            <p>MarketPlace</p>
                        </li>
                        <li>
                            <p>Pricing</p>
                        </li>
                        <li>
                            <input type="text" className={style.input_size} name="user_input" placeholder={`search a user`} onChange={this.handleChange}></input>
                        </li>
                        <li>
                            <button className={style.button_size} onClick={this.search}>Search</button>
                        </li>
                        <li>
                            <p>SingIn</p>
                        </li>
                        <li>
                            <p>SingUp</p>
                        </li>
                    </div>
                </div>
                <Secondsection data={this.state.output_information}/>
            </div>
        )
    }
}

