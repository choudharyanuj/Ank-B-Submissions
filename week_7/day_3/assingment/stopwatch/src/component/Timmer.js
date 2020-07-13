import React, { Component } from 'react'
import styles from "./Timmer.module.css"

export default class Timmer extends Component {
    constructor(props){
        super(props)
        this.state={
            user_input: [],
            data: "",
            milisecond:"",
            second:"",
            minutes:"",
            hour:"",
            count_milli : 0,
            count_second : 0,
            count_minutes : 0,
            count_hour : 0,
        }
    }
    handalchange =(e)=>{
        this.setState({
            [e.target.name]: e.target.value  
        })
    }
    submit = ()=>{
        let user_data = this.state.data.split(":")
        this.state.user_input.push(user_data)
        this.state.user_input.map((e)=>{
            this.setState({
                count_milli:e[2],
                count_second:e[1],
                count_minutes:e[0]
            })
        })
        
    }
    start =()=>{
            if(this.state.count_minutes==0){
                if(this.state.count_second==0){
                    if(this.state.count_milli==0){
                        alert("plz set correct time")
                    }
                    else{
                        this.state.milisecond = setInterval( beigning =>{
                            this.setState({
                                count_milli:this.state.count_milli - 1
                            })
                        // this.state.count_milli--
                            if(this.state.count_milli==0){
                                this.setState({
                                    count_milli:1000
                                })
                            }
                        this.setState({})
                        },0)
                        
                    }
                }
                else if(this.state.count_second >0 && this.state.count_milli==0){
                    this.state.count_second = this.state.count_second-1
                    this.state.count_milli= 100
                    this.state.milisecond = setInterval( beigning =>{
                        this.state.count_milli--
                            if(this.state.count_milli==0){
                                this.state.count_milli=100
                                this.state.count_second--
                                    if(this.state.count_second==0){
                                        this.state.count_second=59
                                        
                                    }
                            }
                        this.setState({})
                        },0)

                }
                else{
                    this.state.milisecond = setInterval( beigning =>{
                        this.state.count_milli--
                            if(this.state.count_milli==0){
                                this.state.count_milli=100
                                this.state.count_second--
                                    if(this.state.count_second==0){
                                        this.state.count_second=59
                                        
                                    }
                            }
                        this.setState({})
                        },0)

                }
            }
            else if(this.state.count_minutes>0 && this.state.count_second==0 && this.state.count_milli==0){
                this.state.count_minutes= this.state.count_minutes-1
                this.state.count_second=59
                this.state.count_milli=100
                this.state.milisecond = setInterval( beigning =>{
                    this.state.count_milli--
                        if(this.state.count_milli==0){
                            this.state.count_milli=100
                            this.state.count_second--
                                if(this.state.count_second==0){
                                    this.state.count_second=59
                                    this.state.count_minutes--
                                    
                                }
                        }
                    this.setState({})
                    },0)

            }
            else if(this.state.count_minutes>0 && this.state.count_second>0 && this.state.count_milli==0){
                this.state.count_second=this.state.count_second-1
                this.state.count_milli=100
                this.state.milisecond = setInterval( beigning =>{
                    this.state.count_milli--
                        if(this.state.count_milli==0){
                            this.state.count_milli=100
                            this.state.count_second--
                                if(this.state.count_second==0){
                                    this.state.count_second=59
                                    this.state.count_minutes--
                                    
                                }
                        }
                    this.setState({})
                    },0)

            }
            else if(this.state.count_minutes>0 && this.state.count_second>0 && this.state.count_milli>0){
                this.state.milisecond = setInterval( beigning =>{
                    this.state.count_milli--
                        if(this.state.count_milli==0){
                            this.state.count_milli=100
                            this.state.count_second--
                            if(this.state.count_second==0){
                                this.state.count_milli=100
                                this.state.count_second=59
                                this.state.count_minutes--    
                            }
                        }
                    this.setState({})
                    },0)

            }
            
        }
        stop = () =>{
            clearInterval(this.state.milisecond)
            clearInterval(this.state.second)
            clearInterval(this.state.minutes)
            clearInterval(this.state.hour)
            this.setState({})
        }
        reset = ()=>{
            clearInterval(this.state.milisecond)
            clearInterval(this.state.second)
            clearInterval(this.state.minutes)
            clearInterval(this.state.hour)
            this.setState({
                count_minutes:0,
                count_milli:0,
                count_second:0
            })
        }
        
    
    render() {
        console.log(this.state.user_input)
        return (
            <div className={styles.bg_tmr}>
                <h1 className={styles.stp_heading}>Timmer</h1>
                <hr></hr>
                <div>
                    <input className={styles.input_box} placeholder="mm:ss:ms" onChange={this.handalchange} name="data"></input>
                    <button className={styles.btn} onClick={this.submit}>Submit</button>
                </div>
                <div className={styles.arrange}>
                    <h1>{this.state.count_minutes}</h1>
                    <h1>:</h1>
                    <h1>{this.state.count_second}</h1>
                    <h1>:</h1>
                    <h1>{this.state.count_milli}</h1>
                </div>
                <div className={styles.btn_arrange}>
                    <button className={styles.btn} onClick={this.start}>Start</button>
                    <button className={styles.btn} onClick={this.stop}>Stop</button>
                    <button className={styles.btn} onClick={this.reset}>Reset</button>
                </div>
            </div>
        )
    }
}
