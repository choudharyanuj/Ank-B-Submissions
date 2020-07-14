import React, { Component } from 'react'
import style from './Secondsection.module.css'
import axios from 'axios'

export default class Secondsection extends Component {
    
        constructor(props){
            super(props)
            this.state={
                full_information:[]
            }
        }
        
            user_details = (user_url)=>{  
                axios.get(user_url)
                .then(response => 
                    this.setState({full_information: response.data})  
                )
                .catch(err => console.log(err));

            }
        
    render() {
        console.log(this.state.full_information)
        let data = this.state.full_information
        console.log(data)
        return (
            <div>
                <div className={style.main}>
                    <div className={style.arrenge}>
                        <div className={style.section_one}>
                            <h1 className={style.h1_text}>Build for <br></br>Devlopers</h1>
                            <p>GitHub is a development platform inspired by the <br></br> way you work. From open source to business, you <br></br> can host and review code, manage projects, and <br></br> build software alongside 50 million developers.</p>
                        </div>
                        <div className={style.section_two}>
                        
                            <div>
                                {
                                this.props.data !== undefined ?
                                this.props.data.map((e) => {
                                    return(
                                        <div> 
                                            <div className={style.search_output}>
                                                <img src={e.avatar_url} className={style.output_img}></img>
                                                <div className={style.text}>
                                                    <h4>{e.login}</h4>
                                                    <button onClick={ () => this.user_details(e.url)}>Get Details</button>
                                                </div>
                                            </div> 
                                            <div className={style.line}></div>
                                        </div>
                                    )
                                })
                                :
                                null
                                }
                            </div>
                        </div>
                        <div className={style.section_three}>
                        <div>
                                <div>
                                    <img src={data.avatar_url} className={style.user_image}></img>
                                </div>
                                <h4>{data.name}</h4>
                                <h5>${data.bio}</h5>
                                <div className={style.follow}>
                                    <span>{`followers ${data.followers}`}</span>
                                    <span>{`following ${data.following}`}</span>
                                </div>
                                <p>{`Company: ${data.company}`}</p>
                                <p>{`Email: ${data.email}`}</p>
                                <p>{`Lives in:- ${data.location}`}</p>
                                <p>{`twiteer accounnt:- ${data.twitter_username}`}</p>
                                <p>{`Created at:- ${data.created_at}`}</p>
                                <p>{`latest update:- ${data.updated_at}`}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
