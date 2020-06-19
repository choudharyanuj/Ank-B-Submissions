import React, { Component } from 'react'
import styles from './Stopwatch.module.css'

    

export default class Stopwatch extends Component {
    constructor(props){
        super(props)
        this.state={
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
    start =()=>{
        this.state.milisecond = setInterval( beigning =>{
            this.state.count_milli++
            if(this.state.count_milli == 100){
                this.state.count_milli = 0
                this.state.count_second++
                    if(this.state.count_second == 60){
                    this.state.count_second = 0
                    this.state.count_minutes++
                        if(this.state.count_minutes == 60){
                            this.state.count_minutes = 0
                            this.state.count_hour++
                        }
                    }
            }
            this.setState({})
        }, 0);
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

        this.state.count_milli = 0
        this.state.count_second =0
        this.state.count_minutes = 0
        this.state.count_hour = 0
        this.setState({})
    }
    render() {
        return (
            <div>
                <div className={styles.bg_stw}>
                    <h1 className={styles.stp_heading}>STOPWATCH</h1>
                    <hr></hr>
                    <div className={styles.arrange}>
                        <h1>{this.state.count_hour}</h1>
                        <h1>:</h1>
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
            </div>
        )
    }
}
