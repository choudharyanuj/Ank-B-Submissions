import React, { Component } from 'react'
import styles from './Todo.module.css'


export default class Todo extends Component {

    constructor(props){
        super(props)
        this.state={
            data: "",
            all_item : [],
            complete_item :[],
            complete_task:[],
            delete_item :[],
            delete_item_sec:[]
        }
    }

    handleChange = (e) => {
        this.setState({
        [e.target.name]: e.target.value  
        })
    }
    add = () =>{
       this.state.all_item.push(this.state.data)
        this.setState({})
    }
    handleCheck = (e) =>{
        e.preventDefault()
        this.state.complete_task.push(e.target.value)
        this.state.delete_item.push(e.target.value)
        this.setState({})
        
    }
    complete = ()=>{
        this.state.complete_task.map((f)=>{
            this.state.all_item.map((e)=>{
                if (f === e) {
                    let index = this.state.all_item.indexOf(e)
                    var x = this.state.all_item.splice(index, 1);
                    console.log(x)
                    this.state.complete_item.push(x)
                    this.setState({})
                }
            })
        })
        console.log(this.state.complete_item)
    }
    delete_task_uncomplete = () =>{
        this.state.delete_item.map((f)=>{
            this.state.all_item.map((e)=>{
                if (f === e) {
                    let index = this.state.all_item.indexOf(e)
                    this.state.all_item.splice(index, 1);
                    this.setState({})
                }
            })
        })
    }
    handleDelete = (e) =>{
        e.preventDefault()
        this.state.delete_item_sec.push(e.target.value)
        this.setState({})
        
    }
    deleteComplete_task = () =>{
        this.state.delete_item_sec.map((f)=>{
            this.state.complete_item.map((e)=>{
                e.map((g)=>{
                    if (f === g) {
                        let index = this.state.all_item.indexOf(e)
                        console.log(index, e)
                        this.state.complete_item.splice(index, 1);
                        this.setState({})
                    }
                })
            })
        })
        console.log(this.state.delete_item)
        console.log(this.state.complete_item)
    }
    render() {
        return (
            <div className={styles.body}>
                <center>
                    <div className={styles.todo_flex}>
                        <div>
                            <div className={styles.todo_body_head}>
                                <div className={styles.arrange_input}>
                                    <input name="data" placeholder="+ Add ur ToDo Item" className={styles.add_input} onChange={this.handleChange}></input>
                                    <button className={styles.add_button} onClick={this.add}>Add</button>
                                </div>
                            </div>
                            <div className={styles.todo_body}>
                                {   
                                    this.state.all_item.length > 0 ?
                                    this.state.all_item.map((e) => {
                                        return(
                                            <div className={styles.list_todo}>
                                                <input name="complete_task_sec" type="checkbox" value={e} onChange={this.handleCheck}></input> 
                                                <p>{e}</p> 
                                            </div>
                                        )
                                    }) : null
                                }
                            </div>
                            <div className={styles.task_operation}>
                                <div className={styles.arrange_input}>
                                    <button className={styles.arrange_button} onClick={this.complete}>complete Task</button>
                                    <button className={styles.arrange_button} onClick={this.delete_task_uncomplete}>Delete Task</button>
                                </div>
                            </div>
                        </div>
                        <div>
                        <div className={styles.todo_body_head}>
                                <div className={styles.arrange_input}>
                                    <div className={styles.showcomplete_task_btn} onClick={this.show_task}>
                                        <p className={styles.show_p}>Show Complete Task</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.todo_body}>
                                {   
                                    this.state.complete_item.length > 0 ?
                                    this.state.complete_item.map((e) => {
                                        return(
                                            <div className={styles.list_todo}>
                                                <input name="delete_item" type="checkbox" value={e} onChange={this.handleDelete}></input> 
                                                <p>{e}</p> 
                                            </div>
                                        )
                                    }) : null
                                }
                            </div>
                            <div className={styles.task_operation}>
                                <div className={styles.arrange_input}>
                                    <button className={styles.arrange_button} onClick={this.deleteComplete_task}>Delete Task</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </center>
            </div>
        )
    }
}
