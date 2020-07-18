import React, { Component } from 'react'
import style from './Form_validation.module.css'
import FormData from './Form_data.js'

export default class Form_validataion extends Component {
    constructor(props){
        super(props)
        this.state={
            data:"",
            second_option:"",
            third_option:"",
            first_input:"",
            second_input:"",

        }
    }
    option_first = (e)=>{
        this.setState({
            [e.target.name]: e.target.value  
        })
    }
    second_option = (e)=>{
        this.setState({
            [e.target.name]: e.target.value  
        })
    }
    third_option = (e)=>{
        this.setState({
            [e.target.name]: e.target.value  
        })
    }
    first_inputbox = (e)=>{
        this.setState({
            [e.target.name]: e.target.value  
        })
    }
    result=()=>{
        return(
            this.state.second_option === this.state.third_option ?
                this.setState({
                    second_input: "plz select correct unit"
            })
            :
            this.state.second_option !== this.state.third_option ?
                this.state.second_option === "kelvin(K)" && this.state.third_option === "Degree(C)" ?
                this.setState({
                    second_input: Number(this.state.first_input)-273.150
                })
                :
                this.state.second_option === "kelvin(K)" && this.state.third_option === "Farenheit(F)" ?
                this.setState({
                    second_input: (Number(this.state.first_input)-273.15)*(9/5)+32
                })
                :
                this.state.second_option === "Degree(C)" && this.state.third_option === "kelvin(K)" ?
                this.setState({
                    second_input: Number(this.state.first_input)+273.150
                })
                :
                this.state.second_option === "Degree(C)" && this.state.third_option === "Farenheit(F)" ?
                this.setState({
                    second_input: (Number(this.state.first_input)*(9/5))+32
                })
                :
                this.state.second_option === "Farenheit(F)" && this.state.third_option === "kelvin(K)" ?
                this.setState({
                    second_input: (Number(this.state.first_input)-32)*(5/9)+(273.15)
                })
                :
                this.state.second_option === "Farenheit(F)" && this.state.third_option === "Degree(C)" ?
                this.setState({
                    second_input: (Number(this.state.first_input)-32)*(5/9)
                })
                :
                this.state.second_option === "M/s" && this.state.third_option === "Km/hr" ?
                this.setState({
                    second_input: Number(this.state.first_input)*3.6
                })
                :
                this.state.second_option === "M/s" && this.state.third_option === "Miles/hr" ?
                this.setState({
                    second_input: Number(this.state.first_input)*2.237
                })
                :
                this.state.second_option === "Km/hr" && this.state.third_option === "M/s" ?
                this.setState({
                    second_input: Number(this.state.first_input)/3.6
                })
                :
                this.state.second_option === "Km/hr" && this.state.third_option === "Miles/hr" ?
                this.setState({
                    second_input: (Number(this.state.first_input))/1.609
                })
                :
                this.state.second_option === "Miles/hr" && this.state.third_option === "M/s" ?
                this.setState({
                    second_input: (Number(this.state.first_input))/2.237
                })
                :
                this.state.second_option === "Miles/hr" && this.state.third_option === "Km/hr" ?
                this.setState({
                    second_input: (Number(this.state.first_input))*1.609
                })
                :
                this.state.second_option === "Liter(L)" && this.state.third_option === "Milliliter(ML)" ?
                this.setState({
                    second_input: Number(this.state.first_input)*1000
                })
                :
                this.state.second_option === "Liter(L)" && this.state.third_option === "Cubicfoot(CB)" ?
                this.setState({
                    second_input: Number(this.state.first_input)/1000
                })
                :
                this.state.second_option === "Milliliter(ML)" && this.state.third_option === "Liter(L)" ?
                this.setState({
                    second_input: Number(this.state.first_input)/1000
                })
                :
                this.state.second_option === "Milliliter(ML)" && this.state.third_option === "Cubicfoot(CB)" ?
                this.setState({
                    second_input: (Number(this.state.first_input))*+(2.718+6)
                })
                :
                this.state.second_option === "Cubicfoot(CB)" && this.state.third_option === "Liter(L)" ?
                this.setState({
                    second_input: (Number(this.state.first_input))*1000
                })
                :
                this.state.second_option === "Cubicfoot(CB)" && this.state.third_option === "Milliliter(ML)" ?
                this.setState({
                    second_input: (Number(this.state.first_input))*(2.718+6)
                })
                :null
                
            :null
        )
    }
    
    
    render() {
        console.log(this.state.second_option, this.state.third_option, this.state.second_input,this.state.first_input)
        return (
            <div class="col-xl-6 col-md-8 col-sm-12 col-lg-6 offset-md-3">
                <div class="card text-center mt-5">
                    <div class="card-header">
                        <h2>Unit Converter</h2>
                    </div>
                    <div class="card-body">
                        <div>
                            <select className={style.option_size} name="data" onChange={this.option_first}>
                                {
                                    FormData.units.map((e)=>{
                                        return(
                                            <option>{e}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div class="row mt-5 ml-5 pl-5">
                            <div class="d-flex flex-column">
                                <input className={style.input_box} name="first_input" onChange={this.first_inputbox}></input>
                                <select name="second_option" onChange={this.second_option}>
                                    {
                                        this.state.data === "Temprature" ? 
                                        FormData.temp.map((e) => {
                                            return(
                                                <option>{e}</option>
                                            )
                                        })
                                        :
                                        this.state.data === "Speed" ?
                                        FormData.speed.map((e) => {
                                            return(
                                                <option>{e}</option>
                                            )
                                        })
                                        :
                                        this.state.data === "Volume" ?
                                        FormData.Volume.map((e) => {
                                            return(
                                                <option>{e}</option>
                                            )
                                        })
                                        :null
                                    }
                                </select>
                            </div>
                            <div>
                                <h1>=</h1>
                            </div>
                            <div class="d-flex flex-column">
                                <div className={style.div_box}>{this.state.second_input}</div>
                                <select name="third_option" onChange={this.third_option}>
                                    {
                                        this.state.data === "Temprature" ? 
                                        FormData.temp.map((e) => {
                                            return(
                                                <option>{e}</option>
                                            )
                                        })
                                        :
                                        this.state.data === "Speed" ?
                                        FormData.speed.map((e) => {
                                            return(
                                                <option>{e}</option>
                                            )
                                        })
                                        :
                                        this.state.data === "Volume" ?
                                        FormData.Volume.map((e) => {
                                            return(
                                                <option>{e}</option>
                                            )
                                        })
                                        :null
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer text-muted">
                        <button class="btn btn-outline-success" onClick={this.result}>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}
